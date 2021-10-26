import { css } from 'lit'

export const whoStyles = css`

    .who-text {
        grid-row: 3;
        grid-column: 2;
        /* color: rgb(95, 99, 104); */
    }

    @media screen and (max-width: 1200px) {
        .who-text {
            text-align: center;
        }
    }

    .people {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        grid-row: 4;
        grid-column: 2 / 5;
    }

    @media screen and (max-width: 1200px) {
        .people {
            display: flex;
            grid-column: 2;
            flex-direction: column;
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
