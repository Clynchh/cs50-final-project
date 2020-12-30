document.getElementById("right").addEventListener("click", openAPI);

function openAPI(){
 	chrome.tabs.create({ url: "https://type.fit/api/quotes" });
}