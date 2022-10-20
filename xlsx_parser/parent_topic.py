import pandas as pd
from config import TOPIC_SHEET, XLSX_FILE
from transport import client
from gql import gql
from pprint import pprint


df = pd.read_excel(XLSX_FILE, sheet_name=TOPIC_SHEET)

# add faculty
for topic in df["Parent Topic"]:
    try:
        result = client.execute(gql("""
            mutation {
                createParentTopic(create: {topic: "%s"}) {
                    id
                    topic
                }
            }
        """ % topic))
    except Exception as e:
        pprint(e)

# show all faculty
result = client.execute(gql("""
    query {
        parentTopics(query: {}) {
            id
            topic
        }
    }
"""))
pprint(result)
