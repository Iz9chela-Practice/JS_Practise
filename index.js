// const objectA = {
//     a:10,
//     b:true
// }
// const copyOfA = objectA
// copyOfA.a = 20
// copyOfA.c = "abc";
// console.log(objectA.a)
// console.log(objectA.c)

// const city = "Alabama"
// const country = 'USA'

// const myCity = {
//     city,
//     country,
//     pupularity:100000
// }
// console.log(myCity)

// const post = {
//     title: 'My post',
//     likesQty: 5
// }

// const jsonFile = JSON.stringify(post)
// console.log('TO json >> ', jsonFile)
// const postStringified = JSON.parse(jsonFile)
// console.log('TO object >> ', postStringified)

// myCity.popularity = 100000
// myCity.isPrivave = false
// console.log(myCity)
// const countryPropertyName = 'country'
// myCity[countryPropertyName] = 'USA'
// console.log(myCity)


// const person = {
//     name: 'Bob',
//     age: 25,
//     body:{
//         nose: 4,
//         mouth:16
//     }
// }

// const person2 = Object.assign({}, person)
// const person2 = {... person}
// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Eve'
// person2.age = 14
// person2.body.mouth = 69

// console.log(person.age)
// console.log(person2.age)
// console.log(person2)
// console.log(person)

// function myFn(a, b){
//     let c;
//     a = a + 1
//     c = a + b
//     return c
// }

// console.log(myFn(1,2))

// const customPerson = {
//         name: 'Bob',
//         age: 20,
//     }

// function increasePersonAge(person){
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }
// const updatedPerson = increasePersonAge(customPerson)

// console.log(updatedPerson)
// console.log(customPerson)

// function printMyName(){
//     console.log('Your name is >> Abeme')
// } 

// setTimeout(printMyName, 1000)

// const button = {
//     width: 200,
//     text:  'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)
// const name = 'Ihor'
// const city = 'Mykolaiv'
// console.log(`My name is ${name} and I live in ${city}`)


// (a,b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// function multiPlierByFactor(value, multiPlier = 1){
//     return value * multiPlier;
// }

// const multiPlierByFactor = function(a, b = 1){
//     return a*b
// }


// console.log(multiPlierByFactor(5))
// console.log(multiPlierByFactor(5,2))

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id:1,
//     name:'Ihor'
// }


// console.table(newPost(firstPost))

// const funcWithError = () => {
//     throw new Error('Some Error')
// }

// try{
//     funcWithError()
// }catch(error){
//     console.error(error)
//     console.log(error.message)
// }
// console.log('Continue...')


// const array = [1,2,3]
// array.push(4)
// console.log(array.pop())
// console.log(array)
// console.log(array.unshift(0))
// console.log(array)
// console.log(array.shift())
// console.log(array)
// array.forEach(el => el * 2)
// console.log(array)
// const newArray = array.map(el => el * 3)
// console.log(newArray)
// console.log(array)



// const array2 = new Array(1,2,3)
// const array3 = array
// console.log(array)
// console.log(array2)
// console.log(array === array2)
// console.log(array === array3)

// const userProfile = {
//     name: 'Ihor',
//     CommentQty:23,
//     hasSignedAgreement: false
// }

// const {name, CommentQty} = userProfile
// const {hasSignedAgreement} = userProfile

// console.log(name)
// console.log(CommentQty)

// const fruits = ['Fruit123', 'Fruit221']

// const [Fruit1, Fruit2] = fruits

// console.log(Fruit1)
// console.log(Fruit2)


// const userProfile = {
//     name: 'Ihor',
//     CommentQty:23,
//     hasSignedAgreement: false
// }

// const user = ({name, CommentQty}) => {
//     if(!CommentQty){
//         return `User with name ${name} has no comments`
//     }
//     return `User with name ${name} have comments ${CommentQty}`
// }  

// console.log(user)

// console.log(!undefined === true)

// const sumNumbers = (a,b) => {
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         throw new Error('One element is not a number!')
//     }
//     else if(a <= 0 || b <= 0){
//         throw new Error('Elements should be positive!')
//     }
//     else{
//         return a+b
//     }
// }

// console.log(sumNumbers(1,13))

// const value = -3

// const res = value>= 0 ? value : -value

