import React from 'react';

export default function HOC(HoccedComponent) {
    return class extends HoccedComponent {
        constructor(props) {
            super(props);
            value: props.value
        }

        onChange = (e) => {
            this.setState({
                value: e.target.value.replace(/\D/,'')
            })
        };

        render() {
            return (
                <HoccedComponent value={this.state.value}
                                 onChange={this.handleOnChange}
                                 {...this.props}/>
            );
        }
    }
}

