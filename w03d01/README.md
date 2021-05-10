# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] EJS

### TCP
* constant connection with between client and 
* either party can send information at any time

### HTTP
* built on top of the constant TCP connection
* request => response cycle

### In order to communicate:
* address of the server: host/domain `localhost`
* one host multiple applications
* apt number => port
* 65,535 ports
* 80, 8080, 443, 5432, 3000, 8000, 22

* domain && port

www.vasiliyscomp.com 34.26.17.12 ipv4 ipv6 June 6th

### Communicating via HTTP
* put together a request
  * update something POST
  * give me something GET
* HTTP verbs GET, POST

* specify what we want to do it to
* path/url  `/users`, `/maps`, `/photos`

### HTTP Status Codes
* status codes tell the browser how the request went
* 304, 200, 404, 500

### Middleware
* Sits between the request and the response
* Runs before route-handlers
* Parsing => turn info from one format to another
* cookies => req.cookies
* body => req.body
* encryption

### Templating/Server-side Rendering
1. a template
2. data


