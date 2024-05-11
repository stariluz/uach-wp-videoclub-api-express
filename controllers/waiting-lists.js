const express = require('express');
const { Wait, WaitingListingList } = require('../db');

function create(req, res, next) {
    const { memberId, movieId, entryDate, status } = req.body;
    WaitingList.create({
        memberId, movieId, entryDate, status
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    WaitingList.findAll({ include: ['member', 'movie'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    WaitingList.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    WaitingList.findByPk(id).then(
        object => {
            const memberId = req.body.memberId
                ? req.body.memberId
                : null;
            const movieId = req.body.movieId
                ? req.body.movieId
                : null;
            const entryDate = req.body.entryDate
                ? req.body.entryDate
                : null;
            const status = req.body.status
                ? req.body.status
                : null;
            return object.update({
                memberId, movieId, entryDate, status
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

    WaitingList.findByPk(id).then(
        object => {
            const memberId = req.body.memberId
                ? req.body.memberId
                : object.memberId;
            const copyId = req.body.copyId
                ? req.body.copyId
                : object.copyId;
            const startDate = req.body.startDate
                ? req.body.startDate
                : object.startDate;
            const endDate = req.body.endDate
                ? req.body.endDate
                : object.endDate;
            return object.update({
                memberId, copyId, startDate, endDate
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
    WaitingList.destroy({
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
