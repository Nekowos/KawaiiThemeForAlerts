console.log("meow meow lol");

const style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("kawaii-theme.css");
(document.head || document.documentElement).appendChild(style);

const animeGirl = document.createElement("img");
animeGirl.src = chrome.runtime.getURL("images/anime-girl-1.png");
animeGirl.classList.add("animegirl");
(document.body || document.documentElement).appendChild(animeGirl);

document.documentElement.classList.add("kawaii");
