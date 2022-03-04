// export function halo_dunia () {
//     console.log('halo dunia !');
// }

export function btn_navbar () {
    const btn_navbar = document.getElementsByName('btn-navbar');
    const default_touch = document.getElementsByClassName('default-touch');

    btn_navbar.forEach ((e,i) => {
        // console.log(e,i);
        btn_navbar[i].addEventListener ('click', function (v) {
            
            for (i = 0;i < default_touch.length; i++) {
                // console.log(default_touch[i]);
                default_touch[i].classList.remove('touch');
            }

            // console.log(this.classList.add('touch'));
            this.classList.add('touch')
            // console.log(this);
        });
    });
}