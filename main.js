const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(60px)';
  el.style.transition = '1s ease';
  observer.observe(el);
});

// QR MODAL
const openQR = document.getElementById('openQR');
const qrModal = document.getElementById('qrModal');
const closeBtn = document.querySelector('.close');

if (openQR) {
  openQR.onclick = () => qrModal.style.display = 'flex';
}
if (closeBtn) {
  closeBtn.onclick = () => qrModal.style.display = 'none';
}
window.onclick = e => {
  if (e.target === qrModal) qrModal.style.display = 'none';
};

// THANK YOU MESSAGE
const donateForm = document.getElementById('donateForm');
const thankYou = document.getElementById('thankYou');

if (donateForm) {
  donateForm.addEventListener('submit', e => {
    e.preventDefault();
    donateForm.style.display = 'none';
    thankYou.style.display = 'block';
    window.scrollTo({ top: thankYou.offsetTop - 80, behavior: 'smooth' });
  });
}
