import React, {memo} from 'react';
import {withRouter} from 'react-router-dom';
import pt from 'prop-types';
import s from './Title.module.css';

import {ArrowIcon} from '../Icons';

const Title = ({isLinkable = false, history, children}) => {

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
      <h1>{children}</h1>
    </div>
  );
};

Title.propTypes = {
  isLinkable: pt.bool,
  history: pt.object.isRequired,
  children: pt.node.isRequired
};

export default withRouter(memo(Title));
