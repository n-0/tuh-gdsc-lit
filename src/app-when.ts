import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
import { card } from './material/card'
import { button } from './material/button'
import { specialColors } from './styles'


@customElement('app-when')
export class AppWhen extends LitElement {

    static styles = [specialColors, button, card, css`
        .when {
            display: grid;
            grid-template-rows: 200px 100px 400px;
            grid-template-columns: 335px 670px 670px 335px;
            gap: 25px;
            height: 800px;
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            font-size: 2.8em;
            color: #5f6368;
        }

        .mdc-card {
			display: grid;
            height: 350px;
            width: 300px;
        }

		.mdc-card__media img {
            width: 300px;
		}

		.mdc-icon-button.mdc-icon-button {
			background-color: rgb(26, 115, 232);
			color: #fff;
			font-family: "Google Sans", Roboto, Arial, Helvetica, sans-serif;
			font-weight: 500;
			border: transparent solid 1px;
			
			border-radius: 4px;
			transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s, color 0.2s ease 0s, -webkit-box-shadow 0.2s ease 0s;
		}

		.mdc-icon-button:hover {
			background-color: rgb(24, 90, 188);
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		}

		.mdc-card__content {
			max-height: 150px;
		}

        .past {
            grid-row: 3;
            grid-column: 2;
        }

        .present {
            grid-row: 2 / 3;
            grid-column: 3;
        }

        .future {
            grid-row: 3;
            grid-column: 4;

        }


        
   `]

    render() {
        return html`
        <div class="when">
            <div class="title">
                <h1>When</h1>
            </div>
            <div class="mdc-card past">
                <div class="mdc-card__media">
					<img src="src/assets/tuh-gdsc-logo-centered.png" />
                </div>
                <div class="mdsc-card__content">
                    past event 
                </div>
				<button class="mdc-icon-button mdc-card__action mdc-card__action--icon">
					<h2>Register</h2>
				</button>
            </div> 
            <div class="mdc-card present">
                <div class="mdc-card__media">
					<img src="src/assets/tuh-gdsc-logo-centered.png" />
                </div>
                <div class="mdsc-card__content">
                    present event 
                </div>
				<button class="mdc-icon-button mdc-card__action mdc-card__action--icon">
					<h2>Register</h2>
				</button>
            </div> 
            <div class="mdc-card future">
                <div class="mdc-card__media">
					<img src="src/assets/tuh-gdsc-logo-centered.png" />
                </div>
                <div class="mdsc-card__content">
                    future event 
                </div>
				<button class="mdc-icon-button mdc-card__action mdc-card__action--icon">
					<h2>Register</h2>
				</button>
            </div> 
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-when': AppWhen;
  }
}