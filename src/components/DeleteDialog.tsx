import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button";
import { useCars } from "../../providers/CarsProvider";

  interface DeleteDialogInterface{
    isDelete: boolean,
    setIsDelete:  React.Dispatch<React.SetStateAction<boolean>>
    id: number;
}

const DeleteDialog: React.FC<DeleteDialogInterface> = ({isDelete, setIsDelete, id}) => {
    const {deleteCar} = useCars();

const handleDelete = () => {
    deleteCar(id);
    setIsDelete(false);
}

  return (
    <Dialog open={isDelete} onOpenChange={()=>{setIsDelete(false)}}>
    <DialogContent className="bg-[#09090b] text-[#fafafa] border-solid border-[#1f1f21]">
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently
        delete this car from our servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={handleDelete} type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default DeleteDialog