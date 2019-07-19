var ghpages = require("gh-pages");
console.log("正在发布 github gh-pages 分支");

ghpages.publish("dist", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("发布 成功");
});
