import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'


      //max-width: 50%;
@customElement('app-home')
export class AppHome extends LitElement {

  static styles = css`
    .logo-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }

    .base-wrapper {
      display: flex;
    }

    `

    render() {
      return html`<div class="base-wrapper">
        <div class="logo-wrapper">
          <img 
            src="src/assets/tuh-gdsc-logo-centered.jpg" 
            class="logo"
          />
        </div>
      </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome
  }
}