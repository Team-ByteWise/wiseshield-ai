import os

from dotenv import load_dotenv


def get_logging_level():
    load_dotenv()
    return int(os.getenv("DEBUG_MODE", 0))


def logd(message):
    if get_logging_level() >= 4:
        print(f"[DEBUG] {message}")


def logi(message):
    if get_logging_level() >= 3:
        print(f"[INFO] {message}")


def logw(message):
    if get_logging_level() >= 2:
        print(f"[WARNING] {message}")


def loge(message):
    if get_logging_level() >= 1:
        print(f"[ERROR] {message}")


def main():
    print("WiseShield AI OP")


if __name__ == "__main__":
    main()
