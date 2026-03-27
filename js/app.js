// Text Getter Utility
function getTextContent(element) {
  const number = document.getElementById(element).innerText;
  return number;
}

// Counter Increase Function
function increaseCount(element, increment) {
  const count = document.getElementById(element);
  count.innerText = parseInt(count.innerText) + increment;
}

// Counter Decrease Function
function decreaseCount(element, decrement) {
  const count = document.getElementById(element);
  count.innerText = Math.max(0, parseInt(count.innerText) - decrement);
}

// Copy to Clipboard Feature
function copyContent(title, number) {
  navigator.clipboard.writeText(number).then(
    function () {
      increaseCount("copy", 1);
      alert("Copied " + title + ": " + number);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
}

// Call Feature and Call Coin Refund
let spentCoins = 0;
function callNumber(title, number) {
  const coins = parseInt(getTextContent("coin"));

  if (coins < 20) {
    alert("Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  decreaseCount("coin", 20);
  spentCoins += 20;
  addCallHistory(title, number);
  alert("Calling " + title + ": " + number);
}

// Call History System
function addCallHistory(title, number) {
  const historyList = document.getElementById("call-history");
  const newEntry = document.createElement("div");
  const callTime = new Date().toLocaleTimeString();

  newEntry.className =
    "call-entry flex flex-row items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg";

  newEntry.innerHTML = `
    <div>
      <span class="font-bold text-xl">${title}</span><br/>
      <span class="text-left text-gray-500">${number}</span>
    </div>
    <div class="text-gray-700">
      ${callTime}
    </div>
  `;

  historyList.appendChild(newEntry);
}

// Clear History Feature
function clearHistory() {
  const historyList = document.getElementById("call-history");

  for (let i = historyList.children.length - 1; i >= 0; i--) {
    const child = historyList.children[i];

    if (child.classList.contains("call-entry")) {
      historyList.removeChild(child);
    }
  }

  increaseCount("coin", spentCoins);
  spentCoins = 0;
  alert("Call history cleared.");
}

// Heart click interaction
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((heart) => {
  heart.style.cursor = "pointer";

  heart.addEventListener("click", () => {
    increaseCount("heart", 1);
  });
});