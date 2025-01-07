import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

// Sample data
const rows = [
  { name: "Money", price: "$200", icon: <MoneyIcon color="success" /> },
  { name: "Hydro flask", price: "₦20,500", icon: <LocalDrinkIcon color="action" /> },
  { name: "Money", price: "£200", icon: <MoneyIcon color="success" /> },
  { name: "Arabess", price: "₦41,000", icon: null },
];

export default function PromiseListTable() {
  return (
    <Paper elevation={3} sx={{ borderRadius: "12px", padding: "16px", backgroundColor: "#fff" }}>
      {/* Tabs */}
      <Tabs value={0} textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: "#d32f2f" } }}>
        <Tab
          label="Your Promise List"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            color: "#000",
            borderBottom: "2px solid #d32f2f",
          }}
        />
        <Tab label="Purchased items" sx={{ textTransform: "none", color: "#aaa" }} />
      </Tabs>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#555" }}>Promise list</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", color: "#555" }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {row.icon} {row.name}
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ color: "#000", fontWeight: "500" }}>
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