// console.log(res)

// console.log(Object.keys({Bebr: true, isBig: false, age: 15, name: 'Habibi'}))
// console.log(Object.values({Bebr: true, isBig: false, age: 15, name: 'Habibi'}))

// const myArray = [true, 10, 'abc', null]
// for(const key of myArray){
//     console.log(key)
// }

// class Comment {
//     constructor(text){
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }    

//     static mergeComments(first, second){
//         return `${first } ${second}`
//     }
// }

// const firstComment = new Comment("Amogus")
// console.log(firstComment.hasOwnProperty('text'))
// console.log(firstComment.hasOwnProperty('abc '))

// console.log(Comment.mergeComments("haha", "Potata!"))

// class NumberArray extends Array{
//     sum(){
//         return this.reduce((el, acc) => acc += el,0)
//     }
// }

// const myArray = new NumberArray(2,5,7)
// console.log(myArray)
// myArray.sum() 
// console.log(myArray.sum())

// const num = 10
// const str = 'Ihor'

// const myPromise = new Promise((resolve, reject) => {

// });
// myPromise.then(value => {

// })
// .catch(error => {

// })


// const getData = (url) => 
//     new Promise((resolve, reject) =>
//     fetch(url)
//     .then(response => response.json())
//     .then(json => resolve(json))
//     .catch(error => reject(error))
//     )

// getData('https://jsonplaceholder.typicode.com/todos')
// .then(data => console.log(data))
// .catch(error => console.log(error.message))

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error.message))

// const asyncFn = async () => {
//     return "Success!"
//     // throw new Error("test Error")
// }

// asyncFn()
// .then(value => console.log(value))
// .catch(error => console.log(error.message))

// const timerPromise = () => new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000)
// )

// const asyncFn = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer ended', endTime - startTime)
// }

// asyncFn()

// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos/3'

// try{
// const data = await getData(url)
// console.log(data)
// }
// catch(error){
//     console.log(error.message)
// }

// const country = 'Slovakia'
// console.log(country)

// let isStudent
// isStudent = true
// console.log(isStudent)
// isStudent = false
// console.log(isStudent)

// const myName = 'Ihor'
// const surname = 'Kasatkin'
// const workIn = 'IT'
// console.log(`My name is ${myName} ${surname} and I work in ${workIn}`)

/** */
// const str = "abc"
// const num = 15
// const boolean = true
// const smth = null
// const lost = undefined
// const object = {}
// const arr = new Array(1,2,3)

// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof boolean)
// console.log(typeof smth)
// console.log(typeof lost)
// console.log(typeof object)
// console.log(typeof arr)


// function myFunc(){
//     return `My name is Ihor`
// }

// console.log(myFunc())

// const func = (yourName) => `Hello , ${yourName}`

// console.log(func('Bodya'))

/**
 * 
 * @param {number} a 
 * @param {number} b
 * @return {number} Difference between numbers 
 */
// function diff(a,b){
//     return a - b
// }

// console.log(diff(10,5))

// const testCallBack = setTimeout(() => console.log("Hello world!"), 5000)

// testCallBack

// const user = {
//     name: 'Ihor',
//     surname: 'Kasatkin',
//     favNum: 22
// }

// console.log(`My name is ${user.name} ${user.surname} and my favourite number is ${user.favNum}`)

// const abc = new String("abc")
// console.log(abc instanceof String)
// const Abc = abc
// console.log(Abc)

// const abcLength = abc.length
// console.log(abcLength)

// let str = "Good Morning"
// str = str.replace("Morning", "Evening")
// console.log(str)

// let arr = [1, "hehe", null]
// console.log(arr)
// arr[1] = "Not hehe!"
// console.log(arr)
// arr.forEach(el => console.log(el))
// arr.push(undefined)
// arr.push(false)
// console.log(arr.length)

// let date = new Date()
// console.log(date.getTime())

// let myVariable1 = 10
// let myVariable2 = '5'

// console.log(myVariable1 === myVariable2)
// myVariable1 = 20
// myVariable2 = Number.parseInt('100')
// console.log(myVariable1 <= myVariable2)

// const myNumber1 = 10
// const myNumber2 = 3
// console.log(myNumber1 % myNumber2)

// console.log(3 || (true && null) || falses)

