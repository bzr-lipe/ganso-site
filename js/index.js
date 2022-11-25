const logo = document.querySelector('.logo-image-initial-page');


logo.onmouseover= () => {
    logo.src= "./images/logos/logo_lado.png";
};

logo.onmouseout= () => {
    logo.src= "./images/logos/logo_branco_lado.png";
};
