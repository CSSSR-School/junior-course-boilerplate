import React, { PureComponent } from 'react';

const withInputProductsCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    updateCategory = (key, category) => ({
      ...category,
      [key]: !category[key]
    });
    convertDataToURLParams = (data = {}) => {
      const filteredCategories = Object.keys(data).filter(
        category => data[category].isActive
      );
      if (filteredCategories.length !== 0) {
        return filteredCategories.reduce(
          (acc, key, index) => `${acc}${index === 0 ? '' : '&'}category=${key}`,
          ''
        );
      }
      return '';
    };
    handleClick = (event, groupName, cb) => {
      const { target } = event;
      const { name: key } = target;
      const categories = JSON.parse(target.dataset.categories);
      const currentCategory = categories[key];
      const updatedCategory = this.updateCategory('isActive', currentCategory);

      cb(groupName, key, updatedCategory);
      window.history.pushState(
        categories,
        'categories',
        `?${this.convertDataToURLParams({...categories, [key]: updatedCategory})}`
      );
    };
    render() {
      return <WrappedComponent onClick={this.handleClick} {...this.props} />;
    }
  };
};
export default withInputProductsCategoryHandler;
