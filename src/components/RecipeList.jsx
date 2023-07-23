import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, querysearch }) {
  return (
    <Container>
      <Header
        size="huge"
        content={`Searched Query ${querysearch}`}
        textAlign="center"
      />
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipie) => (
            <Grid.Column>
              <RecipeListItem recipie={recipie}></RecipeListItem>
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