// let arr = [1,2]
// arr.push(3)
// console.log(arr)
// arr = [1,2,3,4]
// console.log(arr)

// let myFavouriteAnimal = "Monkey"
// console.log(myFavouriteAnimal)
// myFavouriteAnimal = 'Cat'
// console.log(myFavouriteAnimal)

/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

// 'use strict'
// function myFunc(){
//     let a = 2
//     return a
// }

/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

// myFunc()

// const myFunc = setTimeout(() => console.log("Hello from myFunc"), 2000)
// myFunc

/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// let i = 1
// const messageInterval = setInterval(() => {
//     console.log(`Message number ${i}`)
//     i += 1
// }, 2000)

// setTimeout(() => clearInterval(messageInterval), 11000)



// for(let i = 1;i <= 5;i++){
//     setTimeout(() => console.log(`Message number ${i}`), 2000)
// }
////////////////////
// const myArray = [true,null]
// myArray[10] = "abc"
// console.log(myArray)
// console.log(myArray.length)
// myArray.unshift("Hello")
// myArray.unshift(100)
// console.log(myArray)

/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

// const car1 = {
//     carBrand: "BWM",
//     price:12000,
//     isAvailableForSale:true
// }
// const car2 = {
//     carBrand: "BWM",
//     price:13000,
//     isAvailableForSale:false
// }
// const car3 = {
//     carBrand: "BWM",
//     price:14000,
//     isAvailableForSale:true
// }

// const cars = [car1,car2,car3]
// console.log(cars)

/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

// const myObject = {
//     key1:true,
//     key5:10,
//     key3:'abc',
//     key4:null,
//     key10:NaN,
// }

// for(const key in myObject){
//     if(key === "key1" || key === "key3")
//     console.log(myObject[key])
// }

// const objectKeys = Object.keys(myObject)
// objectKeys.forEach(element => {
//     if(element === 'key1' || element === 'key3'){
//         console.log(myObject[element])
//     }
// });

/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

// function generateRandomIntegerInRange(MIN, MAX) {
//     return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
// }

// /**
//  * 
//  * @param {number} number 
//  * @param {Array} array 
//  */

// function existInArray(number, array){
//     for(let i = 0;i < array.length;i++){
//         if(number === array[i]){
//             return false
//         }
//     }
//     return true
// }

// const MIN = 1000
// const MAX = 9999

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

// let number = generateRandomIntegerInRange(MIN, MAX)

// console.log('Number >> ', number)

// let isInArray = existInArray(number, myNumbers)

// if(isInArray){
//     myNumbers.push(number)
// }

// console.log(myNumbers)

/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

// const myObject = {
//     name:'Mike',
//     age: 30,
//     city:'London'
// }

// Object.prototype.country = 'England'

// for(let key in myObject){
//     if(myObject.hasOwnProperty(key)){
//     console.log(myObject[key])   
//     }
// }

/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// /**
//  * @param {Array} inputArray
//  */

// const isEmpty = (inputArray) => {
//     const arrayLength = inputArray.length > 0 ? 'Not Empty' : 'Empty'
//     return arrayLength
// }
// console.log(isEmpty(new Array()))

/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

// /**
//  * @param {Array} array
//  */
// const cityInfo = (array, idx) => {
//     return `${array} is at the index ${idx} in the myCities array`
// }

// const myCities = ['London', 'New York', 'Singapore']
// for(let i = 0;i < myCities.length;i++){
//     console.log(cityInfo(myCities,i))
// }
// myCities.forEach((city, index) => console.log(cityInfo(city,index)))

/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

// const postJson = [
//     '{"postId":1355,"commentsQuantity":5}',
//     '{"postId":5131,"commentsQuantity":13}',
//     '{"postId":6134,"commentsQuantity":2}',
//     '{"postId":2351,"commentsQuantity":8}',
// ]



// const JsFiles = postJson.map((post) => JSON.parse(post))

// for(let i = 0;i < postJson.length;i++){
//     JsFiles[i] = JSON.parse(postJson[i])
// }
// console.log(JsFiles)
// console.log(JsFiles[1]["postId"])
// console.log(JsFiles[3]["commentsQuantity"])

// console.log(result)

/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

