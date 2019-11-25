import React from 'react';

export default function inputHOC(HoccedComponent) {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                value: props.value || 0
            };
        }

        handleChange = event => {
            const value = parseInt(event.target.value.replace(/\D/, ''));
            this.props.onChange(value);
        };

        render() {
            const { value, ...rest } = this.props;
            console.info(this.props.value, this.state.value); // state не меняется
            return (
                <HoccedComponent
                     {...rest}
                    onChange={this.handleChange}
                    value={value}
                />
            );
        }
    };
}
