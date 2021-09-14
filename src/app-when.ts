import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators'
import { card } from './material/card'


@customElement('app-when')
export class AppWhen extends LitElement {

    static styles = [card, css`
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
            height: 350px;
            width: 300px;
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

                </div>
                <div class="mdsc-card__content">
                    past Event 
                </div>
            </div> 
            <div class="mdc-card present">
                <div class="mdc-card__media">

                </div>
                <div class="mdsc-card__content">
                    present Event 
                </div>
            </div> 
            <div class="mdc-card future">
                <div class="mdc-card__media">

                </div>
                <div class="mdsc-card__content">
                    future Event 
                </div>
            </div> 
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-when': AppWhen
  }
}