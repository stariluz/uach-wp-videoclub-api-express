const express = require('express');
const { Genre } = require('../db');

function create(req, res, next) {
    const { description, status } = req.body;
    Genre.create({
        description, status
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Genre.findAll({}).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Genre.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Genre.findByPk(id).then(
        object => {
            // const { description, status } = {
            //     ...req.body,
            //     ...object
            // };
            const description = req.body.description
                ? req.body.description
                : null;
            const status = req.body.status
                ? req.body.status
                : null;
            return object.update({
                description, status
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

    Genre.findByPk(id).then(
        object => {
            // const { description, status } = {
            //     ...req.body,
            //     ...object
            // };
            const description = req.body.description
                ? req.body.description
                : object.description;
            const status = req.body.status
                ? req.body.status
                : object.status;
            return object.update({
                description, status
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
    Genre.destroy({
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