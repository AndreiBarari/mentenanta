import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const FAQCard = props => {
  return (
    <Card className="faq-card">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.question}
        </Typography>
        <Typography variant="body1">{props.answer}</Typography>
      </CardContent>
    </Card>
  );
};
