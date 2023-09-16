#!/usr/bin/env python3
"""Log stats from collection"""

from pymongo import MongoClient

METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']


def log_stats(mongo_collection, option=None):
    """Script that provides some stats about Nginx logs stored in MongoDB"""
    if option:
        value = mongo_collection.count_documents({'method': option})
        print(f'\tmethod {option}: {value}')
        return

    result = mongo_collection.count_documents({})
    print(f'{result} logs')
    print('Methods:')

    for method in METHODS:
        count = mongo_collection.count_documents({'method': method})
        print(f'\tmethod {method}: {count}')

    status_check = mongo_collection.count_documents({'path': '/status'})
    print(f'{status_check} status check')


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx
    log_stats(nginx_collection)
