import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import left from "../../images/left.png";
import right from "../../images/right.png";
import "./Results.css";

function createData(position, teamName, leaderName, institution) {
  return { position, teamName, leaderName, institution };
}

const rows = [
  createData("1st", "DevsOnly", "Udit Kapoor", "The Northcap University"),
  createData(
    "2nd",
    "Cypherheads",
    "Ashish Sharma",
    "Guru Tegh Bahadur Institute of Technology"
  ),
  createData(
    "3rd",
    "XSpark",
    "Sidharth Dang",
    "Guru Tegh Bahadur Institute of Technology, New Delhi"
  ),
  createData("3rd", "Maze Runners", "Shivam", "The NorthCap University"),
];

function Results() {
  return (
    <div>
      <div className="results">
        <div className="about__heading">
          <img src={left} alt="" />
          <h1>Results</h1>
          <img src={right} alt="" />
        </div>

        <TableContainer
          sx={{ maxWidth: "fit-content" }}
          component={Paper}
          className="result-table"
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="bold-tablehead">Position</TableCell>
                <TableCell className="bold-tablehead">Team Name</TableCell>
                <TableCell className="bold-tablehead">
                  Team Leader Name
                </TableCell>
                <TableCell className="bold-tablehead">Institution</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell className="pink-text">{row.position}</TableCell>
                  <TableCell>{row.teamName}</TableCell>
                  <TableCell>{row.leaderName}</TableCell>
                  <TableCell>{row.institution}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Results;
