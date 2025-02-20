import random
import string
import os
from .SingletonMetaClass import SingletonMetaclass
from azure.cosmos import CosmosClient


class _AzureCosmosDb(metaclass=SingletonMetaclass):
    _random_string = None
    _database_client = None

    def __init__(self):
        print("AzureCosmosDb instantiated")

    def load(self, access_key):
        # Get providers from azure cosmos db
        if self._database_client is None:
            try:
                environment = str(os.getenv("ENVIRONMENT") or "LOCAL").lower()
                cosmos_access_key = access_key if access_key else os.getenv('cosmos-access-key') or ''
                environment_shortname = environment
                if environment == 'development':
                    environment_shortname = 'dev'
                elif environment == 'production':
                    environment_shortname = 'prd'
                container_name = "providers_" + environment_shortname
                query = "select * from " + container_name + " p"
                print(environment, query)
                client = CosmosClient(
                    "https://cdb-appelent.documents.azure.com:443/", access_key)
                self._database_client = client.get_database_client("oauth_providers")
                container = self._database_client.get_container_client(container_name)
                providers = []
                for item in container.query_items(query=query, enable_cross_partition_query=True):
                    providers.append(item)
                print('--- Cosmos DB Adapter loaded successfully. ---')
                return self._database_client
            except Exception as e:
                print('!!!!! Data from Cosmos DB could not be retrieved. Is Environment Variable cosmos-access-key set?')
                print(e)

    def get_database_client(self):
        return self._database_client



        


AzureCosmosDb = _AzureCosmosDb()