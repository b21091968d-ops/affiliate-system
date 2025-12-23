document.addEventListener("DOMContentLoaded", function () {
  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");

  if (!titleEl || !descEl || !btn) {
    console.error("Не найдены элементы result.html");
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

  // Персонализация
  if (problem === "energy") {
    titleEl.innerText = "Низкий уровень энергии — это не возраст";
    descEl.innerText =
      "Ваш организм может терять энергию из-за скрытого дисбаланса. Есть простой способ поддержать мозг и концентрацию.";
  } else if (problem === "sleep") {
    titleEl.innerText = "Проблемы со сном — сигнал нервной системы";
    descEl.innerText =
      "Плохой сон часто связан с перегрузкой мозга. Есть натуральный способ помочь организму восстановиться.";
  }

  // Кнопка → партнёрка
  btn.addEventListener("click", function () {
    localStorage.removeItem("age");
    localStorage.removeItem("problem");
    window.location.href = "
https://84fc3yl6mtgr4z7bqe0d3g5n0i.hop.clickbank.net";
  });
});
