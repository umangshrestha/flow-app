from loadxlsx import df
import json
import grequests
from settings import HEADERS, TOPIC_URL

topics = set()
reqs = set()
def add_to_request(topic):
    if topic in topics:  return
    resp = grequests.post(TOPIC_URL, headers=HEADERS, data= json.dumps({"topic": topic}))
    reqs.add(resp)
    topics.add(topic)


add_to_request("Other - Please Provide Details in the \"Topic(s)\" Text-Field")

for x in df["topic"].dropna().unique():
    try: 
       [add_to_request(topic) for topic in json.loads(x)]
    except Exception as E:
        print("err", x, E)

for resp in grequests.map(reqs):
    print(resp.json())