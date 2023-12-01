import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

interface Column {
  id: "method" | "from" | "to" | "amount" | "createdAt";
  label: string;
  minWidth?: number;
  align?: "left";
}

const columns: readonly Column[] = [
  { id: "method", label: "Method", minWidth: 170 },
  { id: "from", label: "From", minWidth: 170 },
  { id: "to", label: "To", minWidth: 170 },
  { id: "amount", label: "Amount", minWidth: 170 },
  { id: "createdAt", label: "CreatedAt", minWidth: 170 },
];

interface Data {
  method: string;
  from: string;
  to: string;
  amount: string;
  createdAt: string;
}

interface Item {
  method: string;
  from: string;
  to: string;
  amount: string;
  createdAt: string;
}

function createData(
  method: string,
  from: string,
  to: string,
  amount: string,
  createdAt: string
): Data {
  return { method, from, to, amount, createdAt };
}

const History = () => {
  const [rows, setRows] = React.useState<Item[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  React.useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = Object(jwtDecode(String(currentUser)));
      axios
        .post(`http://localhost:3130/api/user/history/${user.id}`)
        .then((res) => {
          console.log(res.data);
          let temp: Item[] = [];
          res.data.map((item: Item) => {
            temp.push(
              createData(
                item.method,
                item.from,
                item.to,
                item.amount,
                item.createdAt
              )
            );
          });
          setRows(temp);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <HistoryBox sx={{ px: 4 }}>
        <Box sx={{ my: 3 }}>
          <Link to="/">
            <Button sx={{ mx: 1 }} variant="outlined">
              Home
            </Button>
          </Link>
          <Link to="/deposit">
            <Button sx={{ mx: 1 }} variant="outlined">
              Deposit
            </Button>
          </Link>
        </Box>

        <HistoryHead sx={{ flex: "1 1 100%" }} variant="h2" id="tableTitle">
          History
        </HistoryHead>

        <HistoryTable sx={{ mx: 2 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, idx) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[7]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </HistoryTable>
      </HistoryBox>
    </ThemeProvider>
  );
};

export default History;

const HistoryBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#e1f5fe",
  width: "100%",
  height: "100vh",
}));

const HistoryHead = styled(Typography)(({ theme }) => ({
  marginBottom: "30px",
  textAlign: "center",
}));

const HistoryTable = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
