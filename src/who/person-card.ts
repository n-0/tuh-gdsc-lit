import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators'

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
                    <img src="https://cdn.tuh-gdsc.dev/assets/social-media-icons/linkedin.png" />
               </a>
                <a href=${this.socialMedia.instagram}>
                <img src="https://cdn.tuh-gdsc.dev/assets/social-media-icons/instagram.png" />
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
    'person-card': PersonCard;
  }
}
