const faceATag = document.querySelector('.logos-face');
const instaATag = document.querySelector('.logos-insta');


faceATag.onmouseover= () => {
    const logo = document.querySelector('.face-social').style.zIndex= "-1";
};

faceATag.onmouseout= () => {
    const logo = document.querySelector('.face-social').style.zIndex= "1";
};

instaATag.onmouseover= () => {
    const logo = document.querySelector('.insta-social').style.zIndex= "-1";
};

instaATag.onmouseout= () => {
    const logo = document.querySelector('.insta-social').style.zIndex= "1";
};