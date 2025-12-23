document.addEventListener("DOMContentLoaded", function () {
  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");

  if (!titleEl || !descEl || !btn) {
    console.error("❌ Не найдены элементы result.html");
    return;
  }

  // Защита от прямого захода
  if (!age || !problem) {
    titleEl.innerText = "Пройдите тест";
    descEl.innerText =
      "Чтобы получить персональное решение, сначала пройдите короткий тест.";
    btn.style.display = "none";
    return;
  }

  // Персонализация ТОЛЬКО под энергию / сон
  if (problem === "energy") {
    titleEl.innerText = "Низкий уровень энергии — это не лень";
    descEl.innerText =
      "По вашим ответам видно, что организм не успевает восстанавливаться.";
  } else if (problem === "sleep") {
    titleEl.innerText = "Плохой сон — сигнал перегрузки нервной системы";
    descEl.innerText =
      "Результаты показывают, что восстановление нарушено.";
  }

  // 🔒 КНОПКА → ТОЛЬКО go.html
  btn.addEventListener("click", function () {
    window.location.assign("go.html");
  });
});
