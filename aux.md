# Permissions
There is a list for some preconfigurated permissions, you can use them to build your roles.

## Permissions JSON
```json
[
{
    "_id": "664ebf164cce4411c3fc1d0d",
    "_description": "Permission",
    "_type": "UPDATE"
},
{
    "_id": "664ebf1a4cce4411c3fc1d0f",
    "_description": "User",
    "_type": "UPDATE"
},
{
    "_id": "664ebf204cce4411c3fc1d11",
    "_description": "Role",
    "_type": "UPDATE"
},
{
    "_id": "664ebf6b4cce4411c3fc1d1b",
    "_description": "User",
    "_type": "CREATE"
},
{
    "_id": "664ebf714cce4411c3fc1d1d",
    "_description": "Role",
    "_type": "CREATE"
},
{
    "_id": "664ebf754cce4411c3fc1d1f",
    "_description": "Permission",
    "_type": "CREATE"
},
{
    "_id": "664ebf7e4cce4411c3fc1d22",
    "_description": "Permission",
    "_type": "DELETE"
},
{
    "_id": "664ebf814cce4411c3fc1d24",
    "_description": "User",
    "_type": "DELETE"
},
{
    "_id": "664ebf844cce4411c3fc1d26",
    "_description": "Rol",
    "_type": "DELETE"
},
{
    "_id": "664ebf894cce4411c3fc1d28",
    "_description": "Rol",
    "_type": "READ"
},
{
    "_id": "664ebf8e4cce4411c3fc1d2a",
    "_description": "User",
    "_type": "READ"
},
{
    "_id": "664ebf934cce4411c3fc1d2c",
    "_description": "Permission",
    "_type": "READ"
},
{
    "_id": "664ecc5480d30236d8af571a",
    "_description": "User",
    "_type": "REPLACE"
},
{
    "_id": "664ecc5980d30236d8af571c",
    "_description": "Permission",
    "_type": "REPLACE"
},
{
    "_id": "664ecc5c80d30236d8af571e",
    "_description": "Role",
    "_type": "REPLACE"
},
{
    "_id": "664ecc6480d30236d8af5720",
    "_description": "User",
    "_type": "LIST"
},
{
    "_id": "664ecc6980d30236d8af5722",
    "_description": "Permission",
    "_type": "LIST"
},
{
    "_id": "664ecc6c80d30236d8af5724",
    "_description": "Role",
    "_type": "LIST"
},
{
    "_id": "664edb7f36dbdf3845397341",
    "_description": "all",
    "_type": "CREATE"
},
{
    "_id": "664edb8936dbdf3845397345",
    "_description": "all",
    "_type": "UPDATE"
},
{
    "_id": "664edb8d36dbdf3845397349",
    "_description": "all",
    "_type": "READ"
},
{
    "_id": "664edb9036dbdf384539734d",
    "_description": "all",
    "_type": "DELETE"
},
{
    "_id": "664edb9936dbdf3845397351",
    "_description": "all",
    "_type": "LIST"
},
{
    "_id": "664edb9d36dbdf3845397355",
    "_description": "all",
    "_type": "REPLACE"
}]
```

## ADMIN Permissions 
The admin permissions uses `all` permissions.
```json
["664edb7f36dbdf3845397341","664edb8936dbdf3845397345","664edb8d36dbdf3845397349","664edb9036dbdf384539734d","664edb9936dbdf3845397351","664edb9d36dbdf3845397355"]
```

## List of permissions JSON
This is the complete list of permissionw without `all` permissions.
```json
["664ebf164cce4411c3fc1d0d","664ebf1a4cce4411c3fc1d0f","664ebf204cce4411c3fc1d11","664ebf6b4cce4411c3fc1d1b","664ebf714cce4411c3fc1d1d","664ebf754cce4411c3fc1d1f","664ebf7e4cce4411c3fc1d22","664ebf814cce4411c3fc1d24","664ebf844cce4411c3fc1d26","664ebf894cce4411c3fc1d28","664ebf8e4cce4411c3fc1d2a","664ebf934cce4411c3fc1d2c","664ecc5480d30236d8af571a","664ecc5980d30236d8af571c","664ecc5c80d30236d8af571e","664ecc6480d30236d8af5720","664ecc6980d30236d8af5722","664ecc6c80d30236d8af5724"]
```