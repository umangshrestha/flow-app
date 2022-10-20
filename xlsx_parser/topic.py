import pandas as pd
from config import TOPIC_SHEET, XLSX_FILE
from transport import client
from gql import gql
from pprint import pprint


df = pd.read_excel(XLSX_FILE, sheet_name=TOPIC_SHEET)

# add faculty
for _, data in df.iterrows():
    try:
        result = client.execute(gql("""
            mutation {
                createTopic(create: {parentTopic: "%s", topic: %s}) {
                    id
                    topic
                }
            }
        """ % (data["Parent Topic"], data["Major Topic"][1:-1])))
    except Exception as e:
        pprint(e)

# show all faculty
result = client.execute(gql("""
    query {
        topics(query: {}) {
            id
            topic
            parentTopic {
                topic
            }
        }
    }
"""))
pprint(result)
