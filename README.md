# mongo-pg-cli

A workspace to work with mongo and postgres client

**How to use :** <br>

1. Go to workspace parent directory and create config.js

```
module.exports = {
    mongodb: {
        uri: process.env.MONGO_URL || 'mongodb://localhost:27017',
        options: {
            useUnifiedTopology: true
        }
    },
    pg: {
        user: 'postgres',
        host: '127.0.0.1',
        database: 'mydb',
        password: 'password',
        port: 5432
    },
    workdir: 'scripts'
};
```

2. Create directory with name according to the config and add file js <br> {workdir}/filename.js : 

```
module.exports = async (mongoClient, pgClient) => {
    console.log('running scripts');
};
```

3. Run script with command below on the same directory with config.js

```
mongo-pg-cli run <filename>
```

**References**

Mongo client and pg client using below references
- [postgres](https://node-postgres.com)
- [mongodb](https://docs.mongodb.com/drivers/node/quick-start/)
