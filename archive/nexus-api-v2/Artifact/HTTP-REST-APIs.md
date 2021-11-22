# Web & HTTPs - Introduction & to HTTP(s) APIs #

[[_TOC_]]

## Overview ##

There are many different ways how to structure a web application. The front-end can take different 
forms, and it can be daunting to understand how to connect the two.

The following guide is an overview of what goes on between the **back-end** and the **front-end**
of a web application - how such communicate.

## Definitions ##

> *The Terms **"Client and Host"** may be used interchangeably where *"Host"* becomes *"Server"* -
> **"Client and Server"**.*

**HTTP** - HTTP stands for *Hypertext Transfer Protocol* and is used to structure requests and 
responses over the internet. HTTP requires data to be transferred from one point to another over 
the network.

**Server** - the abstract, remote system where the browser’s requests arrive. Request for the 
back-end arrive at the server and are eventually passed on to back-end code.

**Back-End** - the part of a web application which is not directly visible to the user. It receives
requests and prepares data; data that's then transmitted back to the user’s browser. Back-end code is
built to run on a *server* and is **never running on the user’s machine**.

**Front-End** - the component of a web application which is intended to be used **directly by the the
user** - code which is executed inside the browser, or markup which is interpreted while
rendering a page. 
- HTML, CSS and in-browser JavaScript are good examples of the front-end concept. But only in their
*finished* form.
- While the back-end code can be assembling a HTML response, the *final* HTML arriving in the
browser is meant per the "Front-End" definition.

**Browser** - an application capable of submitting HTTP requests (GET, POST, DELETE, etc.) and 
handling of HTTP responses. It sends out HTTP request(s) (requests can be internal or external),
receives responses, processes the received data, and uses it to render a viewable page.

---

## Fundamentals ##

The back-end and front-end both work together to serve a single goal - so a user can access them.

Programmatically:

1. The user points their browser to a website’s url.
2. The *web-browser* (**client**) sends out one or more requests to a *server* (**host**).
3. The browser waits to receive responses from the server.
4. The host-server returns a response; the response is used to render a part of the site.
5. The user waits for the browser (*client*) to render the page.
6. The user sees a useful and usable page.
7. The user interacts with the page.
    - Causing more requests to be sent out, to get more data and display new information, etc.

The front-end and back-end make such possible by causing requests to be sent and then answering
with responses.

### HTTP ###

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and 
responses over the internet. HTTP requires data to be transferred from one point to another over 
the network.

### TCP ###

The transfer of resources happens using TCP (Transmission Control Protocol). When viewing a
webpage, TCP manages the channels between a web-browser browser and the server. TCP is used to
manage many types of internet connections in which one computer or device wants to send something 
to another. 

HTTP is the command language that the device(s) on both sides of the connection must follow in
order to communicate.

### HTTP + TCP ###

When an address into a browser, a user is commanding it to open a TCP channel to the server that 
responds to that URL. A URL maps to an IP Address; thinking of a *contact card* 
equivalent, the URL (a person's name) resolves to an IP address (a contact's phone number).

In such a situation, a computer, which is making the request, is called the client (the browser).
The URL requested is the address that belongs to the server.

Once the TCP connection is established, the client sends a HTTP GET request to the server to 
retrieve the webpage it should display. After the server has sent the response, it closes the TCP 
connection. If a user opens a website in a browser again, or if your browser automatically
requests something from the server, a new connection is opened which follows the same process
described above. GET requests are one kind of HTTP method a client can call. 

---

## REST ##

REST, or REpresentational State Transfer, is an architectural style for providing standards between
computer systems on the web. REST makes it easier for systems to communicate with each other.
REST-compliant systems, often called RESTful systems, are characterized by how they are stateless 
and ***separate the concerns of client and server***.

In the REST architecture, clients send requests to retrieve or modify resources, and servers send
responses to these requests.

### Separation of Concerns - Client & Server ###

In the REST architectural style, the *implementation of the client* and the *implementation of the 
server* can be done independently without each knowing about the other. Such means that the code on
the client can be changed at any time without affecting the operation of the server, and the code
on the server side can be changed without affecting the operation of the client.

As long as each side knows what format of messages to send to the other, they can be kept modular
and separate. Separating the user interface's concerns (the browser front-end, for example) from the
data storage concerns improves the flexibility of the interface across platforms and improves
scalability by simplifying the server components. Additionally, the separation allows each
component the ability to evolve (further develop) independently.

