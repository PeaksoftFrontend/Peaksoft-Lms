import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const TableTaxt = ({ rows, columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {columns.map((item) => (
            <TableRow key={item.id} {...item}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.group}</TableCell>
              <TableCell>{item.format}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} {...row}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.group}</TableCell>
              <TableCell>{row.format}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
