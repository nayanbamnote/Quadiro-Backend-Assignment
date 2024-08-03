import React, { useState, useEffect, useRef } from 'react';
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

interface EditDialogInterface {
    isEditing: boolean,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
    id: number
}

const EditDialog: React.FC<EditDialogInterface> = ({ isEditing, setIsEditing, id }) => {
    const { cars, editCar } = useCars();
    const car = cars[id];
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [editedCar, setEditedCar] = useState({
        name: '',
        image: '',
        description: '',
        manufacturing_year: '',
        price: ''
    });

    const [isImageUploaded, setIsImageUploaded] = useState(false);

    useEffect(() => {
        if (car) {
            setEditedCar({
                name: car.name || '',
                image: car.image || '',
                description: car.description || '',
                manufacturing_year: car.manufacturing_year || '',
                price: car.price || ''
            });
            setIsImageUploaded(!!car.image);
        }
    }, [car]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setEditedCar(prev => ({ ...prev, [id]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedCar(prev => ({ ...prev, image: reader.result as string }));
                setIsImageUploaded(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        editCar(id, editedCar);
        setIsEditing(false);
    };

    return (
        <Dialog open={isEditing} onOpenChange={() => setIsEditing(false)}>
            <DialogContent className="sm:max-w-[425px] bg-[#09090b] text-[#fafafa] border-solid border-[#1f1f21]">
                <DialogHeader>
                    <DialogTitle>Edit Car</DialogTitle>
                    <DialogDescription>
                        Make changes to your car here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value={editedCar.name} onChange={handleInputChange} className="col-span-3" />
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
                                {isImageUploaded ? 'Change Image' : 'Upload Image'}
                            </Button>
                        </div>
                    </div>
                    {isImageUploaded && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="col-span-4">
                                <img src={editedCar.image} alt="Car" className="max-w-full h-auto" />
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input id="description" value={editedCar.description} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="manufacturing_year" className="text-right">
                            Year
                        </Label>
                        <Input id="manufacturing_year" value={editedCar.manufacturing_year} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            Price
                        </Label>
                        <Input id="price" value={editedCar.price} onChange={handleInputChange} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditDialog;