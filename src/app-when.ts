import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-when')
export class AppWhen extends LitElement {
    render() {
        return html`<div><h1>When</h1></div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-when': AppWhen
  }
}