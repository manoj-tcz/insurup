import Head from "next/head";

import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>InsurUp Home</title>
      </Head>

      <main className={styles.main}>
        <p>
          Current Environment: <strong>{process.env.NEXT_PUBLIC_ENV}</strong>
        </p>
        
      </main>
    </>
  );
}
