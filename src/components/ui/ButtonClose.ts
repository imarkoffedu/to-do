import $ from 'jquery';
import "../../styles/components/btn-close.scss"

export default class ButtonClose {
    private readonly button: JQuery;
    constructor(onClick: () => void) {
        this.button = $('<button class="btn-close"></button>');
        this.button.on('click', onClick);
    }
    
    render(): JQuery {
        return this.button;
    }
}