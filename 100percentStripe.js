const _btn = document.getElementsByClassName("btn");
_btn[0].addEventListener('click', move);

function move() {
    let element = document.getElementById("myBar");
    let width = 10; //一開始預設長度
    let id = setInterval(frame, 10); //10毫秒會執行一次
    function frame() {
        if (width >= 100) {
            clearInterval(id); //停止執行
        } else {
            width++;
            element.style.width = width + "%";
            element.innerHTML = width * 1 + "%";
        }
    }
}