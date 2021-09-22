import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
import './app-home'
import './app-what'
import './app-when'
import './app-who'
import './app-contact'


@customElement('app-my')
export class AppMy extends LitElement {

    render() {
        return html`
        <div>
            <app-home> </app-home>
            <app-what> </app-what>
            <app-when> </app-when>
            <app-who> </app-who>
            <app-contact></app-contact>
        </div>
        `
    }
}
declare global {
  interface HTMLElementTagNameMap {
    'app-my': AppMy;
  }
}