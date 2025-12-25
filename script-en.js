document.getElementById("submitBtn").addEventListener("click", function () {
  const age = document.getElementById("age").value;
  const problem = document.getElementById("problem").value;

  // Явно помечаем язык
  localStorage.setItem("lang", "en");
  localStorage.setItem("age", age);
  localStorage.setItem("problem", problem);

  // РЕДИРЕКТ ТОЛЬКО НА АНГЛИЙСКУЮ СТРАНИЦУ
  window.location.href = "result-en.html";
});
