/**
 * const, let
 */

// var val1 = "variable1";
// console.log(val1);

// // var は上書きできる
// val1 = "variable over write";
// console.log(val1);

// // var再宣言可能
// var val1 = "var redefinition";
// console.log(val1);

// let val2 = "letvariable";
// console.log(val2);

// // letは上書きできる
// val2 = "let overwrite";
// console.log(val2);

// var再宣言不可能
// let val2 = "let redefinition";

// const val3 = "const variable";
// console.log(val3);

// val3 = "const overwrite";
// const val3 = "const redefinition";

// Object定義はconstだけ。constで定義したObjectはpropatyの変更が可能
// const val4 = {
//   name: "hoge",
//   age: "28"
// };
// val4.name = "fuga";
// val4.address = "Hiroshima";
// console.log(val4);

// // 中身変更、追加もできる
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("deer");
// console.log(val5);

/**
 * Template文字列（文字列の中にjavascripotの変数を埋め込める様になった
 */

// const name = "hoge";
// const age = 28;

// // previous mehtod
// const message1 = "My name is " + name + ". Age is " + age + ".";
// console.log(message1);

// // Template文字列
// const message2 = `My name is ${name}. My age is ${age}`;
// console.log(message2);

/**
 * アロー関数
 */

// previous method
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // これでもOK
// const func2 = (str) => str;
// console.log(func2("func2"));

// // sample
// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(4, 3));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "hoge",
//   age: 28
// };

// // 毎回myProfileを書く必要
// const message1 = `My name is ${myProfile.name}. My age is ${myProfile.age}.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}s. My age is ${age}.`;
// console.log(message2);

// const myProfile = ["hoge", 28];
// const message3 = `My name is ${myProfile[0]}. My age is ${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message3 = `My name is ${name}. My age is ${age}`;
// console.log(message3);

/**
 * Default Value
 */

// const sayHello = (name = "fuga") => console.log(`Hello, ${name}!`);
// sayHello();

/**
 * スプレッド構文
 */
// ... 順番に処理する
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4, ...arr5];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * map & filtter
 *  */

// const nameArr = ["tanaka", "Yamada", "hoge"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1} is ${nameArr[index]}`);
// }

// name引数に配列の中身が順番に入っていく
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// 一行の場合は{}ブラケット不要
// 2つめ引数はindex
// nameArr.map((name, index) => console.log(`${index + 1} is ${name}.`));
// nameArr.map((name) => console.log(`${name}.`));

// filter: 配列に対して条件に一致するものを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "hoge") {
//     return name;
//   } else {
//     return `${name}-san`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300; // 文字列に対してはできない
// // console.log(num.toLocaleString()); // 3桁区切りカンマ表示にする

// const formattedNum =
//   typeof num === "number"
//     ? num.toLocaleString()
//     : "すうちをにゅうりょくしてください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : `unnder 100`;
// };

// console.log(checkSum(100, 20));

/**
 * 論理演算子の本当の意味 && ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1 or 2 is true");
// }

// if (flag1 && flag2) {
//   console.log("1 and 2 is true");
// }

// || は左側がfalseとなら右側を返す
const num = null;
const fee = num || "金額未定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
