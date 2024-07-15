let spansIcon = document.querySelector('.icon');
let ulFromLinks = document.querySelector('.links ul');
let links = document.querySelector('.links');

spansIcon.onclick = function () {
    if (links.children[0].classList.contains('Edit')) {
        links.children[0].classList.remove('Edit');
        ulFromLinks.style.display = 'none';
    } else {
        links.children[0].classList.add('Edit');
        ulFromLinks.style.display = 'block';
    }
};

let upSpan = document.querySelector('.up');

window.onscroll = function () {
    if (this.scrollY >= 400) {
        upSpan.classList.add('show');
    } else {
        upSpan.classList.remove('show');
    }
};

upSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
