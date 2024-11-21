import "../../../styles/nav.scss";
import search from "../../../components/icons/search";
import Categories from "./Categories/Categories";
import NewToDo from "./NewToDo";

/**
 * Creates a navigation header element for the to-do application.
 * The header includes a logo, a search input with an icon, and a button to add a new to-do item.
 *
 * @returns {Node} The first child of the created header element.
 */
export default class Nav {
    private readonly headerElement: HTMLElement;
    
    constructor() {
        this.headerElement = document.createElement('header');

        this.headerElement.innerHTML = `
            <div class="header-left">
                <h1 class="logo">To-do</h1>
                
            </div>
            <nav>
                <div class="input-group">
                    ${search()}
                    <input placeholder="Search" />
                </div>
            </nav>
        `;

        const categoriesButton = new Categories().getButton()[0];
        this.headerElement.querySelector('h1')?.after(categoriesButton);

        const addButton = new NewToDo().getButton()[0];
        this.headerElement.querySelector('nav')?.appendChild(addButton);
    }
    
    render() {
        return this.headerElement;
    }
}