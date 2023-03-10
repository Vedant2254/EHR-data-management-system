import Head from "next/head";
import ConnectButton from "../components/ConnectButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>EHR data management system</title>
      </Head>
      <main>
        <nav>
          <ConnectButton />
        </nav>
      </main>
    </>
  );
}
