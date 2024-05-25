export default class AnimalsController {
    init = function() {
        fetch('http://127.0.0.1:3333/api/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('returnedData').textContent = JSON.stringify(data);
        });
    }
}