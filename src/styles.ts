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
                display: none;
            }
        }
`