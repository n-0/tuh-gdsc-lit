import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
/*
    .logo-wrapper {
      position: ;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
  */
@customElement('app-home')
export class AppHome extends LitElement {

  static styles = css`

    .what {
      display: flex;
      justify-content: center;
      align-content: center;
      height: 100vh;
    }

    .logo {
        max-width: 30vw;
        max-height: 30vh;
    }

    `

    render() {
      return html`<div class="what">
            <img 
                src="src/assets/tuh-gdsc-logo-centered.png" 
                class="logo"
            />
        </div>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-home': AppHome;
    }
}