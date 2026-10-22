// Keeps the footer year current.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Autoplays muted prototype videos only when the visitor hasn't asked for reduced motion.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  document.querySelectorAll('video[data-autoplay]').forEach(function (v) {
    if (!('IntersectionObserver' in window)) { v.play().catch(function () {}); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) v.play().catch(function () {}); else v.pause(); });
    }, { threshold: 0.4 }).observe(v);
  });
})();

// Email menu: mailto links do nothing visible when no mail app is set up,
// so each one opens a small menu with webmail options and a copy button.
(function () {
  var links = document.querySelectorAll('a[href^="mailto:"]');
  if (!links.length) return;
  var menu = document.createElement('div');
  menu.className = 'email-menu';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-label', 'Email options');
  menu.hidden = true;
  document.body.appendChild(menu);
  var opener = null;

  function close() {
    if (menu.hidden) return;
    menu.hidden = true;
    if (opener) { opener.setAttribute('aria-expanded', 'false'); opener.focus(); }
    opener = null;
  }

  function open(link) {
    var addr = link.getAttribute('href').replace(/^mailto:/, '').split('?')[0];
    var enc = encodeURIComponent(addr);
    menu.innerHTML =
      '<p class="email-menu-addr">' + addr + '</p>' +
      '<a href="https://mail.google.com/mail/?view=cm&fs=1&to=' + enc + '" target="_blank" rel="noopener">Open in Gmail</a>' +
      '<a href="https://outlook.live.com/mail/0/deeplink/compose?to=' + enc + '" target="_blank" rel="noopener">Open in Outlook</a>' +
      '<a href="mailto:' + addr + '">Use my mail app</a>' +
      '<button type="button" data-copy>Copy email</button>';
    var copyBtn = menu.querySelector('[data-copy]');
    copyBtn.addEventListener('click', function () {
      function done() { copyBtn.textContent = 'Copied!'; setTimeout(close, 900); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done, function () { window.prompt('Copy this email:', addr); });
      } else { window.prompt('Copy this email:', addr); }
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setTimeout(close, 50); }); });

    menu.hidden = false;
    var r = link.getBoundingClientRect();
    var mw = menu.offsetWidth, mh = menu.offsetHeight;
    var left = Math.min(Math.max(12, r.left + window.scrollX), window.scrollX + document.documentElement.clientWidth - mw - 12);
    var top = r.bottom + window.scrollY + 8;
    if (r.bottom + mh + 16 > window.innerHeight && r.top - mh - 8 > 0) top = r.top + window.scrollY - mh - 8;
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';
    opener = link;
    link.setAttribute('aria-expanded', 'true');
    menu.querySelector('a').focus();
  }

  links.forEach(function (link) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-expanded', 'false');
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (opener === link) { close(); return; }
      close();
      open(link);
    });
  });
  document.addEventListener('click', function (e) {
    if (!menu.hidden && !menu.contains(e.target) && e.target.closest('a[href^="mailto:"]') !== opener) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', close);
})();
