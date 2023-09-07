const info = document.getElementById(infoO);
info.innerHTML += "<a href=”page-1.xhtml”>Page 1</a> | ";
info.innerHTML += "<a href=”page-2.xhtml”>Page 2</a> | ";
info.innerHTML += "<a href=”page-3.xhtml”>Page 3</a>";
info.innerHTML += "<br>History Length: " + history.length;
info.innerHTML += "<br>Current Location: " + location.pathname + "<br>";
info.innerHTML += "<button onclick=”history.back( )”>Back</button>";
info.innerHTML += "<button onclick=”history.forward( )”>Forward</button>";
