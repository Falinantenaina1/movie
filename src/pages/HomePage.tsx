import { Hero } from "../components/Hero";
import { Popular } from "../components/Popular";
import { TopRated } from "../components/TopRated";
import { Upcoming } from "../components/Upcoming";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Upcoming />
      <TopRated />
    </>
  );
};

export default HomePage;
