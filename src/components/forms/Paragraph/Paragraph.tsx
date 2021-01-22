import React from "react";
import classnames from "classnames";

interface ParagraphProps {
  text: string;
  id?: string;
  className?: string;
}

export const Paragraph = (props: ParagraphProps): React.ReactElement => {
  const { text, className, id } = props;

  const classes = classnames("gc-p", className);

  return (
    <React.Fragment>
      <p data-testid="p" className={classes} id={id}>
        {text}
      </p>
    </React.Fragment>
  );
};

export default Paragraph;

