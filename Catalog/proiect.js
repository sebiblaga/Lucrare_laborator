
function toggleProfile() {
    const Ocupatie = document.getElementById("para1");
    const Pasiuni = document.getElementById("tablere");
    const profileImg = document.getElementById("imagine");
    Ocupatie.textContent = "Inginer software, Google";
    Pasiuni.textContent = "Voluntariat, Lucru ca stagiar si cel putin un semestru studiat in strainatate intr-un proiect Erasmus";
    profileImg.src = "cat.jpg";
    profileImg.alt = "Imagine alternativa";
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
};
document.getElementById("an-nastere").addEventListener("mouseover", function () {
    const anulNasterii = 2006;
    const dataCurenta = new Date();
    const anulCurent = dataCurenta.getFullYear();
    const varsta = anulCurent - anulNasterii;

    this.textContent = `Varsta: ${varsta} ani`;
});

document.getElementById("an-nastere").addEventListener("mouseout", function () {
    this.textContent = "Anul nasterii: 2006";
});