// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function setTheme(t){
  document.body.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeToggle.textContent = t==='dark' ? '☀️ Light' : '🌙 Dark';
}
const saved = localStorage.getItem('theme') || 'light';
setTheme(saved);
themeToggle.addEventListener('click', ()=> setTheme(document.body.getAttribute('data-theme')==='dark' ? 'light' : 'dark'));

// Project modal with keyboard accessibility and animation
const projects = document.querySelectorAll('.project');
const modalRoot = document.getElementById('modalRoot');
projects.forEach(p => {
  p.addEventListener('click', () => openModal(p));
  p.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(p);
    }
  });
});

function openModal(el) {
  const title = el.dataset.title;
  const desc = el.dataset.desc;
  const link = el.dataset.link;
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal card" tabindex="-1">
      <button class="close" aria-label="Close modal">\u2715</button>
      <h2>${title}</h2>
      <p>${desc}</p>
      <a class="btn" href="${link}" target="_blank" rel="noopener">Open on GitHub</a>
    </div>
  `;
  modalRoot.appendChild(modal);
  modalRoot.style.display = 'flex';
  const closeBtn = modal.querySelector('.close');
  closeBtn.onclick = closeModal;
  // Keyboard: ESC to close, focus trap
  function closeModal() {
    modal.remove();
    modalRoot.style.display = 'none';
    el.focus();
  }
  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    // Trap focus inside modal
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (e.key === 'Tab') {
      const first = focusable[0], last = focusable[focusable.length-1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  setTimeout(() => modal.querySelector('.modal').focus(), 10);
}