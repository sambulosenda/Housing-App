import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCover from '../components/SmallCover'
import Footer from "../components/Footer";

export default function Home({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
        <h2 className="text-4xl font-semibold pd-5">Explore nearby places</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {exploreData?.map(({img,  distance, location }) => (
          
         <SmallCover 
         key={img}
         img={img}
         distance={distance}
         location={location}
         />

        ))}</div>
      </section>

      </main>
      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/UCQT').
  then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData
    }
  }
};

