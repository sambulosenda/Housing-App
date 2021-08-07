import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function search({searchResults}) {
  const router = useRouter();
  const { location, startDate, endDate } = router.query;

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className=" hidden lg:inline-flex mb-5 space-x-3  text-gray-500">
            <p className="button">Cancel Flexebility</p>

            <p className="button">Price</p>

            <p className="button">Instant Book</p>

            <p className="button">Cancel Flexebility</p>
          </div>

          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getStaticProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/DB41").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
