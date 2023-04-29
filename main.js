// HTTP modules
const http = require("http")

const server = http.createServer((request, response) => {
    // request - so'rov
    // response - javob
    console.log(request.url);
    response.write("Salom Backend xush kelibsan")
    response.end()
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000');
})