document.getElementById('button1').addEventListener('click', function ranNUmber() {
    const x = (Math.round(Math.random() * 100)) + 1;
    document.getElementById('content').innerHTML = x;
});