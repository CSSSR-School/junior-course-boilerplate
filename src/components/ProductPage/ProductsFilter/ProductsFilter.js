import React from 'react';
import s from './ProductsFilter.module.css';

class ProductsFilter extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.input = React.createRef();
    }

    handleSubmit(event) {
        console.log(this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.formTitle}>Цена</div>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.formLabels}>
                        <label>
                            от
                            <input
                                className={s.startValue}
                                type="text"
                                defaultValue="30"
                                ref={this.input} />
                        </label>
                        <label>
                            до
                            <input
                                className={s.endValue}
                                type="text"
                                defaultValue="3000"
                                ref={this.input} />
                        </label>
                    </div>
                    <input
                        className={s.submit}
                        type="submit"
                        value="Применить" />
                </form>
            </div>
        );
    }
}

export default ProductsFilter;
