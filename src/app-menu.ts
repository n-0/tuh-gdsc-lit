import { LitElement, html, css } from 'lit'
import { state } from 'lit/decorators'
import { classMap } from 'lit/directives/class-map'
import { customElement } from 'lit/decorators'

@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = css`
        :host {
            z-index: 3;
        }

        .menu-icon-wrapper {
            position: absolute;
            right: 25px;
            top: 25px;
        }
        
        .menu-icon {
            max-width: 100px;
        }

        .menu-page {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            width: 50vw;
            text-align: center;
            opacity: 0.9;
            background-color: #fff;
            z-index: 3;
        }

        .menu-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            margin-top: 18%;
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
            display: block;
            animation: fade-in-up 0.3s;
        }

        .menu-close {
            animation: fade-out-down 0.3s forwards
        }

        /* 
            on first render the menu should not be visible 
            afterwards animation fade-out-down solves this.
        */
        .menu-invisible {
            display: none;
        }

        @keyframes fade-in {
            from { 
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fade-out {
            from { 
                opacity: 1;
            }
            to {
                opacity: 0;
            }

        }

        @keyframes fade-in-up {
            from {
                transform: translateY(-80px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 0.9;
            }
        }

        @keyframes fade-out-down {
            from {
                transform: translateY(0);
                opacity: 0.9;
            }

            to {
                transform: translateY(-80px);
                opacity: 0;
                display: none;
            }
        }

    `

    @state()
    open: boolean = false
    @state()
    openedBefore: boolean = false

    render() {
        const links = ['home', 'what', 'when', 'who', 'contact'].map(sub => html`
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
                    'menu-close': !this.open && this.openedBefore,
                    'menu-invisible': !this.openedBefore })}>
                <ul class="menu-list">
                    ${links}
                </uL>
            </div>
            <div 
                class="menu-icon-wrapper"
                @click=${() => { 
                    this.open = !this.open 
                    this.openedBefore = true 
                }}
            >
            ${menuLogo}
            </div>
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-menu': AppMenu
  }
}