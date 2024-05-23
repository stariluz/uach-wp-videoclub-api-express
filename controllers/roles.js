const express = require('express');
const Role = require('../models/role');
const mongoose = require('mongoose');
const { defineAbilityFor } = require('../utilities/permissions');

async function create(req, res, next) {
    const { description, status, permissions } = req.body;
    const permissionsArray = JSON.parse(permissions).map((id) => {
        return new mongoose.Types.ObjectId(id);
    });
    const role = new Role({ description, status, permissions: permissionsArray });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('CREATE', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be created",
            obj: {},
        });
        return;
    }

    role.save().then((obj) => {
        res.status(200).json({
            msg: 'Role correctly created',
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: "Role couldn't be created",
            obj: exc,
        })
    });
}

async function list(req, res, next) {
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('LIST', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be listed",
            obj: {},
        });
        return;
    }

    Role.find().populate('_permissions').then((obj) => {
        res.status(200).json({
            msg: 'Roles list',
            obj: obj,
        });
    }).catch((exc) => {
        console.error(exc)
        res.status(500).json({
            msg: "Role couldn't be listed",
            obj: exc,
        })
    });
}

async function index(req, res, next) {
    const { id } = req.params;
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('READ', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be readed",
            obj: {},
        });
        return;
    }

    Role.findOne({ _id: id }).populate('_permissions').then((obj) => {
        res.status(200).json({
            msg: `Role ${id}`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Role  ${id} couldn't be recovered`,
            obj: exc,
        })
    });
}

async function replace(req, res, next) {
    const { id } = req.params;
    const { description, status, permissions } = {
        description: req.body.description || "",
        status: req.body.status || "",
        permissions: req.body.permissions ? JSON.parse(req.body.permissions).map((id) => {
            return new mongoose.Types.ObjectId(id);
        }) : [],
    }
    const role = new Object({
        _description: description,
        _status: status,
        _permissions: permissions
    });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('REPLACE', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be replaced",
            obj: {},
        });
        return;
    }

    Role.findOneAndUpdate({ _id: id }, role, { new: true }).then((obj) => {
        res.status(200).json({
            msg: `Role ${obj.id} updated`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Role  ${obj.id} couldn't be updated`,
            obj: exc,
        })
    });
}

async function update(req, res, next) {
    const { id } = req.params;
    const { description, status, permissions } = {
        description: req.body.description || undefined,
        status: req.body.status || undefined,
        permissions: req.body.permissions ? JSON.parse(req.body.permissions).map((id) => {
            return new mongoose.Types.ObjectId(id);
        }) : undefined,
    }
    const role = new Object({
        _description: description,
        _status: status,
        _permissions: permissions
    });

    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);
    
    if (ability.cannot('UPDATE', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be updated",
            obj: {},
        });
        return;
    }

    Role.findOneAndUpdate({ _id: id }, role, { new: true }).then((obj) => {
        res.status(200).json({
            msg: `Role ${obj.id} updated`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Role  ${obj.id} couldn't be updated`,
            obj: exc,
        })
    });
}

async function destroy(req, res, next) {
    const { id } = req.params;
    const currentUser = req.auth.data.user;
    const ability = await defineAbilityFor(currentUser);

    if (ability.cannot('DELETE', 'Role')) {
        res.status(403).json({
            msg: "Role couldn't be deleted",
            obj: {},
        });
        return;
    }

    Role.findByIdAndDelete({ _id: id }).then((obj) => {
        res.status(200).json({
            msg: `Role ${id} deleted`,
            obj: obj,
        });
    }).catch((exc) => {
        res.status(500).json({
            msg: `Role  ${id} couldn't be deleted`,
            obj: exc,
        })
    });
}

module.exports = { create, list, index, replace, update, destroy }