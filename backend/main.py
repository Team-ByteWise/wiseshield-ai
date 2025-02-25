import hashlib
import json

from flask import Flask, request
from flask_caching import Cache
from flask_cors import CORS, cross_origin

from wiseshield import wiseshield

app = Flask(__name__)
CORS(app)

app.config['CACHE_TYPE'] = 'simple'
cache = Cache(app)


def generate_cache_key(data):
    key = hashlib.md5(json.dumps(data, sort_keys=True).encode()).hexdigest()
    return f"wiseshield_cache_{key}"


@cross_origin(origin='*')
@app.route("/")
def hello_world():
    return "<h1>WiseShield Ai Backend</h1>"


@cross_origin(origin='*')
@app.route("/check", methods=["POST"])
def check_for_phishing_site():
    cache_key = generate_cache_key(request.get_json())
    cached_response = cache.get(cache_key)
    if cached_response:
        return cached_response

    data = request.get_json()
    if 'content' in data and data['content']:
        response = wiseshield.check_url_content(url=data['url'], content=data['content'])
    else:
        response = wiseshield.check_url(url=data['url'])

    cache.set(cache_key, response, timeout=86400)
    return response


@cross_origin(origin='*')
@app.route("/train", methods=["POST"])
def train_model():
    data = request.get_json()
    return wiseshield.train_new_real_sites(sites=data['sites'])


@cross_origin(origin='*')
@app.route("/trained_sites", methods=["GET"])
def get_trained_sites():
    return wiseshield.get_trained_sites()


def main():
    sites = json.load(open('training_data/sites.json'))
    wiseshield.train_new_real_sites(sites=sites)


if __name__ == "__main__":
    # main()
    app.run()
