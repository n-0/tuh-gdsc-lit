import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators'
import { customElement } from 'lit/decorators'
import { NavButtonClick } from './events'

@customElement('app-nav-button')
class AppNavButton extends LitElement {

    static styles = [
            css`
            :host {
                z-index: 4;
                pointer-events: all;
            }

            .menu-icon-wrapper {
                display: flex;
                position: absolute;
                top: 20px;
                right: 20px;
                justify-content: flex-end;
                z-index: 4;
            }

            @media (max-width: 900px) {
                .menu-icon-wrapper {
                    top: 5px;
                    right: 5px;
                    justify-content: start;
                }
            }
            
            .menu-icon-wrapper button {
                font-family: inherit;
                border: none;
                background: inherit;
                margin: 0;
            }

            .menu-icon {
                max-width: 100px;
                margin-top: 25px;
                margin-right: 50px;
            }

            @media (max-width: 900px) {
                .menu-icon {
                    margin-top: 5px;
                    margin-right: 5px;
                }
            }
    `]

    @property({ type: Boolean }) open = false

    render() {
        const menuLogo = html` 
            <img 
                src="src/assets/${this.open ? 'gdsc-logo-gray.png' : 'gdsc-logo-color.png'}"
                class="menu-icon"
            /> 
        `

        return html`
            <div 
                class="menu-icon-wrapper"
            >
                <button
                    @click=${() => this.dispatchEvent(NavButtonClick)}
                >
                    ${menuLogo}
                </button>
            </div>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-nav-button': AppNavButton;
  }
}
