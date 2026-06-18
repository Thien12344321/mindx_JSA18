//thay đổi nội dung ptu
document.getElementById('message').textContent= 'ban da thay doi noi dung'

//thay đổi kiểu dáng (css của ptu)
document.getElementById('text').style.color = 'red';
document.getElementById('text').style.fontSize = "20px";

let access = document.getElementById('code9');
let code = access.innerHTML; //lấy nội dung bên trog html

code = code + 'midnight';
alert(code)
access.innerHTML = code

let car = {
    name : 'lamborgini',
    model : 'Revuelto',
    year : '2019'
}
console.log(Object.values(car))