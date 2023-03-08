// 实现模糊查询============

let searchArr = [
  "小米手机",
  "华为手机",
  "苹果手机",
  "小米电视",
  "小米平板",
  "苹果12",
  "苹果13",
  "苹果手表",
];
let keyword = document.querySelector(".keyword");
let list = document.querySelector(".list");

keyword.oninput = function () {
  list.innerHTML = "";
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].indexOf(keyword.value) != -1 && keyword.value != "") {
      list.innerHTML += "<p>" + searchArr[i] + "</p>";
      list.style.display = "block";
    }
  }
};

keyword.onblur = function () {
  list.style.display = "none";
};

// 实现banner图片自动切换
let count = 0;
let img = document.querySelector(".img");
let lis = document.querySelectorAll(".banner-btn li");
let slide = document.querySelector(".slide-banner");

let imgArr = [
  "1.jpg",
  "2.webp",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

function cutImg() {
  // 切换图片
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
  }
  img.src = "./imgs/" + imgArr[count];
  lis[count].className = "btn-active";
}

let timer = setInterval(function () {
  count++;
  if (count >= imgArr.length) {
    count = 0;
  }
  cutImg();
}, 1000);

slide.onmouseover = function () {
  clearInterval(timer);
};

slide.onmouseout = function () {
  timer = setInterval(function () {
    count++;
    if (count >= imgArr.length) {
      count = 0;
    }
    cutImg();
  }, 1000);
};

// 实现鼠标点击点点切换banner图片============
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = () => {
    count = i;
    cutImg();
  };
}

// 实现点击前后图标切换==========

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.onmousedown = function () {
  count--;
  if (count < 0) {
    count = lis.length - 1;
  }
  cutImg();
};

next.onmousedown = function () {
  count++;
  if (count > lis.length - 1) {
    count = 0;
  }
  cutImg();
};

// 实现吸顶效果=========
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
let search = document.querySelector(".search");
let banner = document.querySelector(".banner-box");
let form = document.querySelector(".form");
let miaosha = document.querySelector(".miaosha");
let tese = document.querySelector(".tese");
let pindao = document.querySelector(".pindao");
let tuijian = document.querySelector(".tuijian");
let kuang = document.querySelector(".kuang");
let kuangDiv = document.querySelectorAll(".kuang div");

let h1 = header.offsetHeight;
let h2 = banner.offsetHeight;
let h3 = miaosha.offsetHeight;
let h4 = tese.offsetHeight;
let h5 = pindao.offsetHeight;
let h6 = tuijian.offsetHeight;

document.onscroll = function () {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  function clear() {
    for (let i = 0; i < kuangDiv.length; i++) {
      kuangDiv[i].style.color = "black";
    }
  }

  if (top < h1 + h2) {
    header.className = "header";
    logo.className = "logo";
    search.className = "search";
    form.className = "form";
    list.style.position = "absolute";
    list.style.margin = "";
    list.style.left = "";
    list.style.top = "";
    // 实现右下角框框滚动到一定距离后变红===============
    kuang.className = "kuang";
  } else {
    header.className = "header headerM";
    logo.className = "logo logoM";
    search.className = "search searchM";
    form.className = "form formM";
    list.style.position = "relative";
    list.style.margin = "0 auto";
    list.style.left = "-85px";
    list.style.top = "-50px";
    kuang.className = "kuang kuang-fixed";
  }

  if (top > h1 && top < h1 + h2) {
    clear();
    kuangDiv[0].style.color = "red";
  } else if (top > h1 + h2 && top < h1 + h2 + h3) {
    clear();
    kuangDiv[1].style.color = "red";
  } else if (top > h1 + h2 + h3 && top < h1 + h2 + h3 + h4) {
    clear();
    kuangDiv[2].style.color = "red";
  } else if (top >= h1 + h2 + h3 + h4) {
    clear();
    kuangDiv[3].style.color = "red";
  }
};
