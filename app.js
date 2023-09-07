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
