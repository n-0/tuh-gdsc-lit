import { LitElement, html, css } from 'lit'
import { state } from 'lit/decorators'
import { classMap } from 'lit/directives/class-map'
import { customElement } from 'lit/decorators'
import { fadeAnimations } from './styles'

@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = [fadeAnimations, 
        css`
            :host {
                z-index: 3;
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
                    max-width: 25px;
                    margin-top: 5px;
                    margin-right: 5px;
                }
            }

            .menu-page {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                opacity: 0.9;
                background-color: #fff;
                z-index: 2;
            }

            .menu-list::before {
                height: 100px;
            }

            .menu-list {
                flex: 1 0 auto;
                list-style: none;
                display: flex;
                justify-content: space-evenly;
                flex-direction: column;
                text-align: center;
                justify-self: center;
            }

            @media (max-width: 900px) {
                .menu-list {
                    padding-left: 0;
                }
            }
            .menu-list > li {
                list-style: none;
                margin: 10px;
            }

            .menu-list a {
                font-size: 2.5em;
                text-decoration: none;
                color: #5f6368;
                opacity: 1;
            }

            @media (max-width: 900px) {
                .menu-list a {
                font-size: 1em;
                }
            }

            .menu-list a:hover {
                color: #202124;
            }

            .menu-open {
                animation: fade-in-up 0.3s;
            }

            .menu-close {
                animation: fade-out-down 0.3s forwards
            }

            .menu-invisible {
                visibility: hidden;
            }
        `]

    @state()
    open: boolean = false
    @state()
    hide: boolean = true

    render() {
        const links = ['home', 'what', 'when', 'who', 'impressum'].map(sub => html`
            <li>
                <h1>
                    <a href="/${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)} </a>
                </h1>
            </li>
        `)

        const menuLogo = (this.open) ? 
            html`
                    <img 
                        src="src/assets/gdsc-logo-gray.png" 
                        class="menu-icon"
                    /> 
            ` : html` 
                    <img 
                        src="src/assets/gdsc-logo-color.png" 
                        class="menu-icon"
                    /> 
            `
        return html`
            <div class=${classMap({ 
                    'menu-page': true, 
                    'menu-open': this.open, 
                    'menu-close': !this.open && !this.hide,
                    'menu-invisible': this.hide })}
                @animationend=${(e: AnimationEvent) => (e.animationName == 'fade-out-down') ? this.hide = true : null}
                @click=${() => this.open = !this.open }
            >
                <ul class="menu-list">
                    ${links}
                </uL>
            </div>
            <div 
                class="menu-icon-wrapper"
                @animationend=${(e: AnimationEvent) => (e.animationName == 'fade-in-up') ? this.hide = false : null}
                @click=${() => { 
                    this.open = !this.open 
                    this.hide = false
                }}
            >
                <button>
                    ${menuLogo}
            </button>
            </div>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-menu': AppMenu;
  }
}