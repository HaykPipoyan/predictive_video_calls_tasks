let text = document.querySelector(".text");
const show = document.querySelector('.show');
let isShown = false;

let obj = {
    isShown : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem! Ratione laboriosam ullam officia fugit deleniti! Voluptatibus et, voluptatum incidunt quia aliquam repudiandae, po...',
    isNot : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem! Ratione laboriosam ullam officia fugit deleniti! Voluptatibus et, voluptatum incidunt quia aliquam repudiandae, porro vel molestiae illum ipsa hic officiis non totam, voluptatem fugit corporis debitis aperiam tenetur facilis. Officiis ad praesentium ratione laboriosam a mollitia earum inventore. Rerum, culpa.'
}

text.innerHTML = obj.isShown;

show.onclick = () =>{
    isShown = !isShown;

    if (!isShown) {
        text.innerHTML = obj.isShown;
        show.innerHTML = "show more"
    }else {
        text.innerHTML = obj.isNot;
        show.innerHTML = "show less"
    }
}