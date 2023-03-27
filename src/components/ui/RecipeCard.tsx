import { RecipeResultsType } from "@/types/RecipeCardTypes";
import Link from "next/link";
import { FC } from "react";
type RecipeCardType = {
  recipe: RecipeResultsType;
};
const RecipeCard: FC<RecipeCardType> = ({ recipe }) => {
  return (
    <Link
      href={`/detail/${recipe.id}`}
      className="md:w-72 sm:w-36 md:h-80 sm:h-40 border text-center relative rounded-lg"
    >
      <img
        src={recipe?.image}
        alt={recipe?.title}
        className="w-full h-full rounded-lg object-fill"
      />
      <p className="sm:h-10 md:h-10 w-full md:text-xl flex items-center justify-center absolute bottom-0 rounded-b-lg text-dark bg-light">
        
        {recipe?.title.slice(0, 15)}...
      </p>
    </Link>
  );
};

export default RecipeCard;
