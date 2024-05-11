const express = require('express');
const { Movie, Genre, Actor } = require('../db');

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
    Movie.findAll({ include: ['genre', 'director', 'actors', 'copies'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function addActor(req, res, next) {
    const { movieId, actorId } = req.body;
    Movie.findByPk(movieId)
        .then((movie) => {
            Actor.findByPk(actorId)
                .then((actor) => {
                    movie.addActor(actor);
                    res.json(movie);
                })
                .catch(err => res.send(err));
        })
        .catch(err => res.send(err));

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

module.exports = { create, list, index, replace, update, destroy, addActor }
