// function passwordGenerator(number, character)
// {
//     pass = "";
//     str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
//     if(number) str += "123456789"
//     if(character) str += "!@#$%^&*+"
//     for(let i = 1; i <= 8; i++)
//     {
//         let char = str[Math.ceil(Math.random() * str.length)]
//         pass += char;
//     }
//     console.log(pass)
// }

// let number = false;
// let character = false;

// passwordGenerator(number, character)

console.log(Math.floor(Math.random() * 8))