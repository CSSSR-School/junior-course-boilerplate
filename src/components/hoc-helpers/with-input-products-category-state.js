import React, { PureComponent } from 'react';

const withInputProductsCategoryState = WrappedComponent => {
  return class extends PureComponent {
    state = {
      isActive: true
    };

    handleClick = () => {
      const { name, updateProductsFilterByCategory } = this.props;
      this.setState(prevState => {
        const newState = { isActive: !prevState.isActive };
        updateProductsFilterByCategory(name, newState.isActive);
        return newState;
      });

    };
    render() {
      return (
        <WrappedComponent
          isActive={this.state.isActive}
          onClick={this.handleClick}
          {...this.props}
        />
      );
    }
  };
};
export default withInputProductsCategoryState;
