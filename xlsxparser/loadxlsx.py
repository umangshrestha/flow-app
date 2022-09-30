import pandas as pd

from settings import XLSX_FILE_NAME

SHEET_NAME = "BB Cafe Reporting V2.0"

columns = ["id", "date", "time", "createdBy", "location", 
    "fullName", "firstName", "lastName", "uwinID", 
    "email", "department", "faculty", "topic", "description", "isFollowupEmail", 
    "isMultiple", "isTeams"]

df = pd.read_excel(XLSX_FILE_NAME, sheet_name=SHEET_NAME)
df.dropna()
df.columns =  columns
df.isTeams.fillna(False, inplace=True)
df.isMultiple.fillna(False, inplace=True)
