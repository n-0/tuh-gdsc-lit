import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-who')
export class AppWho extends LitElement {
    render() {
        return html`<div><h1>Who</h1></div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-who': AppWho
  }
}