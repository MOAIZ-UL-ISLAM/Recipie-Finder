import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

function RecipeListItem({ recipie }) {
  return (
    <Card>
      <img src={recipie.image_url} style={{ height: 170 }} />
      <Card.Content>
        <Card.Header content={recipie.title} />
        <Card.Description>
          <h4>{recipie.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/Recipes/${recipie.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
        />
        <Button
          href={recipie.source_url}
          target="_blank"
          content="Details URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
}

export default RecipeListItem;
