export function sayHello() {
    console.log('hello there');
}

const data = {
    name: 'xyz',
    age: 25
};

let color = 'green';

const sayGoodBye = function() {
    console.log('GoodBye!');
};

export { data, color };

// Default Export 
export default sayGoodBye;