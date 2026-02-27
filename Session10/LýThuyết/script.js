let arr = []; // Thông qua index
console.log(typeof arr);
// Array : (element : index)

// Object : Thuộc tính (key : value)
// Key - tên thuộc tính
// Value - Gía trị thuộc tính

// khởi tạo Object
let person = {};
let personV2 = { id: 0, fullName: "Đạt bé bỏng", age: 18, sex: "male" };
console.log(personV2);

// CRUD : Create - Read - Update - Delete

// Read
console.log("Tên của bạn là:", personV2.fullName);

// Dot notation và Bracket notation

// update
personV2.age = 20;

// delete
delete personV2.sex;

// Array of Object
const players = [
  { id: 1, name: "khanhhoang", age: 18, cute: 1 },
  { id: 2, name: "ponpon", age: 19, cute: 10 },
];
// In ra màn hình các cầu thủ cute 10
let listpPlayer = players.filter((players) => {
  return players.cute == 10;
});
listpPlayer.forEach((player) => {
  console.log(`${player.name} - ${player.cute}`);
});

// Object lồng
let personMax = {
  id: 1,
  fullNam: { firstName: "Khánh", lastName: "Vũ" },
};

// Duyệt qua Object
console.log(Object.keys(personV2));
console.log(Object.values(personV2));
console.log(Object.entries(personV2));
