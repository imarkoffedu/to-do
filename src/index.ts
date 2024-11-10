/**
 * Entry point of the application.
 *
 * Imports the navigation component and styles, then appends the navigation
 * component to the document body.
 */

import Nav from "./components/layout/Nav";
import "./styles/styles.scss";

document.body.appendChild(new Nav().render());

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);