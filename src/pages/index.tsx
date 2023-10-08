import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const index: React.FC = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Epora"} />
      <Home />
    </Wrapper>
  );
};

export default index;
