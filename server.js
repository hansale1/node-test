const express = require("express"); // 'expresss'에서 'express'로 수정
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

// /pet 경로로 요청이 오면 안내문을 띄워줍니다.
app.get("/pet", function (req, res) {
  res.send("Pet 관련된 안내문을 여기에 작성하세요.");
});
