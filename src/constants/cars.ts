export interface CarsType {
  name: string;
  image: string;
  description: string;
  manufacturing_year: string;
  price: string;
}

export const CARS: CarsType[] = [
  {
    name: "Tesla Model S",
    image: "/teslamodels.webp",
    description: "Electric sedan with impressive range and performance.",
    manufacturing_year: "2022",
    price: "₹74,90,000"
  },
  {
    name: "Ford Mustang",
    image: "/fordmustang.webp",
    description: "Classic American muscle car with a powerful V8 engine.",
    manufacturing_year: "2021",
    price: "₹45,90,000"
  },
  {
    name: "Toyota Camry",
    image: "/toyotacamry.webp",
    description: "Reliable and efficient mid-size sedan.",
    manufacturing_year: "2020",
    price: "₹18,30,000"
  },
  {
    name: "Chevrolet Corvette",
    image: "/chevroletcorvette.webp",
    description: "High-performance sports car with a sleek design.",
    manufacturing_year: "2023",
    price: "₹56,30,000"
  },
  {
    name: "Honda Civic",
    image: "/hondacivic.webp",
    description: "Compact car with excellent fuel economy and modern features.",
    manufacturing_year: "2019",
    price: "₹17,50,000"
  },
  {
    name: "BMW X5",
    image: "/bmwx5.webp",
    description: "Luxury SUV with advanced technology and a spacious interior.",
    manufacturing_year: "2022",
    price: "₹50,10,000"
  }
];

  
 
  