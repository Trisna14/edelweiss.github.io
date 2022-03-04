export function show_sidebar () {

    const btn_show = document.getElementsByName('btn-navbar');
    const sidebar = document.getElementsByClassName('sidebar');

    btn_show.forEach((e,i) => {
        // console.log(e,i);

        e.addEventListener ('click', function () {

            for (i = 0;i < sidebar.length; i++) {
                sidebar[i].classList.remove('show-sidebar');
            }

            // console.log(this.attributes.href.value.slice(1));
            const target_sidebar = document.getElementById(this.attributes.href.value.slice(1));
            console.log(target_sidebar.classList.add('show-sidebar'));
        });
    });
}