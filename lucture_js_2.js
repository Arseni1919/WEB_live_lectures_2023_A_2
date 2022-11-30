/******************************/

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
//     this.getBirthYear = function () {
//         return this.dob.getFullYear()
//     }
//
//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Koeh', '4-3-1988')
//
// // console.log(person1)
// // console.log(person1.dob.getDay())
// // console.log(person1.dob.getFullYear())
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person2)
/******************************/

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
//
//
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear()
//     }
//
//
// console.log(person1.getBirthYear())
// // console.log(person1.getFullName())
//
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }
//
// console.log(person1.getFullName())

/******************************/

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//
//     getBirthYear() {
//         return this.dob.getFullYear()
//     }
//
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
//
// console.log(person1)
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

/******************************/

// console.log(window)
// console.log('hello console')

// window.alert('this is alert!!!')

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// window.localStorage['my_key'] = 'my_value'
// console.log(window.localStorage)

/******************************/

// console.log(document.getElementById('my-form'))
// const form = document.getElementById('my-form')
// console.log(form)

// const form = document.querySelector('#my-form')
// console.log(form)
// const el_2 = document.querySelector('.items')
// console.log(el_2)
// const el_3 = document.querySelector('li')
// console.log(el_3)
/******************************/
// const e1 = document.getElementsByClassName('item')
// console.log(e1)
// const e2 = document.getElementsByTagName('li')
// console.log(e2)
// const e3 = document.querySelectorAll('.item')
// console.log(e3)
// e3[2].innerHTML = 'YUUUUHUUU'
/******************************/

// const ul = document.querySelector('.items')
// console.log(ul)

// ul.remove()
// ul.lastElementChild.remove()

// ul.firstElementChild.textContent = '<h1>This is Item 1</h1>'
// ul.lastElementChild.innerHTML = '<h1>This is Item 4</h1>'
// ul[2].innerHTML = '<h2>This is Item 2</h2>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'
// btn.style.color = 'white'

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     // console.log('click!')
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.className)
//
//     e.target.classList.add('btn-2')
//     // e.target.classList.remove('btn')
//
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>This is Item 4</h1>'
//
// })

// btn.addEventListener('mouseover', (e) => {
//
// })
//
// btn.addEventListener('mouseout', (e) => {
//
// })
/******************************/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.users')

const onSubmit = (e) => {
    e.preventDefault()
    // console.log(nameInput)
    // console.log(nameInput.value)

    if (nameInput.value === '' || emailInput.value === '') {
        // console.log('error')
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
        // setTimeout(() => {
        //     msg.innerHTML = ''
        //     msg.classList.remove('error')
        // }, 3000)
    } else {
        // console.log('success')
        const li = document.createElement('li')
        li.innerHTML = `${nameInput.value}: ${emailInput.value}`
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value = ''
        msg.innerHTML = ''
        msg.classList.remove('error')
    }
}

myForm.addEventListener('submit', onSubmit)

/******************************/

