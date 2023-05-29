import Hero from "../../components/Hero/Hero";
import WorkCard from "../../components/WorkCards/WorkCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkCard
        to="/app-design"
        bgImage="../../../src/assets/images/app-design.jpg"
        title="APP DESIGN"
      />
      <WorkCard
        to="/web-design"
        bgImage="../../../src/assets/images/web-design.jpg"
        title="WEB DESIGN"
      />
      <WorkCard
        to="/graphic-design"
        bgImage="../../../src/assets/images/graphic-design.jpg"
        title="GRAPHIC DESIGN"
      />
    </div>
  );
};

export default Home;
