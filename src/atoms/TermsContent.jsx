import React from "react";

export const TermsContent = props => {
  return (
    <div className="terms-content flex-col">
      <h4>
        {props.number}.{props.name}
      </h4>
      <p>{props.content}</p>
    </div>
  );
};
