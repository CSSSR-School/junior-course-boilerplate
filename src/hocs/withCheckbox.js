import React, {PureComponent} from 'react';

const withCheckbox = (WrappedComponent) => {
  return class WithInput extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      }
    }

    toggleButtonHandler = (e) => {
      const category = e.target.name;
      this.setState({
        isActive: !this.state.isActive
      }, () => {this.props.onChangeFilterCategories(category)});
    }

    render() {
      const {isActive} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          isActive={isActive}
          onClick={this.toggleButtonHandler}
        />
      )
    }
  }
}

export default withCheckbox;
