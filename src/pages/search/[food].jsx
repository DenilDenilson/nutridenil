import CardsFoodContainer from "@/components/CardsFoodContainer";
import Layout from "@/components/Layout";

export default function SearchFood() {
  return (
    <Layout>
      <div className="pl-4 flex flex-col gap-4 mt-[96px] mb-[68px]">
        <CardsFoodContainer />
      </div>
    </Layout>
  );
}
