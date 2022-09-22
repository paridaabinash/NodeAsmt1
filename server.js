const http = require('http');
const port = 4000;
const data = {
    Name:'Abinash Parida',
    Age:23,
    city:'Odisha'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1> Hello World </h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})