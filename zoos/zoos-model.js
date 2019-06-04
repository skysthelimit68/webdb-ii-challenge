const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: { // string or object
        filename: './data/lambda.db3' // from the root folder
    },
    useNullAsDefault: true,//only required when using sqlite3
    debug: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}


function find() {
    return db('zoos')
}

function findById(id) {
    return db('zoos')
        .where({ id })
        .first()
}

function add(zoo) {
    return db('zoos')
        .insert(zoo, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function update(id, changes) {
    return db('zoos')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id)
            } else {
                return null;
            }
        })
}

function remove(id) {
    return db('zoos')
        .where({ id })
        .del()
}