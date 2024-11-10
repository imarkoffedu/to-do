import "../../styles/nav.scss";
import "../icons/plus" ;
import plus from "../icons/plus";
import search from "../icons/search";

/**
 * Creates a navigation header element for the to-do application.
 * The header includes a logo, a search input with an icon, and a button to add a new to-do item.
 *
 * @returns {Node} The first child of the created header element.
 */
export default function nav(): Node {
    const headerElement = document.createElement('div');
    
    headerElement.innerHTML = `
        <header>
            <h1 class="logo">To-do</h1>
            <nav>
                <div class="input-group">
                    ${search()}            
                    <input placeholder="Search" />
                </div>
                <button>
                    ${plus()}
                    New to-do
                </button>
            </nav>
        </header>
    `;
    
    return headerElement.firstElementChild as Node;
}