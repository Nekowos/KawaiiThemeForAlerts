const style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("kawaii-light.css");
(document.head || document.documentElement).appendChild(style);
document.documentElement.classList.add("kawaii-light");

console.log("meow meow lol")