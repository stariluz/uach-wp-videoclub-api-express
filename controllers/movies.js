const express = require('express');
const { Movie, Genre, } = require('../db');

function create(req, res, next) {
    const { title, genreId, directorId } = req.body;
    Movie.create({
        title, genreId, directorId
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Movie.findAll({include: ['genre', 'director']}).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Movie.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Movie.findByPk(id).then(
        object => {
            const title = req.body.title
                ? req.body.title
                : null;
            const status = req.body.status
                ? req.body.status
                : null;
            return object.update({
                title, status
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

    Movie.findByPk(id).then(
        object => {
            const title = req.body.title
                ? req.body.title
                : object.title;
            const status = req.body.status
                ? req.body.status
                : object.status;
            return object.update({
                title, status
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
    Movie.destroy({
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