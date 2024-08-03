import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddDialog from "./AddDialog";


const AddCarCard = () => {
    const [isAdding, setIsAdding] = useState(false)

  return (
    <div>
            <Card onClick={()=>{setIsAdding(true)}} className="bg-[#151518] cursor-pointer border-solid border-[#27272a] flex flex-col justify-center items-start transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#1e1e1e]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Add Car
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                <Plus />
              </div>
            </CardContent>
          </Card>

         <AddDialog 
         isAdding={isAdding}
         setIsAdding={setIsAdding}
         />
    </div>

  )
}

export default AddCarCard