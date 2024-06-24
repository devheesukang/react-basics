"use strict";
// 타입스크립트 기본 문법 연습
const message1 = 'hello world';
console.log(message1);
// 기본 타입
let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!
const message = 'hello world'; // 문자열
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ['hello', 'world']; // 문자열 배열
// messages.push(1); // 숫자 넣으려고 하면.. 안된다!
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber = null; // number 일수도 있고 null 일수도 있음
let color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생!
// 함수에 타입을 정의하기
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
class Circle {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person1 = {
    name: '김사람',
    age: 20
};
const expert1 = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people1 = [person1, expert1];
const person = {
    name: '김사람'
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people = [person, expert];
const color1 = 'red';
const colors = ['red', 'orange'];
// Generics 사용하기
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
const items1 = {
    list: ['a', 'b', 'c']
};
const items = {
    list: ['a', 'b', 'c']
};
// 클래스에서 Generics 사용하기
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
