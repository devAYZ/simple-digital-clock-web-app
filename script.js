const print = document.querySelector('.show');
nowTime = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

}
setInterval(nowTime, 1000);