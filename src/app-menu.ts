import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators'
import { classMap } from 'lit/directives/class-map'
import { customElement } from 'lit/decorators'
import { fadeAnimations, fonts } from './styles'


const MenuButtonClick = new CustomEvent('menu-button-click', { bubbles: true, composed: true })

@customElement('app-menu-button')
class AppMenuButton extends LitElement {

    static styles = [fonts, 
            css`
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
                    @click=${() => this.dispatchEvent(MenuButtonClick)}
                >
                    ${menuLogo}
                </button>
            </div>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-menu-button': AppMenuButton;
  }
}

@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = [fonts, fadeAnimations, 
        css`
            :host {
                z-index: 3;
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

            .menu-list a:hover {
                color: #202124;
            }

            .menu-open {
                animation: fade-in-up 0.3s;
            }

            .menu-close {
                animation: fade-out-down 0.3s;
            }

            .menu-invisible {
                visibility: hidden;
            }
        `]

    @property({ type: Boolean })
    open = false
    @property({ type: Boolean, reflect: true })
    toggle = false 

    private _animationend(e: AnimationEvent) {
        if (
            e.animationName == 'fade-out-down' ||
            e.animationName == 'fade-in-up'
            ) {
                this.toggle = false
        }

    }

    constructor() {
        super()
        this.addEventListener(MenuButtonClick.type, () => {
            this.toggle = true
            this.open = !this.open
        })
    }

    render() {
        const links = ['home', 'what', 'when', 'who', 'impressum'].map(sub => html`
            <li>
                <h1 @click=${() => this.dispatchEvent(MenuButtonClick)}>
                    <a href="/${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)} </a>
                </h1>
            </li>
        `)


        return html`
            <app-menu-button ?open=${this.open}></app-menu-button>
            <div 
                @animationend=${this._animationend}
                class=${classMap({ 
                    'menu-page': true, 
                    'menu-open': this.toggle && this.open, 
                    'menu-close': this.toggle && !this.open,
                    'menu-invisible': !this.toggle && !this.open })}
            >
                <ul class="menu-list">
                    ${links}
                </ul>
            </div>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-menu': AppMenu;
  }
}