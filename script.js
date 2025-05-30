 const shopLink = document.getElementById("ShopLink");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");

  shopLink.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
  });

  popupClose.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });


 
const images = document.querySelectorAll('.hidden');
  const button = document.getElementById('showMoreBtn');
  const RestartBtn = document.getElementById('RestartBtn');
  let visibleCount = 0;
  const increment = 6;

  function showNextImages() {
    for (let i = visibleCount; i < visibleCount + increment; i++) {
      if (images[i]) {
        images[i].classList.remove('hidden');
      }
    }
    visibleCount += increment;

    if (visibleCount >= images.length) {
      button.style.display = 'none';
      RestartBtn.style.display = 'block';
    }
  }

  function restartGallery() {
    images.forEach(img => img.classList.add('hidden')); // esconde todas
    visibleCount = 0;
    showMoreBtn.style.display = 'block';
    document.getElementById('Galery').scrollIntoView({
        behavior: "smooth"
    })
    RestartBtn.style.display = 'none'; 
  }

  showMoreBtn.addEventListener('click', showNextImages);
  RestartBtn.addEventListener('click', restartGallery);

  button.addEventListener('click', showNextImages);

  const images2 = document.querySelectorAll('.hidden2');
const showMoreBtn2 = document.getElementById('showMoreBtn2');
const restartBtn2 = document.getElementById('RestartBtn2');
let visibleCount2 = 0;
const increment2 = 6;

function showNextImages2() {
  for (let i = visibleCount2; i < visibleCount2 + increment2; i++) {
    if (images2[i]) {
      images2[i].classList.remove('hidden2');
    }
  }
  visibleCount2 += increment2;

  if (visibleCount2 >= images2.length) {
    showMoreBtn2.style.display = 'none';
    restartBtn2.style.display = 'block';
  }
}

function restartGallery2() {
  images2.forEach(img => img.classList.add('hidden2'));
  visibleCount2 = 0;
  showMoreBtn2.style.display = 'block';
  restartBtn2.style.display = 'none';

  document.getElementById('Galery2').scrollIntoView({
    behavior: "smooth"
  });
}

showMoreBtn2.addEventListener('click', showNextImages2);
restartBtn2.addEventListener('click', restartGallery2);

 function showPopup(id) {
    document.getElementById(id).style.display = "flex";
  }

  function closePopup(id) {
    document.getElementById(id).style.display = "none";
  }

  document.getElementById("sendWhatsApp").addEventListener("click", function () {
    const name = document.querySelector(".Name").value.trim();
    const service = document.getElementById("MyServices").value.trim();

    if (!name) {
      showPopup("popupName");
      return;
    }

    if (!service) {
      showPopup("popupService");
      return;
    }

    const phoneNumber = "557488588404";
    const message = `Olá, meu nome é ${name}. Quero contratar o seu serviço de ${service}. Que dia temos disponíveis para agendarmos?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });

  // Fecha popup ao clicar fora da caixa
  window.addEventListener("click", function (e) {
    const popups = ["popupName", "popupService"];
    popups.forEach((id) => {
      const popup = document.getElementById(id);
      if (e.target === popup) popup.style.display = "none";
    });
  });