// JavaScript source code
//degrees in Kelvin
let kelvin = 293;

//converting kelvin to celsius
let celsius = kelvin - 273;

//converting celsius to fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahreheit.`)