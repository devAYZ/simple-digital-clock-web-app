const print = document.querySelector('.show');
nowTime = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

}
setInterval(nowTime, 1000);