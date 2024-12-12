import Categories from "../categories/Categories";
import { ICardProps } from "../../interfaces/ICardProps";
import { Products } from "../products/Products";

interface HomeProps {
  data: ICardProps[];
}

export const Home = ({ data }: HomeProps) => {
  return (
    <main>
      <Categories />
      <Products data={data} />
      <div style={{ height: "3000px" }}></div>
    </main>
  );
};
