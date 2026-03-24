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