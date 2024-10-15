// Задание 1: Создание и работа с объектами
// Инструкция: Создайте объект user с полями name, age, и email. Заполните его значениями. Затем,
// используя объект, выведите информацию о пользователе в формате:
// "Имя: [name]"
// "Возраст: [age]"
// "Email: [email]"
let user = {
 name: "John Doe",
 age: 25,
 email: "john.doe@example.com",
};
// // Выведите информацию о пользователе здесь

console.log(`Имя: [${user["name"]}]`);
console.log(`Имя: [${user.age}]`);
console.log(`Имя: [${user.email}]`);


// Задание 2: Обновление свойств объекта
// Инструкция: Измените значение свойства age у объекта user на 30 и добавьте новое свойство
// isAdmin со значением true. Выведите обновленный объект.
let user1 = {
 name: "John Doe",
 age: 25,
 email: "john.doe@example.com",
};
// // Обновите объект здесь
user1.age = 30;
user1.isAdmin = true;
console.log(user1);

// Задание 3: Удаление свойства из объекта
// Инструкция: Удалите свойство email из объекта user, а затем проверьте, что оно действительно
// удалено, выведя объект в консоль.
let user2 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
// // Удалите свойство здесь
delete user2.email;
console.log(user2);

// Задание 4: Преобразование объекта
// Инструкция: Напишите функцию transformUser, которая принимает объект user и возвращает новый
// объект, содержащий только name и email, при этом name должно быть преобразовано в верхний
// регистр.
function transformUser(userTransform) {
 // Реализуйте преобразование здесь
 return {
    name: userTransform.name.toUpperCase(), // Преобразуем имя в верхний регистр
    email: userTransform.email              // Сохраняем email без изменений
    };
 }; // Возвращайте новый объект

let user3 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let transformedUser = transformUser(user3);
console.log(transformedUser); // Ожидаемый результат: { name: "JOHN DOE", email: "john.doe@example.com" }



// Задание 5: Копирование объектов
// Инструкция: Используя оператор "spread" (...), создайте копию объекта user и измените в копии
// значение name на "Jane Doe". Оригинальный объект не должен измениться.
let user4 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
// Создайте копию и измените свойство name здесь

let userCopy = {...user4};
userCopy.name = "Jane Doe";
console.log(user4); // Оригинальный объект
console.log(userCopy); // Измененная копия

// Задание 6: Преобразование объекта по условию
// Инструкция: Напишите функцию filterProperties, которая принимает объект и массив строк
// (названия свойств). Функция должна возвращать новый объект, содержащий только те свойства,
// которые указаны в массиве.
function filterProperties(obj, keys) {
    // Реализуйте фильтрацию здесь
 
    // Создаем новый объект для хранения отфильтрованных свойств
    const filteredObj = {};
   // Проходим по массиву ключей
    keys.forEach(key => {
        // Проверяем, существует ли свойство в исходном объекте
        if (key in obj) {
            // Если существует, добавляем его в новый объект
            filteredObj[key] = obj[key];
        }
    });
    
    return filteredObj; // Возвращаем новый объект с отфильтрованными свойствами
}

   let user6 = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let filteredUser = filterProperties(user6, ["name", "email"]);
   console.log(filteredUser); // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com" }



// Задание 7: Изменение структуры данных объекта
// Инструкция: Напишите функцию convertUser, которая принимает объект user и возвращает новый
// объект, где свойства name и age заменены на одно свойство profile, содержащее эти данные.
 function convertUser(userConvert) {
  return {
    profile: { // Создаем новое свойство profile
        name: userConvert.name, // Сохраняем имя
        age: userConvert.age    // Сохраняем возраст
    },
    email: userConvert.email, // Сохраняем email без изменений
    isAdmin: userConvert.isAdmin // Сохраняем статус администратора

 }; // Возвращайте новый объект
}
let user7 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let convertedUser = convertUser(user7);
   
console.log(convertedUser);
// Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email: "john.doe@example.com", isAdmin: true }



// Задание 8: Объединение объектов
// Инструкция: Используя метод Object.assign, объедините два объекта user и details, чтобы
// получить один объединенный объект.
let user8 = {
 name: "John Doe",
 email: "john.doe@example.com",
};
let details = {
    age: 30,
    isAdmin: true,
   };
// Объедините объекты здесь
let mergedUser = Object.assign({}, user8, details);
console.log(mergedUser);
// Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true }



//    Задание 9: Динамическое создание свойств
//    Инструкция: Создайте объект product и добавьте в него свойства name, price и category, используя
//    динамические ключи, которые задаются переменными.
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {}; // Создайте объект и добавьте свойства динамически
product[key1] = "Laptop";
product[key2] = 1500;
product[key3] = "Electronics";
console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }
