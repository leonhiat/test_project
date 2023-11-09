import * as React from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import {
  Alert,
  AlertColor,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

import Header from "../layout/header";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SlideTransition = (props: any) => {
  return <Slide {...props} direction="left" />;
};

const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [severity, setSeverity] = React.useState<AlertColor>();
  const [message, setMessage] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:3130/api/user/login", values)
        .then((res) => {
          setAlertTitle(res.data.status);
          setSeverity(res.data.status);
          setMessage(res.data.message);
          setOpen(true);
          if (res.data.status === "success")
            setTimeout(() => (window.location.href = "/"), 4000);
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <SignPart>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleClose} severity={severity}>
          <AlertTitle>{alertTitle}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
      <Header />
      <SignCover>
        <SignInBox>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              "& .MuiTextField-root": { my: 1, ml: "50px", width: "100%" },
              "& .MuiInputLabel-root": {
                color: "#d0d0d0",
              },
              "& .MuiInputBase-root": { backgroundColor: "rgba(0,0,0,0.21)" },
              "& .MuiSvgIcon-root": {
                color: "white",
                my: 1,
                p: 1,
                width: "50px",
                height: "56px",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                "& .MuiSvgIcon-root": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
              }}
            >
              <PersonIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
              <TextField
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                "& .MuiSvgIcon-root": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
              }}
            >
              <KeyIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                variant="outlined"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
                sx={{
                  color: "#FFF",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                    my: 1,
                    p: 1,
                    width: "50px",
                    height: "56px",
                  },
                }}
              />
            </Box>
            <Button
              variant="text"
              type="submit"
              sx={{
                width: "100%",
                color: "#FFF",
                backgroundImage:
                  "linear-gradient(268deg, rgba(166, 0, 207, 0.21) 16.92%, rgba(143, 151, 220, 0.21) 95.44%);",
              }}
            >
              Sign In
            </Button>
            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  my: 2,
                  fontFamily: "Inter",
                  color: "#FFF",
                  fontSize: "16px",
                }}
              >
                Forgot password?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  my: 2,
                  fontFamily: "Inter",
                  color: "#FFF",
                  fontSize: "16px",
                }}
              >
                <Link to="/register">Sign Up</Link>
              </Typography>
            </Box>
          </Box>
        </SignInBox>
      </SignCover>
    </SignPart>
  );
};

export default SignIn;

const SignPart = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/assets/img/landing.png')`,
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const SignCover = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(183deg, rgba(0, 0, 0, 0.00) 2.86%, #000 113.36%)",
  width: "100%",
  height: "100vh",
}));

const SignInBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "55%",
  width: "100%",
  padding: "24px",
  transform: "translate(0, -50%)",
  [theme.breakpoints.up(600)]: {
    width: "70%",
    left: "15%",
  },
  [theme.breakpoints.up(768)]: {
    width: "60%",
    left: "20%",
  },
  [theme.breakpoints.up(1440)]: {
    width: "500px",
    left: "230px",
  },
}));
