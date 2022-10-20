import pandas as pd
from config import XLSX_FILE, FACULTY_SHEET
from transport import client
from gql import gql


df = pd.read_excel(XLSX_FILE, sheet_name=FACULTY_SHEET)

# add faculty
for faculty in df["Faculty"]:
    try:
        result = client.execute(gql("""
            mutation {
                createFaculty(create: {faculty: "%s"}) {
                    id
                    faculty
                }
            }
        """ % faculty))
        print(result)
    except Exception as e:
        print(e)

# show all faculty
result = client.execute(gql("""
    query {
        facultys(query: {}) {
            id
            faculty
        }
    }
"""))
