document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.list-btn');
    const contents = document.querySelectorAll('.content')

    buttons.forEach((button, idx) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));

            contents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            contents[idx].classList.add('active');
        })
    })
});