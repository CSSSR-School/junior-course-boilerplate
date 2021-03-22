import React, {Component} from 'react';

const withHistory = (WrappedComponent) => {
  class WithHistory extends Component {

    constructor(props) {
      super(props);
      window.history.replaceState(null, null, window.location.search);
    }

    componentDidMount() {
      console.log(this.props);
      window.addEventListener('popstate', this.setFromHistory);
      this.setFromHistory();
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory() {
      const {setFilterCategories, changePage} = this.props;
      const searchParams = new URLSearchParams(window.location.search);
      const categories = searchParams.getAll('cat');
      const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;

      if (categories.length && typeof setFilterCategories === 'function') {
        setFilterCategories(categories)
      }

      if (page && typeof changePage === 'function') {
        changePage(page <= this.props.totalPages && page > 0 ? page : 1)
      }

      // const searchParams = new URLSearchParams(this.props.query);
      // const categories = searchParams.getAll('cat');

      // if (categories.length) {
      //   this.props.setFilterCategories(categories);
      // }

      // const {totalPages, query, changePage} = this.props;
      // const searchParams = new URLSearchParams(query);
      // const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
      // changePage(page <= totalPages && page > 0 ? page : 1);
    }

    updateHistory(params) {
      console.log(params)
      const searchParams = new URLSearchParams(window.location.search);

      if (typeof params === 'number') {
        searchParams.set('page', params);
      } else {
        searchParams.delete('cat');
        params.forEach((category) => searchParams.append('cat', category));
      }

      window.history.pushState(null, null, `?${searchParams.toString()}`)
      // const {query, pushState} = this.props;
      // const searchParams = new URLSearchParams(query);


      // pushState(`?${searchParams.toString()}`);

      // const {query, pushState} = this.props;
      // const searchParams = new URLSearchParams(query);

      // searchParams.set('page', page);
      // pushState(`?${searchParams.toString()}`);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onUpdateHistory={this.updateHistory}
        />
      )
    }
  }

  return WithHistory;
};

export default withHistory;
