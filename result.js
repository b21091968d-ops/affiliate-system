document.addEventListener("DOMContentLoaded", function () {
  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");
  const timerEl = document.getElementById("timer");

  const AFFILIATE_URL =
    "https://84fc3yl6mtgr4z7bqe0d3g5n0i.hop.clickbank.net";

  if (!titleEl || !descEl || !btn || !timerEl) {
    console.error("❌ Не найдены элементы result.html");
    return;
  }

  // 🔒 Защита от прямого захода
  if (!age || !problem) {
    titleEl.innerText = "Пройдите тест";
    descEl.innerText =
      "Чтобы получить персональное решение, сначала пройдите короткий тест.";
    btn.style.display = "none";
    timerEl.style.display = "none";
    return;
  }

  // 🧠 Персонализация
  if (problem === "energy") {
    titleEl.innerText = "Низкий уровень энергии — это не возраст";
    descEl.innerText =
      "Мы нашли ключевой фактор, который может влиять на уровень энергии.";
  } else if (problem === "sleep") {
    titleEl.innerText = "Проблемы со сном — сигнал нервной системы";
    descEl.innerText =
      "Мы определили, что может мешать восстановлению организма.";
  }

  // ⏳ Таймер + редирект
  let seconds = 3;
  let redirected = false;

  timerEl.innerText = `Персональное решение откроется через ${seconds} сек…`;

  const redirect = () => {
    if (redirected) return;
    redirected = true;

    localStorage.removeItem("age");
    localStorage.removeItem("problem");

    window.location.assign(AFFILIATE_URL);
  };

  const countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdown);
      redirect();
    } else {
      timerEl.innerText = `Персональное решение откроется через ${seconds} сек…`;
    }
  }, 1000);

  // 👆 Ручной клик
  btn.addEventListener("click", function () {
    redirect();
  });
});
