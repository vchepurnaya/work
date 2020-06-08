'use strict'

// 1

function printUserName(name = '%username%') {
console.log(`Hello, ${name}`);
}

printUserName('John');
printUserName();

//2

const arr = [
    {
        city: 'New York',
        country: 'USA'
    },
    {
        city: 'Paris',
        country: 'France'
    },
    {
        city: 'San Francisco',
        country: 'USA'
    },
    {
        city: 'Minsk',
        country: 'Belarus'
    }
];

let arrOfObjects = {
        usa:[],
        europe:[]
}

let newObj = arr.reduce(function (acc,item) {
    if (item.country === 'USA') {
       acc.usa.push(item.city);
    } else {
        acc.europe.push(item.city);
    }
    return acc;
}, arrOfObjects);
console.log(newObj);

//3

let arr2 = [1, 10, 100, -1, 5];

console.log(Math.min.apply(null, arr2));
console.log(Math.max(...arr2));

//4

function getSum(arg1, arg2) {
    return arg1 + arg2;
}
let curr = getSum.bind(null, 10);
console.log(curr(8));

//5

let setNum = function(x) {
    return {
        plus: function (s) {
            x+=s;
            return this;
        },
        minus: function (z) {
            x-=z;
            return this;
        },
        showNum: function () {
            return x;
        }
    }
}

console.log(setNum(10).plus(7).minus(2).showNum());

//6

let {usa, europe} = arrOfObjects;

//7

const obj = {
    fistName: 'Yura',
    lastName: 'Alekseyev',
    job: 'web developer',

    printInfo: function() {
        console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
    }
};

const obj1 = {
    fistName: 'John',
    lastName: 'Kalligan',
    job: 'musician'
};

obj.printInfo.call(obj1);