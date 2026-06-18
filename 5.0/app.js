//hàm có gtri trả về (có return)
function tinhDtichHCN(width, height){
    return width * height
}
//gtri trả về từ hàm có thể đc gán vào biến hoặc sử dụng trong các biểu thức khác
let area = tinhDtichHCN(5,10)
console.log(`Dtich HCN: ${area}`)

//hàm k có gtri trả về (k có return)

// function sayHello(){
//     console.log('hello world')
// }
// sayHello()

//hàm ẩn danh
// const sayHello = function() {
//     console.log('xin chao')
// };
// sayHello()

//hàm mũi tên
const sayHello = () => {
    console.log('xin chao')
}
sayHello()


//lắng nghe skien gửi form với addEventListner
// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault()    //ngăn trình duyệt tải lại trang khi gửi form
// })

//lấy dữ liệu từ form
// const name = document.getElementById('username').value
// const age = document.getElementById('age').value

// console.log('Tên',name)
// console.log(`Tuổi: ${age}`)

//hiển thị dữ liệu trên treng web
document
 .getElementById('userForm')
 .addEventListener('submit',function(event){
    event.preventDefault()
    const name = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    //lưu trữ dữ liệu vào localStorage
    localStorage.setItem("username",name)
    localStorage.setItem("age",age)

    //lấy dữ liệu từ localStorage
    let username = localStorage.getItem("username")
    console.log(username)

    //xóa dữ liệu từ localStorage
    //xóa 1 mục cụ thể
    ///localStorage.removeItem('username')
    //xoa toan bo du lieu
    ///localStorage.clear()
    document.body.innerHTML += `<p>Chào ${name} tuổi ${age}! </p>`
 })