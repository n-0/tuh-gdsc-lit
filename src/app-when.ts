import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators'
import { card } from './material/card'
import { button } from './material/button'
import { fonts, specialColors } from './styles'


interface IEventCard {
    date: Date;
    title: string;
    description: string;
    link: string;
}

const demoEvents: IEventCard[] = [
    {
        date: new Date(2021, 10, 10),
        title: 'Quantum Computing',
        description: 'Playing around with reality.',
        link: 'http://localhost:8080'
    },
    {
        date: new Date(2021, 11, 11),
        title: 'Hackathon',
        description: 'May the force of code be with you.',
        link: 'http://localhost:8080'
    },
    {
        date: new Date(2021, 12, 12),
        title: 'Pizza',
        description: 'Getting to know each others pizza tastes.',
        link: 'http://localhost:8080'
    }
]

@customElement('app-when')
export class AppWhen extends LitElement {

    static styles = [fonts, specialColors, button, card, css`
        .when {
            display: grid;
            grid-template-rows: 200px 1fr 30px;
            grid-template-columns: 200px 1fr 1fr 200px;
            gap: 25px;
            height: 100%;
            width: 100%;
        }

        @media screen and (max-width: 1900px) {
            .when {
                grid-template-columns: 100px 1fr 1fr 1fr 100px;
                gap: 15px;
            }
        }

        @media screen and (max-width: 1200px) {
            .when {
                grid-template-columns: 20px 1fr 20px;
                grid-template-rows: 200px repeat(3, 350px);
            }
        }

        .title-wrapper {
            grid-row: 1;
            grid-column: 2;
        }

        @media screen and (max-width: 1200px) {
            .title-wrapper {
                justify-self: center;
            }
        }

        .mdc-card {
			display: grid;
            grid-row: 2;
            height: 420px;
            width: 320px;
            justify-self: center;
            align-self: center;
        }

        @media screen and (max-width: 1900px) {
            .mdc-card {
                height: 300px;
            }
        }

        @media screen and (max-width: 1200px) {
            .mdc-card {
                width: 300px;
                grid-row: auto;
            }
        }

		.mdc-card__media img {
            width: 100%;
		}

        @media screen and (max-width: 1900px) {
            .mdc-card__media img {
                width: 100%;
            }
        }

		.mdc-icon-button.mdc-icon-button {
			background-color: rgb(26, 115, 232);
            max-height: 60px;
            align-self: flex-end;
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
            padding: 20px;
		}

        .mdc-card__title {
            display: flex;
            margin-bottom: 20px;
        }

        .mdc-card__title h1 {
            margin: 5px;
            padding-left: 5px;
        }

        .mdc-card-0 {
            grid-column: 2;
        }

        .mdc-card-1 {
            grid-column: 3;
        }

        .mdc-card-2 {
            grid-column: 4;

        }

        @media screen and (max-width: 1200px) {
            .mdc-card-1 {
                grid-column: 2;
                grid-row: 2;
            }
            .mdc-card-2 {
                grid-column: 2;
                grid-row: 3;
            }
            .mdc-card-3 {
                grid-column: 2;
                grid-row: 4;
            }
        }
   `]

    @state()
    page = 0

    render() {

        const eventCards = demoEvents.slice(this.page, 3*(this.page + 1)).map((event, index) => html`
            <div class="mdc-card mdc-card-${index}">
                <div class="mdc-card__title">
                    <div class="mdc-card__title-date">
                        <h1>
                            ${event.date.getDate()}
                            <br>
                            ${event.date.getMonth()+1}
                        </h1>
                    </div>
                    <div class="mdc-card__title-text">
                        <h1>${event.title}</h1>
                    </div>
                </div>
                <div class="mdc-card__media">
					<img src="src/assets/tuh-gdsc-logo-centered.png" />
                </div>
                <div class="mdc-card__content">
                    ${event.description} 
                </div>
				<button class="mdc-icon-button mdc-card__action mdc-card__action--icon">
					<h2>Register</h2>
				</button>
            </div> 


        `)
        return html`
        <div class="when">
            <div class="title-wrapper">
                <h1 class="title">When</h1>
            </div>
            ${eventCards}
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-when': AppWhen;
  }
}