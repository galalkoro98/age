const input = prompt('enter your age')

let age;

if (input < 18 && input === 0 || input > 65) {
    age = 'you are not alow to drink alcohols';
} else if (input > 18) {
    age = 'you are alow to drink alcohols';
} else if (input === 18) {
    age = 'you may start to drink alcohols \n but is not good for you';   
} else if (input >= 0 || input <= ' '){
    age = 'you enter zero  or you did not enter nothing';
}

const result = `${age}`;
//console.log(result);
alert(result);

