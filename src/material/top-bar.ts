import { css } from 'lit'
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */

export const topBar = css`
    .mdc-top-app-bar {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    color: white;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    z-index: 4;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon {
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff);
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item::before, .mdc-top-app-bar .mdc-top-app-bar__action-item::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff));
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before, .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before {
    opacity: 0.08;
    /* @alternate */
    opacity: var(--mdc-ripple-hover-opacity, 0.08);
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before, .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.24;
    /* @alternate */
    opacity: var(--mdc-ripple-focus-opacity, 0.24);
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    /* @alternate */
    opacity: var(--mdc-ripple-press-opacity, 0.24);
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);
    }
    .mdc-top-app-bar__row {
    display: flex;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    }
    .mdc-top-app-bar__section {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    min-width: 0;
    padding: 8px 12px;
    z-index: 1;
    }
    .mdc-top-app-bar__section--align-start {
    justify-content: flex-start;
    order: -1;
    }
    .mdc-top-app-bar__section--align-end {
    justify-content: flex-end;
    order: 1;
    }
    .mdc-top-app-bar__title {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 1.25rem;
    /* @alternate */
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: 2rem;
    /* @alternate */
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: 500;
    /* @alternate */
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: 0.0125em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
            text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 20px;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
    }
    [dir=rtl] .mdc-top-app-bar__title, .mdc-top-app-bar__title[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 0;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 20px;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--short-collapsed {
    /* @noflip */
    /*rtl:ignore*/
    border-top-left-radius: 0;
    /* @noflip */
    /*rtl:ignore*/
    border-top-right-radius: 0;
    /* @noflip */
    /*rtl:ignore*/
    border-bottom-right-radius: 24px;
    /* @noflip */
    /*rtl:ignore*/
    border-bottom-left-radius: 0;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed, .mdc-top-app-bar--short-collapsed[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    border-top-left-radius: 0;
    /* @noflip */
    /*rtl:ignore*/
    border-top-right-radius: 0;
    /* @noflip */
    /*rtl:ignore*/
    border-bottom-right-radius: 0;
    /* @noflip */
    /*rtl:ignore*/
    border-bottom-left-radius: 24px;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--short {
    top: 0;
    /* @noflip */
    /*rtl:ignore*/
    right: auto;
    /* @noflip */
    /*rtl:ignore*/
    left: 0;
    width: 100%;
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    [dir=rtl] .mdc-top-app-bar--short, .mdc-top-app-bar--short[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    right: 0;
    /* @noflip */
    /*rtl:ignore*/
    left: auto;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--short .mdc-top-app-bar__row {
    height: 56px;
    }
    .mdc-top-app-bar--short .mdc-top-app-bar__section {
    padding: 4px;
    }
    .mdc-top-app-bar--short .mdc-top-app-bar__title {
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
    }

    .mdc-top-app-bar--short-collapsed {
    /* @alternate */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 56px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title {
    display: none;
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item {
    transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {
    width: 112px;
    }
    .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end {
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 0;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 12px;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 12px;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 0;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--dense .mdc-top-app-bar__row {
    height: 48px;
    }
    .mdc-top-app-bar--dense .mdc-top-app-bar__section {
    padding: 0 4px;
    }
    .mdc-top-app-bar--dense .mdc-top-app-bar__title {
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 12px;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 0;
    }
    [dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title, .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 0;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 12px;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 128px;
    }
    .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    align-self: flex-end;
    padding-bottom: 2px;
    }
    .mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,
    .mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon {
    align-self: flex-start;
    }

    .mdc-top-app-bar--fixed {
    transition: box-shadow 200ms linear;
    }

    .mdc-top-app-bar--fixed-scrolled {
    /* @alternate */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 200ms linear;
    }

    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 96px;
    }
    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section {
    padding: 0 12px;
    }
    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 20px;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 0;
    padding-bottom: 9px;
    }
    [dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title, .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl] {
    /*rtl:begin:ignore*/
    /* @noflip */
    /*rtl:ignore*/
    padding-left: 0;
    /* @noflip */
    /*rtl:ignore*/
    padding-right: 20px;
    /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--fixed-adjust {
    padding-top: 64px;
    }

    .mdc-top-app-bar--dense-fixed-adjust {
    padding-top: 48px;
    }

    .mdc-top-app-bar--short-fixed-adjust {
    padding-top: 56px;
    }

    .mdc-top-app-bar--prominent-fixed-adjust {
    padding-top: 128px;
    }

    .mdc-top-app-bar--dense-prominent-fixed-adjust {
    padding-top: 96px;
    }

    @media (max-width: 599px) {
    .mdc-top-app-bar__row {
        height: 56px;
    }

    .mdc-top-app-bar__section {
        padding: 4px;
    }

    .mdc-top-app-bar--short {
        transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-top-app-bar--short-collapsed {
        transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end {
        /* @noflip */
        /*rtl:ignore*/
        padding-left: 0;
        /* @noflip */
        /*rtl:ignore*/
        padding-right: 12px;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl] {
        /*rtl:begin:ignore*/
        /* @noflip */
        /*rtl:ignore*/
        padding-left: 12px;
        /* @noflip */
        /*rtl:ignore*/
        padding-right: 0;
        /*rtl:end:ignore*/
    }

    .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
        padding-bottom: 6px;
    }

    .mdc-top-app-bar--fixed-adjust {
        padding-top: 56px;
    }
    }

    /*# sourceMappingURL=mdc.top-app-bar.css.map*/
`