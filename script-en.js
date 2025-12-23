document.getElementById("submitBtn").addEventListener("click", function () {
  const age = document.getElementById("age").value;
  const problem = document.getElementById("problem").value;

  localStorage.setItem("age", age);
  localStorage.setItem("problem", problem);

  window.location.href = "result-en.html";
});
