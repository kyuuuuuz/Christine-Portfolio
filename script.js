(function () {
  var root = document.documentElement;
  var theme;

  try {
    theme = localStorage.getItem("theme");
  } catch (e) {}

  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  root.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("themeToggle");

    function updateLabel() {
      var isDark = root.getAttribute("data-theme") === "dark";
      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    button.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";

      root.setAttribute("data-theme", next);

      try {
        localStorage.setItem("theme", next);
      } catch (e) {}

      updateLabel();
    });

    updateLabel();
  });
})();