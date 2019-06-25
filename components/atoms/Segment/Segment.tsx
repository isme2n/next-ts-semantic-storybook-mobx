import { Segment } from "semantic-ui-react";

export const SemanticSegment = (props: any) => (
  <Segment
    style={{
      display: "grid",
      width: `${props.width}`,
      borderRadius: 0,
      justifyContent: "center",
      padding: 0,
      margin: 10
    }}
    {...props}
  >
    {props.children}
  </Segment>
);
