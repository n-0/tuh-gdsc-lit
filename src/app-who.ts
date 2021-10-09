import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators'


@customElement('app-who')
export class AppWho extends LitElement {

    static styles = css`
        .who {
            display: grid;
            grid-template-rows: 200px 300px 400px;
            grid-template-columns: 300px 1fr 1fr 300px;
            gap: 25px;
            height: 100%;
        }

        @media screen and (max-width: 1900px) {
            .who {
                grid-template-columns: 100px 1fr 1fr 1fr 100px;
                grid-template-rows: 200px 300px 300px;
            }
        }

        @media screen and (max-width: 1200px) {
            .who {
                grid-template-columns: 50px 1fr 50px;
                grid-template-rows: 200px 1fr;
            }
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            font-size: 2.8em;
            color: #5f6368;
        }

        .who-text {
            grid-row: 2;
            grid-column: 2;
            color: rgb(95, 99, 104);
            font-size: 2em;
        }

        @media screen and (max-width: 1200px) {
            .title {
                text-align: center;
            }

            .who-text {
                text-align: center;
            }
        }

        .people {
            display: flex;
            justify-content: space-evenly;
            grid-row: 3;
            grid-column: 2 / 5;
        }

        @media screen and (max-width: 1200px) {
            .people {
                display: flex;
                flex-direction: column;
                grid-column: 2;
            }
        }

        person-card {
            margin-right: 50px;
        }

        @media screen and (max-width: 1200px) {
            person-card {
                margin: auto;
                justify-self: center;
                height: 350px;
                width: 300px;
            }
        }

      `

    render() {
        return html`<div class="who">
            <div class="title">
                <h1>Who</h1>
            </div>
            <h2 class="who-text">
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
                    profilePicture="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-dsc/avatars/n-o-o-n_niki.jpg"
                /></person-card>
                <person-card 
                    name="Lennard" 
                    title="Core Team member" 
                /></person-card>
                <person-card 
                    name="Denise" 
                    title="Core Team member" 
                /></person-card>
                <person-card 
                    name="Aasma" 
                    title="Core Team member" 
                /></person-card>
            </div>
        </div>`
    }
}

@customElement('person-card')
export class PersonCard extends LitElement {

    static styles = css`

        .business-card {
            display: flex;
            flex-direction: column;
        }

        .profile-picture {
            border-radius: 50%;
            height: 200px;
            width: 200px;
            margin: auto;
        }

        .info {
            text-align: center;
        }

        .title {
            font-style: italic;
        }

        .social-media {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            margin: 0px 23px;
        }
        .social-media img {
            width: 30px;
        }

    `

    @property()
    profilePicture: string = ''

    @property()
    name: string = ''

    @property({ type: Object })
    socialMedia: SocialMediaLinks = {
        linkedin: '',
        instagram: '',
        googleDevelopers: '',
    }

    render() {
        return html`<div class="business-card">
            <img class="profile-picture" src=${this.profilePicture}>
            <div class="info">
                <h2 class="name">${this.name}</h2>
                <p class="title">${this.title}</p>
            </div>
            <div class="social-media">
                <a href=${this.socialMedia.linkedin}>
                    <img src="src/assets/social-media-icons/linkedin.png" />
                </a>
                <a href=${this.socialMedia.instagram}>
                <img src="src/assets/social-media-icons/instagram.png" />
                </a>
                <a href=${this.socialMedia.googleDevelopers}>
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                </a>
            </div>
        </div>
    `
    }
}

type SocialMediaLinks = {
        linkedin: string,
        instagram: string,
        googleDevelopers: string
};

declare global {
  interface HTMLElementTagNameMap {
    'app-who': AppWho;
  }
}