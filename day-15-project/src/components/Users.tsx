"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

// Mock data for 15 users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    phone: "+1 234 567 890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Elm St, Town, Country",
    phone: "+1 234 567 891",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    address: "789 Oak St, Village, Country",
    phone: "+1 234 567 892",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    address: "101 Pine St, Hamlet, Country",
    phone: "+1 234 567 893",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    address: "202 Maple St, Borough, Country",
    phone: "+1 234 567 894",
  },
  {
    id: 6,
    name: "Eva Wilson",
    email: "eva@example.com",
    address: "303 Cedar St, District, Country",
    phone: "+1 234 567 895",
  },
  {
    id: 7,
    name: "Frank Miller",
    email: "frank@example.com",
    address: "404 Birch St, County, Country",
    phone: "+1 234 567 896",
  },
  {
    id: 8,
    name: "Grace Taylor",
    email: "grace@example.com",
    address: "505 Walnut St, State, Country",
    phone: "+1 234 567 897",
  },
  {
    id: 9,
    name: "Henry Anderson",
    email: "henry@example.com",
    address: "606 Cherry St, Province, Country",
    phone: "+1 234 567 898",
  },
  {
    id: 10,
    name: "Ivy Thomas",
    email: "ivy@example.com",
    address: "707 Pineapple St, Territory, Country",
    phone: "+1 234 567 899",
  },
  {
    id: 11,
    name: "Jack Robinson",
    email: "jack@example.com",
    address: "808 Apple St, Region, Country",
    phone: "+1 234 567 900",
  },
  {
    id: 12,
    name: "Kelly White",
    email: "kelly@example.com",
    address: "909 Grape St, Area, Country",
    phone: "+1 234 567 901",
  },
  {
    id: 13,
    name: "Liam Harris",
    email: "liam@example.com",
    address: "111 Peach St, Zone, Country",
    phone: "+1 234 567 902",
  },
  {
    id: 14,
    name: "Mia Clark",
    email: "mia@example.com",
    address: "222 Plum St, Sector, Country",
    phone: "+1 234 567 903",
  },
  {
    id: 15,
    name: "Noah Lewis",
    email: "noah@example.com",
    address: "333 Orange St, District, Country",
    phone: "+1 234 567 904",
  },
];

export default function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 5;

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
          <CardDescription>Manage and view user details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex-1 text-center text-sm text-muted-foreground">
              Page {currentPage} of{" "}
              {Math.ceil(filteredUsers.length / usersPerPage)}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastUser >= filteredUsers.length}
            >
              Next
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
