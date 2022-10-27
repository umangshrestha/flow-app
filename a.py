import pandas as pd
import requests
df = pd.read_excel("a.xlsx", sheet_name="BB Cafe Reporting V2.0")
df = df[["Instructor/GA Full Name","UWinID", "UWin Email", "Department/Faculty"]]
df.columns = ["full_name", "id", "email", "department"]
df.loc[df["department"] == "unknown"] = "Unknown"
data ={x["department"]:x["id"] for x in  requests.get("http://localhost:8000/department").json()["results"]}
df["department"].fillna("Unknown", inplace=True)
df["department"] = df["department"].apply(lambda x: data[x])
for x in df.to_dict(orient='records'):
    try :
        data = requests.post("http://localhost:8000/instructor/", json=x)
        print(data.json())
    except:
        pass 