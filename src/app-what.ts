import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators'
import { fadeAnimations, specialColors } from './styles'

const texts = [
    html`
    <div class="text-area row">
        <p>Google Developer Student Clubs are <span class="google-green">community</span> groups  for college and university students interested in Google developer technologies. 
        <p>We are the chapter for the <span class="tuh-blue">TUH</span>!</p>
    </div>
    `,
    html`
    <div class="text-area row">
        <p>Meet students interested in developer technologies at the <span class="tuh-blue">TUH</span>.</p>
        <p>All are welcome, including those with <span class="google-green">diverse</span> backgrounds and different majors.</p>
        <p>No matter if you feel comfortable in front of a laptop, a construction site or a lab.</p>
    </div>
    `,
    html`
    <div class="text-area row">
        <p>It is a chance for you to <span class="google-yellow">learn</span> and <span class="google-yellow">grow</span></p> 
        <p>in a peer to peer environment in domains </p>
        <p>that our members are <span class="google-red">passionate</span> about.</p>
    </div>
    `,
    html`
    <div class="text-area row">
        <p>Through hands-on workshops, events, talks, and project-building activities - both online and in-person.</p>
        <p>We strive to <span class="google-blue">solve real life problems</span> and advance our career oriented skills both hard and soft.</p>
    </div>
    `
]

// TODO add credits for icon8
const icons = [
    html`
    <div class="icon-area">
        <img class="icon" src="src/assets/tuh-favicon.ico" />
        <img class="icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-group-business-and-management-kiranshastry-lineal-kiranshastry-2.png"/>
        <img class="icon" src="src/assets/google-g-logo.png" />
    </div>
    `,
    html`
    <div class="icon-area icon-area-2">
        <img class="icon icon-arrow-1" src="https://img.icons8.com/material-outlined/96/000000/down2.png" />
        <img class="icon" src="https://img.icons8.com/ios/100/000000/mission-of-a-company.png"/>
        <img class="icon" src="https://img.icons8.com/material-outlined/96/000000/down2.png" />
        <img class="icon" src="https://img.icons8.com/carbon-copy/100/000000/chat--v1.png" />
        <div></div>
        <img class="icon" src="https://img.icons8.com/ios/100/000000/hammer.png" />
        <img class="icon icon-arrow-3" src="https://img.icons8.com/material-outlined/96/000000/down2.png" />
        <img class="icon" src="https://img.icons8.com/material-outlined/50/000000/idea--v1.png" />
        <img class="icon icon-arrow-4" src="https://img.icons8.com/material-outlined/96/000000/down2.png" />
    </div>
    `
]

@customElement('app-what')
export class AppWhat extends LitElement {

    static styles = [fadeAnimations, specialColors, 
        css`
            .flex {
                display: flex;
                justify-content: space-around;
            }
            .row{
                flex-direction: row;
            }
            .column{
                flex-direction: column;
            }
            .what {
                box-sizing: border-box;
                height: auto;
                width: auto;
            }

            .title {
                box-sizing: border-box;
                display: flex;
                justify-content: flex-start;
                padding-left: 1em;
                font-size: 2em;
                color: #5f6368;
                width: 100%;
            }

            .text-area {
                box-sizing: border-box;
                font-size: 1.5em;
                animation: fade-in 1.5s cubic-bezier(.35,0,.15,1);
            }

            .icon-area {
                display: flex;
                justify-items: center;
                justify-content: space-evenly;
                align-items: center;
                animation: fade-in 0.3s cubic-bezier(.35,0,.15,1);
            }

            .icon-area-2 {
                display: grid;
                grid-template-rows: repeat(3, 1fr);
                grid-template-columns: repeat(3, 1fr);
            }

            .icon {
                width: 100px;
            }

            .icon-arrow-1 {
                transform: scale(-1) rotate(90deg);
            }

            .icon-arrow-3 {
                transform: rotate(-180deg);
            }

            .icon-arrow-4 {
                transform: rotate(90deg);
            }

            #text-column {
                width: 50vw;
                padding: 1em;
            }

            #icon-column {
                width: 40vw;
                padding: 1em;
            }
    `]

    @state()
    frame: number = 0

    render() {
        return html`
            <div class="title"><h1>What?</h1></div>
            <div class="what flex" @click=${() => (this.frame < 3) ? this.frame++ : null}>
                <div class="column" id="text-column">
                    ${texts[this.frame]}
                </div>
                <div class="column" id="icon-column">
                    ${[0, 1].includes(this.frame) ? icons[0] : icons[1]}
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-what': AppWhat
    }
}