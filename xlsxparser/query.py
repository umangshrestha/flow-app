from loadxlsx import df
import json
import requests

from  settings import QUERY_URL, TOPIC_URL, HEADERS


resp = requests.get(TOPIC_URL).json()
topics = {x["topic"]: x["id"] for x in resp}

query = df[["createdBy", "location", "topic", "uwinID", "description", "isMultiple", "isTeams"]]
query["isMultiple"] = df["isMultiple"].apply(lambda x: bool(x))
for body in json.loads(query.to_json(orient="records")):
    try:
        body["topic"] = json.loads(body["topic"])
        body["topic"] =  [topics[x] for x in body["topic"]]
        resp = requests.post(QUERY_URL,
        headers=HEADERS,
            data= json.dumps(body))
        print(resp)
        print(resp.json())
    except Exception as e:
        print(e)
