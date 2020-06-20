'use strict'

const requestForUsers = function(success, error, url){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >=200 && xhr.status < 300) {
                success(xhr.response);
                console.log(JSON.parse(xhr.response));
            } else {
                error({
                    code: xhr.status,
                    message: `Error: ${xhr.status}`
                });
            }
        }
    }

xhr.send();
}

requestForUsers(male => {
    console.log(male);
}, err => {
            console.log(err);
        }, 'https://randomuser.me/api/?results=3&gender=male'
);

requestForUsers(female => {
    console.log(female);
}, err => {
            console.log(err);
        }, 'https://randomuser.me/api/?results=3&gender=female'
);
