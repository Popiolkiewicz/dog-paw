export default class ReportController {

    init = function() {
        document.querySelector('#sendReportButton').addEventListener('click', (event) => {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                kind: document.getElementById('kind').value,
                dissapearanceDetails: document.getElementById('dissDetails').value,
                isVaccinated: document.getElementById('isVaccinated').checked
            };
            fetch('http://127.0.0.1:3333/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('responseMessage').textContent = data.responseMessage;
            });
        });
    }
}

