import React from 'react'
import {
    Typography,
    CardContent,
    Card,
    withStyles,
    WithStyles
} from '@material-ui/core'

const styles = {
    card: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
}

interface Props extends WithStyles<typeof styles> {
    name: string
    price: number
}

const AuctionCard = (props: Props) => {
    const classes = props.classes
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        {props.name} - $ {props.price}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(AuctionCard)
