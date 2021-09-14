import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators'
import { fadeAnimations, specialColors } from './styles'

const texts = [
    html`
    <div class="text-area">
        <p>Google Developer Student Clubs</p>
        <p>are <span class="google-green">community</span> groups  for college and</p>
        <p>university students interested in</p>
        <p>Google developer technologies.</p>
        <p>We are the chapter for the <span class="tuh-blue">TUH</span>!</p>
    </div>
    `,
    html`
    <div class="text-area">
        <p>Meet students interested in developer technologies at the <span class="tuh-blue">TUH</span>.</p>
        <p>All are welcome, including those with <span class="google-green">diverse</span> backgrounds and different majors.</p>
        <p>No matter if you feel comfortable in </p>
        <p>front of a laptop, a construction site or a lab.</p>
    </div>
    `,
    html`
    <div class="text-area">
        <p>It is a chance for you to <span class="google-yellow">learn</span> and <span class="google-yellow">grow</span></p> 
        <p>in a peer to peer environment in domains </p>
        <p>that our members are <span class="google-red">passionate</span> about.</p>
    </div>
    `,
    html`
    <div class="text-area">
        <p>Through hands-on workshops, events, talks,</p> 
        <p>and project-building activities - both online and in-person.</p>
        <p>We strive to <span class="google-blue">solve real life problems</span> and advance our career </p>
        <p>oriented skills both hard and soft.</p>
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
            .what {
                display: grid;
                grid-template-rows: 200px 100px 400px;
                grid-template-columns: 335px 670px 670px 335px;
                justify-content: center; 
                gap: 25px;
                height: 800px;
                width: 99vw;
            }

            .title {
                display: flex;
                grid-row: 1;
                grid-column: 1;
                justify-content: flex-end;
                font-size: 2.8em;
                color: #5f6368;
            }

            .text-area {
                box-sizing: border-box;
                grid-row: 3;
                grid-column: 2;
                font-size: 2em;
                animation: fade-in 1.5s cubic-bezier(.35,0,.15,1);
            }

            .icon-area {
                grid-row: 3;
                grid-column: 3;
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
                transform: rotate(-180deg) 
            }

            .icon-arrow-4 {
                transform: rotate(90deg)
            }
    `]

    @state()
    frame: number = 0

    render() {
        return html`
            <div class="what" @click=${() => (this.frame < 3) ? this.frame++ : null}>
            <div class="title"><h1>What?</h1></div>
            ${texts[this.frame]}
            ${[0, 1].includes(this.frame) ? icons[0] : icons[1]}
          </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-what': AppWhat
    }
}