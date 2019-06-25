import { TableRow, TableCell } from "../../../components/atoms/Table";

import { Icon } from "../../../components/atoms/Icon";
import { NameWithSymbol } from "../../../components/molecules/NameWithSymbol/NameWithSymbol";
import { DoubleLineText } from "../../../components/molecules/DoubleLineText/DoubleLineText";

export const MarketListItem = (props: any) => {
  let color = "red";

  if (parseInt(props.d.DoDAmount) >= 0) {
    color = "red";
  } else {
    color = "blue";
  }

  return (
    <TableRow>
      <TableCell>
        <Icon name={`${props.d.starred ? "star" : "star outline"}`} />
      </TableCell>
      <TableCell>-</TableCell>
      <TableCell textAlign="left">
        <NameWithSymbol name={props.d.name} symbol={props.d.symbol} />
      </TableCell>
      <TableCell style={{ color: `${color}` }} textAlign="right">
        <DoubleLineText second={props.d.price} />
      </TableCell>
      <TableCell style={{ color: `${color}` }} textAlign="right">
        <DoubleLineText first={props.d.DoDPercent} second={props.d.DoDAmount} />
      </TableCell>
      <TableCell textAlign="right">{props.d.totalAsset}</TableCell>
    </TableRow>
  );
};
