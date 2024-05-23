const express = require('express');
const Permission = require('../models/permission');
const { defineAbilityFor } = require('../utilities/permissions');

async function create(req, res, next) {
    const { description, type } = req.body;
    const permission = new Permission({ description, type });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('CREATE', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be created",
            obj: {},
        });
        return;
    }

    permission.save().then((obj) => {
        res.status(200).json({
            msg: 'Permission correctly created',
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: "Permission couldn't be created",
            obj: exc,
        });
    });
}

async function list(req, res, next) {
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('LIST', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be listed",
            obj: {},
        });
        return;
    }

    Permission.find().populate('_roles').then((obj) => {
        res.status(200).json({
            msg: 'Permissions list',
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: "Permission couldn't be listed",
            obj: exc,
        })
    });
}

async function index(req, res, next) {
    const { id } = req.params;
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('READ', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be readed",
            obj: {},
        });
        return;
    }

    Permission.findOne({ _id: id }).populate('_roles').then((obj) => {
        res.status(200).json({
            msg: `Permission ${id}`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Permission  ${id} couldn't be recovered`,
            obj: exc,
        })
    });
}

async function replace(req, res, next) {
    const { id } = req.params;
    const { description, type } = {
        description: req.body.description || "",
        type: req.body.type || "",
    }
    const permission = new Object({
        _description: description,
        _type: type,
    });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('REPLACE', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be replaced",
            obj: {},
        });
        return;
    }

    Permission.findOneAndUpdate({ _id: id }, permission, { new: true }).then((obj) => {
        res.status(200).json({
            msg: `Permission ${obj.id} updated`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Permission  ${obj.id} couldn't be updated`,
            obj: exc,
        })
    });
}

async function update(req, res, next) {
    const { id } = req.params;
    const { description, type } = {
        description: req.body.description || undefined,
        type: req.body.type || undefined,
    }
    const permission = new Object({
        _description: description,
        _type: type,
    });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('UPDATE', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be updated",
            obj: {},
        });
        return;
    }

    Permission.findOneAndUpdate({ _id: id }, permission, { new: true }).then((obj) => {
        res.status(200).json({
            msg: `Permission ${obj.id} updated`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Permission  ${obj.id} couldn't be updated`,
            obj: exc,
        })
    });
}

async function destroy(req, res, next) {
    const { id } = req.params;
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('DELETE', 'Permission')) {
        res.status(403).json({
            msg: "Permission couldn't be deleted",
            obj: {},
        });
        return;
    }

    Permission.findByIdAndDelete({ _id: id }).then((obj) => {
        res.status(200).json({
            msg: `Permission ${id} deleted`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Permission  ${id} couldn't be deleted`,
            obj: exc,
        })
    });
}

module.exports = { create, list, index, replace, update, destroy }