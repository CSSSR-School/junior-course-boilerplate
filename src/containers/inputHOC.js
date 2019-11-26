import React from 'react';

export default function inputHOC(HoccedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            };
        }

        static getDerivedStateFromProps(nextProps, prevState) {
            return {
                value: nextProps.value
            }
        }

        handleChange = event => {
            const value = parseInt(event.target.value.replace(/\D/, '')) || 0;
            this.props.onChange(value);
        };

        render() {
            const {value, onChange, ...rest} = this.props;
            return (
                <HoccedComponent
                    {...rest}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            );
        }
    };
}
