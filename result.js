document.addEventListener("DOMContentLoaded", function () {
  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");

  // Защита от прямого захода
  if (!age || !problem) {
    title.innerText = "Пройдите тест";
    description.innerText =
      "Чтобы получить персональное решение, сначала пройдите короткий тест.";
    btn.style.display = "none";
    return;
  }

  if (problem === "energy") {
    title.innerText = "Низкий уровень энергии — это не возраст";
    description.innerText =
      "Причина часто связана с перегрузкой мозга. Есть простой способ мягко поддержать концентрацию и энергию.";
  }

  if (problem === "sleep") {
    title.innerText = "Плохой сон — сигнал нервной системы";
    description.innerText =
      "Нарушение сна часто вызвано внутренним дисбалансом. Его можно скорректировать естественным способом.";
  }

  btn.addEventListener("click", function () {
    window.location.href = "ВСТАВЬ_СЮДА_ПАРТНЕРСКУЮ_ССЫЛКУ";
  });
});

