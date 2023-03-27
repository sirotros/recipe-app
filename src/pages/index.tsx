import Head from "next/head";
import { useEffect, useState } from "react";
import Category from "@/components/ui/Category";
import RecipeCard from "@/components/ui/RecipeCard";
import { RecipeCardType } from "@/types/RecipeCardTypes";
import { api } from "@/api";
import ReactPaginate from "react-paginate";

export default function Home() {
  const [categoryName, setCategoryName] = useState<string>("Burger");
  const [recipes, setRecipes] = useState<RecipeCardType>();
  const [offset, setOffset] = useState<number>(1);
  console.log(process)
  const getRecipes = async () => {
    const response = await api.get(`complexSearch`, {
      params: { query: categoryName, offset: offset },
    });
    setRecipes(response.data);
  };

  const handleChange = (e: { selected: number; }) => {
    setOffset(e.selected + 1)
  }

  useEffect(() => {
    getRecipes();
  }, [categoryName,offset]);
  return (
    <>
      <Head>
        <title> Recipes </title>
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/476053/chef.svg"
          type="image/x-icon"
        />
      </Head>
      <Category
        className="my-7"
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
      <div className="flex flex-wrap justify-center lg:ml-32 md:gap-5 sm:gap-3 pb-5">
        {recipes &&
          recipes.results.map((result: any) => <RecipeCard recipe={result} />)}
      </div>
        {
          recipes && (
            <div className="flex justify-center my-5">
              <ReactPaginate
                className="flex"
                pageClassName="cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
                activeClassName="bg-gray-300 text-dark"
                breakLabel="..."
                breakClassName="cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300"
                previousLabel="<"
                previousClassName="cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300"
                nextLabel=">"
                nextClassName="cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300"
                onPageChange={handleChange}
                pageRangeDisplayed={2}
                pageCount={recipes.totalResults - 1}
              />
            </div>
          )
        } 

    </>
  );
}
