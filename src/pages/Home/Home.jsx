import Hero from "../../components/Hero/Hero";
import TextImageColumns from "../../components/TextImageColumns/TextImageColumns";
import ColumnWrapper from "../../components/UI/ColumnWrapper/ColumnWrapper";
import WorkCardContainer from "../../components/WorkCardContainer/WorkCardContainer";
import WorkCard from "../../components/WorkCards/WorkCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkCardContainer layout="featured">
        <WorkCard
          size="large"
          to="/web-design"
          bgImage="../../../src/assets/images/web-design.jpg"
          title="WEB DESIGN"
        />
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
      <ColumnWrapper>
        <TextImageColumns
          image="../../../src/assets/images/passionate.svg"
          title="PASSIONATE"
          text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <TextImageColumns
          image="../../../src/assets/images/resourceful.svg"
          title="RESOURCEFUL"
          text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        />
        <TextImageColumns
          image="../../../src/assets/images/friendly.svg"
          title="FRIENDLY"
          text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </ColumnWrapper>
    </div>
  );
};

export default Home;
