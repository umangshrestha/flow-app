from pprint import pprint
import pandas as pd
from config import XLSX_FILE, FACULTY_SHEET
from transport import client
from gql import gql
from pprint import pprint

df = pd.read_excel(XLSX_FILE, sheet_name=FACULTY_SHEET)

# add faculty
for _, data in df.iterrows():
    try:
        result = client.execute(gql("""
            mutation {
                createDepartment(create: {department: "%s", faculty: "%s"}) {
                    id
                    faculty
                }
            }
        """ % (data.Department, data.Faculty)))
    except Exception as e:
        pprint(e)

# show all faculty
result = client.execute(gql("""
    query {
        departments(query:{}){
            id,
            department
        }
    }
"""))
pprint(result)
