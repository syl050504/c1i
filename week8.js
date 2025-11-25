document.addEventListener('DOMContentLoaded', function () {
    const snail = document.getElementById('snail');
    if (!snail) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.18;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animate() {
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;
        snail.style.left = posX + 'px';
        snail.style.top = posY + 'px';
        requestAnimationFrame(animate);
    }

    animate(); S
});