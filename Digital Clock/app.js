const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span class="bg-dark p-5">${h}</span> :
        <span class="bg-dark p-5">${m}</span> :
        <span class="bg-dark p-5">${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);