const historyContainer = document.getElementById("history-container");
const allCard = document.querySelectorAll(".common-cart");
let copyUpdate = document.getElementById("copy-count");
let loveUpdate = document.getElementById("love-count");
let cradit = document.getElementById("cradit");
const clearHitory = document.getElementById("clear-hitory");
let noHistory = document.getElementById("no-histry");
let copyCount = 0;
let loveCount = 0;

[...allCard].forEach((card) => {
  card.addEventListener("click", function (e) {
    if (getClass(e, "copyBtn")) {
      const number = card.querySelector(".phone-number").textContent;
      navigator.clipboard.writeText(number);
      copyCount++;
      copyUpdate.textContent = copyCount;
    } else if (getClass(e, "love")) {
      loveCount++;
      loveUpdate.textContent = loveCount;
    } else if (getClass(e, "call")) {
      const title = card.querySelector(".title").textContent;
      const number = card.querySelector(".phone-number").textContent;

      const callCost = 20;
      let currentCradit = Number(cradit.textContent);
      if (currentCradit <= 0) {
        alert(`Your cradit is finsished`);
        return;
      }
      currentCradit -= callCost;
      cradit.textContent = currentCradit;
      alert(`${title}, ${number}`);
      noHistory.innerHTML = "";
      historyCreate(title, number, getTime());
    }
  });
});

clearHitory.addEventListener("click", function () {
  historyContainer.innerHTML = "";
  noHistory.textContent = 'No history'
  historyContainer.appendChild(noHistory)
});

// find class
function getClass(e, text) {
  return e.target.classList.contains(text);
}

// create history
function historyCreate(title, number, time) {
  const div = document.createElement("div");

  div.innerHTML = `
    <div
                class="shadow-md rounded-lg flex items-center justify-between py-4 px-3 bg-white"
              >
                <div class="space-y-1">
                  <p class="" id="history-title">${title}</p>
                  <p class="" id="history-phone">${number}</p>
                </div>
                <p class="" id="history-time">${time}</p>
              </div>
    `;

  historyContainer.appendChild(div);
}

// get time
function getTime() {
  const date = new Date();
  let h = date.getHours();
  let hour12 = h % 12;
  hour12 = hour12 === 0 ? 12 : hour12;
  let m = date.getMinutes();
  let s = date.getSeconds();
  return `${hour12}:${m}:${s}`;
}
