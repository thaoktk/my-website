var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;

    if (isClosed) {
        header.style.height = 'auto';
        header.style.backgroundColor = 'white';
    } else {
        header.style.height = null;
        header.style.backgroundColor = 'transparent';
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        header.style.height = null;
    }
}

var header = document.getElementById('header')
var navHeader = document.querySelector('#nav li a')

window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    if (scrollTop > 100) {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
}