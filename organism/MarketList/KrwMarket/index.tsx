import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderCell
} from "../../../components/atoms/Table";
import { TabPane } from "../../../components/atoms/Tab";
import { MarketListItem } from "../MarketListItem";

const data = Array(15)
  .fill(1)
  .map(() => {
    const sign = Math.floor(Math.random() * 10) % 2 == 1 ? "+" : "-";
    const price = (Math.random() * 18900000).toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
    return {
      starred: Math.floor(Math.random() * 10) % 2 == 1 ? true : false,
      name: "비트코인",
      symbol: "BTC/KRW",
      price,
      DoDPercent: `${sign}${Math.random().toLocaleString(undefined, {
        maximumFractionDigits: 2
      })}%`,
      DoDAmount: `${sign}${Math.floor(Math.random() * 10000000)}`,
      totalAsset: "132,198백만"
    };
  });

export const KrwMarket = () => (
  <TabPane>
    <Table sortable compact selectable size="small" style={{ border: "none" }}>
      <TableHeader style={{ textAlign: "center" }}>
        <TableRow textAlign="center">
          {["", "", "한글명", "현재가", "전일대비", "거래대금"].map(
            (headerName: string) => (
              <TableHeaderCell style={{ borderLeft: "none" }}>
                {headerName}
              </TableHeaderCell>
            )
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d: any) => (
          <MarketListItem d={d} />
        ))}
      </TableBody>
    </Table>
  </TabPane>
);
