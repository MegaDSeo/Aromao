const btn = document.getElementById('button');
const form = document.getElementById('form');
const icon = document.getElementById("bar")
const menu = document.getElementById("ul");
const items = document.querySelectorAll("#menu #ul li");



icon.addEventListener('click', () => {
    menu.classList.toggle("menu-open");
});


items.forEach(items => {
    items.addEventListener('click', ()=>{
        menu.classList.remove("menu-open");
    })
})
