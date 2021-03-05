const showTime = document.querySelector('.show');
nowTime = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    let html = `
    <span>${h%12}</span> :
    `;
    showTime.innerHTML = html;

}
setInterval(nowTime, 1000);