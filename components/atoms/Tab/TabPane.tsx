import { Tab } from "semantic-ui-react";

export const TabPane = (props: any) => {
  return (
    <Tab.Pane style={{ padding: 0, border: 0 }} {...props}>
      {props.children}
    </Tab.Pane>
  );
};
