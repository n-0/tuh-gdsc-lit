import { css } from 'lit'


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