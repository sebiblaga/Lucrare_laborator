function toggleProfile() {
    const Ocupatie = document.getElementById("para1");
    const Pasiuni = document.getElementById("tabel");
    const profileImg = document.getElementById("imagine");
    const descriereElement = document.getElementById('hobby');
    Ocupatie.textContent = "OCUPATIE: Stinta datelor si inteligenta artificiala";
    Pasiuni.textContent = "Am finalizat un masterat în Statistica si Stiinta datelor la Universitatea UTCN și am lucrat la un proiect de cercetare.Am început să învăț programarea în Python și să dezvolt aplicații de machine learning.";
    profileImg.src = "3.jpg";
    descriereElement.textContent = "Am început să învăț programarea în Python și să dezvolt aplicații de machine learning. De asemenea, îmi place să joc tenis și să explorez noi culturi prin călătorii.";
    profileImg.alt = "Imagine alternativa";
    document.body.style.backgroundColor = "#971a40 ";
    document.body.style.color = "#941d41";
    profileImg.style.opacity = '0.6';
    profileImg.style.border = '5px solid #3498db'
    
};

function afiseazaVarsta() {
    const anulNasterii = 2005;
    const dataCurenta = new Date();
    const anulCurent = dataCurenta.getFullYear();
    const varsta = anulCurent - anulNasterii;

    const elementAnulNasterii = document.getElementById('anul-nasterii');
    elementAnulNasterii.textContent = `Vârsta: ${varsta} ani`;
}
