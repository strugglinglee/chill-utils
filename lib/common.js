var colors = require("colors");
const Common = {
  creatHappy(yourname) {
    console.log(`hello ${yourname}`.green); // outputs green text
    console.log("i like cake and pies".underline.red); // outputs red underlined text
    console.log("inverse the color".inverse); // inverses the color
    console.log("OMG Rainbows!".rainbow); // rainbow
    console.log("Run the trap".trap); // Drops the bass F
  },
  // 防抖函数
  debounce(fn, delay = 100) {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },
  // 节流函数
  throttle(fn, interval = 100) {
    let last = 0;
    return function () {
      let context = this;
      let args = arguments;
      let now = +new Date();
      if (now - last >= interval) {
        last = now;
        fn.apply(context, args);
      }
    };
  },
};

export default Common;
