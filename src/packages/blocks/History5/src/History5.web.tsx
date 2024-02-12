import React from "react";

import {
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  Button,
  Typography,
  // Customizable Area Start
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      margin: "20px 0px",
    },
  },
});
// Customizable Area End

import History5Controller, { Props, configJSON } from "./History5Controller";

export default class History5 extends History5Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <Container maxWidth={"sm"}>
          <Box sx={webStyle.mainWrapper}>
            <Typography variant="h6">{configJSON.labelTitleText}</Typography>
            <Typography variant="subtitle1" component="div">
              {configJSON.labelBodyText}
            </Typography>
            {/* Form with email, password inputs */}
            <form onClick={this.handleLogin}>
              <Box sx={webStyle.inputStyle}>
                <TextField
                  label="Email"
                  fullWidth
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Box>
              <Box sx={webStyle.buttonStyle}>
                <Button color={"primary"} type="submit">
                  {configJSON.btnExampleTitle}
                </Button>
              </Box>
            </form>
          </Box>
          {/* Modal for successful login */}
          <Dialog
            open={this.state.loginSuccess}
            onClose={() => this.setState({ loginSuccess: false })}
          >
            <DialogTitle>Login Successful</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You have successfully logged in!
              </DialogContentText>
              <DialogContentText>email :{this.state.email}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary">Close</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </ThemeProvider>

      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  mainWrapper: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    background: "#fff",
  },
  inputStyle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "100%",
    height: "45px",
    marginTop: "40px",
    border: "none",
    backgroundColor: "rgb(98, 0, 238)",
  },
};
// Customizable Area End
