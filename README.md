# WiseShield Ai

## Description

WiseShield AI is a comprehensive security solution designed to safeguard users from phishing attacks. The project integrates a Flask API server powered by Machine Learning, a Chrome extension, and a website developed using React and Tailwind CSS. The Chrome extension detects sensitive fields such as Username and Password on websites and sends the site's URL and content to the backend server. The backend server, using a pre-trained model, checks if the site is legitimate or not by comparing it with known legitimate sites. If the site is identified as fake, the extension warns the user and redirects them to the legitimate site.

## Installation

### Automated Installation (for direct testing)

1. Clone the repository using the following command:

    ```bash
    git clone https://github.com/Team-ByteWise/wiseshield-ai.git
    ```

2. Navigate to the project directory:

    ```bash
    cd wiseshield-ai
    ```

3. Run the following command to run automated install:

    For Windows (Powershell):

    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; .\run.ps1
    ```

    For Linux:

    ```bash
    chmod +x run.sh
    ./run.sh
    ```

The script will install the required dependencies and start the backend server, frontend website, serve some phishing websites for test and open a chrome window with the extension pre installed with phishing sites and their legitimate versions for testing.

- The frontend Web Application can be accessed at [http://localhost:5173](http://localhost:5173)
- The backend API can be accessed at [http://localhost:5000](http://localhost:5000)
- The phishing sites can be accessed at the following URLs:
    - [Amazon Login (Fake)](https://www.amz.localhost/amz)
    - [Google Login (Fake)](https://accounts.google.localhost/google)
    - [Facebook Login (Fake)](https://www.fb.localhost/fb)
    - [LinkedIn Login (Fake)](https://www.linkedin.localhost/linkedin)
    - [Instagram Login (Fake)](https://www.ig.localhost/ig)
    - [Snapchat Login (Fake)](https://accounts.snap.localhost/snap)

<details>
  <summary>Manual Installation</summary>

#### Backend (Flask Server)

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Create a Python Virtual Environment:

    ```bash
    python -m venv venv
    ```
3. Activate the Virtual Environment:

    For Windows (Poweshell):

    ```bat
    .\venv\Scripts\activate.ps1
    ```
    
    For Linux:
    
    ```bash
    source venv/bin/activate
    ```

4. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

5. Start the Flask server:

    ```bash
    python main.py
    ```

#### Frontend (Website)

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

#### Phishing Websites (FOR TESTING PURPOSES ONLY)

1. Navigate to the `evilginx` directory:

    ```bash
    cd evilginx
    ```

2. Download evilginx:

    For Windows (Powershell):

    ```powershell
    Invoke-WebRequest -Uri "https://github.com/kgretzky/evilginx2/releases/download/v3.3.0/evilginx-v3.3.0-windows-64bit.zip" -OutFile "evilginx.zip"
    ```

    For Linux:

    ```bash
    wget https://github.com/kgretzky/evilginx2/releases/download/v3.3.0/evilginx-v3.3.0-linux-64bit.zip -O evilginx.zip
    ```

3. Extract the downloaded file:

    For Windows (Powershell):

    ```powershell
    Expand-Archive -Path "evilginx.zip" -DestinationPath "." -Force
    ```

    For Linux:

    ```bash
    unzip evilginx.zip
    ```

4. Start the evilginx server:
    
    For Windows (Powershell):
    
    ```powershell
    .\evilginx.exe -developer -c .
    ```

    For Linux:

    ```bash
    ./evilginx -developer -c .
    ```

#### Chrome Extension

1. Navigate to the `extension` directory:

    ```bash
    cd extension
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Build the extension:

    ```bash
    npm run build
    ```

4. Load the extension in Chrome:
    
    - Open Chrome and navigate to `chrome://extensions/`
    - Enable Developer Mode
    - Click on `Load unpacked` and select the `build` directory inside the `extension` directory


Now you can visit the following phishing sites to test the extension:

- [Amazon Login (Fake)](https://www.amz.localhost/amz)
- [Google Login (Fake)](https://accounts.google.localhost/google)
- [Facebook Login (Fake)](https://www.fb.localhost/fb)
- [LinkedIn Login (Fake)](https://www.linkedin.localhost/linkedin)
- [Instagram Login (Fake)](https://www.ig.localhost/ig)
- [Snapchat Login (Fake)](https://accounts.snap.localhost/snap)

</details>

## Usage

1. Install all the required components using the automated or manual installation steps.
2. Visit the phishing sites mentioned above to test the extension.
3. As soon as you visit the phishing sites, the extension will detect it and redirect you to a warning page.
4. You can click on the `Go to the real site` button on the warning page to redirect to the legitimate site.

## Disclaimer

This project is for educational purposes only. The phishing sites are hosted locally and are not accessible to the public. The phishing sites are only for testing the extension and backend server. The phishing sites are not intended to be used for malicious purposes.

## Third Party Resources Used

- [Evilginx](https://github.com/kgretzky/evilginx2/) for testing phishing sites
- [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli) to bootstrap the Chrome Extension


## Third Party Libraries Used

### Frontend

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [Autoprefixer](https://autoprefixer.github.io/)
- [Axios](https://axios-http.com/)


### Backend
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Pandas](https://pandas.pydata.org/)
- [Scikit-learn](https://scikit-learn.org/)
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [Requests](https://docs.python-requests.org/en/master/)
- [Flask-Caching](https://flask-caching.readthedocs.io/en/latest/)
- [Flask-Cors](https://flask-cors.readthedocs.io/en/latest/)
- [Jupyter](https://jupyter.org/)
- [Joblib](https://joblib.readthedocs.io/en/latest/)
- [Tldextract](https://tldextract.readthedocs.io/en/latest/)
- [Selenium](https://www.selenium.dev/documentation/en/)
- [Postman](https://www.postman.com/)


### Chrome Extension

- [Webpack](https://webpack.js.org/)
