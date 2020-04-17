import React, { PureComponent } from 'react';

const withInputFilterCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    handleClick = ({ target: { name: fieldName } }, groupName) => {
      const { isActive, updateFilterField } = this.props;

      updateFilterField({
        groupName,
        fieldName,
        fieldData: { isActive: !isActive }
      });
    };
    render() {
      return <WrappedComponent handleClick={this.handleClick} {...this.props} />;
    }
  };
};
export default withInputFilterCategoryHandler;
