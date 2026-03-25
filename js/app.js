// Text Getter Utility

function getTextContent(element) {
    let number = document.getElementById(element).innerText;
    return number;
}

// Counter Increase Function
function increaseCount(element, increment) {
    let count = document.getElementById(element);
    count.innerText = parseInt(count.innerText) + increment;
}

// Counter Decrease Function
function decreaseCount(element, decrement) {
    let count = document.getElementById(element);
    count.innerText = Math.max(0, parseInt(count.innerText) - decrement);
}

// Copy to Clipboard Feature
function copyContent(title, number) {
    navigator.clipboard.writeText(number).then(function () {
        increaseCount("copy", 1);
        alert('Copied ' + title + ": " + number);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

// Call Feature with Coin Validation
function callNumber(title, number) {
    let coins = parseInt(getTextContent("coin"));
    if (coins < 20) {
        alert("Not enough coins. You need at least 20 coins to make a call.");
        return;
    }
    decreaseCount("coin", 20);
    addCallHistory(title, number);
    alert('Calling ' + title + ": " + number);
}

// Function to increase coin count
function increaseCount(element, increment) {
    let count = document.getElementById(element);
    let currentValue = parseInt(count.innerText);

    let newValue = currentValue + increment;
    if (newValue > 100) {
        newValue = 100;
    }
    count.innerText = newValue;
}
