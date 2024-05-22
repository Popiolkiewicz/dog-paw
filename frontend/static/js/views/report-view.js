import ReportController from "./../controller/report-controller.js";
import View from "./view.js";

export default class ReportView extends View {
    getView() {
        return `
            <h1>Report missing animal</h1>
            <p>Please provide information about missing animal.</p>
            <div>
                <label for="name">Name:</label>
                <input id="name" type="text" title="Animal name" ></input>
            </div>
            <div>
                <label for="kind">Kind:</label>
                <select id="kind" name="kind" title="Animal kind" >
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                </select>
            </div>
            <div>
                <input id="isVaccinated" type="checkbox" title="Some checkbox"></input>
                <label for="isVaccinated">Is vaccinated?</label>
            </div>
            <div>
                <button id="sendReportButton">Send report</button>
            </div>
            <p id="responseMessage"></p>
        `;
    }

    initController() {
        new ReportController().init();
    }
}