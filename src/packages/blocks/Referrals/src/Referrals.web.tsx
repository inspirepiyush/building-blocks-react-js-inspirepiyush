import React from "react";

import {
  Container,
  Box,
  Button,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
   // Customizable Area Start
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
// import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Visibility from "@material-ui/icons/Visibility";

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

import ReferralsController, { Props, configJSON } from "./ReferralsController";

export default class Referrals extends ReferralsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    const { results } = this.state;

    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <Container maxWidth={"sm"}>
          <Box sx={webStyle.mainWrapper}>
            <Typography variant="h6">{configJSON.labelTitleText}</Typography>
            <Typography variant="subtitle1" component="div">
              {configJSON.labelBodyText}
            </Typography>
            {/* <Box sx={webStyle.inputStyle}>
              <InputLabel id="service-shop-name">
                This is the reviced value:{this.state.txtSavedValue}{" "}
              </InputLabel>
              <Input
                data-test-id={"txtInput"}
                type={this.state.enableField ? "password" : "text"}
                placeholder={configJSON.txtInputPlaceholder}
                fullWidth={true}
                disableUnderline={true}
                value={this.state.txtInputValue}
                onChange={(e) => this.setInputValue(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.setEnableField}
                      edge="end"
                    >
                      {this.state.enableField ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box> */}
            {/* <Box
              data-test-id="btnAddExample"
              onClick={() => this.doButtonPressed()}
              component="button"
              sx={webStyle.buttonStyle}
            >
              <Button color={"primary"}>{configJSON.btnExampleTitle}</Button>
            </Box> */}

            <Box component="button" sx={webStyle.buttonStyle}>
              <Button color="primary" onClick={this.handleApi}>
                Get Pokemons
              </Button>
            </Box>

            <Box component="button" sx={webStyle.buttonStyle}>
              <Button color="primary" onClick={this.getMorePokemon}>
                get more pokemon
              </Button>
            </Box>
           
            <Box />

            <Box sx={webStyle.tableStyle}>
              {/* {this.state.results} */}
              {/* <h1>this is content</h1>
               {this.state.results.map((data) => (
                <Typography>{JSON.stringify(this.state.results.name)}</Typography>
                ))}
               <h1>this is content</h1> */}

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results.map((item) => (
                      <TableRow key={item}>
                        <TableCell align="center">{item.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
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
    width: "40%",
    height: "45px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "rgb(98, 0, 238)",
  },

  tableStyle: {
    width: "60%",
    marginTop: "20px",
    align: "center",
    alignSelf: "center",
  },
};
// Customizable Area End