// /**
//  * @param {Number} ID
//  * @param {Array} postArray
//  *
//  */

// const findPostById = (ID, postArray) => {
//     console.log(ID)
//     for(let i = 0;i < postArray.length;i++){
//         if(ID === postArray[i]["postId"]){
//             return postArray[i]
//         }
//     }
//     return 'Undefined'
// } 
// const check = findPostById(1355, JsFiles)
// console.log(check)

/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

// /**
//  * 
//  * @param {Array} inputArray 
//  */
// const sortArray = (inputArray) => {
//     let ASC = false
//     let DESC = false
//     for(let i = 0;i < inputArray.length - 1;i++){
//         if(typeof inputArray[i] === 'string'){
//             return `This array contains String`
//         }
//         else if(ASC && DESC){
//             return `Unsorted Array`
//         }
//         else if(inputArray[i] <= inputArray[i+1]){
//             ASC = true
//         }
//         else if(inputArray[i] >= inputArray[i+1]){
//             DESC = true
//         }
//     }
//     return ASC ? `ASC` : `DESC`
// }

// const a = [5, 'abc', 10, 1]
// const b = [4, 10, 14, 25,25,50]
// const c = [150,132,80,40]
// const d = [15,26,13,23,85]

// console.log(sortArray(a))
// console.log(sortArray(b))
// console.log(sortArray(c))
// console.log(sortArray(d))

/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

// /**
//  * 
//  * @param {Array} firstArr 
//  * @param {Array} secondArr 
//  */
// const areArraysEqual = (firstArr, secondArr) => {
//     if(firstArr.length !== secondArr.length) return false
//     for(let i = 0;i < firstArr.length;i++){
//         if(firstArr[i] !== secondArr[i]){
//             return false
//         }
//     }
//     return true
// }

// const a = [1,2,3]
// const b = [1,2,3]
// console.log(a === b)
// const c = [2,1,3]
// const d = [1,2,3,4]
// console.log(areArraysEqual(a,b))
// console.log(areArraysEqual(a,c))
// console.log(areArraysEqual(a,d))

/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */
/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

// /**
//  * 
//  * @param {*} element 
//  * @param {Array} array 
//  * @returns 
//  */

// const isElementInArray = (element, array) => {
//     if(typeof element !== 'object'){
//         return array.includes(element) ? true : false
//     }
//     const transformatedArray = JSON.stringify(array)
//     return transformatedArray.includes(JSON.stringify(element))
// }

// const tags = [
//     ['javascript', 'es6'],
//     ['css', 'flexbox'],
//     ['html', 'web-browser'],
//   ]
  
//   const fruits = [
//     { title: 'Orange', quantity: 10 },
//     { title: 'Banana', quantity: 5 },
//     { title: 'Apple', quantity: 25 },
//   ]
  
//   const primitiveTypesArray = [25, 'x', true, undefined, null]
  
//   console.log(isElementInArray(['css', 'flexbox'], tags)) // true
  
//   console.log(isElementInArray(['flexbox', 'css'], tags)) // false
  
//   console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true
  
//   console.log(isElementInArray({ title: 'Banana' }, fruits)) // false
  
//   console.log(isElementInArray(25, primitiveTypesArray)) // true

/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

// const pushIfUnique = (inputArray, newEl) => {
//     if(inputArray.includes(newEl)){
//         return console.log(`Array contains element with name ${newEl}`)
//     }
//     return inputArray.push(newEl)
// }


// const myNumbers = [123, 50, 27]

// pushIfUnique(myNumbers, 50) // "50 уже в массиве"
// console.log(myNumbers) // [123, 50, 27]

// pushIfUnique(myNumbers, 80)
// console.log(myNumbers) // [123, 50, 27, 80]

// pushIfUnique(myNumbers, 80) // "80 уже в массиве"
// console.log(myNumbers) // [123, 50, 27, 80]

// pushIfUnique(myNumbers, 77)
// console.log(myNumbers) // [123, 50, 27, 80, 77]

/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

// const popularPostsIds = (posts, minimalCommentsQty) => {
//     return posts.reduce((postsId, post) => post.comments >= minimalCommentsQty ? postsId.concat([post.postId]) : postsId, [])
// }

