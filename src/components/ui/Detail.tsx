import Image from "next/image";
import { Title } from "../base/Title";
import { RecipeTypes } from "@/types/RecipeTypes";

const Detail = ({ recipe }: RecipeTypes) => {
  return (
    <section className="flex flex-col items-center pt-16">
      <Title> {recipe?.title} </Title>
      <div className="lg:flex mt-5">
        <Image
          src={recipe?.image}
          height={370}
          width={556}
          alt={recipe?.title}
          className="md:mx-auto"
        />
        <div className="lg:mt-0 sm:mt-5">
          <p
            dangerouslySetInnerHTML={{ __html: recipe?.summary }}
            className="md:px-10"
          />
          <div className="text-center ml-10 mt-6">
            <span className="flex items-center">
              Ready in {recipe?.readyInMinutes} minutes
            </span>
          </div>
        </div>
      </div>
      {recipe.instructions && (
        <div className="lg:mt-16 md:mt-5 lg:px-0 md:px-10">
          <h3 className="text-2xl my-4">Instructions</h3>
          <p dangerouslySetInnerHTML={{ __html: recipe?.instructions }} />
        </div>
      )}
    </section>
  );
};

export default Detail;
