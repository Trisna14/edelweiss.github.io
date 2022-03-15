export function btn_navigasi () {
    // console.log('halo dunia !')

    const btn_nav = document.getElementById('btn-navbar');

    btn_nav.addEventListener ('click', () => {

        const navigasi = document.getElementsByClassName('navigasi')[0];
        navigasi.classList.toggle('navigasi-show');
    });
}