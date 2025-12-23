document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ result.js LOADED");

  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  console.log("📦 localStorage:", { age, problem });

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");

  console.log("🔍 Elements found:", {
    title: !!titleEl,
    description: !!descEl,
    button: !!btn,
  });

  if (!titleEl || !descEl || !btn) {
    console.error("❌ result.html elements missing");
    alert("❌ Ошибка: элементы страницы не найдены");
    return;
  }

  if (!age || !problem) {
    titleEl.innerText = "TEST MODE";
    descEl.innerText =
      "localStorage пуст. Перейдите на главную страницу и пройдите тест.";
    btn.style.display = "none";
    alert("⚠ localStorage пуст");
    return;
  }

  titleEl.innerText = "DEBUG MODE";
  descEl.innerText =
    "Нажмите кнопку — мы проверим, что именно происходит при клике.";

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("🖱 BUTTON CLICKED");
    alert("🖱 Кнопка нажата");

    console.log("➡ Redirecting to ClickBank...");
    alert(
      "➡ Сейчас должен быть редирект на ClickBank.\n\nЕсли нет — проблема вне JS."
    );

    window.location.assign(
      "https://84fc3yl6mtgr4z7bqe0d3g5n0i.hop.clickbank.net"
    );
  });
});
