import React from "react";
import { useState } from "react";
import { Form, Grid, Input, Icon } from "semantic-ui-react";

function Search({ setquerysearch }) {
  const [value, setvalue] = useState("");
  const onFormSubmit = () => {
    setquerysearch(value);
  };

  return (
    <Grid columns={2} textAlign="center" className="search">
      <Grid.Column>
        <h1 className="search-heading">
          Search our <span style={{ color: "#2185D0" }}>Recipes</span>
        </h1>
        <h3>Input recipies seprated by comma</h3>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="Salsa..."
            icon={<Icon name="search" inverted circular link color="blue" />}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Search;
