const { defineAbility } = require('@casl/ability');
const Role = require('../models/role');
const SanitiziedUser = require('../models/sanitiziedUser');

const defineAbilityFor = async (user) => {
    return await defineAbility(async (can, cannot) => {
        user = new SanitiziedUser(user);
        if (user.roles == undefined) {
            cannot('CREATE', 'all');
            cannot('READ', 'all');
            cannot('UPDATE', 'all');
            cannot('DELETE', 'all');
            cannot('REPLACE', 'all');
            cannot('LIST', 'all');
            // can('LIST', 'Permission');
        } else {
            await Promise.all(
                user.roles.map(async (role) => {
                    return new Promise((resolve, reject) => {
                        Role.findOne({ _id: role }).populate('_permissions').then((obj) => {
                            obj.permissions.forEach((permission) => {
                                can(permission.type, permission.description);
                            });
                            resolve(true);
                        }).catch((exc) => {
                            reject(exc);
                        });
                    });
                })
            );
            // can('LIST', 'Permission');
        }
    });
}

module.exports = { defineAbilityFor };