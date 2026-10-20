// Keeps the footer year current.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
