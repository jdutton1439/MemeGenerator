const imgLink = document.getElementById("imgLink");
const topText = document.getElementById("topText");
const btmText = document.getElementById("btmText");

const docBody = document.getElementById("content");

const formMeme = document.getElementById("memeForm");
const submitMeme = document.getElementById("memeSubmit");   //element id reversed for consistency in css/html files

const defaultLink = "";

function createMeme(_imgLink, _topText, _btmText) {
    let img = document.createElement("img");
    let top = document.createElement("p");
    let btm = document.createElement("p");

    let container = document.createElement("div");

    container.setAttribute("class", "memeImgTemplate");
    
    img.setAttribute("src", _imgLink);
    img.setAttribute("alt", "trouble loading image");

    top.setAttribute("class", "memeTemplate");
    top.setAttribute("id", "top");
    top.innerText = _topText;

    btm.setAttribute("class", "memeTemplate");
    btm.setAttribute("id", "bottom");
    btm.innerText = _btmText;

    container.appendChild(top);
    container.appendChild(btm);
    container.appendChild(img);

    img.style.width = "100%";
    img.style.height = "100%";

    docBody.appendChild(container);
}

submitMeme.addEventListener("click", function(e) {
    if ((imgLink.value && topText.value && btmText.value) !== "") {
        createMeme(imgLink.value, topText.value, btmText.value);
        formMeme.reset();
    }
});

docBody.addEventListener("click", function(e) {
    if (e.target.parentElement.classList.contains("memeImgTemplate")) docBody.removeChild(e.target.parentElement);
});