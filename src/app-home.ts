import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-home')
export class AppHome extends LitElement {
    render() {
        return html`<div><h1>Home</h1></div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome
  }
}