// const inputPosts = [
//     {
//       title: 'Как быстро выучить JavaScript?',
//       postId: 3421,
//       comments: 25,
//     },
//     {
//       title: 'Где используется JavaScript?',
//       postId: 5216,
//       comments: 3,
//     },
//     {
//       title: 'Какая разница между React и Angular?',
//       postId: 8135,
//       comments: 12,
//     },
//   ]
  
//   console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]
  
//   console.log(popularPostsIds(inputPosts, 15)) // [3421]
  
//   console.log(popularPostsIds(inputPosts, 50)) // []

/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

// const quantitiesByCategories = (products) => {
//     return products.reduce((qtysByCategory, product) =>{
//         qtysByCategory[product.category] = (qtysByCategory[product.category] || 0) + product.quantity
//         return qtysByCategory
//     },{})
// }

// const inputProducts = [
//     {
//       title: 'Phone case',
//       price: 23,
//       quantity: 2,
//       category: 'Accessories',
//     },
//     {
//       title: 'Android phone',
//       price: 150,
//       quantity: 1,
//       category: 'Phones',
//     },
//     {
//       title: 'Headphones',
//       price: 78,
//       quantity: 1,
//       category: 'Accessories',
//     },
//     {
//       title: 'Sport Watch',
//       price: 55,
//       quantity: 2,
//       category: 'Watches',
//     },
//   ]
  
//   console.log(quantitiesByCategories(inputProducts))

/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

// /**
//  * @param {object} products
//  */
// const sortProductsByPrice = (products) => {
//     return [...products].sort((a,b) => a.price - b.price)
// }

// const inputProducts = [
//     {
//       title: 'Phone case',
//       price: 23,
//       quantity: 2,
//       category: 'Accessories',
//     },
//     {
//       title: 'Android phone',
//       price: 150,
//       quantity: 1,
//       category: 'Phones',
//     },
//     {
//       title: 'Headphones',
//       price: 78,
//       quantity: 1,
//       category: 'Accessories',
//     },
//     {
//       title: 'Sport Watch',
//       price: 55,
//       quantity: 2,
//       category: 'Watches',
//     },
//   ]
  
//   const sortedProducts = sortProductsByPrice(inputProducts)
  
//   console.log(sortedProducts) // Массив отсортированных товаров
  
//   console.log(inputProducts) // Оригинальный массив не должен измениться

/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// const templateLiteral = (num) => {return `Число ${num}.
// Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
// Квадратный корень этого числа - ${Math.sqrt(num)}.`
// }

// let myAnotherNumber = 9
// console.log(templateLiteral(myAnotherNumber))

// myAnotherNumber = 25
// console.log(templateLiteral(myAnotherNumber))

/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

// const meanScore = (...numbers) => {
//     if(numbers.some((num) => typeof num !== 'number')){
//         console.error("Все аргументы в вызове функции должны быть числами!")
//         return
//     }
//     return numbers.reduce((mean, num) => mean + num / numbers.length, 0).toFixed(2)
// }

// const scores1 = [0, 1.5, 2.5, 3.7]
// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
// const scores3 = [1.3, 2.5, 1.9]
// const scores4 = ['abc', 1.3, true, 2.5, 1.9]

// console.log(meanScore(...scores1))
// // 1.93

// console.log(meanScore(...scores1,...scores2))
// // 2.8

// console.log(
//   meanScore(...scores1,...scores2,...scores3)
// )
// // 2.59

// console.log(meanScore(...scores4))
// // Все аргументы в вызове функции должны быть числами!

/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */

// const weatherForecast = (city, weather = "Good weather") => {
//     return weather === '' ? `Прогноз погоды для города ${city}:` : `Прогноз погоды для города ${city}: ${weather}`
// }

// console.log(weatherForecast('Dubai', 'Солнечно'))
// // Прогноз погоды для города Dubai: Солнечно

// console.log(weatherForecast('London', 'Небольшой дождь'))
// // Прогноз погоды для города London: Небольшой дождь

// console.log(weatherForecast('Paris'))
// // Прогноз погоды для города Paris: Отличная погода!

// console.log(weatherForecast('Miami', ''))
// // Прогноз погоды для города Miami:

// console.log(weatherForecast('Las Vegas', undefined))
// // Прогноз погоды для города Las Vegas: Отличная погода!

