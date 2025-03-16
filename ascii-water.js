const width = 70; // Fixed width to fit within 700px container
const height = 10; // Height of the ASCII water
let t = 0;

// ASCII characters for a smoother water effect similar to plasma.exe
const waterChars = " .:-=+*#%@";

// Generates a dynamic ASCII wave pattern
function generateWater() {
    let water = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let wave = Math.sin((x / 3) + (t / 2)) + Math.cos((y / 3) + (t / 3));
            let index = Math.floor(((wave + 2) / 4) * (waterChars.length - 1));
            water += waterChars[Math.max(0, Math.min(index, waterChars.length - 1))];
        }
        water += "\n"; // Newline for each row
    }
    return water;
}

function animateWater() {
    const waterDiv = document.getElementById("ascii-water");
    if (!waterDiv) return;
    
    waterDiv.textContent = generateWater();
    t += 0.2; // Controls animation speed
    setTimeout(animateWater, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    // Create the <pre> element directly without wrapping it in a container
    const fillerDiv = document.createElement("pre"); // Use <pre> for ASCII alignment
    fillerDiv.id = "ascii-water";
    fillerDiv.className = "ascii-water";
    
    // Append the <pre> element directly to the body or desired container
    document.body.appendChild(fillerDiv);
    
    animateWater();
});
