import { css } from '@emotion/react';

const size = Object.freeze({
  mobileSmallMax: '374px',
  mobile: '375px',
  mobileMax: '767px',
  tablet: '768px',
  tabletMax: '1439px',
  desktop: '1440px',
});

export const media =
  (minWidth, maxWidth) =>
  (...args) => {
    if (minWidth === '' || minWidth === false) {
      return css`
        @media screen and (max-width: ${size[maxWidth]}) {
          ${css(...args)}
        }
      `;
    } else if (maxWidth === '' || maxWidth === false) {
      return css`
        @media screen and (min-width: ${size[minWidth]}) {
          ${css(...args)}
        }
      `;
    } else {
      return css`
        @media screen and (min-width: ${size[minWidth]}) and (max-width: ${size[
            maxWidth
          ]}) {
          ${css(...args)}
        }
      `;
    }
  };
