import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const lineData = [
  { date: "01/12", clicks: 15 },
  { date: "03/12", clicks: 25 },
  { date: "05/12", clicks: 18 },
  { date: "08/12", clicks: 30 },
  { date: "10/12", clicks: 45 },
  { date: "12/12", clicks: 40 },
];

const barData = [
  { name: "Facebook", clicks: 50 },
  { name: "Gmail", clicks: 10 },
  { name: "Twitter", clicks: 20 },
  { name: "Whatsapp", clicks: 10 },
  { name: "Instagram", clicks: 20 },
  { name: "Other", clicks: 10 },
];

const pieData = [
  { name: "Mobile", value: 238 },
  { name: "Desktop", value: 142 },
  { name: "Tablet", value: 59 },
  { name: "Unknown", value: 28 },
];

const COLORS = ["#FF6F61", "#FFB88C", "#6B4C4C", "#E0BFB8"];

const promiseData = [
  { promise: "Money", price: "$200", purchasedBy: "Anonymous" },
  { promise: "Hydro flask", price: "₦20,500", purchasedBy: "Jane Harris" },
  { promise: "Money", price: "$200", purchasedBy: "Anonymous" },
  { promise: "Arabess", price: "₦41,000", purchasedBy: "Adeleke Sodiq" },
];

const purchasedData = [
  { promise: "Hydro flask", price: "₦20,500", purchasedBy: "Jane Harris" },
  { promise: "Arabess", price: "₦41,000", purchasedBy: "Adeleke Sodiq" },
];

const Activity = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#F5E6E0", minHeight: "100vh", p: 3 }}>
      {/* Back Button */}
      <Typography
        variant="body2"
        sx={{
          cursor: "pointer",
          color: "#000",
          fontWeight: 500,
          mb: 3,
        }}
      >
        &lt; Back
      </Typography>

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "#000",
          mb: 3,
        }}
      >
        Activities
      </Typography>

      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} md={6}>
          {/* Top Performing Date */}
          <Card sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                Top performing date
              </Typography>
              <Typography
                variant="h4"
                sx={{ my: 1, fontWeight: 600, color: "#000" }}
              >
                December 12, 2024
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "#FF6F61", mb: 1 }}>
                44 Clicks
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Dec 01 - Dec 12, 2024
              </Typography>
            </CardContent>
          </Card>

          {/* Clicks Over Time */}
          <Card sx={{ backgroundColor: "#FFF", borderRadius: 2, mt: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                Clicks over time
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="clicks" stroke="#6B8E23" dot />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Clicks by Device */}
          
<Card
  sx={{
    backgroundColor: "#FFF",
    borderRadius: 2,
    mt: 3,
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 220, // Increased container height for better spacing
  }}
>
  <Box sx={{ width: "60%", position: "relative", top: "-20px" }}>
    {/* Title */}
    <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
      Clicks by device
    </Typography>

    {/* Pie Chart */}
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={5}
          startAngle={90}
          endAngle={450}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

   {/* Total Clicks */}
<Typography
  align="center"
  variant="h6"
  sx={{
    fontWeight: 400, // Lighter font weight for the number
    fontSize: "24px", // Smaller font size for the number
    color: "#000", // Black or dark for the number
    mt: -12, // Increased negative margin to move it up
  }}
>
  467
</Typography>
<Typography
  align="center"
  variant="body2"
  sx={{
    fontWeight: 300, // Light font weight for the text
    fontSize: "12px", // Smaller font size for the text
    color: "gray", // Gray color for the text
    padding: "10px",
    mt: -2, // Increased negative margin for further alignment
  }}
>
  Clicks
</Typography>


  </Box>

  {/* Legend */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      mt: -2, // Adjusted margin-top for perfect alignment
    }}
  >
    {pieData.map((entry, index) => (
      <Box
        key={index}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
        sx={{ width: "100%" }}
      >
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 12,
              height: 12,
              backgroundColor: COLORS[index % COLORS.length],
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography variant="body2" sx={{ color: "#000" }}>
            {entry.name}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "#000", ml: 2 }}>
          {entry.value}
        </Typography>
      </Box>
    ))}
  </Box>
</Card>

        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={6}>
 {/* Clicks by Referral */}
<Card
  sx={{
    backgroundColor: "#FFF",
    borderRadius: 2,
    height: { xs: 300, md: 400 },
    display: "flex",
    flexDirection: "column",
  }}
>
  <CardContent sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
      Clicks by referral
    </Typography>
    <Box sx={{ flex: "1 1 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData}>
          <CartesianGrid
            strokeDasharray="3 3" // Dashed grid lines
            vertical // Enable vertical grid lines
            stroke="#E0E0E0" // Light faded color for grid lines
            strokeOpacity={0.7} // Adjust opacity for fading effect
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="clicks"
            fill="#FF6F61"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </CardContent>
</Card>


          {/* Promise List and Purchased Items */}
          <Card sx={{ backgroundColor: "#FFF", borderRadius: 2, mt: 3 }}>
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, mb: 1 }}
              >
                Your Promise List
              </Typography>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                sx={{ mb: 2 }}
              >
                <Tab label="Your Promise List" />
                <Tab label="Purchased Items" />
              </Tabs>
              <Divider />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Promise list</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Purchased by</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(tabValue === 0 ? promiseData : purchasedData).map(
                    (row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.promise}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.purchasedBy}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Activity;
