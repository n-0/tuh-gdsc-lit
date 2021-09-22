import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-contact')
export class AppContact extends LitElement {


    static styles = css`
        .contact {
            display: grid;
            grid-template-rows: 200px 300px 400px;
            grid-template-columns: 335px 670px 670px 335px;
            gap: 25px;
            height: 800px;
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            font-size: 2.8em;
            color: #5f6368;
        }
    `

    render() {
        return html`<div class="contact">
            <div class="title">
                <h1>Contact</h1>
            </div>
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-contact': AppContact
  }
}