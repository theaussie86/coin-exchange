import React from 'react'
import Coin from './Coin'
import styled from 'styled-components'

const Table = styled.table`
    margin: 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`

export default function CoinList(props) {

    return (
        <Table className="coin-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {props.showBalance && <th>Balance</th>}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.coinData.map((values) => <Coin
                        handleRefresh={props.handleRefresh}
                        showBalance={props.showBalance}
                        name={values.name}
                        ticker={values.ticker}
                        price={values.price}
                        key={values.key}
                        id={values.key}
                    />)
                }
            </tbody>
        </Table>
    )
}
