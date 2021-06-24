import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import calendarIcon from "../assets/calendar-icon.png";
import MyTableRow from "./MyTableRow";
import "./PayoutTable.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 320,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: "auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    display: "flex",
    border: "1px solid #EBEBEB",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8px",
    right: 0,
    top: 1.8,
    color: "#534f57",
  },
  inputRoot: {
    color: "inherit",
    width: "300px",
    height: "42px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function createData(payoutId, source, date, amount) {
  return { payoutId, source, date, amount };
}

const payoutDetails = [
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
  {
    payoutId: "KLA12578DHQ",
    source: "Vel pellentesque ornare",
    date: "25th November, 2020",
    amount: "$1,200",
  },
];

const createRows = () => {
  let arrData = [];
  payoutDetails.map((detail) => {
    const { payoutId, source, date, amount } = detail;
    arrData.push(createData(payoutId, source, date, amount));
    return "";
  });
  return arrData;
};
const rows = createRows();

function PayoutTable() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [showMore, setShowMore] = useState(false);

  return (
    <TableContainer
      className="tablecontainer"
      style={{ marginTop: "40px" }}
      component={Paper}
    >
      <div className="payout-navbar">
        <div className="navbar-title">
          <h3>Payout table</h3>
        </div>
        <div className="navbar-searchbar">
          <div className={classes.search}>
            <InputBase
              placeholder="Search something…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon className="searchIcon" />
            </div>
          </div>
        </div>
        <div className="navbar-datepicker">
          <DatePicker
            className="datepicker"
            dateFormat="MMMM, yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <img
            className="calendarIcon"
            src={calendarIcon}
            alt="calendar icon"
          />
        </div>
        <div className="navbar-payoutBtn">
          <Button className="payout-btn" variant="contained" color="primary">
            Payout
          </Button>
        </div>
      </div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow>
            <TableCell className="tablehead">
              <h6>Payout Id</h6>
            </TableCell>
            <TableCell align="left">
              <h6>Source</h6>
            </TableCell>
            <TableCell align="left">
              <h6>Date</h6>
            </TableCell>
            <TableCell align="left">
              <h6>Amount</h6>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tablebody">
          <MyTableRow rows={rows} showMore={showMore} />
        </TableBody>
      </Table>
      {showMore === false && rows.length > 4 && (
        <Button onClick={() => setShowMore(true)} className="seeMore-btn">
          See more
        </Button>
      )}
    </TableContainer>
  );
}

export default PayoutTable;
