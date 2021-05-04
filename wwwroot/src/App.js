const syaHello = (name) => {
    return `Hello ${name}!!!`;
};
const title = document.querySelector(".title");
title.innerHTML = syaHello("My Friend");
