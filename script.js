// // function switchItUp(number){
// //     if (number===0){
// //         return 'zero'
// //     }
// //     else if (number===1){
// //         return 'one'
// //     }
// //     else if (number===2){
// //         return 'two'
// //     }
// //     else if (number===3){
// //         return 'three'
// //     }
// //     else if (number===4){
// //         return 'four'
// //     }
// //     else if (number===5){
// //         return 'five'
// //     }
// //     else if (number===6){
// //         return 'six'
// //     }
// //     else if (number===7){
// //         return 'seven'
// //     }
// //     else if (number===8){
// //         return 'eight'
// //     }
// //     else if (number===9){
// //         return 'nine'
// //     }
// //     else if (number===10){
// //         return 'ten'
// //     }
// // }
// // console.log(switchItUp(5))
//
// // function repeatStr (n,s) {
// //     return s.repeat(n)
// // }
// // console.log(repeatStr(5,'m'))
//
// //? function solution1(str){
// //     return str.split("").reverse().join("")
// // }
// // console.log(solution1('hello'))
// //? function solution2(str){
// //     return [...str].reverse().join("")
// // }
// // console.log(solution2('hello'))
//
//
// // greet = (nba) => 'hello world!'
//
//
// // const nba = (k,l) =>{
// //     return k/l
// // }
// // console.log(nba(6,3,))
//
//
// // 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// // const obj = {a: 1, b: 2, c: 3}
// // console.log(Object.keys(obj).length)
//
// // 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами:
// // через квадратные скобки и как свойство объекта.
// // const obj = {a: 1, b: 2, c: 3}
// // console.log(obj.c)
// // console.log(obj['c'])
//
// // 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран
// // зарплату Атая и Ширин.
// // const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// // console.log(obj.Атай, obj.Ширин)
//
// // 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// // Измените зарплату Атая на 500.
// // const obj = {
// //     Ширин: '1000',
// //     Айжан:'500',
// //     Атай: '200'
// // }
// // obj.Атай = 500
// // console.log(obj)
//
//
// // 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// // Добавьте к объекту ключ Медет со значением 1500.
// // const obj = {
// //     Ширин: '1000',
// //     Айжан:'500',
// //     Атай: '200'
// // }
// // obj.Медет = 1500
// // console.log(obj)
//
// // 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// // Выведите значение ключа salary в консоль.
// // const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// // console.log(obj.Атай.salary)
//
// // 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// // (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// // const obj = {
// //     1: 'monday',
// //     2: 'вторник',
// //     3: 'среда',
// //     4: 'четверг',
// //     5: 'пятница',
// //     6: 'суббота'
// // }
// // console.log(obj["4"])
//
//
// // 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите
// // день недели, соответствующий значению переменной day.
// // let day = 2
// // const obj = {
// //     1: 'monday',
// //      2: 'вторник',
// //      3: 'среда',
// // }
// // console.log(obj["day"])
//
// // 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// // Получите все ключи объекта.
// // const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// // console.log(Object.keys(obj))
//
// //     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// //     Получите все значения объекта.
// // const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// // console.log(Object.values(obj))
//
// //         11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// //         Выведите все entries объекта.
// // const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// // console.log(Object.entries(obj))
//
// //             12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// //             Выведите 1, если длина ключа name нечетная, 0 если четная.
// // function task12 (obj)  {
// //     if (Object.keys(obj).length % 2 === 0) {
// //         console.log("1")
// //     } else {
// //         console.log("0")
// //     }
// //     // return obj
// // }
// //
// // console.log(task12({name: 'Igor', age: 2}))
//
// // 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
// // Выведите все id в консоль через map.
// // function task13 (array) {
// //     return array.map((el) => {
// //         return el.id
// //     })
// // }
// // const obj = [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]
// // console.log(task13(obj))
//
//
// // 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25.
// // Поменяйте значение name на Azat.
// // const obj = {
// //     name: "Igor",
// // }
// // obj.name = "Azat"
// // delete obj.name
// // obj.age = "25"
// // console.log(obj)
//
//
// //! Вам дана функция которая принимает два массива с примитивными элементами (не объекты),
// // при помощи методов массива необходимо проверить являются ли эти два массива идентичными и вернуть true если
// // да и false если нет.
// // Примечание: массивы могут быть разной длины. Элементы в массиве относятся к примитивным типам данных
// // Пример:
// // [1, true, "hello", null, 255] и [1, true, "hello", null, 255] являются идентичными и функция вернет true.
// // [1, true, "hell", undefined, 255] и [1, false, 344, null, 255] не являются идентичными и функция вернет false;
// // [1, 344, true, null] и [1, 344, true] также не являются идентичными
// // const checkTask = (firstArray, secondArray) => {
// // }
// // checkTask( [1, true, "hell", undefined, 255],[1, false, 344, null, 255])
//
//
// // function checkTask(arr, a){
// //     let res = arr.filter((el)=> )
// // }
// //
// // console.log(checkTask([1, true, "hell", undefined, 255],[1, false, 344, null, 255]))
//
// // const checkTask = (arr, secondArr) => {
// //    let i1 = secondArr.filter(el => typeof el).length
// //     let i2 = arr.filter(el => typeof el).length
// //     if (i2 === i1){
// //         return true
// //     }else{
// //      return false
// //     }
// // }
// // console.log(checkTask( [1, false, 344, undefined, "255"],[1, true, "hell", null, 255]))
//
//
// // TASK 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //? Вам дана функция checkTask(arr) которая принимает в аргументы массив - arr,
// // при помощи метода filter необходимо убрать все значения которые возвращают false.
// // Пример: есть массив: [15, "hello", 0, false, {name: "Askat"}, null], функция должна вернуть массив [15, "hello", {name: "Askat"}]
// // const checkTask = (arr) => {}
// // checkTask([15, 'hello', 0, false, { name: 'Askat' }, null]);
//
// // const checkTask = (arr) => {
// //     return arr.filter(el => {
// //         if (el !== typeof false){
// //             return el
// //         }
// //     })
// // }
// // console.log(checkTask([15, 'hello', 0, false, { name: 'Askat' }, null]))
//
//
// //? Дана функция checkTask(arr) которая принимает массив c числами.
// // При помощи метода reduce необходимо вернуть новый массив без дубликатов.
// // Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]=
// // let numbers = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// // const checkTask = (arr) => {
// //     return arr.reduce((acc, el, idx) => {
// //         if (arr.indexOf(el) === idx) {
// //             return acc.concat(el)
// //         } else{
// //             return acc
// //         }
// //     }, [])
// // }
// // console.log(checkTask([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]))
//
//
// //? Дана функция checkTask(arr) которая принимает массив с предложениями.
// // Необходимо вернуть новый массив с количеством слов в каждом предложении.
// // Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//
// // function checkTask(arr){
// //     return  arr.map(el => {
// //         return el.split(" ").length
// //     })
// // }
// // console.log(checkTask(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
//
//
// //? Вам дана функция checkTask(arr) которая принимает в аргументы массив и строку - target. Использую метод
// // массива filter, необходимо из массива удалить элемент идентичный с target.
// // Пример: [1, 'hello', 23, true], target - 'hello'; Результат: [1, 23, true];
// // function  checkTask(arr){
// //     let target = "hello"
// //     return arr.filter(el => {
// //         if (el !== target){
// //             return el
// //         }
// //     })
// // }
// // console.log(checkTask([1, 'hello', 23, true]))
//
//
// //? Есть функция checkTask(arr, a, b) которая принимает в аргументы массив из чисел, начальное число и конечное число.
// // При помоши метода filter необходимо вернуть новый массив в котором будут числа в диапазоне от числа a до
// // числа b включительно.
// // Пример:
// // [1,12,45,3,27,344,122,205], a = 22, b = 200. Результат: [45, 27, 122];
//
// // const checkTask = (arr, a, b) => {
// //     return arr.filter(el => {
// //         if (el > a && el < b){
// //             return el
// //         }
// //     })
// // }
// // console.log(checkTask([1,12,45,3,27,344,122,205],22,200))
//
//
// //? const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// // const pac = data.reduce((acc, el) => {
// //     return acc.concat(el)
// // }, [])
// // console.log(pac)
// //
// // function task(arr){
// //     let num = 0
// //    arr = arr.reduce((acc, el) => {
// //      if (el === 0){
// //          return num = acc
// //      }else {
// //          return acc + el
// //      }
// //     })
// //     console.log(num)
// // }
// //
// // task([54,75,55,0,57,48,54,84])
//
// // Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// // а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// // Например: ввод - 'hello', функция должна возвратить 'HLL'
//
// // function task2(str){
// //     let fil = ["a,y,u,i,o,e"]
// //
// // }
// // task2("raatbek")
// // function task(str){
// //
// // }
// // task()
//


// function check(str){
//     let arr = str.toUpperCase().split("")
//     let res = ''
//     for(let i of arr){
//         if(i !== "A" && i !== 'Y' && i !== "U" && i !== "I" && i!== "O" && i !== "E"){
//             res+= i
//         }
//     }
//     console.log(res)
// }
// check("raatbek")


// // function peopleWithAgeDrink(old) {
// //  if (old < 14){
// //      return "drink toddy"
// //  }else if (old > 14 && old < 18){
// //      return "drink coke"
// //  }else if (old > 18 && old < 21){
// //      return "drink beer"
// //  }else if (old > 21){
// //      return "drink whisky"
// //  }
// }
//
// // Дети до 14 лет.
// //     Подростки до 18 лет.
// //     Молодые до 21 года.
// //     У взрослых 21 и более.
//
//
