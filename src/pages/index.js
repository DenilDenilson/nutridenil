import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <>
      <h1 className="grid place-content-center min-h-screen text-center">
        Bienvenido a la nutriApp de DenilDenilson, si leíste esto, vayas vista o
        vaya conexión para bajita
      </h1>
    </>
  );
}
