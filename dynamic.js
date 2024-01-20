document.getElementById('checkbox').addEventListener('change', function(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// Set initial theme on page load
window.onload = function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('checkbox').checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};
