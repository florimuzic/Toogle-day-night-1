document.addEventListener("DOMContentLoaded", () => {
  console.log("ready");

  document.getElementById("switch").addEventListener("click", () => {
    document.getElementById("wrapper").classList.toggle("nightMode");
  });
});