

function toggleProfile() {
    document.body.classList.toggle("alt-style");

    const jobElement = document.getElementById("para1");
    const textElement = document.getElementById("tabler");
    const profileImg = document.getElementById("poza");

    jobElement.textContent = "Inginer software Microsoft";
    textElement.textContent = "Experiențe de neratat în timpul facultății sunt: participarea la proiecte și stagii de practică, experiența Erasmus sau un semestru în străinătate";
    profileImg.src = "caine.jpg";
}

function changeFont() {
    const element = document.getElementById("para1");
    element.style.fontFamily = "Arial, sans-serif";
    element.style.color = "orange";
    const element1 = document.getElementById("tabler");
    element1.style.fontFamily = "Georgia, serif";
    element1.style.color = "green";
}
function changeImageStyle() {
    const img = document.getElementById("poza");
    img.style.opacity = "1.0";
    img.style.margin = "600px";
}
function changeBackgroundColor() {
    document.body.style.backgroundColor = "white";
}
function executeAll() {
    toggleProfile(); 
    changeFont();     
    changeImageStyle(); 
    changeBackgroundColor();
}
function calculateAge() {
    const birthYear = 2005; 
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById("birth-year").innerText = `Eu am ${age} ani.`
}