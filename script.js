document.getElementById('slider').addEventListener('click', function() {
    this.classList.toggle('dark-mode');
    if(this.classList.contains('dark-mode')){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

window.onload = function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const slider = document.getElementById('slider');
        slider.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};