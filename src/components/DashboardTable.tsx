import { CARS } from "@/constants/cars";
import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useState } from "react";
import { useCars } from "../../providers/CarsProvider";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const DashboardTable = () => {
  const { cars } = useCars();

  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [clickedId, setClickedId] = useState<number>(1)

  return (
    <div>
      <Table className="text-[#fafafa]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <p className="pl-7">Image</p>
            </TableHead>
            <TableHead>
              <p className="pl-4">Name</p>
            </TableHead>
            <TableHead>
              <p className="pl-7">Actions</p>
            </TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars.map((car, index) => (
            <TableRow key={car.name}>
              <TableCell className="font-medium">
                <div className="w-24 h-12 relative">
                  <Image
                    src={car.image}
                    className="bg-white p-1 rounded-lg object-contain"
                    fill
                    alt="car"
                  />
                </div>
              </TableCell>
              <TableCell>{car.name}</TableCell>
              <TableCell>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setClickedId(index)
                      setIsEditing(true);
                    }}
                    className="p-3 bg-gray-800 border border-gray-600 rounded-full shadow-md transition-transform transform hover:bg-gray-900 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Edit">
                    <Edit className="w-5 h-5 text-blue-400" />
                  </button>

                  <button
                    onClick={() => {
                      setClickedId(index)
                      setIsDelete(true);
                    }}
                    className="p-3 bg-gray-800 border border-gray-600 rounded-full shadow-md transition-transform transform hover:bg-gray-900 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Delete">
                    <Trash className="w-5 h-5 text-red-400" />
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-right">{car.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditDialog id={clickedId} isEditing={isEditing} setIsEditing={setIsEditing} />

      <DeleteDialog id={clickedId} isDelete={isDelete} setIsDelete={setIsDelete} />
    </div>
  );
};

export default DashboardTable;
