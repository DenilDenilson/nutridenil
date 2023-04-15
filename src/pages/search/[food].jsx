import CardsFoodContainer from "@/components/CardsFoodContainer";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function SearchFood() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const food = pathSegments[pathSegments.length - 1];

  return (
    <Layout>
      <div className="pl-4 flex flex-col gap-4 mt-[96px] mb-[68px]">
        <CardsFoodContainer title={food} />
      </div>
    </Layout>
  );
}
