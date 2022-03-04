export function paper () {
    
    const arrow = document.getElementsByClassName('arrow');

    // console.log(arrow);

    for (let i = 0;i < arrow.length; i++) {
        // console.log(arrow[i]);


        arrow[i].addEventListener ('mouseover', function () {

            // console.log(this.previousElementSibling.previousElementSibling.style.width = '150%');
            // console.log(this.previousElementSibling.previousElementSibling.style.height = '150%');
    
            this.previousElementSibling.previousElementSibling.classList.add('touch');
            this.previousElementSibling.classList.toggle('index');
            // console.log(this.previousElementSibling.previousElementSibling.classList.toggle('touch'));
            // console.log(this.previousElementSibling.previousElementSibling);
    
            this.previousElementSibling.classList.add('index');
            
    
            this.classList.add('touch-blank');
    
            // console.log(this.previousElementSibling);
    
        });
    
        arrow[i].addEventListener ('mouseout', function () {
    
            // console.log(this.previousElementSibling.previousElementSibling.style.width = '150%');
            // console.log(this.previousElementSibling.previousElementSibling.style.height = '150%');
    
            this.previousElementSibling.previousElementSibling.classList.remove('touch');
            // console.log(this.previousElementSibling.previousElementSibling.classList.toggle('touch'));
            // console.log(this.previousElementSibling.previousElementSibling);
            this.previousElementSibling.classList.toggle('index');
    
            this.previousElementSibling.classList.remove('index');
    
            this.classList.remove('touch-blank');
    
        });
    }

    // return false;
    

    const pointer = document.getElementsByClassName('pointer');

    for (let i = 0;i < pointer.length; i++) {

        pointer[i].addEventListener ('mouseover', function () {

            // console.log(this.previousElementSibling.classList.add('touch'));
            // console.log(this.nextElementSibling.classList.add('touch-blank'));
            this.previousElementSibling.classList.add('touch');
            this.nextElementSibling.classList.add('touch-blank');
            // console.log(this);
    
            // console.log(this.addEventListener ('click', function () {
            //     console.log(this.nextElementSibling.nextElementSibling.click());
            // }));
    
            this.addEventListener ('click', function () {
                console.log(this.nextElementSibling.nextElementSibling.click());
            });
        }) 
    }

    

}
