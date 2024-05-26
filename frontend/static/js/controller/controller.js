export default class Controller {
    // host = "http://127.0.0.1:3333"; //mock backend
    host = "http://localhost:8080"; //quarkus main backend
    apiUri = "/api";
    apiUrl = this.host + this.apiUri;
}