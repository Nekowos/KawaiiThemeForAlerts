const style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("kawaii-theme.css");
(document.head || document.documentElement).appendChild(style);
document.documentElement.classList.add("kawaii");

console.log("meow meow lol")