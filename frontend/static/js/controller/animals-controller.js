import Controller from "./controller.js";

export default class AnimalsController extends Controller {
    fetchedData;
    filteredData;
    filterValues = {};

    init = function() {
        fetch(`${this.apiUrl}/animals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.fetchedData = this.filteredData = response.data;
            this.createTable();
        });
    };

    createTable = function() {
        this.createHeader();
        this.createBody();
    };

    createHeader = function() {
        const table = document.getElementById('animalsTable');
        const thead = table.createTHead();
        thead.setAttribute("style", "position: sticky; top: 0;");
        const headerRow = thead.insertRow();
        const element = this.fetchedData[0];
        for(const animalProperty in element) {
            if (Object.prototype.hasOwnProperty.call(element, animalProperty)) {
                const cell = headerRow.insertCell();
                const cellTextNode = document.createTextNode(animalProperty);
                cell.appendChild(cellTextNode);
                cell.addEventListener('click', this.sort.bind(this));
            }
        }
        const filterRow = thead.insertRow();
        for(const animalProperty in element) {
            if (Object.prototype.hasOwnProperty.call(element, animalProperty)) {
                const cell = filterRow.insertCell();
                const inputElement = document.createElement("input");
                inputElement.setAttribute("type", "text");
                inputElement.setAttribute("id", animalProperty);
                cell.appendChild(inputElement);
                inputElement.addEventListener('change', this.filter.bind(this));
            }
        }
    };

    createBody = function() {
        const table = document.getElementById('animalsTable');
        const body = table.createTBody();
        this.filteredData.forEach(animal => {
            const row = body.insertRow();
            row.addEventListener('click', ($event) => alert($event.target.textContent));
            for(const animalProperty in animal) {
                if (Object.prototype.hasOwnProperty.call(animal, animalProperty)) {
                    const cell = row.insertCell();
                    cell.appendChild(document.createTextNode(animal[animalProperty]));
                }
            }
        });
    };

    sort = function(event) {
        const previousSort = event.target.getAttribute("sort");
        const currentSort = previousSort && previousSort === 'asc' ? 'desc' : 'asc';
        event.target.setAttribute("sort", currentSort);
        const sortField = event.target.textContent;
        this.filteredData.sort((a, b) => currentSort === 'asc' 
                                        ? a[sortField] > b[sortField] 
                                        : a[sortField] < b[sortField] );
        this.rerenderBody();
    };

    filter = function(event) {
        const filterValue = event.target.value;
        const filterField = event.target.getAttribute('id');
        this.filterValues[filterField] = filterValue;
        this.filteredData = this.fetchedData;
        for(const entry in this.filterValues) {
            this.filteredData = this.filteredData.filter(
                a => a[entry]?.includes(this.filterValues[entry]));
        }
        this.rerenderBody();
    };

    rerenderBody = function() {
        document.querySelector('#animalsTable > tbody').remove();
        this.createBody();
    }
}