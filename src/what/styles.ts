import { css } from 'lit'

export const whatStyles = css`
    :host {
        width: 100%;
        height: 100%;
    }

    .what {
        grid-template-columns: 10vw 1fr 1fr 10vw;
    }

    @media screen and (max-width: 1200px) {
        .what {
            grid-template-columns: 50px 1fr 50px;
        }
    }

    @media screen and (max-width: 900px) {
        .what {
            grid-template-rows: 56px 150px 1fr 1fr 30px;
        }
    }

    .text-area {
        box-sizing: border-box;
        line-height: 1.8;
        margin-top: auto;
        margin-bottom: auto;
        grid-row: 3;
        grid-column: 2;
        animation: fade-in 1.5s cubic-bezier(.35,0,.15,1);
    }

    @media screen and (max-width: 1200px) {
        .text-area {
            line-height: 1.2;
            grid-row: 3;
            grid-column: 2;
            text-align: center;
        }
    }

    @media screen and (max-width: 900px) {
        .text-area {
            line-height: 1.2;
            grid-row: 3;
            grid-column: 2;
            text-align: center;
        }
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

    @media screen and (max-width: 1200px) {
        .icon-area {
            grid-column: 2;
            grid-row: 4;
            text-align: center;
        }
    }

    @media screen and (max-width: 900px) {
        .icon-area {
            grid-row: 4;
        }
    }

    .icon-area-2 {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }

    .icon {
        max-width: 100px;
    }

    @media screen and (max-width: 900px) {
        .icon {
            width: 30px;
        }
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
`