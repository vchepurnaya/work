'use strict'

import {requestUser, requestCountries, mergeTwoArrays} from "./main.js";

const ul = document.createElement('ul');

requestUser(function (users) {
    console.log(users);
    requestCountries(function (countries) {
        const arrayOfUsersAndCountries = mergeTwoArrays(users, countries);

        for (let arr of arrayOfUsersAndCountries) {
            const li = document.createElement('li');

            li.innerText = `First name: ${arr.fistName}, last name: ${arr.lastName}, country: ${arr.country}`;
            ul.appendChild(li);
        }
        console.log(countries);
        console.log(arrayOfUsersAndCountries);
        document.body.appendChild(ul);
    })
});