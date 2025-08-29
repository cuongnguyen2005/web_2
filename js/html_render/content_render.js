const baseURL = "https://4292025-fewgffe9452e-1341578122.cos.accelerate.myqcloud.com/six/";
const images = ["img-1-1.js", "img-1-2.js", "img-1-3.js", "img-1-4.js", "img-1-5.js", "img-2-1.js", "img-2-2.js", "img-2-3.js", "img-2-4.js", "img-2-5.js"];

const content = document.getElementById('container');

images.forEach((src, index) => {
    const div = document.createElement("div");
    div.className = "content" + (index === 0 ? " active" : "");
    div.innerHTML = `<img src="${baseURL + src}" alt="">`;
    content.appendChild(div);
});