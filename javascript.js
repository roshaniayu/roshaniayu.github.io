function reveal() {
    if (document.getElementById("reveal").innerHTML == "Reveal my face") {
        document.getElementById("face").src = "images/me.png";
        document.getElementById("reveal").innerHTML = "Hide my face";
    } else {
        document.getElementById("face").src = "images/zepeto-1.png";
        document.getElementById("reveal").innerHTML = "Reveal my face";
    }
}