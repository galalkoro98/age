const input = prompt('enter your age')

let age;

if (input < 18 || input >= 65) {
    age = 'you are not alow to drink alcohols';
} else if (input > 18) {
    age = `<img>'you are alow to drink alcohols';</img>`
} else if (input == 18) {
    age = 'you may start to drink alcohols';   
} else {
    age = 'you enter nothing';
}
const result = `${age}`;
//console.log(result);
alert(result);

