import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function MyTableRow({ rows, showMore }) {
  const items = rows;
  if (showMore === true)
    return (
      <>
        {items.map((row, idx) => (
          <TableRow key={idx}>
            <TableCell component="th" scope="row">
              <p>{row.payoutId}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.source}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.date}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.amount}</p>
            </TableCell>
          </TableRow>
        ))}
      </>
    );

  if (items.length > 4)
    return (
      <>
        {rows.slice(0, 4).map((row, idx) => (
          <TableRow key={idx}>
            <TableCell component="th" scope="row">
              <p>{row.payoutId}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.source}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.date}</p>
            </TableCell>
            <TableCell align="left">
              <p>{row.amount}</p>
            </TableCell>
          </TableRow>
        ))}
      </>
    );

  return (
    <>
      {items.map((row, idx) => (
        <TableRow key={idx}>
          <TableCell component="th" scope="row">
            <p>{row.payoutId}</p>
          </TableCell>
          <TableCell align="left">
            <p>{row.source}</p>
          </TableCell>
          <TableCell align="left">
            <p>{row.date}</p>
          </TableCell>
          <TableCell align="left">
            <p>{row.amount}</p>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default MyTableRow;
