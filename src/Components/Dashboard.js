import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { mainListItems, secondaryListItems } from "./listItems";
import EmailIcon from "@mui/icons-material/Email";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Chart from "./Hello";
import Deposits from "./Deposits";
import Orders from "./Orders";
import "./dashboard.css";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Title from "./Title";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import BarChart, { Bar } from "./Barchart";
import { VerticalBar } from "./VerticalBar";
import Doughnut from "./Doughnut";
import Curve from "./Curve";
import Charts from "./Hello";
import Hello from "./Hello";
import Line from "./Line";
import Area from "./Area";
import AreaRadial from "./AreaRadial";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            xs={false}
            sx={{
              backgroundColor: "white",
              pr: "10px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              //   onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MoreHorizIcon fontSize="large" sx={{ color: "#3b5a79" }} />
            </IconButton>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                md={4}
                sm={3}
                xs={6}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <h3 className="k">K</h3>
                <h3 className="kavina">kavina</h3>
              </Grid>
              <Grid
                md={4}
                sm={3}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <SearchIcon sx={{ color: "#acacac", mr: 1, my: 0.5 }} />
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root ": {
                        "& > fieldset": {
                          borderColor: "#acacac",
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "#acacac",
                        },
                      },
                    }}
                    className="inputField"
                    id="input-with-sx"
                    // label="Search"
                    placeholder="Type text to search..."
                    variant="standard"
                    inputProps={{ style: { color: "#acacac" } }}
                  />
                </Box>
              </Grid>
              <Grid
                md={4}
                sm={5}
                xs={6}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid>
                  <EmailIcon sx={{ color: "#e6e6e6", mx: 3 }} />
                </Grid>
                <Grid>
                  <NotificationsIcon sx={{ color: "#e6e6e6" }} />
                </Grid>
                <Grid
                  md={3}
                  sm={4}
                  xs={5}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <AccountCircleIcon fontSize="large" sx={{ color: "black" }} />{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{ color: "black" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid
              container
              mt={8}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                >
                  <Grid>
                    <InsertChartOutlinedSharpIcon
                      fontSize="large"
                      sx={{ color: "#2c3d4f", mr: 1 }}
                    />
                  </Grid>
                  <Grid>
                    {" "}
                    <h2>Sales</h2>
                  </Grid>
                  <Grid>
                    {" "}
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      sx={{ color: "#2c3d4f" }}
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <p>Welcome to kavina CRM Sales Dashboard</p>
                </Grid>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5b99d6",
                    textTransform: "capitalize",
                    py: 1,
                    borderRadius: 2,
                  }}
                  startIcon={<AddIcon fontSize="small" />}
                >
                  Add Dashlet
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={6} my={1}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 320,
                    // border : '2px solid red',
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Revenue</h4>
                      <p>This year</p>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <h2>$433,534,300</h2>
                    <p>Sold 12,332 Items</p>
                  </Grid>
                  <Grid>
                    <Bar />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 320,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Product Order</h4>
                      <p>This month</p>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <AreaRadial />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      mb: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: 150,
                      backgroundColor: "#bce9ec",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "white" }}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid>
                        {" "}
                        <ShoppingCartOutlinedIcon
                          fontSize="large"
                          sx={{ color: "#639ea2", margin: 2 }}
                        />
                      </Grid>
                      <Grid
                        sx={{ color: "#639ea2", margin: { md: -2, lg: 3 } }}
                      >
                        <h2 style={{ color: "#639ea2" }}>$433,534,300</h2>
                        <p style={{ color: "#639ea2" }}>Sold 12,332 Items</p>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: 150,
                      backgroundColor: "#cbecbd",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "white" }}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid>
                        {" "}
                        <InboxOutlinedIcon
                          fontSize="large"
                          sx={{ color: "#83ac70", margin: 2 }}
                        />
                      </Grid>
                      <Grid sx={{ color: "#3b5a79", margin: 2 }}>
                        <h2 style={{ color: "#83ac70" }}>53.345</h2>
                        <p style={{ color: "#83ac70" }}>Order</p>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>

              {/* Recent Orders */}
            </Grid>
            <Grid container spacing={6} my={1}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                    // border : '2px solid red',
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Customers</h4>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h2>$433,534,300</h2>
                  </Grid>
                  <Grid>
                    <Line />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                    // border : '2px solid red',
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Daily Sales</h4>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Area />
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                    // border : '2px solid red',
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Monthly Sales</h4>
                      <p> ( In Millions )</p>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Hello />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                    // border : '2px solid red',
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      md={10}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {" "}
                      <h4>Department Sales</h4>
                    </Grid>
                    <Grid
                      md={2}
                      xs={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <MoreHorizIcon
                        fontSize="medium"
                        sx={{ color: "#a5a5a5" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Doughnut />
                    {/* <Charts /> */}
                    {/* <Doughnut/> */}
                    {/* <Doughnut1/> */}
                    {/* <ApexCharts/> */}
                    {/* <Curve/> */}
                  </Grid>
                </Paper>
              </Grid>

              {/* Recent Orders */}
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
