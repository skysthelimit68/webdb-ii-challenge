const knex = require('knex');

const knexConfig = require("../knexConfig.js");

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('bears')
}

function findById(id) {
    return db('bears')
        .where({ id })
        .first()
}

function add(zoo) {
    return db('bears')
        .insert(zoo, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function update(id, changes) {
    return db('bears')
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
    return db('bears')
        .where({ id })
        .del()
}