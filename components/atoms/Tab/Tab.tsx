import { Tab } from "semantic-ui-react";

export const SemanticTab = (props: any) => (
  <Tab
    grid={{ paneWidth: 12, tabWidth: 12 }}
    menu={{
      widths: `${props.panes.length}`,
      tabular: true,
      attached: true,
      secondary: true,
      pointing: true
    }}
    {...props}
  />
);
