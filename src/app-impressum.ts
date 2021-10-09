import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'


@customElement('app-impressum')
export class AppImpressum extends LitElement {


    static styles = css`
        :host {
            height: 100%;
            width: 100%;
        }

        .impressum {
            display: grid;
            grid-template-rows: 200px 1fr;
            grid-template-columns: 200px 1fr 1fr 200px;
            gap: 25px;
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 1200px) {
            .impressum {
                grid-template-columns: 50px 1fr 50px;
                gap: 0px;
            }
        }
        @media screen and (max-width: 1200px) {
            .title {
                text-align: center;
            }
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            font-size: 2.8em;
            color: #5f6368;
        }

        @media screen and (max-width: 1200px) {
            .title {
                text-align: center;
            }
        }

        .impressum-details {
            background-color: rgb(232, 234, 237);
            grid-row: 2 / 3;
            grid-column: 1 / 5;
            display: grid;
            gap: 25px;
            grid-template-columns: 200px 1fr 1fr 200px; /* subgrid in the future */
        }

        @media screen and (max-width: 1200px) {
            .impressum-details {
                grid-template-columns: 50px 1fr; /* subgrid in the future */
                gap: 0;
            }
        }

        .impressum-content {
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
        
    `

    render() {
        return html`<div class="impressum">
            <div class="title">
                <h1>Impressum</h1>
            </div>
            <div class="impressum-details">
                <div class="impressum-content">
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
    'app-impressum': AppImpressum
  }
}