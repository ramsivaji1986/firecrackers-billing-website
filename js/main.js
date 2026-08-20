// CrackerBill site interactions

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Hero spark particles ---------------------------------- */
  const sparkField = document.getElementById('sparks');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (sparkField && !reduceMotion) {
    const COUNT = 26;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('span');
      const left = Math.random() * 100;
      const duration = 6 + Math.random() * 7;
      const delay = Math.random() * 10;
      const drift = (Math.random() * 60 - 30) + 'px';
      s.style.left = left + '%';
      s.style.animationDuration = duration + 's';
      s.style.animationDelay = delay + 's';
      s.style.setProperty('--drift', drift);
      sparkField.appendChild(s);
    }
  }

  /* ---- Screenshot tabs ------------------------------------------ */
  const tabs = document.querySelectorAll('.shot-tab');
  const panels = document.querySelectorAll('.shot-panel');
  const caption = document.getElementById('shot-caption');

  const captions = {
    newbill: "Add items by barcode or search, adjust quantity and discount, and the net payable updates instantly.",
    invoice: "A print-ready invoice with shop details, GSTIN, line items and the net payable — generated from the same bill.",
    item: "Set the sale price and stock quantity for each item, then auto-generate or enter a barcode and print the label.",
    reports: "Pick a date range to see every bill issued — number, date, customer, amount and payment mode — for closing or audit.",
    users: "Create a login per staff member and assign a role, so the admin account isn't shared at the counter.",
    signin: "A secured sign-in keeps the billing console and reports restricted to your own staff."
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-shot');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('shot-' + target);
      if (panel) panel.classList.add('active');
      if (caption && captions[target]) caption.textContent = captions[target];
    });
  });

  /* ---- Scroll reveal ---------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
});
