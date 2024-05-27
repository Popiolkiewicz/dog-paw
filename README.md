Key concepts/challenges:

- Technologies used: JS, HTML, CSS, nodejs, ExpressJS, npm, Java, mvn, Quarkus
- Single page application (SPA) - routing is handled on client side,
- Backend using Quarkus, 
- Mock backend using node,
- No external HTML templating engine 

------------------------------------------------

At this moment there are two backends available:

1. Quarkus backend:

To start, run `./mvnw compile quarkus:dev -Pbuild-frontend`

Frontend client is available under `http://localhost:8080/client`.

Please note that using Quarkus backend as static web content server requires you to rerun mvn wrapper command to see changes applied to that content.

See `backend/README.md` for more information about Quarkus and backend.

2. Node mock backend:

To start node mock backend, run `npm run start` inside `mock_backend` directory.

Frontend client is available under `http://localhost:3333/`.

Running this mock server provides you with static web content live reload thanks to `nodemon` usage.

------------------------------------------------