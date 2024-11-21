import Modal from "../../../components/ui/Modal";
import plus from "../../../components/icons/plus";
import $ from 'jquery';

/**
 * Class representing a To-Do modal.
 */
export default class NewToDo {
    open: () => void = () => {};

    close: () => void = () => {};

    constructor() {
        const modalTitle = $('<h2>New NewToDo</h2>');
        const modalContent = $('<p>NewToDo content</p>');
        const addTaskButton = $('<button class="primary">Add Task</button>');

        const modal = new Modal(modalTitle, modalContent, addTaskButton);

        this.open = () => modal.open();
        this.close = () => modal.close();
    }

    /**
     * Get the button element for adding a new to-do.
     * @returns {JQuery} The jQuery object representing the button.
     */
    getButton(): JQuery {
        const $button = $(`<button>${plus()} New to-do</button>`);

        $button.on('click', () => this.open());

        return $button;
    }
}