import { Card, CardContent, Typography } from "@mui/material";

export const LocationCard = ({ id, locationName, type, dimension }) => {
  let display;
  let results = 1;
  if (results) {
    return (
      <Card key={id} positions="relative">
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {locationName}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Type of location: {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dimension: {dimension}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    display = "No location found :(";
  }

  return <div>{display}</div>;
};
