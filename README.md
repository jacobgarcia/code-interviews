# Interview General Questions

-   Security Groups<br/>
A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.
-   How web sockets work?<br/>
WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time.
The client establishes a WebSocket connection through a process known as the WebSocket handshake. This process starts with the client sending a regular HTTP request to the server. An Upgrade header is included in this request that informs the server that the client wishes to establish a WebSocket connection.
-   Basic structure of an HTTP request object<br/>
  - A simple request message from a client computer consists of the following components:
  - A request line to get a required resource, for example a request GET /content/page1.html is requesting a resource called /content/page1.html from the server.
  - Headers (Example – Accept-Language: EN).
  - An empty line.
  - A message body which is optional.
- What is a Buffer?<br/>
Is a region of a physical memory storage used to temporarily store data while it is being moved from one place to another.
- Stateless Protocol
A stateless protocol is a communications protocol in which no session information is retained by the receiver, usually a server. Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation.
- Continous Integration (CI) VS Continous Delivery (CD) VS Continous Deployment
  - CI: Developers practicing continuous integration merge their changes back to the main branch as often as possible. The developer's changes are validated by creating a build and running automated tests against the build.
  - CD: Continuous delivery is an extension of continuous integration to make sure that you can release new changes to your customers quickly in a sustainable way. This means that on top of having automated your testing, you also have automated your release process and you can deploy your application at any point of time by clicking on a button.
  - CD (Deployment): Continuous deployment goes one step further than continuous delivery. With this practice, every change that passes all stages of your production pipeline is released to your customers.
- DRY Principle<br/>
DRY stand for "Don't Repeat Yourself," a basic principle of software development aimed at reducing repetition of information. The DRY principle is stated as, "Every piece of knowledge or logic must have a single, unambiguous representation within a system."
