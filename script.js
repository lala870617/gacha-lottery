// ===== 獎項設定 =====
// weight 代表相對機率，可自行修改。
// 目前：1000 = 40%、2000 = 30%、3000 = 20%、任選 = 10%
const prizes = [
  { name: "1000", weight: 20 },
  { name: "2000", weight: 30 },
  { name: "3000", weight: 20 },
  { name: "1+1任選", weight: 20 }
];

const drawBtn = document.getElementById("drawBtn");
const knob = document.getElementById("knob");
const machine = document.getElementById("machine");
const dropCapsule = document.getElementById("dropCapsule");
const overlay = document.getElementById("overlay");
const resultPrize = document.getElementById("resultPrize");
const closeBtn = document.getElementById("closeBtn");

let drawing = false;

function weightedRandom(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * total;

  for (const item of items) {
    random -= item.weight;
    if (random < 0) return item;
  }

  return items[items.length - 1];
}

function randomCapsuleColor() {
  const colors = ["#ffd64f", "#ff6a80", "#6fd5ff", "#9c7cff", "#73e0ad", "#ff9b45"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function resetAnimations() {
  machine.classList.remove("shaking");
  knob.classList.remove("turning");
  dropCapsule.classList.remove("dropping");

  // 觸發 reflow，讓下一次能重新播放 CSS animation
  void machine.offsetWidth;
}

function draw() {
  if (drawing) return;
  drawing = true;
  drawBtn.disabled = true;

  const prize = weightedRandom(prizes);

  resetAnimations();
  dropCapsule.style.background = randomCapsuleColor();

  machine.classList.add("shaking");
  knob.classList.add("turning");

  setTimeout(() => {
    dropCapsule.classList.add("dropping");
  }, 430);

  setTimeout(() => {
    resultPrize.textContent = prize.name;
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");

    drawing = false;
    drawBtn.disabled = false;
  }, 1200);
}

function closeResult() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    resetAnimations();
  }, 220);
}

drawBtn.addEventListener("click", draw);
knob.addEventListener("click", draw);
closeBtn.addEventListener("click", closeResult);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeResult();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("show")) {
    closeResult();
  }
});
