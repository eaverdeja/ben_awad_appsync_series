import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { listAuctions } from './graphql/queries'
import { ListAuctionsQuery, ListAuctionsQueryVariables } from './API'
import AuctionCard from './AuctionCard'

const Auctions = () => {
    return (
        <div>
            <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
                query={gql(listAuctions)}
            >
                {({ data, loading }) => {
                    if (
                        loading ||
                        !data ||
                        !data.listAuctions ||
                        !data.listAuctions.items
                    ) {
                        return null
                    }
                    console.log(data.listAuctions.items)

                    return (
                        <div
                            style={{
                                marginTop: '1em',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gridGap: '10px'
                            }}
                        >
                            {data.listAuctions.items.map(auction => (
                                <AuctionCard
                                    key={auction!.id}
                                    name={auction!.name}
                                    price={auction!.price}
                                />
                            ))}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default Auctions
