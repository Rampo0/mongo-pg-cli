const { MongoClient } = require('mongodb');
const { Client } = require('pg');

module.exports = async (pg, mongodb, scriptFunc) => {
    const mongoClient = new MongoClient(mongodb.uri, mongodb.options);
    const pgClient = new Client(pg);

    try {
        await mongoClient.connect();

        await mongoClient.db('admin').command({ ping: 1 });
        console.log('Connected successfully to mongo');

        await pgClient.connect();
        console.log('Connected successfully to postgres');

        await scriptFunc(mongoClient, pgClient);
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoClient.close();
        await pgClient.end();
    }
};
