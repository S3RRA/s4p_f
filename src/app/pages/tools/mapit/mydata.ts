export const a = {
    "nodes": [
        {
            "id": "tokenization-accounts",
            "color": "#CBE4F9",
            "distance": 5,
            "size": 50,
            "type": "Main",
            "collapsing": 0,
            "collapsed": false,
            "visibility": "visible"
        },
        {
            "id": "tokenization-accounts-account-balance-history-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "manage-nt-user-account",
            "color": "#EFF9DA",
            "distance": 5,
            "size": 30,
            "type": "node"
        },
        {
            "id": "nt_3pa",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "authorization_code"
                ]
            }
        },
        {
            "id": "network_tokenization_catalogo",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "urn:ietf:params:oauth:grant-type:jwt-bearer"
                ]
            }
        },
        {
            "id": "network-tokenization",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "urn:ietf:params:oauth:grant-type:jwt-bearer"
                ]
            }
        },
        {
            "id": "diego_test_app",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "authorization_code",
                    "client_credentials",
                    "urn:ietf:params:oauth:grant-type:jwt-bearer"
                ]
            }
        },
        {
            "id": "4pHacking",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "client_credentials",
                    "urn:ietf:params:oauth:grant-type:jwt-bearer",
                    "password",
                    "authorization_code"
                ]
            }
        },
        {
            "id": "tokenization-accounts-account-challenges-by-state-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "novum-living-app-purpose",
            "color": "#EFF9DA",
            "distance": 5,
            "size": 30,
            "type": "node"
        },
        {
            "id": "novum-living-app",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "authorization_code",
                    "password",
                    "client_credentials"
                ]
            }
        },
        {
            "id": "tokenization-accounts-account-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "seguridad-testscopes-purpose",
            "color": "#EFF9DA",
            "distance": 5,
            "size": 30,
            "type": "node"
        },
        {
            "id": "seguridad-testscopes-app",
            "color": "#CDF5F6",
            "distance": 5,
            "size": 50,
            "type": "node",
            "data": {
                "grant_types": [
                    "client_credentials"
                ]
            }
        },
        {
            "id": "tokenization-accounts-account-write",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "tokenization-accounts-account-challenges-summary-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "tokenization-accounts-account-balance-expected-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "tokenization-accounts-subscriptions-read",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        },
        {
            "id": "tokenization-accounts-subscriptions-write",
            "color": "#F9D8D6",
            "distance": 5,
            "size": 20,
            "type": "node"
        }
    ],
    "links": [
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-balance-history-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-balance-history-read",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "manage-nt-user-account",
            "target": "nt_3pa",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "manage-nt-user-account",
            "target": "network_tokenization_catalogo",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "manage-nt-user-account",
            "target": "network-tokenization",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "manage-nt-user-account",
            "target": "diego_test_app",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "manage-nt-user-account",
            "target": "4pHacking",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-challenges-by-state-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-challenges-by-state-read",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-challenges-by-state-read",
            "target": "novum-living-app-purpose",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "novum-living-app-purpose",
            "target": "novum-living-app",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-read",
            "target": "seguridad-testscopes-purpose",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "seguridad-testscopes-purpose",
            "target": "seguridad-testscopes-app",
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-read",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-read",
            "target": "novum-living-app-purpose",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-write",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-write",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-challenges-summary-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-challenges-summary-read",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-account-balance-expected-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts-account-balance-expected-read",
            "target": "manage-nt-user-account",
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-subscriptions-read",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        },
        {
            "source": "tokenization-accounts",
            "target": "tokenization-accounts-subscriptions-write",
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "hidden",
            "type": "line"
        }
    ]
}