import { SimilarType, SimilarItemsType } from "@/types/SimilarTypes";
import Link from "next/link";
type SimilarCardType = {
  recipes: SimilarItemsType;
};
const SimilarCard = ({ recipes }: SimilarCardType) => {
  return (
    <Link href={`/detail/${recipes.id}`}>
      <div className=" h-16 mt-5 border-2 p-2">
        <p>{recipes.title}</p>
        <p>Serving : {recipes.servings} </p>
      </div>
    </Link>
  );
};
export default SimilarCard;
