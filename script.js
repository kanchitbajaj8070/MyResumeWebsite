
function scrollfn(event) {
    event.preventDefault();
    let targetSection = event.target.innerHTML.toString().toLowerCase();
    let targetpos = document.getElementById(targetSection).getBoundingClientRect().y;
    console.log("onclick esxecuted", event.target.innerHTML, targetSection, targetpos);
    let currentPos = 0;
    let steps = targetpos / 50;
    function scrolling() {
        window.scrollBy(0, 100);
        currentPos += 100;
        if (currentPos + 100 > targetpos) {
            clearInterval(id);
            return;
        }
    }
        var id=setInterval(scrolling,50);

}