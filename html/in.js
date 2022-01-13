// HW1
// Hàm sau đây trả về true nếu tuổi tham số lớn hơn 18.
// Nếu không, nó sẽ yêu cầu xác nhận và trả về kết quả của nó.
// Viết lại nó, để thực hiện tương tự, nhưng không có if, trong một dòng duy nhất.
// Tạo hai biến thể sau:
// Sử dụng một toán tử dấu chấm hỏi ?
// Sử dụng OR ||
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
//* let age = Number(prompt("Nhập tuổi: "));
//* const check = (age > 18) ? true : `Did parents allow you?`;
//* console.log(check);

//* let age = Number(prompt("Nhập tuổi: "));
//* function check(age){
//*  let check = age > 18 || confirm('Did parents allow you?');
//*  return check;
//*}
//*console.log(check(age));


// HW2
// Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b.
/**
** let a = Number(prompt("Nhập số a: "));
** let b = Number(prompt("Nhập số b: "));
** function MIN(a, b){
** console.log(`Giá trị nhỏ nhất là: ${Math.min(a,b)}`);
** }
** MIN(a,b);
 */

/**
 **  let a = Number(prompt("Nhập số a: "));
 **  let b = Number(prompt("Nhập số b: "));
 ** function MIN(a, b){
 **    let  min = (a < b) ? a : b;
 **    return min;
** }
**console.log(`Số bé nhất là: ${MIN(a,b)}`);
 */

// HW3
// Thay thế Biểu thức hàm bằng các hàm mũi tên trong đoạn code dưới đây:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Do you agree?",
//   function(yes) { alert("You agreed."); },
//   function(no) { alert("You canceled the execution."); }
// );

/**
 * 
**  const ask = (question, yes, no) => {
**  if (confirm(question)) yes()
** else no();
**}
**ask(
**  "Do you agree?",
**  (yes) => { alert("You agreed."); },
**  (no) => { alert("You canceled the execution."); }
**);
  
 */

  

// HW4
// Viết code yêu cầu đăng nhập với prompt.
// Nếu khách truy cập nhập “Admin“, sau đó nhắc nhập mật khẩu, nếu đầu vào là một dòng trống hoặc Esc – hiển thị , nếu là một chuỗi khác – thì hiển thị “”.
// Mật khẩu được kiểm tra như sau:
// Nếu nó bằng “cafedev”, thì hãy hiển thị “Chào mừng!”,
// Một chuỗi khác – hiển thị “Mật khẩu sai”,
// Đối với một chuỗi trống hoặc đầu vào đã hủy, hãy hiển thị “Đã hủy”
 

// let userName = prompt("Tên đăng nhập: ");
// if(userName === "admin"){
//     true;
// } else if( userName === " " || userName === null ){
//     alert("Canceled");
// } else{
//     alert("Error!");
// }
// switch(userName){
//     case 'admin' :{
//     let passWord = prompt("Nhập mật khẩu: ");
//     if(passWord === "cafedev"){
//         alert("Welcome!");
//     } else if (passWord === " " || passWord === null){
//         alert("Canceled");
//     } else{
//         alert("Error!");
//     }
//         break;
//     } 
//     case '':
//     case null:{
//         alert("Canceled");
//         break;
//     }
//     default:{
//         alert("Error!");
//         break;
//     }
// }

let a = 5 + '15' ;
console.log (a);