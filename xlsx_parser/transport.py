from gql import Client
from gql.transport.aiohttp import AIOHTTPTransport
from config  import API_URL

transport = AIOHTTPTransport(url=API_URL)

client = Client(transport=transport, fetch_schema_from_transport=True)
