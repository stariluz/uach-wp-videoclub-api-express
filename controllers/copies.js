const express = require('express');
const { Copy } = require('../db');

function create(req, res, next) {
    const { movieId, format, status } = req.body;
    Copy.create({
        movieId, format, status: status || 'disposable'
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Copy.findAll({ include: ['movie'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Copy.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Copy.findByPk(id).then(
        object => {
            const movieId = req.body.movieId
                ? req.body.movieId
                : null;
            const format = req.body.format
                ? req.body.format
                : null;
            const status = req.body.status
                ? req.body.status
                : null;
            return object.update({
                movieId, format, status
            });
        }
    ).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function update(req, res, next) {
    const { id } = req.params;

    Copy.findByPk(id).then(
        object => {
            const movieId = req.body.movieId
                ? req.body.movieId
                : object.movieId;
            const format = req.body.format
                ? req.body.format
                : object.format;
            const status = req.body.status
                ? req.body.status
                : object.status;
            return object.update({
                movieId, format, status
            });
        }
    ).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function destroy(req, res, next) {
    const { id } = req.params;
    Copy.destroy({
        where: {
            id: id,
        }
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

module.exports = { create, list, index, replace, update, destroy }
