import pandas as pd
from os.path import join
import requests
import json
from datetime import datetime

XLSX_FILE_NAME = join("parser", "BB Cafe Reporting V2.xlsx")
SHEET_NAME = "BB Cafe Reporting V2.0"

columns = ["id", "date", "time", "createdBy", "location", 
    "fullName", "firstName", "lastName", "uwinId", 
    "email", "department", "faculty", "topics", "description", "isFollowupEmail", 
    "isMultiple", "isTeams"]
df = pd.read_excel(XLSX_FILE_NAME, sheet_name=SHEET_NAME)
df.dropna()
df.columns =  columns
df.isTeams.fillna(False, inplace=True)
df.isMultiple.fillna(False, inplace=True)


faculty  = df[["firstName", "lastName", "uwinId", "email", "department", "faculty" ]].drop_duplicates()
# for body in json.loads(faculty.to_json(orient="records")):
#     print(json.dumps(body))
#     resp = requests.post("http://127.0.0.1:8000/faculty/",
#         headers={"content-type": "application/json"},
#         data= json.dumps(body))
#     print(resp)
#     print(resp.json())


query = df[["createdBy", "location", "topics", "uwinId", "description", "isMultiple", "isTeams"]]
query["isMultiple"] = df["isMultiple"].apply(lambda x: bool(x))
for body in json.loads(query.to_json(orient="records")):
    body["topics"] = json.loads(body["topics"])
    resp = requests.post("http://127.0.0.1:8000/query/",
    headers={"content-type": "application/json"},
        data= json.dumps(body))
    print(resp)
    print(resp.json())
print(query.MajorTopic)

