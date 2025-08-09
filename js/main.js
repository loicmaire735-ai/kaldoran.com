document.getElementById('year').textContent = new Date().getFullYear();

// Smooth internal link focus for accessibility
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', '#' + id);
    }
  });
}
