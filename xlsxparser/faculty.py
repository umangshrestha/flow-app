import json
import requests
from loadxlsx import df
from settings import FACULTY_URL, HEADERS;

faculty  = df[["firstName", "lastName", "uwinID", "email", "department", "faculty" ]].drop_duplicates()

for body in json.loads(faculty.to_json(orient="records")):
    req = requests.post(FACULTY_URL, headers=HEADERS, data= json.dumps(body))
    print(req)
    print(req.json())
