import SimpleHero from "../../components/SimpleHero/SimpleHero";
import WorkCardContainer from "../../components/WorkCardContainer/WorkCardContainer";
import WorkCard from "../../components/WorkCards/WorkCard";

const GraphicDesign = () => {
  return (
    <div>
      <SimpleHero
        title={"Graphic Design"}
        text={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
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
          to="/web-design"
          bgImage="../../../src/assets/images/web-design.jpg"
          title="WEB DESIGN"
        />
      </WorkCardContainer>
    </div>
  );
};

export default GraphicDesign;
