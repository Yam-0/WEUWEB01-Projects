var clickCount = 0;
var ClickPopupElement = document.getElementById("popup");
var ClickCountElement = document.getElementById("counter");
var WastedTextElement = document.getElementById("wastedMessage");

function myFunction() {
  ClickPopupElement.innerHTML = "You clicked!";
  clickCount++;
  ClickCountElement.innerHTML = clickCount;
  sleep(500).then(() => {
    ClickPopupElement.innerHTML = "";
  });
  if (clickCount >= 10) {
    WastedTextElement.innerHTML =
      "You wasted your time clicking " + clickCount + " times";
  }
}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
