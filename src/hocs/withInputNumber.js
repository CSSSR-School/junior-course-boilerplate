import React, {memo} from 'react';

const withInputNumber = (WrappedComponent) => memo((props) => {

  const changeValueHandler = ({target: {name, value}}) => {
    const pattern = /^(\s*|\d+)$/;
    const isValid = pattern.test(value);

    if (!isValid) return;

    props.onChangeFilter({name, value: Number(value)});
  }

  return (
    <WrappedComponent
      {...props}
      onChange={changeValueHandler}
    />
  )
});

export default withInputNumber;
