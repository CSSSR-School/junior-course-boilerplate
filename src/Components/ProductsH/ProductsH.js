import React from "react";

const ProductsH = props => {
  
  const styles = {
    fontFamily: 'Open Sans',
    fontWeight: '300px',
    fontSize: '36px',
    lineHeight: '48px',
    textAlign: 'center'
  }

    return (
      <h1 style={styles}>{props.title}</h1>
    );

};

export default ProductsH;
