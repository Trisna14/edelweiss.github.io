export function footer_show () {
    
    // const full_body = document.body;
    // console.log(full_body);

    // const bodyHeight = window.innerHeight;
    // console.log(bodyHeight);

    const reveal = document.querySelector('.reveal');
    const footer = document.getElementById('footer');
    // console.log(footer.classList.add('show'));
    // console.log(footer);

    window.addEventListener ('scroll', function () {

        // console.log(reveal.getBoundingClientRect().top);
        if (reveal.getBoundingClientRect().top < 717) {
            console.log('show');

            footer.classList.add('show-footer');
        } else if (reveal.getBoundingClientRect().top > 717) {
            footer.classList.remove('show-footer');
        }
    });
}