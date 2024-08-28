import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  );
};
export default HomePage;
