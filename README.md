<p align="center">
  <img src="https://cdn.discordapp.com/attachments/637952914953863182/850098320184967178/server.png" alt="Webhook Middleware Logo" />
</p>
<p align="center">
<a href="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server" target="_blank"><img src="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server/badges/coverage.png?b=master" alt="Coverage" /></a>
<a href="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server" target="_blank"><img src="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server/badges/quality-score.png?b=master" alt="Quality" /></a>
<a href="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server" target="_blank"><img src="https://scrutinizer-ci.com/g/MykolasVitkus/webhook-middleware-server/badges/build.png?b=master" alt="Build" /></a>

</p>
  <p align="center">A middleware system purposed to manage webhooks by monitoring, transforming and rerouting received webhook messages.<br> Client side can be found at <a href="https://github.com/MykolasVitkus/webhook-middleware-client">webhook-middleware-client</a> </p>
    

## Description

Webhook Middleware is an open-source system used to manage webhooks. This system allows you to dynamically map incoming webhooks into your own specified structure (by using JsonPath), review latest received and transformed webhooks and monitor their frequencies.

## Installation

To fully setup the system, you must meet these requirements:

* A running instance of MongoDB database (mongo:4.4 image recommended)
* A running instance of [webhook-middleware-client](https://github.com/MykolasVitkus/webhook-middleware-client) (mykolasv/webhook-middleware-app:latest image recommended) with the following environment variables:
  * SERVER_URL - host url of webhook-middleware-server
* A running instance of [webhook-middleware-server](https://github.com/MykolasVitkus/webhook-middleware-server) (mykolasv/webhook-middleware-server:latest image recommended) with the following environment variables:
  * DATABASE_URL - used to access the mongoDB database
  * JWT_SECRET - unique secret key to sign JWT tokens


## Support

Webhook Middleware is an MIT-licensed open source project. Any contribution to this project is welcome and will be valued.

## Stay in touch

Author - [Mykolas Vitkus](https://www.linkedin.com/in/mykolas-vitkus-7b9159152/)

## License

  Webhook Middleware is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
