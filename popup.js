document.addEventListener("dblclick", function(event) {
    event.preventDefault();
    let popup = document.getElementById("popup");
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 2000);
});
document.addEventListener("contextmenu", event => event.preventDefault());
