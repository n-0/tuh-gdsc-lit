import { css } from 'lit'

export const mdcButton = css`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
.mdc-touch-target-wrapper {
  display: inline;
}

.mdc-elevation-overlay {
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  /* @alternate */
  opacity: var(--mdc-elevation-overlay-opacity, 0);
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-elevation-overlay-color, #fff);
}

.mdc-button {
  /* @alternate */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  /* @alternate */
  line-height: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
}
.mdc-button .mdc-elevation-overlay {
  width: 100%;
  height: 100%;
  top: 0;
  /* @noflip */
  left: 0;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button .mdc-button__icon {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
  display: inline-block;
  position: relative;
  vertical-align: top;
}
[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}

.mdc-button .mdc-button__touch {
  position: absolute;
  top: 50%;
  height: 48px;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
}

svg.mdc-button__icon {
  fill: currentColor;
}

.mdc-button--raised .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}
[dir=rtl] .mdc-button--raised .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}

.mdc-button--raised .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}
[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}

.mdc-button--touch {
  margin-top: 6px;
  margin-bottom: 6px;
}

.mdc-button {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  text-decoration: none;
  /* @alternate */
  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
          text-decoration: var(--mdc-typography-button-text-decoration, none);
}

@-webkit-keyframes mdc-ripple-fg-radius-in {
  from {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@-webkit-keyframes mdc-ripple-fg-opacity-in {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@-webkit-keyframes mdc-ripple-fg-opacity-out {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-button {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: transform, opacity;
}
.mdc-button .mdc-button__ripple::before,
.mdc-button .mdc-button__ripple::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-button .mdc-button__ripple::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
  /* @alternate */
  z-index: var(--mdc-ripple-z-index, 1);
}
.mdc-button .mdc-button__ripple::after {
  z-index: 0;
  /* @alternate */
  z-index: var(--mdc-ripple-z-index, 0);
}
.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before {
  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
          transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {
  top: 0;
  /* @noflip */
  left: 0;
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}
.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after {
  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
          animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after {
  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
          animation: mdc-ripple-fg-opacity-out 150ms;
  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
          transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button .mdc-button__ripple::before,
.mdc-button .mdc-button__ripple::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-button .mdc-button__ripple {
  position: absolute;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple {
  top: 0;
  left: 0;
}

.mdc-button--raised {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mdc-button--outlined {
  border-style: solid;
}

.mdc-button {
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-button-font-size, 0.875rem);
  letter-spacing: 0.0892857143em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
  font-weight: 500;
  /* @alternate */
  font-weight: var(--mdc-typography-button-font-weight, 500);
  text-transform: uppercase;
  /* @alternate */
  text-transform: var(--mdc-typography-button-text-transform, uppercase);
  height: 36px;
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
  padding: 0 8px 0 8px;
}
.mdc-button:not(:disabled) {
  color: #6200ee;
  /* @alternate */
  color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button .mdc-button__icon {
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}
.mdc-button .mdc-button__ripple::before,
.mdc-button .mdc-button__ripple::after {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));
}
.mdc-button:hover .mdc-button__ripple::before, .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before {
  opacity: 0.04;
  /* @alternate */
  opacity: var(--mdc-ripple-hover-opacity, 0.04);
}
.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {
  transition-duration: 75ms;
  opacity: 0.12;
  /* @alternate */
  opacity: var(--mdc-ripple-focus-opacity, 0.12);
}
.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {
  transition-duration: 75ms;
  opacity: 0.12;
  /* @alternate */
  opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-button.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-button .mdc-button__ripple {
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
}

.mdc-button--unelevated {
  padding: 0 16px 0 16px;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-button-font-size, 0.875rem);
  letter-spacing: 0.0892857143em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
  font-weight: 500;
  /* @alternate */
  font-weight: var(--mdc-typography-button-font-weight, 500);
  text-transform: uppercase;
  /* @alternate */
  text-transform: var(--mdc-typography-button-text-transform, uppercase);
  height: 36px;
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--unelevated.mdc-button--icon-trailing {
  padding: 0 12px 0 16px;
}
.mdc-button--unelevated.mdc-button--icon-leading {
  padding: 0 16px 0 12px;
}
.mdc-button--unelevated:not(:disabled) {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button--unelevated:disabled {
  background-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--unelevated:not(:disabled) {
  color: #fff;
  /* @alternate */
  color: var(--mdc-theme-on-primary, #fff);
}
.mdc-button--unelevated:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button--unelevated .mdc-button__icon {
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}
.mdc-button--unelevated .mdc-button__ripple::before,
.mdc-button--unelevated .mdc-button__ripple::after {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff));
}
.mdc-button--unelevated:hover .mdc-button__ripple::before, .mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before {
  opacity: 0.08;
  /* @alternate */
  opacity: var(--mdc-ripple-hover-opacity, 0.08);
}
.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {
  transition-duration: 75ms;
  opacity: 0.24;
  /* @alternate */
  opacity: var(--mdc-ripple-focus-opacity, 0.24);
}
.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {
  transition-duration: 75ms;
  opacity: 0.24;
  /* @alternate */
  opacity: var(--mdc-ripple-press-opacity, 0.24);
}
.mdc-button--unelevated.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);
}
.mdc-button--unelevated .mdc-button__ripple {
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
}

.mdc-button--raised {
  padding: 0 16px 0 16px;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-button-font-size, 0.875rem);
  letter-spacing: 0.0892857143em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
  font-weight: 500;
  /* @alternate */
  font-weight: var(--mdc-typography-button-font-weight, 500);
  text-transform: uppercase;
  /* @alternate */
  text-transform: var(--mdc-typography-button-text-transform, uppercase);
  height: 36px;
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
  /* @alternate */
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised.mdc-button--icon-trailing {
  padding: 0 12px 0 16px;
}
.mdc-button--raised.mdc-button--icon-leading {
  padding: 0 16px 0 12px;
}
.mdc-button--raised:not(:disabled) {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button--raised:disabled {
  background-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:not(:disabled) {
  color: #fff;
  /* @alternate */
  color: var(--mdc-theme-on-primary, #fff);
}
.mdc-button--raised:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button--raised .mdc-button__icon {
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}
.mdc-button--raised .mdc-button__ripple::before,
.mdc-button--raised .mdc-button__ripple::after {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff));
}
.mdc-button--raised:hover .mdc-button__ripple::before, .mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before {
  opacity: 0.08;
  /* @alternate */
  opacity: var(--mdc-ripple-hover-opacity, 0.08);
}
.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {
  transition-duration: 75ms;
  opacity: 0.24;
  /* @alternate */
  opacity: var(--mdc-ripple-focus-opacity, 0.24);
}
.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {
  transition-duration: 75ms;
  opacity: 0.24;
  /* @alternate */
  opacity: var(--mdc-ripple-press-opacity, 0.24);
}
.mdc-button--raised.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);
}
.mdc-button--raised .mdc-button__ripple {
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--raised.mdc-ripple-upgraded--background-focused, .mdc-button--raised:not(.mdc-ripple-upgraded):focus {
  /* @alternate */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:hover {
  /* @alternate */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:not(:disabled):active {
  /* @alternate */
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:disabled {
  /* @alternate */
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined {
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-button-font-size, 0.875rem);
  letter-spacing: 0.0892857143em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
  font-weight: 500;
  /* @alternate */
  font-weight: var(--mdc-typography-button-font-weight, 500);
  text-transform: uppercase;
  /* @alternate */
  text-transform: var(--mdc-typography-button-text-transform, uppercase);
  height: 36px;
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
  padding: 0 15px 0 15px;
  border-width: 1px;
}
.mdc-button--outlined:not(:disabled) {
  color: #6200ee;
  /* @alternate */
  color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button--outlined:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button--outlined .mdc-button__icon {
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}
.mdc-button--outlined .mdc-button__ripple::before,
.mdc-button--outlined .mdc-button__ripple::after {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));
}
.mdc-button--outlined:hover .mdc-button__ripple::before, .mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before {
  opacity: 0.04;
  /* @alternate */
  opacity: var(--mdc-ripple-hover-opacity, 0.04);
}
.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {
  transition-duration: 75ms;
  opacity: 0.12;
  /* @alternate */
  opacity: var(--mdc-ripple-focus-opacity, 0.12);
}
.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {
  transition-duration: 75ms;
  opacity: 0.12;
  /* @alternate */
  opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-button--outlined.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-button--outlined .mdc-button__ripple {
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--outlined:not(:disabled) {
  border-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined:disabled {
  border-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined.mdc-button--icon-trailing {
  padding: 0 11px 0 15px;
}
.mdc-button--outlined.mdc-button--icon-leading {
  padding: 0 15px 0 11px;
}
.mdc-button--outlined .mdc-button__ripple {
  top: -1px;
  left: -1px;
  border: 1px solid transparent;
}
.mdc-button--outlined .mdc-button__touch {
  left: -1px;
  width: calc(100% + 2 * 1px);
}
/*# sourceMappingURL=mdc.button.css.map*/
`