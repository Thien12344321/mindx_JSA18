// cú pháp để khai báo 1 array
// cách 1 []
let emptyArray = [];
let number = [1,2,3,4,5];
let fruits = ['apple','banana','cherry'];
let mixedArray = [1,'apple',true,null];

//cách 2 : dùng newArray() - ít dùng vì có thể gây nhầm lẫn khi chỉ có 1 gtri
let arr = new Array(1,2,3,4,5,6)

//In ra phần tử ở vtri số 2 trog mảng
console.log(mixedArray[1])

//cập nhật gtri
fruits[2] = "mango"
console.log(fruits[2])

fruits.push("cherry")
console.log(fruits)

fruits.splice(1,1,"blueberry",'orange')
console.log(fruits)

//duyệt danh sách - đi từng vtri bên trog danh sách vs vòng lặp 
//vòng lặp for
for(let i = 0; i < mixedArray.length; i++){
    console.log(mixedArray[i]);
}


//khai báo đtg trog js
let person = {
    name: 'john',
    age: 30,
    job:'manager',
}

//truy cập thuộc trog đtg
console.log(person.name)
console.log(person['age'])
//cap nhat thuoc tinh
person.name = 'gia  thien '
person['job'] = 'designer'
console.log(person)

//xoa thuoc tinh 
delete person.age
console.log(person)