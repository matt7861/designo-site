import SimpleHero from "../../components/SimpleHero/SimpleHero";
import WorkCardContainer from "../../components/WorkCardContainer/WorkCardContainer";
import WorkCard from "../../components/WorkCards/WorkCard";

const AppDesign = () => {
  return (
    <div>
      <SimpleHero
        title={"App Design"}
        text={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />

      <WorkCardContainer>
        <WorkCard
          size="small"
          to="/web-design"
          bgImage="../../../src/assets/images/web-design.jpg"
          title="WEB DESIGN"
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

export default AppDesign;
