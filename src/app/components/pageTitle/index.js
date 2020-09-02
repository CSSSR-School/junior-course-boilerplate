import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const pageTitleStyle = {
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '36px',
  lineHeight: '48px',
  textAlign: 'center'
};

class PagetTitle extends PureComponent {
  render() {
    return (
      <h1 style={ pageTitleStyle }>{this.props.name}</h1>
    )
  }
}

PagetTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default PagetTitle;
