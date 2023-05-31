import SimpleHero from "../../components/SimpleHero/SimpleHero";
import WorkCardContainer from "../../components/WorkCardContainer/WorkCardContainer";
import WorkCard from "../../components/WorkCards/WorkCard";

const WebDesign = () => {
  return (
    <div>
      <SimpleHero
        title={"Web Design"}
        text={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <WorkCardContainer>
        <WorkCard
          size="small"
          to="/app-design"
          bgImage="../../../src/assets/images/app-design.jpg"
          title="APP DESIGN"
        />
        <WorkCard
          size="small"
          to="/graphic-design"
          bgImage="../../../src/assets/images/graphic-design.jpg"
          title="GRAPHIC DESIGN"
        />
      </WorkCardContainer>
    </div>
  );
};

export default WebDesign;
