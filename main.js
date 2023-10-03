/************** Evenish or Oddish **************/

function oddishOrEvenish(num) {

    const numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    if (sum % 2 === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}

// Test cases
    console.log(oddishOrEvenish(43));    // ➞ "Oddish"
    console.log(oddishOrEvenish(373));   // ➞ "Oddish"
    console.log(oddishOrEvenish(4433));  // ➞ "Evenish"


/************** Get total price **************/

function getTotalPrice(groceries) {

    let totalPrice = 0;

    for (let i = 0; i < groceries.length; i++) {
        let currentProduct = groceries[i];
        let productTotal = currentProduct.quantity * currentProduct.price;
        totalPrice += productTotal;
    }
    return totalPrice.toFixed(1);
    }


// Test cases
    console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }])); // ➞ 1.5
    console.log(getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Cereals", quantity: 1, price: 2.50 }
    ])); // ➞ 4
    console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }])); // ➞ 4.5
    console.log(getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Eggs", quantity: 12, price: 0.10 },
        { product: "Bread", quantity: 2, price: 1.60 },
        { product: "Cheese", quantity: 1, price: 4.50 }
    ])); // ➞ 10.4
    console.log(getTotalPrice([
        { product: "Chocolate", quantity: 1, price: 0.10 },
        { product: "Lollipop", quantity: 1, price: 0.20 }
    ])); // ➞ 0.3


/************** Get total price **************/

function reverseOdd(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 1) {
            words[i] = [...words[i]].reverse().join('');
        }
    }
    return words.join(' ');
}

// Test cases
    console.log(reverseOdd("Bananas")); // ➞ "sananaB"
    console.log(reverseOdd("One two three four")); // ➞ "enO owt eerht four"
    console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
    // ➞ "Make sure you only reverse words of odd length"


/************** Last letter = first letter **************/

function isSmooth(sentence) {

    const words = sentence.split(' ');

    for (let i = 0; i < words.length - 1; i++) {
        const lastLetter = words[i].slice(-1).toLowerCase();
        const firstLetterNextWord = words[i + 1].charAt(0).toLowerCase();

        if (lastLetter !== firstLetterNextWord) {
            return false;
        }
    }
    return true;
}

  // Tests
  console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // ➞ true
  console.log(isSmooth("Someone is outside the doorway")); // ➞ false
  console.log(isSmooth("She eats super righteously")); // ➞ true


/************** Seven = BOOOM **************/

function sevenBoom(arr) {

    const joinedString = arr.join('');

    if (joinedString.includes('7')) {
        return "Boom!";
    } else {
        return "there is no 7 in the array";
    }
}

// Test cases
  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // ➞ "Boom!"
  console.log(sevenBoom([8, 6, 33, 100]));       // ➞ "there is no 7 in the array"
  console.log(sevenBoom([2, 55, 60, 97, 86]));    // ➞ "Boom!"


/************** Last letter = first letter **************/

function convert(value) {

    if (value.endsWith("°C")) {
        const celsius = parseFloat(value);
    if (Number(celsius)) {
        const fahrenheit = Math.round((celsius * 1.8) + 32);
        return `${fahrenheit}°F`;
        }
    }
    else if (value.endsWith("°F")) {
        const fahrenheit = parseFloat(value);
    if (Number(fahrenheit)) {
        const celsius = Math.round((fahrenheit - 32) / 1.8);
        return `${celsius}°C`;
        }
    }
    return "Error";
}

// Test cases
  console.log(convert("35°C"));  // ➞ "95°F"
  console.log(convert("19°F"));  // ➞ "-7°C"
  console.log(convert("33"));    // ➞ "Error"


/************** Find Broken Keys **************/

function findBrokenKeys(correct, typed) {
    const brokenKeys = [];
    
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== typed[i] && !brokenKeys.includes(correct[i])) {
        brokenKeys.push(correct[i]);
        }
    }
    return brokenKeys;
}

// Test cases
  console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ➞ ["p"]
  console.log(findBrokenKeys("starry night", "starrq light")); // ➞ ["y", "n"]
  console.log(findBrokenKeys("beethoven", "affthoif5")); // ➞ ["b", "e", "v", "n"]


function fizzBuzz(num) {

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Test cases
fizzBuzz(200);
