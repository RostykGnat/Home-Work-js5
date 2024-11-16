// ---1---
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// const student = {
//   name: "",
//   specialty: "",
//   averageGrade: 0,
//   missedClasses: 0,
//   showInfo: function () {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.specialty}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${this.missedClasses}`);
//   },
// };
// const student1 = {
//   name: "Андрій",
//   specialty: "Фізична культура",
//   averageGrade: 4.5,
//   missedClasses: 5,
// };

// const student2 = {
//   name: "Маша",
//   specialty: "Економіка",
//   averageGrade: 4.8,
//   missedClasses: 0,
// };

// const student3 = {
//   name: "Олена",
//   specialty: "Філософія",
//   averageGrade: 3.9,
//   missedClasses: 5,
// };
// student.showInfo.call(student1);
// student.showInfo.apply(student2);
// const showStudent3Info = student.showInfo.bind(student3);
// showStudent3Info();

// ---2---
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
// function showHtmlDefinition() {
//   output.textContent =
//     "HTML (HyperText Markup Language) — мова розмітки що використовують для створення веб-сторінок.";
// }
// function showCssDefinition() {
//   output.textContent =
//     "CSS (Cascading Style Sheets) — мова стилів яку використовують для оформлення веб-сторінок.";
// }
//--- 3-- -
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// function shop(itemName, pricePerKg, quantity) {
//   const totalCost = pricePerKg * quantity;
//   return `товар: ${itemName}, варртість: ${totalCost.toFixed(2)} грн.`;
// }
// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("jrange", 89, 3.4));
