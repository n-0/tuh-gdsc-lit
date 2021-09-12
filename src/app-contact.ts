import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-contact')
export class AppContact extends LitElement {
    render() {
        return html`<div><h1>Contact</h1></div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-contact': AppContact
  }
}