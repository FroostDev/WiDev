const switch_btn = document.querySelector('.light-dark');
const current_theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

if(current_theme) {
   document.documentElement.setAttribute('data-theme', current_theme); 
}

switch_btn.addEventListener('change', (e) => {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
})