var navBar = document.getElementById("navBar");
navBar.innerHTML = `
<nav class="navbar fixed-top navbar-expand-sm navbar-light py-2">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li id="home" class="nav-item">
            <a class="nav-link" href="index.html"><img src="./icons/home.svg" width="30" height="24"><img></a>
          </li>
          <li id="pag1" class="nav-item">
            <a class="nav-link" href="pag1.html" target="_blank">Tipus isomètric</a>
          </li>
          <li id="pag2" class="nav-item">
            <a class="nav-link" href="pag2.html" target="_blank">Tipus Top-Bottom</a>
          </li>
          <li id="pag3" class="nav-item">
            <a class="nav-link" href="pag3.html" target="_blank">Tipus 2D</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

var pagina = window.location.pathname;
if (pagina.endsWith("index.html")) {
    var pag = document.getElementById("home");
    pag.className += " active";
} else if (pagina.endsWith("pag1.html")) {
    var pag = document.getElementById("pag1");
    pag.className += " active";
} else if (pagina.endsWith("pag2.html")) {
    var pag = document.getElementById("pag2");
    pag.className += " active";
} else {
    var pag = document.getElementById("pag3");
    pag.className += " active";
}