document.addEventListener("DOMContentLoaded", () => {
    const glow = document.getElementById("cursor-glow");
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    const speed = 0.1; // Adjust speed (0.1 = slow, 1 = instant)
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX - glow.offsetWidth / 2;
        mouseY = e.clientY - glow.offsetHeight / 2;
    });
    
    function animate() {
        glowX += (mouseX - glowX) * speed;
        glowY += (mouseY - glowY) * speed;
        glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
});
