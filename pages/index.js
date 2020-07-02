import Head from "next/head";
import dynamic from "next/dynamic";

// That's where the magic happens
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>toto</div>
        <Map />
      </main>
    </div>
  );
}
