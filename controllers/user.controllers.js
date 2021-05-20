const {response} = require('express')

const usersGet = (req, res =response) => {

    const {date} = req.query;
    res.json({
        msg: 'GET API - controller',
        date
    })
}

const usersPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'POST API -controller',
        nombre,
        edad
    })
}

const usersPut = (req, res) => {
    const userId = req.params.id;

    res.json({
        msg: 'PUT API - controller',
        userId
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'PATCH API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}