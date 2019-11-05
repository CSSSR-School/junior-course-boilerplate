import React from 'react'

import { CatalogContainer } from './Containers'
import { Title } from './Components'

import styled, { createGlobalStyle } from 'styled-components'

// Global Styles
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
    }
    
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
`

const App = ({ className }) => {
    return <>
        <GlobalStyle />
        <div className={className}>
            <Title title={"Список товаров"} />
            <CatalogContainer />
        </div>
    </>
}

export default styled(App)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5em;
`