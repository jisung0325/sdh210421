console.log("Hello World!")

let a = 10;
console.log(`a의 값은 ${a} 입니다.`);

let arr = [];  //배열 선언
arr.push(1)   //배열에 값 넣기
arr.push("asdf")

console.log('arr: ${arr}');

let arr = [1,2,3,4,5];
console.log(arr);

let person = {};
person.name = "주지성";
person.age = "17";
console.log(person);

let person = {
    name: "주지성",
    age: "17"

};

console.log(person);

let a = 1;
let b = "1";

if(a ==b ){     
    console.log('a와 b는 같다');  
}

if(a === b) {
    console.log('a와 b는 값과 타입이 같다');

}

let arr = [1,2,3,4,5];

for( let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

let arr = [1,2,3,4,5];

for( let i in arr) { //간소화
   console.log(arr[i]);
}
