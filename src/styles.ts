import { css } from 'lit'

/**
 * breakpoints
 * sm - 600px
 * md - 900px
 * lg - 1200px
 * xl - 1536px
 * 
 * font sizing
 * lg
 * H1 = 8em .25 ls
 * h2 - 3em  0 ls
 * base - 1.3em
 * sub - 1em normal
 * sm
 * H1 - 4em ls
 * h2 - 2.2em 0 ls
 * base - 1.3em
 * sub - 1em normal
 */

export const fonts = css`
    .title {
        font-size: 8em;
        letter-spacing: 0.25;
        color: #5f6368;
        margin: 0;
    }

    .subtitle {
        font-size: 2.5em;
        letter-spacing: 0;
    }

    .base {
        font-size: 1.3em;
        letter-spacing: 0;
    }

    .sub {
        font-size: 1em;
        letter-spacing: normal;
    }

    @media screen and (max-width: 900px) {
        .title {
            font-size: 4em;
        }

        .subtitle {
            font-size: 2em;
        }

        .base {
            font-size: 1.3em;
        }

        .sub {
            font-size: 1em;
        }

    }

`

export const specialColors = css`
    .google-green {
        color: #34A853;
    }

    .google-yellow {
        color: #FBBC04;
    }

    .google-red {
        color: #EA4335;
    }

    .google-blue {
        color: #4285F4;
    }

    .tuh-blue {
        color: #6BC1BB
    }
`

export const fadeAnimations = css`
        @keyframes fade-in {
            from {
                opacity: 0
            }
            to {
                opacity: 1
            }
        }

        @keyframes fade-out {
            from { 
                opacity: 1;
            }
            to {
                opacity: 0;
            }

        }

        @keyframes fade-in-up {
            from {
                transform: translateY(-80px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 0.9;
            }
        }

        @keyframes fade-out-down {
            from {
                transform: translateY(0);
                opacity: 0.9;
            }

            to {
                transform: translateY(-80px);
                opacity: 0;
            }
        }
`


export const layout = css`
    .container {
        display: grid;
        grid-template-rows: 20px 200px 1fr;
        grid-template-columns: 10vw 1fr 10vw;
        height: 100%;
        width: 100%;
        gap: 20px;
    }

    @media screen and (max-width: 1200px) {
        .container {
            grid-template-rows: 20px 150px 1fr 1fr;
            grid-template-columns: 50px 1fr 50px;
            gap: 15px;
        }
    }

    @media screen and (max-width: 900px) {
        .container {
            grid-template-rows: 56px 150px 1fr 1fr;
            grid-template-columns: 20px 1fr 20px;
            gap: 15px;
        }
    }

    .title-wrapper {
        display: flex;
        align-items: center;
        grid-row: 2;
        grid-column: 2;
        color: #5f6368;
    }

    @media screen and (max-width: 1200px) {
        .title-wrapper {
            justify-content: center;
            grid-row: 2;
        }
    }
`