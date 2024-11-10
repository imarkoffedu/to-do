import "../../styles/components/sheet.scss";

/**
 * Class representing a sheet component.
 */
// TODO: Use JQuery and simplify the code
export default class Sheet {
    private readonly sheetElement: HTMLDivElement;
    private readonly overlayElement: HTMLDivElement;
    private readonly contentElement: HTMLElement;

    /**
     * Creates an instance of Sheet. Already becomes visible when created.
     * @param {string | Node} content - The content of the sheet. Can be a string of HTML or a Node.
     * 
     * @example
     * const sheet = new Sheet('<p>Sheet content</p>');
     * 
     * @example
     * const sheet = new Sheet(document.createElement('p'));
     * ...
     * sheet.close();
     */
    constructor(content: string | Node) {
        // Create the main sheet container element
        this.sheetElement = document.createElement('div');
        this.sheetElement.className = 'sheet-container';

        // Create the overlay element and append it to the sheet container
        this.overlayElement = document.createElement('div');
        this.overlayElement.className = 'sheet-overlay';
        this.sheetElement.appendChild(this.overlayElement);

        // Create the content element, set its content, and append it to the sheet container
        this.contentElement = document.createElement('section');
        this.contentElement.className = 'sheet';

        if (typeof content === 'string') {
            this.contentElement.innerHTML = content;
        } else {
            this.contentElement.appendChild(content);
        }

        this.sheetElement.appendChild(this.contentElement);

        // Add an event listener to the overlay to close the sheet when clicked
        this.overlayElement.addEventListener('click', this.close.bind(this));
    }

    /**
     * Opens the sheet by appending it to the document body and starting the opening animation.
     */
    open() {
        this.sheetElement.classList.remove('closing');
        document.body.appendChild(this.sheetElement);
        document.body.classList.add('sheet-animation');
        setTimeout(() => document.body.classList.remove('sheet-animation'), 400);
    }

    /**
     * Closes the sheet by starting the closing animation and removing it from the document body.
     */
    close() {
        this.sheetElement.classList.add('closing');
        document.body.classList.add('sheet-animation');
        setTimeout(() => {
            this.sheetElement.remove();
            document.body.classList.remove('sheet-animation');
        }, 400);
    }
}