document.addEventListener("DOMContentLoaded", function () {
  const age = localStorage.getItem("age");
  const problem = localStorage.getItem("problem");

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const btn = document.getElementById("ctaBtn");

  if (!age || !problem) {
    titleEl.innerText = "Please take the quiz first";
    descEl.innerText = "Start from the quiz to see your result.";
    btn.style.display = "none";
    return;
  }

  if (problem === "energy") {
    titleEl.innerText = "Low energy is not laziness";
    descEl.innerText =
      "In many cases, low energy is linked to how the nervous system handles stress.";
  }

  if (problem === "sleep") {
    titleEl.innerText = "Poor sleep is a nervous system signal";
    descEl.innerText =
      "Sleep problems are often caused by mental overload, not lack of effort.";
  }

  btn.addEventListener("click", function () {
    window.location.href = "go-en.html";
  });
});
