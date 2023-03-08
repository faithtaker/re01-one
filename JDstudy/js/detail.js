let prev = document.querySelector(".arrow-prev");
let next = document.querySelector(".arrow-next");

let ul = document.querySelector(".list-info ul");

prev.onmousedown = function () {
  ul.style.left = "0px";
};

next.onmousedown = function () {
  ul.style.left = "-180px";
};

let mainImg = document.querySelector(".main-img");
let lisImg = document.querySelectorAll(".list-info img");

for (let i = 0; i < lisImg.length; i++) {
  lisImg[i].onmousedown = function () {
    mainImg.src = lisImg[i].src;
  };
}

//黄色方块随着鼠标移动而移动==========
let smallBox = document.querySelector(".small-box");
let goldBox = document.querySelector(".gold-box");
let bigBox = document.querySelector(".big-box");
let bigBoxImg = document.querySelector(".big-box img");

smallBox.onmouseover = function () {
  goldBox.style.display = "block";
  bigBox.style.display = "block";
    bigBoxImg.src = mainImg.src;
};

smallBox.onmouseout = function () {
  goldBox.style.display = "none";
  bigBox.style.display = "none";
};


smallBox.onmousemove = function (e) {
    e = e || window.event;
    //获取放大镜的位置
    //    鼠标距浏览器窗口的距离  放大镜的一半       小盒子距父元素的距离
    let top = e.clientY - goldBox.offsetHeight / 2 - smallBox.offsetTop;
    let left = e.clientX - goldBox.offsetWidth / 2 - smallBox.offsetLeft -130;

    //范围校验
    if (top <= 0) {
        top = 0;
    } else if (top >= smallBox.offsetHeight - goldBox.offsetHeight) {
        top = smallBox.offsetHeight - goldBox.offsetHeight;
    }
    if (left <= 0) {
        left = 0;
    } else if (left >= smallBox.offsetWidth - goldBox.offsetWidth) {
        left = smallBox.offsetWidth - goldBox.offsetWidth;
    }

    //设置回去
    goldBox.style.top = top + 'px';
    goldBox.style.left = left + 'px';

  bigBoxImg.style.top = -top*2.55 + 'px';
  bigBoxImg.style.left = -left*2.55 + 'px';
  
  
}