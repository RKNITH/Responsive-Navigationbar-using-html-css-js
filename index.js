const menu = document.getElementById("menu");
const list = document.getElementById("list");

menu.addEventListener('click', () => {
    list.classList.toggle('ham');

    let hamger = document.querySelector('.hamger');
    let ham_child = hamger.firstElementChild;
    if (list.classList.contains('ham')) {
        ham_child.classList.replace('material-symbols-outlined', 'fa-xmark'); // Updated the class name
    } else {
        ham_child.classList.replace('fa-xmark', 'material-symbols-outlined'); // Updated the class name
    }

});












