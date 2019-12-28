function rem() {
    var docEl = document.documentElement;
    docEl.style.fontSize = 200*(docEl.clientWidth / 750) + 'px';
}
addEventListener("load", rem);
addEventListener("resize", rem);