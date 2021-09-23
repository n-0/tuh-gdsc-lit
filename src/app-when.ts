import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators'
import { card } from './material/card'
import { button } from './material/button'
import { specialColors } from './styles'


interface IEventCard {
    date: Date;
    title: string;
    description: string;
    link: string;
}

const demoEvents: IEventCard[] = [
    {
        date: new Date(Date.UTC(2021, 10, 10)),
        title: 'Quantum Computing',
        description: 'Playing around with reality.',
        link: 'http://localhost:8080'
    },
    {
        date: new Date(Date.UTC(2021, 11, 11)),
        title: 'Hackathon',
        description: 'May the force of code be with you.',
        link: 'http://localhost:8080'
    },
    {
        date: new Date(Date.UTC(2021, 12, 12)),
        title: 'Pizza',
        description: 'Getting to know each others pizza tastes.',
        link: 'http://localhost:8080'
    }
]

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
            height: 420px;
            width: 320px;
        }

		.mdc-card__media img {
            width: 300px;
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
            grid-row: 3;
            grid-column: 2;
        }

        .mdc-card-1 {
            grid-row: 2 / 3;
            grid-column: 3;
        }

        .mdc-card-2 {
            grid-row: 3;
            grid-column: 4;

        }


        
   `]

    @state()
    page = 0

    render() {

        const eventCards = demoEvents.slice(this.page, 3*(this.page + 1)).map((event, index) => html`
            <div class="mdc-card mdc-card-${index}" itemscope itemtype="https://schema.org/Event">
                <div class="mdc-card__title">
                    <div class="mdc-card__title-date" itemprop="startDate"  content="${event.date.toISOString()}">
                        <h1>
                            ${event.date.getDate()}
                            <br>
                            ${event.date.getMonth()+1}
                        </h1>
                    </div>
                    <div class="mdc-card__title-text" itemprop="name">
                        <h1>${event.title}</h1>
                    </div>
                </div>
                <div class="mdc-card__media">
					<img src="src/assets/tuh-gdsc-logo-centered.png" />
                </div>
                <div class="mdc-card__content" itemprop="description">
                    ${event.description} 
                </div>
				<button class="mdc-icon-button mdc-card__action mdc-card__action--icon">
					<h2>Register</h2>
				</button>
            </div> 


        `)
        return html`
        <div class="when">
            <div class="title">
                <h1>When</h1>
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