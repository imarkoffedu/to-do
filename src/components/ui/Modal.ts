import $ from 'jquery';
import "../../styles/components/modal.scss";
import ButtonClose from "./ButtonClose";

/**
 * Class representing a modal dialog.
 */
export default class Modal {
    private modalContainer!: JQuery;
    private readonly title: Element;
    private readonly content: Element;
    private readonly footer: Element;

    /**
     * Create a modal.
     * @param {Element} title - The title element of the modal.
     * @param {Element} content - The content element of the modal.
     * @param {Element} footer - The footer element of the modal.
     */
    constructor(title: Element, content: Element, footer: Element) {
        this.title = title;
        this.content = content;
        this.footer = footer;
        this.initializeModal();
    }

    /**
     * Initialize the modal by creating its structure and setting up event listeners.
     * @private
     */
    private initializeModal() {
        this.modalContainer = $('<div class="modal-container"></div>');
        const modal = $('<div class="modal"></div>');

        const header = $('<div class="modal-header"></div>');
        const headerTitle = $('<h2></h2>');
        const closeButton = new ButtonClose(() => this.close());
        headerTitle.append(this.title);
        header.append(headerTitle);
        header.append(closeButton.render());

        const body = $('<div class="modal-body"></div>');
        body.append(this.content);

        const footerContainer = $('<div class="modal-footer"></div>');
        footerContainer.append(this.footer);

        modal.append(header).append(body).append(footerContainer);
        this.modalContainer.append(modal);

        this.modalContainer.on('click', (e) => {
            if ($(e.target).is(this.modalContainer)) this.close();
        });
    }

    /**
     * Open the modal by appending it to the body.
     */
    open() {
        this.initializeModal();
        $('body').append(this.modalContainer);
    }

    /**
     * Close the modal by adding a closing class and removing it after a timeout.
     */
    close() {
        console.log('closing');
        this.modalContainer.addClass('closing');

        setTimeout(() => {
            this.modalContainer.removeClass('closing');
            this.modalContainer.remove();
        }, 400);
    }
}

type Element = string | HTMLElement | JQuery;