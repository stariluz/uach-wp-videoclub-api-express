const express = require('express');
const { Loan } = require('../db');

function create(req, res, next) {
    const { memberId, copyId, startDate, endDate } = req.body;
    Loan.create({
        memberId, copyId, startDate, endDate
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Loan.findAll({ include: ['member', 'copy'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Loan.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Loan.findByPk(id).then(
        object => {
            const memberId = req.body.memberId
                ? req.body.memberId
                : null;
            const copyId = req.body.copyId
                ? req.body.copyId
                : null;
            const startDate = req.body.startDate
                ? req.body.startDate
                : null;
            const endDate = req.body.endDate
                ? req.body.endDate
                : null;
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

function update(req, res, next) {
    const { id } = req.params;

    Loan.findByPk(id).then(
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
    Loan.destroy({
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