/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, 
 * как и в конце этой задачи
 */

// const photosGallery = (title, dimensions, date) => {
//   return {
//     title,
//     [dimensions]: true,
//     date,
//     info(){
//       console.log(
//         `Фото ${title} имеет разрешение ${dimensions}`
//       );
//     },
//     publishInfo(){
//       console.log(
//         `Фото было опубликовано ${Math.floor(
//           (new Date().getTime() - date.getTime()) / 1000
//         )} секунды назад`
//       );
//   }
// }
// }

// const myDogPhoto = photosGallery(
//   "My dog",
//   "1920x1080",
//   new Date()
// )

// const testDimension1 = "1920x1080"
// const testDimension2 = "1080x720"

// myDogPhoto.info()
// /* Фото "My dog" имеет разрешение 1920x1080 */

// setTimeout(() => myDogPhoto.publishInfo(), 2000)
// /* Фото "My dog" было опубликовано 2 секунды назад */

// /* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
// к параметрам функции "photosGallery" (например "date")? */

// console.log(myDogPhoto[testDimension1]) // true
// console.log(myDogPhoto[testDimension2]) // undefined

/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

// const processQuantities = (inputQuantities) => {
//     const [minQty, maxQty, defaultQty = 0] = inputQuantities
//     console.log(minQty) // 8
//     console.log(maxQty) // 29
//     console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
//     return defaultQty + maxQty - minQty
//   }
  
//   const inputQuantities1 = [8, 29, 10]
//   console.log(processQuantities(inputQuantities1)) // 31
  
//   const inputQuantities2 = [8, 29]
//   console.log(processQuantities(inputQuantities2)) // 21

/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

// const minMax = (...a) => {
//     return [Math.min(...a), Math.max(...a)]
// }


// let min, max;
// /* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
// и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
// [min,max] = minMax(24, 5, 34, 10)
// console.log(min, max); // 5, 34
// [min,max] = minMax(18, 23, 103, 70, 80, 25)
// /* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
// console.log(min, max) // 18, 103

/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

// const personInfo = (person) => {
//     const {name, age: personAge, location: {country: origin, city:homeCity}, 
//     friendsQty = 0, createdAtYear = new Date().getFullYear()} = person
//     return {
//         name,
//         personAge,
//         origin,
//         homeCity,
//         friendsQty,
//         createdAtYear,
//     }
//   }
  
//   const person = {
//     name: 'Alice',
//     age: 19,
//     location: {
//       country: 'England',
//       city: 'London',
//     },
//   }
  
//   const result = personInfo(person)
  
//   console.log(result)
  /*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/

/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

// const processPosts = (posts) => {
//     return posts.map((post) => {
//     return {
//         postId: post.postId += 1000,
//         postAuthor: post.author,
//         postCommentsQty: post.commentsQty === undefined ? 0 : post.commentsQty
//     }
// })
// }

// const testPosts = [
//     {
//       postId: 234,
//       author: 'robd',
//       commentsQty: 5,
//     },
//     {
//       postId: 823,
//       author: 'sady',
//     },
//     {
//       postId: 161,
//       author: 'merryl',
//       commentsQty: 8,
//     },
//   ]
  
//   const processedPosts = processPosts(testPosts)
//   console.log(processedPosts)
  /*
  [
    {
      postId: 1234,
      postAuthor: 'robd',
      postCommentsQty: 5
    },
    {
      postId: 1823,
      postAuthor: 'sady',
      postCommentsQty: 0
    },
    {
      postId: 1161,
      postAuthor: 'merryl',
      postCommentsQty: 8
    }
  ]
  */
  
//   console.log(testPosts)
  // оригинальный массив должен остаться без изменений


