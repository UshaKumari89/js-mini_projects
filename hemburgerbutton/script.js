function updateButton() {
    if (nav.classList.contains("active")) {
        btn.innerHTML = "X";
    } else {
        btn.innerHTML = "☰";
    }
}

btn.addEventListener("click", () => {
     if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
      updateButton();
});


const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});