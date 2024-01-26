/**
9장 자바스크립트 기초 문법 살펴보기
9.1 변수와 상수
9.2 자료형
9.3 연산자
 */

/* 9.1 변수와 상수 */
// 1.1. 변수
var num = 10 + 20;
console.log('num : ', num);

// 1.2. 새로운 변경 선언 키워드 let, 
// let 키워드는 중복 변수 불가 
// let 키워드는 호이스팅 불가 : 변수 선언부 없이 먼저 호출시 에러.
let num_let = 10 + 20;
console.log('num_let : ', num_let);
// let num_let = 10 + 20;

// 1.3. 상수 
// const 는 변수에 재할당 불가.
const num_consts = 100;
// num_consts = 100;
console.log('num_consts : ', num_consts);


/* 9.2 자료형 */
// 2.1. 문자열
let string = "Hello World!" + " coding";
console.log('string : ', string);
// `(백틱)을 사용하시면 문자열에 변수도 넣을 수 있다.
let name = "bread";
let string2 = `Hello ${name}!`;
console.log('string2 : ', string2);

//2.2. 숫자형
let num1 = 0.1;
let num2 = 0.2;
// 0.30000000000000004, 실수를 부동 소수점 방식으로 표한하는데 이러면 실수 계산이 정확하지 않다.(특정 자리수로 반올림 또는 버림)
console.log('num1 + num2 : ', num1 + num2);

// 2.3. 논리형 
let boolean1 = true;
let boolean2 = false;
// 2.4. undefined 변수나 상수에 값을 할당하지 않을 경우 자바스크립트 내부적으로 할당하는값.
let empty;
console.log(empty); // undefined
// 2.5. null 변수, 상수를 선언하고 의도적으로 공간을 비워 둘 때 할당.
let empty_null = null;
// 2.6. 객체, 앞에서 언급한 기본 자료형을 제외하고 대부분 객체 자료형임.
// 배열
let studuntScore = [1, 2, 3, 4];
let studuntScore_leter = {
    koreanStore: 80, mathScore: 90, englishScore: 100,
};
console.log(studuntScore_leter);
console.log(studuntScore_leter.englishScore);
console.log(studuntScore_leter['koreanStore']);
/* 9.3 연산자 */
// 3.1 산술 연산자
// 3.2 대입 연산자와 복합 대입 연산자
// 3.3 비교 연산자 참(true), 거짓(false), ==, ===
// 3.4 논리 연산자
// 3.5 삼항 연산자 x ? y : z
// 3.6 연산자 우선순위
// 3.7 형 변환 데이터 자료형을 다른 자료형으로 바꾸는것 . 

