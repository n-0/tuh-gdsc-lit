import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-what')
export class AppWhat extends LitElement {
    render() {
        return html`<div><h1>What</h1></div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-what': AppWhat
  }
}