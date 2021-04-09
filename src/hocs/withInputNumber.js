import React, {memo} from 'react';
import pt from 'prop-types';

const withInputNumber = (WrappedComponent) => {

  const WithInputNumber = (props) => {

    const changeValueHandler = ({target: {name, value}}) => {
      const pattern = /^(\s*|\d+)$/;
      const isValid = pattern.test(value);

      if (!isValid) return;

      props.onChangeFilter({name, value: Number(value)});
    };

    return (
      <WrappedComponent
        {...props}
        onChange={changeValueHandler}
      />
    );
  };

  WithInputNumber.propTypes = {
    onChangeFilter: pt.func.isRequired
  };

  return memo(WithInputNumber);
};

export default withInputNumber;
