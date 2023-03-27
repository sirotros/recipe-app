import { api } from "@/api";
import { GetServerSideProps } from "next";
import Detail from "@/components/ui/Detail";
import Head from "next/head";
import SimilarCard from "@/components/ui/SimilarCard";
import { Title } from "@/components/base/Title";
const Details = ({ recipe, similar }: any) => {
  console.log(similar);
  return (
    <div>
      <Head>
        <title> {recipe ? recipe?.title : "Detail"} </title>
      </Head>
      <Detail recipe={recipe} />
      {similar && (
        <div className="my-10  md:w-11/12 md:ml-10">
          <Title>Similar Items</Title>
          <div>
            {similar &&
              similar
                .slice(0, 6)
                .map((similarItem: any) => (
                  <SimilarCard recipes={similarItem} />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const information = await api.get(`/${Number(id)}/information`);
  const recipe = await information.data;

  const similarData = await api.get(`/${Number(id)}/similar`);
  const similar = await similarData.data;
  return {
    props: {
      recipe,
      similar,
    },
  };
};
