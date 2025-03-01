import { Box, Table, Input, Text, Link, Button, IconButton } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const HistoryPage = () => {
  const [rowData, setRowData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) getHistory();
  }, [id]);

  const getHistory = async () => {
    try {
      const res = await axios.get(
        `${window.location.origin}/api/user/gethistory/${id}`,
        { withCredentials: true }
      );
      setRowData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const columns = useMemo(
    () => [
      { 
        header: "Date-Time", 
        accessorKey: "createdAt",
        cell: (info) => (
          <Text noOfLines={1} title={info.getValue()}>
            {new Date(info.getValue()).toLocaleString()}
          </Text>
        ),
      },
      { header: "Template", accessorKey: "template" },
      { 
        header: "Prompt", 
        accessorKey: "prompt", 
        cell: (info) => (
          <Text noOfLines={1} title={info.getValue()}>
            {truncateText(info.getValue(), 200)}
          </Text>
        ),
      },
      { 
        header: "AI Response", 
        accessorKey: "aiResponse",
        cell: (info) => (
          <Box display="flex" alignItems="center" gap={2}>
            <Text noOfLines={1} title={info.getValue()} flex="1">
              {truncateText(info.getValue(), 200)}
            </Text>
            <Link
              color="purple.600"
              fontWeight={"bold"}
              onClick={() => navigator.clipboard.writeText(info.getValue())}
            >
              copy
              </Link>
          </Box>
        ),
      },
      
    ],
    []
  );

  const table = useReactTable({
    data: rowData,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Box w="full" p={4}>
      <Input
        placeholder="Search..."
        mb={4}
        border={'2px solid'}
        borderColor={'purple.500'}
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <Box w={"full"} shadow={'lg'} height={'400px'} maxH={'800px'} overflow={"auto"}>
      <Table.Root striped>
        <Table.Header position={'sticky'} top={0}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row bg={'purple.500'} key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.ColumnHeader color={"white"} key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id} >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
      </Table.Root>
      </Box>
      <Box mt={4} display="flex" gap={2} alignItems="center">
        <Button size={'xs'} bg={'green.800'} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Prev
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <Button size={'xs'} bg={'green.800'} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default HistoryPage;
