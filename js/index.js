
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});
