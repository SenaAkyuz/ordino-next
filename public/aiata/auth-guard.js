/* ─────────────────────────────────────────────
   AIATA Moodboard — auth guard
   index.html'in en üstüne <script src="auth-guard.js"></script>
   olarak eklenir. login.html'den geçmeden gelen ziyaretçiyi
   otomatik olarak login sayfasına yönlendirir.
   ───────────────────────────────────────────── */
(function () {
  try {
    if (sessionStorage.getItem('aiata_auth') !== 'granted') {
      window.location.replace('login.html');
    }
  } catch (e) {
    window.location.replace('login.html');
  }
})();
