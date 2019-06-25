import DefaultLayout from "../layouts/Default";

import { MarketList } from "../organism/MarketList";

const Index = () => (
  <DefaultLayout>
    <></>
    <>
      <MarketList />
    </>
  </DefaultLayout>
);

// Index.getInitialProps = async function() {
//   data = {}
//   return {
//     shows: data
//   };
// };

export default Index;
