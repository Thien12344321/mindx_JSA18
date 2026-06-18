let x = 10; //toán tử gán
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log( x / y);
console.log(x % y);
console.log( x ** y);

// toán tử gán cộng
let number = 5;
number += 8  //number = number + 8
console.log(number)




let a = true
let b = false
console.log( a && b);
console.log(a && true);

console.log(a||b);
console.log(b || false)

console.log(!a)

//cau dkien
let age =18;
if(age >= 18) {
    console.log("bạn đã đủ tuổi để lái xe")
}

let temparature = 25
if(temparature > 30){
    console.log("troi nong")
} else {
    console.log("thoi tiet bthg")
}

let score = 85;
if(score >= 90) {
    console.log("ban dat loai A")
} else if(score >=80) {
    console.log("B do")
} else{
    console.log("can co gang hon")
}

// for( i = 1; i<=100; i++){
//     console.log(i);
// }

let i = 1
do{
    console.log("mindx")
    i ++;
}while( i <= 100 );

let day = 3;
switch(day) {
    case 2: 
        console.log("t2");
    break;
    case 3:
        console.log("t3");
        break;
    case 4:
        console.log("t4");
        break;
    default:
        console.log("ko hop le")
}

//vong lap ngược
for(let i =10 ; i >= 1; i--){
    console.log(i)
}

let count = 0;
while(true) {
    console.log(count);
    count ++;
    if (count === 5) break;
}

for(let i = 1; i <= 10; i++){
    if (i ==5) continue; //bỏ qua lần lặp này
    console.log(i)
}