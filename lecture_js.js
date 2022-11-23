// alert("Welcome to my lecture!")
/* console.log("Hello, Olam!")
console.warn("my warning!")
console.error("my error!")
 */
// const x = 12
// console.log(x)
// x = 3
// console.log(x)

// let x = 12
// console.log(x)
//
// x = 3
// console.log(x)

/***************************/

// const name = "John"
// console.log(typeof name)
// const age = 30
// console.log(typeof age)
// const rating = 4.5
// console.log(typeof rating)
// const isCool = true
// console.log(typeof isCool)
// const x = null
// console.log(typeof x)
// const y = undefined
// console.log(typeof y)
// z = 5
// console.log(typeof z)
// z = 15
// console.log(typeof z)

/***************************/

// let x = 3
// let y = 4

// x = x + y
// x += y

// x = x - y
// x -= y

// x = x / y
// x /= y

// x = x % y
// x %= y

// x = x ** y
// x **= y

// console.log(x)

/***************************/

// const name = 'Jony'
// const age = 30
// console.log("My name is " + name + " and my age is "+ age)
// console.log(`My 'name' is ${name} and my "age" is ${age}`)
// const sentence = `My 'name' is ${name} and my "age" is ${age}`
// console.log(sentence)
/***************************/
// const s = "Hello World"
// console.log(s)
// console.log(s.length)
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 7))
// console.log(s.substring(0, 7).toUpperCase())
// const s2 = "Hello, World, Student, New, Year"
// console.log(s2.split(','))
// console.log(s2.split(', '))

/***************************/

// const numbers = new Array(1,2,3,4,5,6,7,8)
// const numbers = [1,2,3,4,5,6,7,8]
// console.log(numbers)
//
// const my_list = [123, 'banana', true]
// console.log(my_list)
// console.log(my_list[0])
// console.log(my_list[1])
// console.log(my_list[2])

// const fruits = ['apple', 'oranges', 'banana']
// console.log(fruits)
// fruits[4] = 'grapes'
// fruits.push('grapes')
// fruits.unshift('melon')
// console.log(fruits)
//
// let fruit = fruits.pop()
// console.log(fruit)
// console.log(fruits)
// const x = 5
// console.log(Array.isArray(x))
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))

// console.log(fruits.indexOf('banana'))

/***************************/

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// person.email = 'john@gmail.com'
// console.log(person)
// console.log(person.firstName)
// console.log(person.hobbies[2])
// console.log(person.address.city)

// const firstName = person.firstName
// const lastName = person.lastName
// const state = person.address.state
// const {firstName, lastName, address: {state}} = person
// console.log(`${firstName} ${lastName} is from state ${state}`)

/***************************/

const todos = [
    {
        id: 1,
        text: 'do homework',
        isCompleted: true
    },
        {
        id: 2,
        text: 'do dishes',
        isCompleted: true
    },
        {
        id: 3,
        text: 'meeting',
        isCompleted: false
    },
]

// console.log(todos)
// const JSONtodos = JSON.stringify(todos)
// console.log(JSONtodos)
// console.log(typeof JSONtodos)
//
// const recievedTodos = JSON.parse(JSONtodos)
// console.log(recievedTodos)

/***************************/

// for (let i=0; i < 10; i++) {
//     console.log(`For loop index: ${i}`)
// }
//
// console.log(`------------`)
//
// let i = 0
// while (i < 10){
//     console.log(`While loop index: ${i}`)
//     i++
// }

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
// console.log(`------------`)
//
// for(let todo of todos){
//     console.log(todo.text)
// }
//
// console.log(`------------`)
//
// todos.forEach(function (todo) {
//     console.log(todo.text)
// })
//
// console.log(`------------`)
//
// function printText(todo) {
//     console.log(todo.text)
// }
// todos.forEach(printText)

/***************************/

// const todoText = todos.map(function (todo){
//     return todo.text
// })
// console.log(todoText)
//
// const myTasks = todos.filter(function (todo){
//     return todo.isCompleted === false
// })
// console.log(myTasks)
//
// const textCompletedTasks = todos.filter(function (todo){
//     return todo.isCompleted
// }).map(function (todo){
//     return todo.text
// })
// console.log(textCompletedTasks)

/***************************/

// const x = 5
// const y = 11
// if (x > 3 && y < 20){
//     console.log('success')
// } else {
//     console.log('error')
// }

// const x = 3
//
// const color = x > 2 ? 'red': 'blue'
//
// console.log(color)

/***************************/

// const color = 'green'
//
// switch (color) {
//     case 'red':
//         console.log('red')
//         break
//     case 'blue':
//         console.log('blue')
//         break
//     default:
//         console.log('inside default')
//         break
// }

/***************************/

// function addNums(num1, num2) {
//     console.log(num1 + num2)
// }
// addNums()

// function addNums(num1=10, num2=20) {
//     console.log(num1 + num2)
// }
// addNums(1, 3)

// function addNums(num1=10, num2=20) {
//     return num1 + num2
// }
// const z = addNums(4, 3)
// console.log(z)

/***************************/

const addNums = (num1=1, num2=20) => {
    return num1 + num2
}
const z = addNums(num2=3)
console.log(z)

const addNums2 = (num1, num2) => num1 + num2
const z2 = addNums2(1, 3)
console.log(z2)

const addNums3 = num1 => num1 + 5
const z3 = addNums3(3)
console.log(z3)

todos.forEach(todo => console.log(todo.text))

// const myTasks = todos.filter(function (todo){
//     return todo.isCompleted === false
// })
const myTasks = todos.filter(todo => !todo.isCompleted)
console.log(myTasks)

/***************************/
/***************************/
/***************************/
/***************************/







