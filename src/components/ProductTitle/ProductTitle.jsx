import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductTitle.module.css';
import {withRouter} from 'react-router-dom';
import {ArrowIcon} from '../Icons';

const ProductTitle = ({isLinkable = true, history, children}) => {

  const goBackHandler = () => history.goBack();

  return (
    <div className={s.title}>
      {
        isLinkable &&
        <button
          className={s.btnBack}
          onClick={goBackHandler}
        >
          <ArrowIcon/>
        </button>
      }
      <h2>{children}</h2>
    </div>
  );
};

ProductTitle.propTypes = {
  isLinkable: pt.bool,
  history: pt.object.isRequired,
  children: pt.node.isRequired
};

export default withRouter(memo(ProductTitle));
