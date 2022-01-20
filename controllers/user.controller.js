const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

    const query = req.query;

    const { nombre, apellido, test = 'test' } = req.query;

    res.json({
        msg: 'get Api - Controller',
        nombre,
        apellido,
        test
    });
}

const usersPost = (req, res = response) => {

    //const body = req.body;
    const { name, edad } = req.body;

    res.json({
        msg: 'Post Api - Controller',
        name,
        edad
    });
}

const usersPut = (req, res = response) => {

    //const id = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'Put Api - Controller',
        id
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Patch Api - Controller'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete Api - Controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}