import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "../base/Input";
import { Title } from "../base/Title";
import { api } from "@/api";
export const Header = () => {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [recipes, setRecipes] = useState<Array<any>>([]);
  const getRecipesTitle = async (searchTitle: string) => {
    if (searchTitle.length > 2) {
      const response = await api.get(`/autocomplete?query=${searchTitle}`);
      const data = await response.data;
      setRecipes(data);
    } else {
      setRecipes([]);
    } 
  };

  useEffect(() => {
    getRecipesTitle(searchTitle);
  }, [searchTitle]);

  return (
    <header className="w-full h-16 bg-dark text-white flex items-center justify-around">
      <Title link="/">Recipes</Title>
      <div className="relative">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchTitle(e.target.value)}
          value={searchTitle}
          className="text-dark"
        />
        {recipes && (
          <ul className="absolute top-14 w-52 z-50">
            {recipes?.map((recipe) => (
              <li className="text-center border p-1 bg-white text-dark" key={recipe.id} onClick={()=> setSearchTitle("")}>
                <Link href={`/detail/${recipe.id}`} className="w-full">
                  {recipe?.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};