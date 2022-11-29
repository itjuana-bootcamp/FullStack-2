import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CheckoutForm = ({ onSubmit, setIsValid }) => {
  const localDefaultValues = useRef({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const productFormSchema = yup.object().shape({
    fullName: yup.string().required("You need to add a fullname"),
    email: yup.string().email().required("You need to add a email"),
    address: yup.string().required("You need to add a address"),
    city: yup.string().required("You need to add a city"),
    state: yup.string().required("You need to add a state"),
    zipCode: yup.number().required().typeError("You need to add a zipCode"),
    phoneNumber: yup
      .number()
      .required()
      .typeError("You need to add a phone number"),
  });

  const { reset, control, handleSubmit, formState } = useForm({
    defaultValues: localDefaultValues.current,
    resolver: yupResolver(productFormSchema),
    mode: "all",
  });

  const { isSubmitted, isValid } = formState;

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid, setIsValid]);

  useEffect(() => {
    if (isSubmitted) reset(localDefaultValues.current);
  }, [isSubmitted, localDefaultValues, reset]);

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset(localDefaultValues.current)}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Controller
            control={control}
            name="fullName"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="full name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="address"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Controller
            control={control}
            name="city"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="city"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Controller
            control={control}
            name="state"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="state"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Controller
            control={control}
            name="zipCode"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="zip code"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="email"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="phone number"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default CheckoutForm;