import { Popular } from "../components/Popular";
import { TopRated } from "../components/TopRated";
import { Upcoming } from "../components/Upcoming";

const HomePage = () => {
  return (
    <>
      <Popular />
      <Upcoming />
      <TopRated />
    </>
  );
};

export default HomePage;
