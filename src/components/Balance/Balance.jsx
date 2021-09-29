import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function Balance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance'

    return (
        <Section>
            {props.showBalance && <>Balance: ${props.amount}</>}
            <button onClick={props.handleBalanceVisibility}>{buttonText}</button>
        </Section>
    )
}