/** ЗАДАЧА 58 - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

//   let person = {
//     _id: '5ad8cefcc0971792dacb3f1f',
//     index: 4,
//     processed: false,
//     cart: ['item1', 'item2', 'item3'],
//     email: 'slarsen@test.com',
//     name: 'Samanta Larsen',
//     cartId: 435,
//   }
  
//   const deleteObjAttributes = (person) => {
//     const {index, email, name, cartId} = person
//     return {
//         index, email, name, cartId
//     }
// }
// person = deleteObjAttributes(person)
//   console.log(person)

/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

// class ExtendedArray extends Array{
//     sum(){
//         return this.reduce((el, acc) => acc += el, 0)
//     }

//     onlyNumbers(){
//         return this.filter((num) => {
//             if(typeof num === 'number'){
//                 return num
//             }
//         }, [])
//     }
// }

// const extendedArray1 = new ExtendedArray(1,2,3)
// console.log(extendedArray1.sum())
// const extendedArray2 = new ExtendedArray(1,2,3,4,5)
// console.log(extendedArray2.sum())
// const extendedArray3 = new ExtendedArray(1,2,3,'abc','ccc')
// console.log(extendedArray3.onlyNumbers())

/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

// class CustomArray extends Array{
//   customPush(newElement){
//     this[this.length] = newElement 
//     console.log(`Element with name ${newElement} was added in Array`)
//   }
// }

// const array = new CustomArray("abc","Gogo","Cf")
// array.customPush("dede")
// console.log(array)

// array.push("dede")
// console.log(array)


/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

// const sumNumbers = (...args) => {
//   return args.reduce((total, currentValue) =>  total += currentValue, 0)
// }

// console.log(sumNumbers(1, 3))
// // 4

// console.log(sumNumbers(10, 20, 5))
// // 35

// console.log(sumNumbers(2, 5, 80, 1, 10, 12))
// 110

/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// //Can run before it's declaration
// console.log(firstFunction(2,3))

// function firstFunction(a, b) {
//   return a + b
// }
// //Assigning new value
// firstFunction = '123'
// console.log(123)

// const secondFunction = function (a, b) {
//   return a + b
// }

/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

// const b = 2
// let d = 15

// function myFn1(a = 0) {
//   let b
//   let d = 10
//   myFn2(b)
// }

// function myFn2(a) {
//   let c = 5
//   console.log(a, b, c, d)
// }

// myFn1()

/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

// function isNumber(a) {
//   return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
// }

// console.log(isNumber(10))
// // 10 - это число

// console.log(isNumber('Привет'))
// // Привет - это не число

// console.log(isNumber(true))
// true - это не число

/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

// const mult = (a, b) => a * b

// setTimeout(function () {
//   console.log(mult(5, 10))
// }, 1000)
// 50

/** ЗАДАЧА 67 - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */

// function multiplyBy(a, mult = 2) {
//   mult = mult !== undefined ? mult : 2
//   console.log(a * mult)
// }

// multiplyBy(2)
// // 4

// multiplyBy(2, undefined)
// // 4

// multiplyBy(2, 0)
// // 0

// multiplyBy(5, 10)
// // 50

/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

// function square(a) {
//   if(arguments.length === 0){
//     throw new Error('Give me argument a')
//   }
//   return typeof a === 'undefined' ? console.log('Unknown arg')  : console.log(a * a)
// }

// square(10)
// // 100

// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

// const objectWithNumbers = {
//   x: 5,
//   y: 20,
//   z: 3,
// }

// const mult = (obj) => {
//   const {x,y,z} = obj
//   return x * y * z
// }
// // Создайте функцию здесь

// const result = mult(objectWithNumbers)
// console.log(result)

/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */

// const arr = [1, 2, 3, 4, 5, 6, 7]

// // Напишите код здесь
// const [ a, b, ...c] = arr

// console.log(a)
// // 1

// console.log(b)
// // 2

// console.log(c)
// // [3, 4, 5, 6, 7]

/** ЗАДАЧА 71 - Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */

// const a = [1, 2]
// const b = [4, 5]
// const c = [8, 9, 10]
// const d = 11

// const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]
// // Напишите код здесь

// console.log(combinedArray)
// // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

// const a = [1, 2, 3]

// // Напишите код здесь
// // const b = JSON.parse(JSON.stringify(a))
// const b = Array.from(a)
// // const b = Object.assign([], a)
// // const b = [...a]

// b.push('newElement')

// console.log(a)
// // [1, 2, 3]

// console.log(b)
// // [1, 2, 3, "newElement"]

/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

// const cars = [
//   { brand: 'Honda', price: 13000 },
//   { brand: 'Rolls-Royce', price: 120000 },
// ]

