export default class ReportController {

    initializeListeners = () => {
        document.querySelector('#sendReportButton').addEventListener('click', (event) => {
            event.preventDefault();
            const responseMessage = document.getElementById('responseMessage');
            const formData = {
                name: document.getElementById('name').value,
                kind: document.getElementById('kind').value,
                isVaccinated: document.getElementById('isVaccinated').value
            };
    
            console.log("Form data to send: " + JSON.stringify(formData));
    
            fetch('http://127.0.0.1:3333/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                responseMessage.textContent = data.responseMessage;
            });
        });
    }
}

