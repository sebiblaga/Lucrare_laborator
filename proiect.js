
function toggleProfile() {
    const Ocupatie = document.getElementById("para1");
    const Pasiuni = document.getElementById("tablere")= `
        <h2>Educatie</h2>
        <p>Facultatea de Design - Absolvent 2024</p>
        <p>Experiente ideale: Participare la hackathoane si concursuri de design</p>`
;
    const profileImg = document.getElementById("imagine");
    Ocupatie.textContent = "Inginer software, Google";
    Pasiuni.textContent = "Voluntariat, Lucru ca stagiar si cel putin un semestru studiat in strainatate intr-un proiect Erasmus";
    profileImg.src = "cat.jpg";
    profileImg.alt = "Imagine alternativa";
};