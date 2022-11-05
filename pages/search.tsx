import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import format from "date-fns/format";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

const Search = ({ searchResults, searchLocation }: any) => {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, numberOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(format(new Date(), "dd-MMMM-yy"));
  return (
    <div>
      <Header
        placeholder={`${
          location === "Unknown" ? searchLocation : location
        } | ${range} | ${numberOfGuest} hosts`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchResults.length}
            150+ Stay - {range} - for {numberOfGuest} hosts
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {location === "Unknown"
              ? `Sorry, we couldn't find any matches. How about ${searchLocation}?`
              : `Stays in ${location}`}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                amenities,
                rating,
                price,
                total,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  amenities={amenities}
                  rating={rating}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { location } = context.query;
  let searchLocation = "";
  let searchResults = " ";
  if (location === "Unknown") {
    const locations = ["London", "New York", "Dubai", "Paris"];
    searchLocation = locations[Math.floor(Math.random() * locations.length)];
  } else {
    searchLocation = location;
  }
  switch (searchLocation) {
    case "New York":
      searchResults = await fetch("https://www.jsonkeeper.com/b/FMDH").then(
        (res) => res.json()
      );
      break;
    case "London":
      searchResults = await fetch("https://www.jsonkeeper.com/b/18U7").then(
        (res) => res.json()
      );
      break;
    case "Dubai":
      searchResults = await fetch("https://www.jsonkeeper.com/b/N1I0").then(
        (res) => res.json()
      );
      break;
    case "Paris":
      searchResults = await fetch(" https://www.jsonkeeper.com/b/ABU1").then(
        (res) => res.json()
      );
      break;
    default:
      searchResults = await fetch("https://www.jsonkeeper.com/b/18U7").then(
        (res) => res.json()
      );
      break;
  }

  return {
    props: {
      searchResults,
      searchLocation,
    },
  };
}
