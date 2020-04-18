import React, { PureComponent } from 'react';

const withInputFilterCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    handleClick = ({ target: { name: fieldName } }, groupName) => {
      const { name, categories, updateFilterField } = this.props;
      const isActive = !categories[name].isActive;
      const state = window.history.state;

      updateFilterField({
        groupName,
        fieldName,
        fieldData: { isActive }
      });

      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete('category');

      Object.keys(categories)
        .map(category => {
          if (category === name) {
            categories[category].isActive = isActive;
          }
          return category;
        })
        .forEach(category => {
          if (categories[category].isActive) {
            searchParams.append('category', category);
          }
        });

      window.history.pushState(
        {
          ...state,
          categories: {
            ...state.categories,
            [name]: !state.categories[name].isActive
          }
        },
        'params',
        `?${searchParams.toString()}`
      );
    };
    render() {
      return (
        <WrappedComponent handleClick={this.handleClick} {...this.props} />
      );
    }
  };
};
export default withInputFilterCategoryHandler;
