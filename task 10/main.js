'use strict'

const request = function (cb) {

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
        cb(users);
    }, 3000);

    setTimeout(function (arg) {
        cb(countries);
        arg();
    }, 5000, mergeTwoArrays);

    function mergeTwoArrays() {
        let resultArr = users.map(function (user) {
            let filteredCountryArr = countries.filter(function (country) {
                return country.userId === user.id;
            });

        user.country = filteredCountryArr[0].country;

        return user;
        });

    console.log(resultArr);
    }
};

request(function (x) {
        console.log(x);
    });





