"use strict";
// write code here
const wall = document.querySelector(".wall");
const spider = document.querySelector(".spider");
const leftPos = wall.clientWidth - spider.clientWidth;
const topPos = wall.clientHeight - spider.clientHeight;
spider.style.top = `${topPos / 2}px`;
spider.style.left = `${leftPos / 2}px`;

//# sourceMappingURL=index.f75de5e1.js.map
