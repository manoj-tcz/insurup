import Head from "next/head";
import HomePage from "./Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>InsurUp Home</title>
      </Head>
      <HomePage />
    </>
  );
}
