import React from 'react';
import pt from 'prop-types';

const Layout = ({children}) => {
  return (
    <main>
      <div className="container">
        {children}
      </div>
    </main>
  );
};

Layout.propTypes = {
  children: pt.node.isRequired
};

export default Layout;
