const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});