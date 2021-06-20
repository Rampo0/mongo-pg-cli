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
        database: 'event',
        password: 'password',
        port: 5432
    },
    workdir: 'scripts'
};
