import Controller from "./controller.js";

export default class ReportController extends Controller {

    init = function() {
        document.getElementById('sendReportButton').addEventListener('click', (event) => {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                kind: document.getElementById('kind').value,
                dissapearanceDetails: document.getElementById('dissDetails').value,
                isVaccinated: document.getElementById('isVaccinated').checked
            };
            fetch(`${apiUrl}/report`, {
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

