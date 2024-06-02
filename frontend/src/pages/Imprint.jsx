import HeroVideo from "../components/HeroVideo";
import { homeDataHeroDE, homeDataHeroES } from "../data/homeData";
import { navigationDE, navigationES } from "../data/navigation";

const Imprint = () => {
  return (
    <>
      <header>
        <HeroVideo
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroES={homeDataHeroES}
          navigationDE={navigationDE}
          navigationES={navigationES}
        />
      </header>
    </>
  );
};

export default Imprint;
