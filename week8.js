// Make #snail follow the cursor with a small smoothing effect.
document.addEventListener('DOMContentLoaded', function () {
    const snail = document.getElementById('snail');
    if (!snail) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.18; // 0 = stuck, 1 = instant, smaller = smoother

    document.addEventListener('mousemove', function (e) {
        // use pageX/Y so it works with page scrolling
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animate() {
        // lerp toward mouse position
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;
        snail.style.left = posX + 'px';
        snail.style.top = posY + 'px';
        requestAnimationFrame(animate);
    }

    // initialize position to current mouse location (if any)
    animate();
});