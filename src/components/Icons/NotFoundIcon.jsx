import React, {memo} from 'react';
import pt from 'prop-types';

const NotFoundIcon = ({width = 512, height = 512}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='Capa_1'
      enableBackground='new 0 0 512 512'
      height={height}
      viewBox='0 0 512 512'
      width={width}
    >
      <path d='m241 150h30v90h-30z' />
      <path d='m467 0h-422c-24.814 0-45 20.186-45 45v300c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45v-300c0-24.814-20.186-45-45-45zm-286 255c0 8.291-6.709 15-15 15s-15-6.709-15-15v-45h-45c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v45h30v-45c0-8.291 6.709-15 15-15s15 6.709 15 15c0 3.256 0 124.455 0 120zm120 0c0 8.291-6.709 15-15 15h-60c-8.291 0-15-6.709-15-15v-120c0-8.291 6.709-15 15-15h60c8.291 0 15 6.709 15 15zm120 0c0 8.291-6.709 15-15 15s-15-6.709-15-15v-45h-45c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v45h30v-45c0-8.291 6.709-15 15-15s15 6.709 15 15c0 3.256 0 124.455 0 120z' />
      <path d='m181 420v62h-45c-8.291 0-15 6.709-15 15s6.709 15 15 15h240c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-62z' />
    </svg>
  );
};

NotFoundIcon.propTypes = {
  width: pt.number,
  height: pt.number
};

export default memo(NotFoundIcon);
