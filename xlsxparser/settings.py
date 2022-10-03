from os.path import join

URL = "http://127.0.0.1:8000"

TOPIC_URL = URL + "/topic"
POST_URL = URL + "/post/"
FACULTY_URL = URL + "/faculty/"

SHEET_NAME = "BB Cafe Reporting V2.0"
FILE_NAME = join("xlsxparser","BB Cafe Reporting V2.xlsx")
HEADERS = {"content-type": "application/json"}