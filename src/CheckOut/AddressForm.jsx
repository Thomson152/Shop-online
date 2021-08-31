
import React, { useState, useEffect } from "react";
import FormInput from './CustomTextField'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import {FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { commerce } from '../lib/commerce'

import { Link } from "react-router-dom";

const AddressForm = ({CheckoutToken, test}) => {

  const methods = useForm();
  console.log(CheckoutToken)



  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <FormProvider {...methods}>
      <form onSubmit ={methods.handleSubmit((data) => test({ ...data }))}>
          <Grid container spacing={3}>
            <FormInput  name="firstName" label="First name" />
            <FormInput  name="lastName" label="Last name" />
            <FormInput  name="address1" label="Address line 1" />
            <FormInput  name="email" label="Email" />
            <FormInput  name="city" label="City" />
            <FormInput  name="zip" label="Zip / Postal code" />
            </Grid>
            <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
      </form>
      </FormProvider>
     
    </>
  );
};

export default AddressForm;