// const carInfo = (car) => {
//   return car.price <= 20_000 ? `Price on car ${car.brand} - ${car.price} and it's cheap` : `Price on car ${car.brand} - ${car.price} and it's expensive`
// }
// // Создайте функцию "carInfo" здесь

// cars.forEach((car) => console.log(carInfo(car)))
// // Цена автомобиля Honda - 13000$ и это дешёвая машина
// // Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина

/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

// const person1 = {
//   name: 'Mike',
//   info: {
//     country: 'Spain',
//     age: 23,
//   },
//   postsQuantity: 100,
// }

// const person2 = {
//   name: 'Alice',
//   info: {
//     country: 'Italy',
//     age: 25,
//   },
// }

// const shortPerson = (person) => {
//   const {name: n, info: {country:c, age: a}, postsQuantity: p = 0} = person
//   return {
//     n,c,a,p
//   }
// }
// // Напишите функцию "shortPerson" здесь

// console.log(shortPerson(person1))
// // { n: "Mike", c: "Spain", a: 23, p: 100 }

// console.log(shortPerson(person2))
// // { n: "Alice", c: "Italy", a: 25, p: 0 }


/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

// let vowelsCount = 0
// const vowels = ['a', 'e', 'i', 'o', 'u']

// const str = 'Today is the best day of my life'

// // Напишите код здесь
// for(let i = 0; i < str.length;i++){
//   for(let j = 0; j < vowels.length;j++){
//     if(str.charAt(i) == vowels[j]){
//       vowelsCount += 1
//     }
//   }
// }

// // for(const c of str){
// //   if(vowels.includes(c)){
// //     vowelsCount++
// //   }
// // }

// console.log(vowelsCount)

/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

// let a = 'first'
// let b = 'second'

// console.log(a, b);
// // first second

// // Напишите код здесь
// // let c = a
// // a = b
// // b = c
// [b,a] = [a,b]
// console.log(a, b)
// // second first


/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */

// const createGreeting = () => {
//   let greetingString = "Hey, this is"

//   const greet = (personName) => {
//     return `${greetingString} ${personName}`
//   }

//   const changeGreeting = (anotherGreeting) => {
//     greetingString = anotherGreeting
//   }

//   return {greet, changeGreeting}

// }

// const greeting1 = createGreeting()

// console.log(greeting1.greet('Bob'))
// // Hey, this is Bob

// greeting1.changeGreeting('Good Morning from')

// console.log(greeting1.greet('Emily'))
// // Good Morning from Emily

// /* ____________  */

// const greeting2 = createGreeting()

// console.log(greeting2.greet('Emily'))
// // Hey, this is Emily

/** ЗАДАЧА 78 - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */

// class Fruit{
//   constructor(title, price){
//     this.title = title
//     this.price = price
//   }
//   priceInfo(){
//     return `Price of the ${this.title} is ${this.price}$`
//   }
// }

// const apple = new Fruit('Apple', 2)
// console.log(apple.priceInfo())
// // Price of the Apple is 2$

// const orange = new Fruit('Orange', 3)
// console.log(orange.priceInfo())
// // Price of the Orange is 3$


/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// const sumObjectValues = (obj) => {
//   let sum = 0
//   Object.keys(obj).forEach((key) => {
//     if(obj.hasOwnProperty(key) && typeof obj[key] === 'number'){
//       sum += obj[key]
//     }
//   })
//   // let sum = 0;
//   // for(let key in obj){
//   //   if(obj.hasOwnProperty(key) && typeof obj[key] === 'number'){
//   //     sum += obj[key]
//   //   }
//   // }
//   return sum
// }
// // Создайте функцию здесь

// const result = sumObjectValues(objectWithNumbers)
// console.log(result)
// //42



/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

// const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// // Создайте функцию "sumPositiveNegative" здесь

// function sumPositiveNegative(arr) {
//   return arr.reduce(
//     (sums, num) => {
//       if (num > 0) {
//         return {
//           ...sums,
//           positive: sums.positive + num,
//         }
//       }

//       return {
//         ...sums,
//         negative: sums.negative + num,
//       }
//     },
//     { positive: 0, negative: 0 }
//   )
// }

// const result = sumPositiveNegative(nums)

// console.log(result)
// // { positive: 74, negative: -54 }