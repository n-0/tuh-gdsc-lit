import { MDCTopAppBar } from '@material/top-app-bar'
import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators'
import { customElement } from 'lit/decorators'
import { mdcButton } from '../material/button'
import { topBar } from '../material/top-bar'
import { NavButtonClick } from './events'

@customElement('app-nav-button-mobile')
class AppNavButtonMobile extends LitElement {

    static styles = [mdcButton, topBar, 
        css`
            :host {
                pointer-events: all;
            }

            .mdc-top-app-bar__row {
                background-color: #fff;
                border-bottom: 1px solid rgb(189, 193, 198);
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            }

            .mdc-top-app-bar__title {
                color: #202124;  
            }

            .mdc-icon-button {
                background: transparent;
                border: none;
            }

            .menu-icon {
                max-height: 50px;
                max-width: 50px;
            }
        `
    ]

    connectedCallback() {
        super.connectedCallback()
    }

    firstUpdated() {
        if (this.renderRoot.querySelector('.mdc-top-app-bar')) {
            new MDCTopAppBar(this.renderRoot.querySelector('.mdc-top-app-bar')!)
        }
    }

    @property({ type: Boolean })
    open = false

    render() {
        return html`
            <header class="mdc-top-app-bar">
                <div class="mdc-top-app-bar__row">
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <span class="mdc-top-app-bar__title">GDSC TUH</span>
                    </section>
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" >
                        <button 
                            class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Navigation"
                            @click=${() => this.dispatchEvent(NavButtonClick)}
                        >
                            <img 
                                src="src/assets/${this.open ? 'gdsc-logo-gray.png' : 'gdsc-logo-color.png'}"
                                class="menu-icon"
                            /> 
                        </button>
                    </section>
                </div>
            </header>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-nav-button-mobile': AppNavButtonMobile;
  }
}