import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
import { fonts, layout, specialColors } from '../styles'
import './event-card'
import { demoEvents } from './event-card'

@customElement('app-when')
export class AppWhen extends LitElement {

    static styles = [
        fonts, 
        specialColors, 
        layout,
        css`
            :host {
                height: 100%;
                width: 100%;
            }

            .events {
                grid-row: 3;
                grid-column: 2;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            @media screen and (max-width: 1200px) {
                .events {
                    flex-direction: column;
                }

                .container {
                    grid-template-rows: 56px 150px 1fr;
                }
            }
        `
    ]

    render() {
        const eventCards = demoEvents.map(event => html`<event-card .event=${event}></event-card>`)
        return html`
        <div class="when container">
            <div class="title-wrapper">
                <h1 class="title">When</h1>
            </div>
            <div class="events">
                ${eventCards}
            </div>
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-when': AppWhen;
  }
}
