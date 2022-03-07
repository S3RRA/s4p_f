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
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-balance-history-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-balance-history-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-challenges-by-state-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-challenges-by-state-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-challenges-by-state-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "novum-living-app-purpose",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "novum-living-app-purpose",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "seguridad-testscopes-purpose",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "seguridad-testscopes-purpose",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "target": {
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
            "distance": 300,
            "size": 50,
            "color": "#EFF9DA",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "novum-living-app-purpose",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-write",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-write",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-challenges-summary-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-challenges-summary-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-account-balance-expected-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts-account-balance-expected-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "target": {
                "id": "manage-nt-user-account",
                "color": "#EFF9DA",
                "distance": 5,
                "size": 30,
                "type": "node"
            },
            "distance": 300,
            "size": 30,
            "color": "#F9D8D6",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-subscriptions-read",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        },
        {
            "source": {
                "id": "tokenization-accounts",
                "color": "#CBE4F9",
                "distance": 5,
                "size": 50,
                "type": "Main",
                "collapsing": 0,
                "collapsed": false,
                "visibility": "visible"
            },
            "target": {
                "id": "tokenization-accounts-subscriptions-write",
                "color": "#F9D8D6",
                "distance": 5,
                "size": 20,
                "type": "node"
            },
            "distance": 300,
            "size": 20,
            "color": "#CBE4F9",
            "visibility": "visible",
            "type": "line"
        }
    ]
}