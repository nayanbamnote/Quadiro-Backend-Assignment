
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCars } from "../../providers/CarsProvider";

const TotalCars = () => {
  const {cars} = useCars()
  return (
    <Card className=" bg-[#151518] w-72 border-solid border-[#27272a]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Cars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{cars.length}</div>
            </CardContent>
          </Card>
  )
}

export default TotalCars