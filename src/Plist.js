import React from 'react';
import data from './products.json'

class Plist extends React.Component {
    render() {
        return(
          <ul>
            <li>{data[0].name}</li>
            <li>{data[1].name}</li>
            <li>{data[2].name}</li>
          </ul>
        );
    }
}

export default Plist;
