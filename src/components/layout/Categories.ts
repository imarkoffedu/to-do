import $ from 'jquery';
import Sheet from "../ui/Sheet";
import ButtonClose from "../ui/ButtonClose";

/**
 * Class representing a Categories component.
 */
export default class Categories {
    // statements for opening and closing the sheet
    close: () => void = () => {};
    open: () => void = () => {};

    /**
     * Creates the header element for the category sheet.
     * @returns {JQuery} The header element.
     * @private
     */
    private header(): JQuery {
        const $headerDiv = $('<div class="sheet-header"></div>');
        const $headerNode = $('<h2>Categories</h2>');
        const $closeButton = new ButtonClose(() => this.close());

        $headerDiv.append($headerNode).append($closeButton.render());

        return $headerDiv;
    }

    /**
     * Creates an instance of Categories.
     */
    constructor() {
        const $categorySheet = $('<div></div>');

        $categorySheet.append(this.header());

        const sheet = new Sheet($categorySheet[0]);
        
        this.open = () => sheet.open();
        this.close = () => sheet.close();
    }

    /**
     * Creates a button element to open the category sheet.
     * @returns {JQuery} The button element.
     */
    getButton(): JQuery {
        const $button = $('<button>Categories</button>');

        $button.on('click', () => this.open());

        return $button;
    }
}