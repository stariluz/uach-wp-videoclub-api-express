const express = require('express');
const { Movie,Actor } = require('../db');

function create(req, res, next){
    const title = req.body.title;
    const genreId = req.body.genreId;
    const directorId = req.body.directorId;

    Movie.create({
        title:title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object))
    .catch(err => res.send(err));
}

function list(req, res, next) {
    Movie.findAll({ include: ['genre', 'director', 'actors'] })
        .then(objects => res.json(objects))
        .catch(err => res.send(err));
}

function addActor(req, res, next) {
    const { idMovie, idActor } = req.body;
    Movie.findByPk(idMovie)
        .then((movie) => {
            Actor.findByPk(idActor)
                .then((actor) => {
                movie.addCAst(actor);
                res.json(movie);
            })
            .catch(err => res.send(err));
        })
        .catch(err => res.send(err));

}
function index(req, res, next) {
    // console.log(req);
    res.send(`Movies index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Movies replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Movies update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Movies destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy, addActor}