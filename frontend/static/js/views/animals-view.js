import AnimalsController from '../controller/animals-controller.js';
import View from './view.js';

export default class AnimalsView extends View {

    getView() {
        return `
          <h3>View our animal database to see reported missing and found animals.</h3>
          <p id="returnedData"></p>
          <table id="animalsTable" class="animals-table"></table>
        `;
    }

    initController() {
        new AnimalsController().init();
    }
}