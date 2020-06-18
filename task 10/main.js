'use strict'

const requestUser= function (cb) {

    const users = [
        {
            id: 1,
            fistName: 'Chloe',
            lastName: 'Snyder'
        },
        {
            id: 44,
            fistName: 'Valdemar',
            lastName: 'Larsen'
        },
        {
            id: 342,
            fistName: 'Curtis',
            lastName: 'Garza'
        },
        {
            id: 2,
            fistName: 'Sedef',
            lastName: 'Sezek'
        },
        {
            id: 24,
            fistName: 'Emile',
            lastName: 'Taylor'
        }
    ];

    setTimeout(function () {
        cb(users);
    }, 1000);
}
const requestCountries = function (cb) {

    const countries = [
        {
            userId: 44,
            country: 'Germany'
        },
        {
            userId: 1,
            country: 'Canada'
        },
        {
            userId: 342,
            country: 'Brazil'
        },
        {
            userId: 24,
            country: 'Denmark'
        },
        {
            userId: 2,
            country: 'Ireland'
        }
    ];

    setTimeout(function () {
        cb(countries);
    }, 3000);
}

function mergeTwoArrays(users, countries) {
    return users.map(user => {
        let { country } = countries.find(country => country.userId === user.id);

        return {
            ...user,
            country
        };
    });
}

export {requestUser, requestCountries, mergeTwoArrays}