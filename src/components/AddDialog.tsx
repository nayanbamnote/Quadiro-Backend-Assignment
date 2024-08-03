import React, { useState, useRef } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { useCars } from '../../providers/CarsProvider';

interface AddDialogInterface {
    isAdding: boolean,
    setIsAdding: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddDialog: React.FC<AddDialogInterface> = ({ isAdding, setIsAdding }) => {
    const { addCar } = useCars();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [newCar, setNewCar] = useState({
        name: '',
        image: '',
        description: '',
        manufacturing_year: '',
        price: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setNewCar(prev => ({ ...prev, [id]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewCar(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        addCar(newCar);
        setIsAdding(false);
        // Reset the form
        setNewCar({
            name: '',
            image: '',
            description: '',
            manufacturing_year: '',
            price: ''
        });
    };

    return (
        <Dialog open={isAdding} onOpenChange={() => setIsAdding(false)}>
            <DialogContent className="sm:max-w-[425px] bg-[#09090b] text-[#fafafa] border-solid border-[#1f1f21]">
                <DialogHeader>
                    <DialogTitle>Add New Car</DialogTitle>
                    <DialogDescription>
                        Enter the details of the new car. Click add when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value={newCar.name} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="image" className="text-right">
                            Image
                        </Label>
                        <div className="col-span-3 flex items-center">
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                ref={fileInputRef}
                            />
                            <Button onClick={() => fileInputRef.current?.click()} type="button">
                                Upload Image
                            </Button>
                            {newCar.image && <span className="ml-2">Image uploaded</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input id="description" value={newCar.description} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="manufacturing_year" className="text-right">
                            Year
                        </Label>
                        <Input id="manufacturing_year" value={newCar.manufacturing_year} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            Price
                        </Label>
                        <Input id="price" value={newCar.price} onChange={handleInputChange} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Add Car</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddDialog;