import React from "react";

import {
  Container,
  Box,
  Input,
  Button,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Customizable Area Start
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

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

import AdminConsole3Controller, {
  Props,
  configJSON,
} from "./AdminConsole3Controller";

export default class AdminConsole3 extends AdminConsole3Controller {
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
          {/* _____________________________________________________________________________________________ */}
          <Box>
            <Button variant="contained" onClick={this.handleApi}>
              NASA API
            </Button>
          </Box>

          {/* Modal for successful API hit */}
          <Dialog
            open={this.state.ApiSuccess}
            onClose={() => {
              this.setState({ ApiSuccess: false });
            }}
          >
            <DialogTitle>Explanation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Explanation :
              </DialogContentText>
              <DialogContentText>
              {this.state.isLoading ? <h5><CircularProgress color="secondary" /></h5> : this.state.explanation}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary">Close</Button>
            </DialogActions>
          </Dialog>
          {/* _____________________________________________________________________________________________ */}
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
