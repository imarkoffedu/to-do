import Modal from "../ui/Modal";
import plus from "../icons/plus";
import $ from 'jquery';

/**
 * Class representing a To-Do modal.
 */
export default class ToDo {
    open: () => void = () => {};

    close: () => void = () => {};

    constructor() {
        const modalTitle = $('<h2>New ToDo</h2>');
        const modalContent = $('<p>ToDo content</p>');
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