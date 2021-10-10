import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators'
import { fadeAnimations, fonts, layout, specialColors } from '../styles'
import { whatStyles } from './styles'

const texts = [
    html`
    <div class="text-area subtitle">
        Google Developer Student Clubs<br>
        are <span class="google-green">community</span> groups  for college and university students interested<br> 
        in Google developer technologies.<br>
        We are the chapter for the <span class="tuh-blue">TUH</span>!<br>
    </div>
    `,
    html`
    <div class="text-area subtitle">
        Meet students interested in developer technologies at the <span class="tuh-blue">TUH</span>.<br>
        All are welcome, including those with <span class="google-green">diverse</span> backgrounds and different majors.<br>
        No matter if you feel comfortable in <br>
        front of a laptop, a construction site or a lab.<br>
    </div>
    `,
    html`
    <div class="text-area subtitle">
        It is a chance for you to <span class="google-yellow">learn</span> and<br>
         <span class="google-yellow">grow</span>in a peer to peer environment in domains that our members are <br>
         <span class="google-red">passionate</span> about.<br>
    </div>
    `,
    html`
    <div class="text-area subtitle">
        Through hands-on workshops, events, talks, and project-building<br> 
        activities - both online and in-person.<br>
        We strive to <span class="google-blue">solve real life problems</span> and advance our career oriented<br>
        skills both hard and soft.<br>
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

    static styles = [
        layout, 
        fonts, 
        fadeAnimations, 
        specialColors,
        whatStyles
    ]

    @state()
    frame: number = 0

    render() {
        return html`
            <div class="what container" @click=${() => (this.frame < 3) ? this.frame++ : null}>
            <div class="title-wrapper"><h1 class="title">What</h1></div>
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