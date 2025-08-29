function adjustMainPadding() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const main = document.querySelector('main.container');

    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;

    main.style.paddingTop = headerHeight + 10 + 'px';
    main.style.paddingBottom = footerHeight + 20 + 'px';
}

window.addEventListener('load', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);