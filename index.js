const indicator = document.querySelector('.lvl-indicator');
const items = document.querySelectorAll('.lvl-item');

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handleIndicator(e.target) });
    item.classList.contains('is-active') && handleIndicator(item);
});

const menuShowBtn = document.querySelector('.menu__show-btn')

menuShowBtn.addEventListener('click', function(){
    menuShowBtn.classList.toggle('open');
  });
  
const menuDisplayBtn = document.querySelector('.menu__display-btn')

menuDisplayBtn.addEventListener('click', function(){
    menuDisplayBtn.classList.toggle('open');
  });
  
const menuLinksBtn = document.querySelector('.liks-btn', '.liks-btn1')

menuLinksBtn.addEventListener('click', function(){
    menuLinksBtn.classList.toggle('open');
  });  