function displayInfo() {

    let screen = window.screen;

    document.getElementById("browser").textContent = platform.name;
    document.getElementById("version").textContent = platform.version;
    document.getElementById("layout").textContent = platform.layout;
    document.getElementById("os").textContent = platform.os;
    document.getElementById("description").textContent = platform.description;
    document.getElementById("height").textContent = screen.height + " px";
    document.getElementById("width").textContent = screen.width + " px";
}


displayInfo();