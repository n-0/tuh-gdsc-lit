import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators'
import { fonts, layout } from '../styles'
import { whoStyles } from './styles'
import './person-card'


@customElement('app-who')
export class AppWho extends LitElement {

    static styles = [
        fonts,
        layout,
        whoStyles
    ]

    render() {
        return html`<div class="who container">
            <div class="title-wrapper">
                <h1 class="title">Who</h1>
            </div>
            <h2 class="subtitle who-text">
                Our core team organizes <br>
                and manages the student club.<br>
                We are the Umpa Lumpas in the<br>
                background, so that you can see<br>
                the coding factory!<br>
            </h2>
            <div class="people">
               <person-card
                    name="Niki"
                    title="Lead"
                    profilePicture="assets/who/niki.jpg"
                ></person-card>
                <person-card
                    name="Lennard"
                    title="Core Team member"
                    profilePicture="assets/who/lennard-1.jpg"
                ></person-card>
                <person-card
                    name="Aasma"
                    title="Core Team member"
                    profilePicture="assets/who/aasma-1.jpg"
                ></person-card>
            </div>
        </div>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-who': AppWho;
  }
}
