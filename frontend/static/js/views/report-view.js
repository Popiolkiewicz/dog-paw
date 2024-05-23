import ReportController from "./../controller/report-controller.js";
import View from "./view.js";

export default class ReportView extends View {
    getView() {
        return `
            <h3>Report missing animal</h3>
            <p>Please provide information about missing animal.</p>
            <div class="report-form">
                <div>
                    <label for="name">Name</label>
                    <input id="name" type="text" title="Animal name"></input>
                </div>
                <div>
                    <label for="kind">Kind</label>
                    <select id="kind" name="kind" title="Animal kind" >
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </select>
                </div>
                <div>
                    <label for="dissDetails">Dissapearance details</label>
                    <textarea id="dissDetails"></textarea>
                </div>
                <div>
                    <label for="isVaccinated">Is vaccinated?</label>
                    <input id="isVaccinated" type="checkbox" title="Some checkbox"></input>
                </div>
            </div>
            <button id="sendReportButton">Send report</button>
            <p id="responseMessage"></p>
        `;
    }

    initController() {
        new ReportController().init();
    }
}