console.log("Hello");

var moment = require("moment");
import { sqrt } from "mathjs";
var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(sqrt(4).toString());

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      },
    };
  },
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
