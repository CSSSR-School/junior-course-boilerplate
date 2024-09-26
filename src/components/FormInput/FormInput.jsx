import React, {memo} from 'react';
import pt from 'prop-types';
import withInputNumber from '../../hocs/withInputNumber';

const FormInput = ({name, value, onChange}) => {

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

FormInput.propTypes = {
  name: pt.string.isRequired,
  value: pt.number.isRequired,
  onChange: pt.func.isRequired
};

export default withInputNumber(memo(FormInput));
