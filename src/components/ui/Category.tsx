import { GiHamburger } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { BiCookie } from "react-icons/bi";
import { TbSalad } from "react-icons/tb";

type CategoryType = {
  className?: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  categoryName: string;
};

const Category = ({
  className,
  categoryName,
  setCategoryName,
}: CategoryType) => {
    
  return (
    <ul className={`flex justify-center sm:flex-wrap md:flex-nowrap md:mr-10 ${className}`}>
      <li
        className={`flex items-center gap-2 cursor-pointer ${categoryName === "Burger" && "bg-orange-400 text-white rounded-3xl px-5 py-1"}`}
        onClick={() => setCategoryName("Burger")}
      >
        Burger <GiHamburger />
      </li>
      <li
        className={`flex items-center gap-2 mx-5 cursor-pointer ${categoryName === "Pizza" && "bg-orange-400 text-white rounded-3xl px-5 py-1"}`}
        onClick={() => setCategoryName("Pizza")}
      >
        Pizza <FaPizzaSlice />
      </li>
      <li
        className={`flex items-center gap-2 mx-5 cursor-pointer ${categoryName === "Salad" && "bg-orange-400 text-white rounded-3xl px-5 py-1"}`}
        onClick={() => setCategoryName("Salad")}
      >
        Salad <TbSalad />
      </li>
      <li
        className={`flex items-center gap-2 mx-5 cursor-pointer ${categoryName === "Pasta" && "bg-orange-400 text-white rounded-3xl px-5 py-1"}`}
        onClick={() => setCategoryName("Pasta")}
      >
        Pasta
      </li>
      <li
        className={`flex items-center gap-2 mx-5 cursor-pointer ${categoryName === "Cookie" && "bg-orange-400 text-white rounded-3xl px-5 py-1"}`}
        onClick={() => setCategoryName("Cookie")}
      >
        Cookie <BiCookie />
      </li>
    </ul>
  );
};

export default Category;
