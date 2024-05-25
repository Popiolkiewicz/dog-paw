export default class AnimalsController {
    fetchedData;
    init = function() {
        fetch('http://127.0.0.1:3333/api/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.fetchedData = response.data;
            this.populateTable();
        });
    }

    populateTable = function() {
        const table = document.getElementById('animalsTable');
        const header = table.createTHead();
        const headerRow = header.insertRow();
        for(const animalProperty in this.fetchedData[0]) {
            if (Object.prototype.hasOwnProperty.call(this.fetchedData[0], animalProperty)) {
                const cell = headerRow.insertCell();
                const cellTextNode = document.createTextNode(animalProperty);
                cell.appendChild(cellTextNode);
                cell.addEventListener('click', this.sort.bind(this));
            }
        }
        const body = table.createTBody();
        this.fetchedData.forEach(animal => {
            const row = body.insertRow();
            for(const animalProperty in animal) {
                if (Object.prototype.hasOwnProperty.call(animal, animalProperty)) {
                    const cell = row.insertCell();
                    cell.appendChild(document.createTextNode(animal[animalProperty]));
                }
            }
        });
    }

    sort = function(event) {
        const sortField = event.target.textContent;
        this.fetchedData.sort((a, b) => a[sortField] < b[sortField]);
        const table = document.getElementById('animalsTable');
        table.innerHTML = '';
        this.populateTable();
    }
}