By using a REST interface, different clients hit the same REST endpoints, perform the same actions,
and receive the same responses.

### Statelessness ###

Systems that follow the REST paradigm are stateless, meaning that the server does not need to know
anything about what state the client is in and vice versa. In this way, both the server and the
client can understand any message received, even without seeing previous messages. This constraint
of statelessness is enforced through the use of resources, rather than commands. Resources are the
nouns of the Web - they describe any object, document, or thing that you may need to store or send
to other services.

Because REST systems interact through standard operations on resources, they do not rely on the
implementation of interfaces.

These constraints help RESTful applications achieve reliability, quick performance, and scalability,
as components that can be managed, updated, and reused without affecting the system as a whole,
even during operation of the system.

Now, we’ll explore how the communication between the client and server actually happens when we are
implementing a RESTful interface.

### Request Processes ###

REST requires that a client make a request to the server in order to retrieve or modify data on the
server. A request generally consists of:

- An **HTTP Verb**: what kind of operation to perform which allows the client to pass along 
  information about the request.
- A path to a resource; i.e. a [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) or
  [URL](https://en.wikipedia.org/wiki/URL).
- An optional **message body** containing *data*.

#### GET, POST, PUT, DELETE ####

There are 4 basic *HTTP verbs* used in instructing a specific request action via a REST system:

- **GET** — retrieve a specific resource (by id) or a collection of resources.
- **POST** — create a new resource.
- **PUT** — update a specific resource (by id).
- **DELETE** — remove a specific resource by id.

---

## Client-Host Communication ##

HTTP requests initiate from the web browser and arrive later to the back-end. Those requests may
contain data in the HTTP headers or request body. The intent is often to request new data or to
transmit user-created data to the back-end.

Each request is constructed inside the user’s browser and sent off (either back to the user
or to an internal *URI* - i.e. more "back-end" where the supposed response is further processed,
eventually resulting in a response that'll be transmitted back to the user). There’s *always* a
**single** response for each request that carries information in the HTTP headers and the request
body. These responses arrive at the back-end arrive back at the user’s browser.

Requests which are fired because a user clicked a link, completed a form, or selected a button
configured with JavaScript. 

But there are more possible triggers:

- The user enters a URL, which makes the browser go and request it.
- The browser reads the incoming HTML, and notices that there’s a resource it needs to load, such
  as a JS file, an image or a CSS file. 
    - The back-end goes ahead and requests each with a single new HTTP request. 
        - These "internal" requests don’t have to go to the same back-end.
        - The back-end could load JS from another site. For example, using a CDN because it's
          fast and convenient.
- A user clicks on a plain-ol’ link -- loading and rendering the web-page.
- JavaScript. Examples include:
    - The application wants to have some data loaded in the background.
    - A form triggers an AJAX event rather than requesting a new link.
    - Web-Workers.

### Payloads ###

The back-end usually responds with certain contents of the HTTP body (Payload):

- HTML-formatted responses
- Static files (CSS, JS, images, …)
- JSON data
- Nothing (No Response Body).
    - Simply, a *Status Code* & *Response Headers*
    
Furthermore, the *Web-Browser* can submit:

- HTTP Requests
- Form Data
- JSON Data

---

## Applications ##

### Static Web-Page ###

If a browser requests something like http://example.com/style.css, such is usually handled by the 
web-server (like Nginx) of the back-end. The request is a GET for that resource, and the back-end 
responds with a response, containing the content of the file.

Such static files and/or static websites can be served by the web application (application server) 
itself, but usually this is considered poor practices. Web servers are really quick with this
task, and web applications like Pythonic frameworks (Django, Flask) are often either slow or
error-prone.

### An Example Web-Application ###

Dynamic content can be served via various front-end framework(s) + physical (or 
virtual) infrastructure (e.g. NGINX on a virtual machine). 

From the client's perspective (user's web-browser), the request process looks the same as requesting 
static content - there’s a request which is fired off to a URL.

The browser does not care which part of the back-end will handle the request, it just wants answers. 

The requests arrives at the server, is passed to the web server (NGINX), and then the web server
hands the request over to the application server (For example, python's `Flask` via the
[WSGI](https://www.python.org/dev/peps/pep-3333/) protocol). The web server simply does what 
it’s configured to do.

Furthermore, The Python code (Flask) that's located on a back-end server:

1. Gets the request.
2. Processes the request.
3. Uses the request to do something.
4. Returns a response.
