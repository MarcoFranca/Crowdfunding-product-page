const navButton = document.querySelector('#menu-button');
const navigationUl = document.querySelector("#menu");
const selectBambo = document.querySelector("#bambo-btn");
const selectBlack = document.querySelector("#black-btn");
const selectMahogany = document.querySelector("#mahogany-btn");
const closeModal = document.querySelector('#modal-button');
let modal = document.querySelector('#modal')

// ***** menu bar ****
navButton.addEventListener('click',()=>{
    changeMenu(
        "#menu",
        "flex",
        '#menu-img',
        './images/icon-hamburger.svg',
        './images/icon-close-menu.svg',
        'color');
});

navigationUl.addEventListener('click', ()=>{
    unUseBackground("");
    changeMenu("#menu",
        "flex",
        '#menu-img',
        './images/icon-hamburger.svg',
        './images/icon-close-menu.svg',
        'color');
});

//***** Select Rewards ******

selectBambo.addEventListener('click',()=>{
    rewardBtn("#bambo");
    document.documentElement.scrollTop = 550;
});

selectBlack.addEventListener('click',()=>{
    rewardBtn("#black");
    document.documentElement.scrollTop = 1000;
});

selectMahogany.addEventListener('click',()=>{
    rewardBtn("#mahogany");
    document.documentElement.scrollTop = 1500;
});

closeModal.addEventListener('click', () =>{
    document.querySelector(`#pledge`).removeAttribute('checked')
    document.querySelector(`#bambo`).removeAttribute('checked')
    document.querySelector(`#black`).removeAttribute('checked')
    document.querySelector(`#mahogany`).removeAttribute('checked')
    document.querySelector('#modal').style.display = "none"
    unUseBackground("")
})

modal.addEventListener('click', ()=>{
    selectCard('#pledge')
    selectCard('#bambo')
    selectCard('#black')
    selectCard('#mahogany')
})



// ******** functions ********

// ***** main menu ******

function changeMenu(id, className, idImg, srcImgOpn, srcImgClose, classBack){
    if (document.querySelector(id).style.display === className){
        document.querySelector(id).style.display = 'none'
        changeImage(idImg, srcImgOpn)
        unUseBackground("")
}else {
        document.querySelector(id).style.display = className
        changeImage(idImg, srcImgClose)
        unUseBackground(classBack)
    }
}

// ***** reuse functions *******

function changeImage(id, srcImg) {
    document.querySelector(id).setAttribute('src', srcImg)
}

function unUseBackground(className) {
    document.querySelector('body').setAttribute('class', className)
}

function rewardBtn(id) {
    document.querySelector("#modal").style.display = "flex"
    document.querySelector(id).setAttribute('checked', 'checked')
    document.querySelector(id + "-button").style.display = "initial"
    unUseBackground("color")
    selectCard(id)
}


console.log(modal)

function selectCard(id) {
    let input = document.querySelector(id)

    if (document.querySelector(id).checked === true){
        document.querySelector(`#${input.id}-id`).classList.add("madal__card__green");
        document.querySelector(id + "-button").style.display = "initial";
    }else {
        document.querySelector(`#${input.id}-id`).classList.remove("madal__card__green");
        document.querySelector(id + "-button").style.display = "none";
    }
}

