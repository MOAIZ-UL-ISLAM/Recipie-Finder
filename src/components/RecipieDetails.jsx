import { useEffect, useState } from "react";
import { getresult } from "./Services/api";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, List } from "semantic-ui-react";

function RecipieDetails() {
  const [recipe, setrecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    const getdata = async () => {
      let response = await getresult(recipeId);
      if (response && response.recipe) {
        setrecipe(response.recipe);
      }
    };
    getdata();
  }, []);
  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="details">
      <Grid.Column>
        <Button
          className="back"
          as={Link}
          to={"/Recipies"}
          content="Back to List"
          color="orange"
        />
        <Image src={recipe.image_url} className="image" />
      </Grid.Column>
      <Grid.Column>
        <Header>
          {" "}
          <h2 style={{ color: "#777" }}>{recipe.title}</h2>
        </Header>
        <p>
          Provided by:
          <span style={{ color: "green" }}>{recipe.publisher}</span>
        </p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          content="Publisher URL"
          target="_blank"
          color="pink"
          size="tiny"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          content="Recipe URL"
          target="_blank"
          color="black"
          size="tiny"
        />
        <Header size="small" content="Ingredients" color="blue" />
        <List>
          {recipe &&
            recipe.ingredients.map((item) => (
              <List.Item>
                <h4>{item}</h4>
              </List.Item>
            ))}
        </List>
      </Grid.Column>
    </Grid>
  ) : null;
}

export default RecipieDetails;
