// const list = document.getElementById("props");
// let property = null;
// for (property in window) {
//   if (property) {
//     list.innerHTML += "<li>" + property;
//   }
// }
// const info = document.getElementById("propss");
// let width = window.screen.width + "px";
// let height = window.screen.height + "px";
// let availW = window.screen.availWidth + "px";
// let availH = window.screen.availHeight + "px";
// let colors = "Unknown";
// switch (window.screen.colorDepth) {
//   case 8:
//     colors = "Low Color";
//     break;
//   case 16:
//     colors = "High Color";
//     break;
//   case 24:
//     colors = "True Color";
//     break;
//   case 32:
//     colors = "Deep Color";
//     break;
// }
// info.innerHTML = "Screen Resolution: " + width + " x " + height + "<br>";
// info.innerHTML += "Available Screen Size: " + availW + " x " + availH + "<br>";
// info.innerHTML += "Color Capability: " + colors + "<br>";
// if (window.screen.orientation) {
//   info.innerHTML += "Orientation: " + window.screen.orientation.type;
// }

// const info = document.getElementById("response");
// window.alert("Hello from JavaScript");
// info.innerHTML = "Confirm: " + window.confirm("Go or Stop?");
// info.innerHTML += "<br>Prompt: " + window.prompt("Yes or No?", "Yes");

// const info = document.getElementById("info");
// let i = 0;
// for (i = 1; i < 41; i++) {
//   info.innerHTML += i + "<br>";
// }
// window.scrollBy(200, info.clientHeight);
// info.innerHTML += "scrollX: " + window.scrollX + "& scrollY: " + window.scrollY;

// const popWin = window.open(
//   "index.html",
//   "Popup",
//   "top=150,left=100,width=350,height=100"
// );

const count = (function () {
  let num = 10;
  return function () {
    return num--;
  };
})();
function countDown() {
  const info = document.getElementById("infos");
  let timerId = null;
  let num = count();
  if (num > 0) {
    info.innerHTML += "<span>" + num + "</span>";
    timerId = window.setTimeout(countDown, 1000);
  } else {
    info.innerHTML += "<span>Lift Off!</span>";
    window.clearTimeout(timerId);
  }
}
countDown();

const list = document.getElementById("list");
list.innerHTML = "<li>Browser: " + navigator.appName;
list.innerHTML += "<li>Code Name: " + navigator.appCodeName;
list.innerHTML += "<li>Version: " + navigator.appVersion;
list.innerHTML += "<li>Platform: " + navigator.platform;
if (window.addEventListener) {
  list.innerHTML += "<li>This is a modern DOM browser";
}

// const info = document.getElementById("infoss");
// let status = "";
// status = navigator.javaEnabled() ? "Enabled" : "Disabled";
// info.innerHTML += "Java Support is " + status + "<hr>";
// status = navigator.cookieEnabled ? "Enabled" : "Disabled";
// info.innerHTML += "Cookie Support is " + status + "<hr>";
// if (navigator.plugins.length !== 0) {
//   info.innerHTML += "No. of Plugins: " + navigator.plugins.length;
//   info.innerHTML += "<br>Example: " + navigator.plugins[0].name;
//   info.innerHTML += "<br>For: " + navigator.plugins[0].description + "<hr>";
// }
// if (navigator.mimeTypes.length !== 0) {
//   info.innerHTML += "No. of MIME Types: " + navigator.mimeTypes.length;
//   info.innerHTML += "<br>Example: " + navigator.mimeTypes[1].type;
//   info.innerHTML += "<br>For: " + navigator.mimeTypes[1].description;
// }

const info = document.getElementById("infoo");
let jump = confirm("Jump to Fragment?");
if (jump) {
  location = location.href + "#frag";
}
info.innerHTML += "<hr>Href: " + location.href;
info.innerHTML += "<br>Protocol: " + location.protocol;
info.innerHTML += "<br>Host:" + location.host;
info.innerHTML += "<br>Path:" + location.pathname;
info.innerHTML += "<br>Hash: " + location.hash;
