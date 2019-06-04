const knexConfig = {
    client: 'sqlite3',
    connection: { // string or object
        filename: './data/lambda.db3'  
    },
    useNullAsDefault: true, //only required when using sqlite3
    debug: true
}

module.exports = knexConfig;