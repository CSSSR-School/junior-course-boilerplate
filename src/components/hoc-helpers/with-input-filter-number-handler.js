import React, { PureComponent } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { routerSelectors } from '../../redux';

const withInputFilterNumberHandler = WrappedComponent => {
  const mapStateToProps = state => ({
    search: routerSelectors.getRouterSearch(state)
  });

  return connect(mapStateToProps, { push })(
    class extends PureComponent {
      addNumberMask = value => {
        return Number(value.replace(/\D/g, ''));
      };

      handleChange = ({ target: { value, name: fieldName } }, groupName) => {

        const {
          push,
          search,
          updateFilterField
        } = this.props;

        const maskedValue = this.addNumberMask(value);

        const payload = {
          groupName,
          fieldName,
          fieldData: {
            value: maskedValue,
            isValid: fieldName === 'min' || fieldName === 'max' ? value > 0 : value < 100
          }
        };

        const searchParams = new URLSearchParams(search);

        searchParams.set('currentPage', 1);

        updateFilterField(payload);
        push({ search: searchParams.toString() });
      };

      render() {
        const { push, searchParams, ...restProps } = this.props;

        return (
          <WrappedComponent handleChange={this.handleChange} {...restProps} />
        );
      }
    }
  );
};

export default withInputFilterNumberHandler;
