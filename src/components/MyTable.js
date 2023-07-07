import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

function MyTable() {
  const columns = [
    { field: "id", headerName: "NO.", width: 70 },
    { field: "firstName", headerName: "Mentor Name", width: 140 },
    { field: "lastName", headerName: "Employee Id", width: 100 },
    {
      field: "age",
      headerName: "E-mail ID      ",
      type: "number",
      width: 150,
    },
    {
      field: "fullName",
      headerName: "Skills",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
   
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   // pagination: {
        //   //   paginationModel: { page: 0, pageSize: 5 },
        //   // },
        // }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default MyTable;
