document.querySelector('#menu-btn').onclick = () =>{
    document.querySelector('#menu-btn').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active')
}

var typed = new Typed('.typing-text', {
    strings : ['FAN MADE WEBSITE', 'FAN MADE WEBSITE', ],
    loop : true,
    typeSpeed : 140
});
