let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];
let choice;
const displayMenu = () => {
  choice = +prompt(`--- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát`);
};
const viewSquad = () => {
  console.log("danh sách đội bóng");
  squad.forEach((player) => {
    console.log(
      `Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`,
    );
  });
};
const addPlayer = () => {
  let name = prompt("Nhập tên:");
  let goals = Number(prompt("Nhập số bàn:"));
  let position = prompt("Nhập vị trí:");
  let newPlayer = {
    id: squad.length + 1,
    name: name,
    goals: goals,
    position: position,
  };
  squad.push(newPlayer);
  console.log("Đã thêm thành công.");
};
do {
  displayMenu();
  switch (choice) {
    case 1:
      viewSquad();
      break;
    case 2:
      addPlayer();
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    default:
      break;
  }
} while (choice !== 0);
