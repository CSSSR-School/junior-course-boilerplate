import React, { memo } from 'react';
import pt from 'prop-types';

const ProductLoaderIcon = ({width = 736, height = 648}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 736 648'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='224' height='200' fill='#F5F6FA' />
      <rect y='216' width='175' height='24' fill='#F5F6FA' />
      <rect y='244' width='119' height='24' fill='#F5F6FA' />
      <rect y='272' width='146' height='24' fill='#F5F6FA' />
      <rect y='352' width='224' height='200' fill='#F5F6FA' />
      <rect y='568' width='175' height='24' fill='#F5F6FA' />
      <rect y='596' width='119' height='24' fill='#F5F6FA' />
      <rect y='624' width='146' height='24' fill='#F5F6FA' />
      <rect x='256' width='224' height='200' fill='#F5F6FA' />
      <rect x='256' y='216' width='175' height='24' fill='#F5F6FA' />
      <rect x='256' y='244' width='119' height='24' fill='#F5F6FA' />
      <rect x='256' y='272' width='146' height='24' fill='#F5F6FA' />
      <rect x='256' y='352' width='224' height='200' fill='#F5F6FA' />
      <rect x='256' y='568' width='175' height='24' fill='#F5F6FA' />
      <rect x='256' y='596' width='119' height='24' fill='#F5F6FA' />
      <rect x='256' y='624' width='146' height='24' fill='#F5F6FA' />
      <rect x='512' width='224' height='200' fill='#F5F6FA' />
      <rect x='512' y='216' width='175' height='24' fill='#F5F6FA' />
      <rect x='512' y='244' width='119' height='24' fill='#F5F6FA' />
      <rect x='512' y='272' width='146' height='24' fill='#F5F6FA' />
      <rect x='512' y='352' width='224' height='200' fill='#F5F6FA' />
      <rect x='512' y='568' width='175' height='24' fill='#F5F6FA' />
      <rect x='512' y='596' width='119' height='24' fill='#F5F6FA' />
      <rect x='512' y='624' width='146' height='24' fill='#F5F6FA' />
    </svg>
  );
};

ProductLoaderIcon.propTypes = {
  width: pt.number,
  height: pt.number
};

export default memo(ProductLoaderIcon);
