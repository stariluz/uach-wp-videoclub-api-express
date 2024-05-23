const { defineAbility } = require('@casl/ability');
const User = require('../models/user');
const SanitiziedUser = require('../models/sanitiziedUser');

const defineAbilityFor = (user) => {
    return defineAbility((can, cannot) => {
        console.log("USER:",user);
        if (user.roles == undefined) {
            can('CREATE', 'Role');
            can('READ', 'Role');
            can('UPDATE', 'User');
            can('READ', 'User');
            // cannot('CREATE', 'all');
            // cannot('READ', 'all');
            // cannot('UPDATE', 'all');
            cannot('DELETE', 'all');
        } else {
            for (role in user.roles) {
                switch (role) {
                    case 'ADMIN':
                        can('CREATE', 'all');
                        can('READ', 'all');
                        can('UPDATE', 'all');
                        can('DELETE', 'all');
                        break;
                    case 'MANAGER':
                        can('READ', 'all');
                        cannot('CREATE', 'Actor');
                        cannot('UPDATE', 'Actor');
                        cannot('CREATE', 'Movie');
                        cannot('UPDATE', 'Movie');
                        cannot('CREATE', 'Director');
                        cannot('UPDATE', 'Director');
                        cannot('CREATE', 'Genre');
                        cannot('UPDATE', 'Genre');
                        can('CREATE', 'Member');
                        can('UPDATE', 'Member');
                        can('DELETE', 'Member');
                        can('CREATE', 'WaitingList');
                        can('UPDATE', 'WaitingList');
                        can('DELETE', 'WaitingList');
                        can('CREATE', 'Copy');
                        can('UPDATE', 'Copy');
                        can('DELETE', 'Copy');
                        break;
                    default:
                        can('CREATE', 'Permission');
                        cannot('CREATE', 'all');
                        cannot('READ', 'all');
                        cannot('UPDATE', 'all');
                        cannot('DELETE', 'all');
                        break;
    
                }
            }
        }
    });
}

module.exports = { defineAbilityFor };