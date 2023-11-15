const closeNav = document.querySelector('.js-close-nav');
const openNav = document.querySelector('.js-open-nav');
const nav = document.querySelector('.js-nav');
const body = document.querySelector('body');
const closeSearch = document.querySelector('.js-close-search');
const openSearch = document.querySelector('.js-open-search');
const search = document.querySelector('.js-search');
const closeCatalog = document.querySelector('.js-close-catalog');
const openCatalog = document.querySelector('.js-open-catalog');
const catalog = document.querySelector('.js-catalog');

openCatalog.addEventListener('click', (e) => {
    catalog.classList.toggle('open');
});

function closedNav() {
    nav.classList.remove('open');
    body.classList.remove('scroll');
}

function openedNav() {
    nav.classList.add('open');
    body.classList.add('scroll');
}

closeNav.addEventListener('click', closedNav);

openNav.addEventListener('click', openedNav);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        closedNav();
    }
});

document.addEventListener('mouseup', (e) => {
    if (!e.target.closest('.js-content')) {
        closedNav();
    }
});

function closedSearch() {
    search.classList.remove('open');
    body.classList.remove('scroll');
}

function openedSearch() {
    search.classList.add('open');
    body.classList.add('scroll');
}

closeSearch.addEventListener('click', closedSearch);

openSearch.addEventListener('click', openedSearch);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        closedSearch();
    }
});

document.addEventListener('mouseup', (e) => {
    if (!e.target.closest('.js-content')) {
        closedSearch();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const menuItem = document.querySelectorAll('.js-menu-item');

    menuItem.forEach((item) => {
        const submenu = item.querySelector('.js-menu-sub');
        let timerId;

        item.addEventListener('mouseenter', () => {
            clearTimeout(timerId);

            if (submenu.classList.contains('show')) {
                return;
            }

            submenu.classList.add('show');
        })

        item.addEventListener('mouseleave', () => {
            timerId = setTimeout(() => {
                submenu.classList.remove('show');
            }, 100);
        })
    })
});