import React from "react";
import { useTable } from "react-table";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTableContainer component={Paper}>
      <StyledMui {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </StyledMui>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)({
  width: "1140px",
  margin: "20px",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
  backgroundColor: "#FFFFF",
  padding: "0 0 10px 10px",
});

const StyledMui = styled(MUITable)({
  width: "100%",
  border: "none",
  backgroundColor: "#FFFFFF",
  "& thead th": {
    border: "none",
    fontWeight: "bold",
    color: "#010106",
  },
  "& tbody tr": {
    backgroundColor: "#FFFFFF",
  },
  "& tbody tr:nth-of-type(odd)": {
    backgroundColor: "rgba(212,212,212,1)",
  },
  "& tbody td": {
    border: "none",
    color: "#010106",
  },
});
