const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;

  const filePath = path.join(__dirname, url);

  console.log("Request: " + url);

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", getContentType(url));
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getContentType(url) {
  const ext = path.extname(url);

  if (ext == ".html") {
    return "text/html";
  }
  if (ext == ".js") {
    return "text/javascript";
  }
  if (ext === ".css") {
    return "text/stylesheet";
  }
  return "text/plain";
}
