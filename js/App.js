import {
  Database,
  Document
} from "https://unpkg.com/@stanlemon/react-pouchdb@0.1.3/dist/react-pouchdb.module.js";
import { Counter } from "./Counter.js";

export function App() {
  return html`
    <${Database}>
      <h1>Counter App</h1>
      <${Document} id="counter">
        <${Counter} />
      <//>
    <//>
  `;
}
