// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
  function addHours(date, hours) {
    date.setTime(date.getTime() + hours * 60 * 59 * 1000);
    return date;
  }

  //let date = addHours(new Date(), 3);
  let date = new Date();

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get("/api/:date?", (req, res) => {
  let date = req.params.date;
  const dateReg = /^[0-9]+$/;
  const isTimeStamp = dateReg.test(date);

  if (!isTimeStamp) {
    const getTimeStamp = Date.parse(date);
    const utcDate = new Date(getTimeStamp).toUTCString();

    getTimeStamp
      ? res.json({ unix: getTimeStamp, utc: utcDate })
      : res.json({ error: "Invalid date" });
  } else {
    const getTimeStamp = parseInt(date);
    const utcDate = new Date(getTimeStamp).toUTCString();

    res.json({ unix: getTimeStamp, utc: utcDate });
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
