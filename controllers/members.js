const express = require('express');
const { Member, Actor, Director, Genre } = require('../db');

function create(req, res, next) {
    const { name, lastName, phone, address } = req.body;
    Member.create({
        name, lastName, phone, address
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Member.findAll({ include: ['actors', 'directors', 'genres', 'waitingLists', 'loans'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function addFavoriteActor(req, res, next) {
    const { memberId, actorId } = req.body;
    Member.findByPk(memberId)
        .then((member) => {
            Actor.findByPk(actorId)
                .then((actor) => {
                    member.addActor(actor);
                    res.json(member);
                })
                .catch(err => res.send(err));
        })
        .catch(err => res.send(err));
}

function addFavoriteDirector(req, res, next) {
    const { memberId, directorId } = req.body;
    Member.findByPk(memberId)
        .then((member) => {
            Director.findByPk(directorId)
                .then((director) => {
                    member.addDirector(director);
                    res.json(member);
                })
                .catch(err => res.send(err));
        })
        .catch(err => res.send(err));
}

function addFavoriteGenre(req, res, next) {
    const { memberId, genreId } = req.body;
    Member.findByPk(memberId)
        .then((member) => {
            Genre.findByPk(genreId)
                .then((genre) => {
                    member.addGenre(genre);
                    res.json(member);
                })
                .catch(err => res.send(err));
        })
        .catch(err => res.send(err));
}

function index(req, res, next) {
    const { id } = req.params;
    Member.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Member.findByPk(id).then(
        object => {
            const name = req.body.name
                ? req.body.name
                : null;
            const lastName = req.body.lastName
                ? req.body.lastName
                : null;
            const phone = req.body.phone
                ? req.body.phone
                : null;
            const address = req.body.address
                ? req.body.address
                : null;
            return object.update({
                name, lastName, phone, address
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

    Member.findByPk(id).then(
        object => {
            const name = req.body.name
                ? req.body.name
                : object.name;
            const lastName = req.body.lastName
                ? req.body.lastName
                : object.lastName;
            const phone = req.body.phone
                ? req.body.phone
                : object.phone;
            const address = req.body.address
                ? req.body.address
                : object.address;
            return object.update({
                name, lastName, phone, address
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
    Member.destroy({
        where: {
            id: id,
        }
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

module.exports = {
    create, list, index, replace, update, destroy,
    addFavoriteActor, addFavoriteDirector, addFavoriteGenre
}
