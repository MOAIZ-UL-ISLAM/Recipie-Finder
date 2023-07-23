import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Header from "../components/commom/Header";

const Home = () => {
  const [search, setsearch] = useState(false);
  return (
    <Header title="Our Recpies" bgClass="bg-Image">
      <Button
        onClick={() => search}
        content="Search Recipies"
        color="primary"
        as={Link}
        to="/Recipies"
        size="big"
      />
    </Header>
  );
};

export default Home;
