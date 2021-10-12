import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators'
import { classMap } from 'lit/directives/class-map'
import { customElement } from 'lit/decorators'
import { fadeAnimations, fonts } from '../styles'
import { NavButtonClick } from './events'
import "./app-nav-button"
import "./app-nav-button-mobile"

@customElement('app-nav')
export class AppNav extends LitElement {

    static styles = [fonts, fadeAnimations, 
        css`
            :host {
                height: 100%;
                width: 100%;
                position: fixed;
                z-index: 2;
            }

            .menu-page {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                opacity: 0.9;
                background-color: #fff;
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

                .menu-list:first-child {
                    margin-top: 65px;
                }
            }
            .menu-list > li {
                list-style: none;
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
                pointer-events: none;
            }
        `]

    @property({ type: Boolean })
    open = false
    @property({ type: Boolean })
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
        this.style.pointerEvents = 'none'
        this.addEventListener(NavButtonClick.type, () => {
            this.toggle = true
            this.open = !this.open
                this.style.pointerEvents = this.open ? '' : 'none'
            //this.style.zIndex = this.open ? '2' : '0';
        })
    }

    render() {
        const links = ['home', 'what', 'when', 'who', 'terms'].map(sub => html`
            <li>
                <h1 @click=${() => this.dispatchEvent(NavButtonClick)}>
                    <a href="/${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)} </a>
                </h1>
            </li>
        `)

        const navbutton = (window.screen.width < 900) ?
                html`<app-nav-button-mobile ?open=${this.open}></app-nav-button-mobile>` :
                html`<app-nav-button ?open=${this.open}></app-nav-button>`

        return html`
            ${navbutton} 
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
    'app-nav': AppNav;
  }
}