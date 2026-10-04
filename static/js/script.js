function createFlower() {
    const flower = document.createElement("div");

    flower.classList.add("flower");
    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (4 + Math.random() * 5) + "s";
    flower.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 9000);
}

setInterval(createFlower, 500);