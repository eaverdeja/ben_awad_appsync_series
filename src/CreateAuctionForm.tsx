import React from 'react'
import { Formik } from 'formik'
import { TextField, Button } from '@material-ui/core'
import { Mutation } from 'react-apollo'
import { createAuction } from './graphql/mutations'
import gql from 'graphql-tag'
import { CreateAuctionMutationVariables, CreateAuctionMutation } from './API'

interface FormValues {
    name: string
    price: number
}

const CreateAuctionForm = () => {
    return (
        <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables>
            mutation={gql(createAuction)}
        >
            {createAuction => (
                <Formik<FormValues>
                    initialValues={{
                        name: '',
                        price: 0
                    }}
                    onSubmit={async ({ name, price }) => {
                        //call  mutation
                        console.log(name, price)
                        const response = await createAuction({
                            variables: {
                                input: {
                                    name,
                                    price
                                }
                            }
                        })
                        console.log(response)
                    }}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                margin="normal"
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                            />
                            <br />
                            <TextField
                                label="Price"
                                margin="normal"
                                value={values.price}
                                onChange={handleChange}
                                name="price"
                            />
                            <br />
                            <Button variant="contained" type="submit">
                                Default
                            </Button>
                        </form>
                    )}
                </Formik>
            )}
        </Mutation>
    )
}

export default CreateAuctionForm
