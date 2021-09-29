import React from 'react'
import logo from '../../logo.svg';
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 4rem;
    color: white;
`

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`

const Head = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export default function Header() {
    return (
        <Head>
          <Img src={logo} alt="logo" />
          <H1>
            Coin Exchange
          </H1>
        </Head>
    )
}
