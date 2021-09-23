import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'

@customElement('app-home')
export class AppHome extends LitElement {

  static styles = css`
    .logo-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 900px) {
        .logo-wrapper img {
            max-width: 400px
        }
    }

    `

    render() {
      return html`
        <div class="logo-wrapper">
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