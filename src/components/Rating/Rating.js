import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

class Rating extends BaseComponent {
  render() {
    let { isFilled } = this.props;
    return isFilled ? (
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11.513L12.12 14l-1.093-4.687 3.64-3.153-4.794-.407L8 1.333l-1.873 4.42-4.794.407 3.64 3.153L3.88 14 8 11.513z"
          fill="#323C48"
        />
      </svg>
    ) : (
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.873 5.747l4.794.413-3.634 3.153L12.12 14 8 11.513 3.88 14l1.093-4.687-3.64-3.153 4.794-.407L8 1.333l1.873 4.414zm-4.38 6.033L8 10.267l2.513 1.52-.666-2.854 2.213-1.92-2.92-.253L8 4.067 6.867 6.753l-2.92.254 2.213 1.92-.667 2.853z"
          fill="#323C48"
        />
      </svg>
    );
  }
}

export default Rating;
