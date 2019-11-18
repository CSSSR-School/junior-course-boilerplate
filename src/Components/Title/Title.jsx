import React from 'react'

import styled from 'styled-components'

const Title = ({ title, className }) => {
    return <h1 className={className}>
        {title}
    </h1>
}

export default styled(Title)`
    margin: 0;
    margin-bottom: 1.5em;
    font-weight: 300;
    font-size: 2.25em;
    color: #323C48;
`