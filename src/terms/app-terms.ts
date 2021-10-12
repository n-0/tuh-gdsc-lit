import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
import { fonts, layout } from '../styles'
import { terms } from './terms'


@customElement('app-terms')
export class AppTerms extends LitElement {


    static styles = [
        layout,
        fonts, 
        css`
        :host {
            height: 100%;
            width: 100%;
        }

        .container {
            height: auto;
        }

        .terms-details {
            background-color: rgb(232, 234, 237);
            grid-row: 3 / 5;
            grid-column: 1 / 4;
            display: grid;
            gap: 25px;
            grid-template-columns: 200px 1fr 1fr 200px; /* subgrid in the future */
        }

        @media screen and (max-width: 1200px) {
            .terms-details {
                grid-template-columns: 20px 1fr 20px; /* subgrid in the future */
                gap: 0;
            }
        }

        .terms-content {
            grid-column: 2;
        }

		button.chapter {
			background-color: rgb(26, 115, 232);
            height: 60px;
            width: 100px; 
			border: transparent solid 1px;
			border-radius: 4px;
			transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s, color 0.2s ease 0s, -webkit-box-shadow 0.2s ease 0s;
		}

        button.chapter a {
            text-decoration: none;
			color: #fff;
			font-weight: 500;
			font-family: "Google Sans", Roboto, Arial, Helvetica, sans-serif;
        }
    `]

    render() {
        return html`<div class="terms container">
            <div class="title-wrapper">
                <h1 class="title">Terms</h1>
            </div>
            <div class="terms-details">
                <div class="terms-content">
                    ${terms}
                    <h1>
                        Contact us via our GDSC Chapter
                    </h1>
                    <button class="chapter">
                        <a href="">Chapter</a>
                    </button>
                </div>
            </div>
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-terms': AppTerms
  }
}