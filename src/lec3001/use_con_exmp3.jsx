import * as React from "react";
import { UserProvider } from "./use_con_exmp1";
import { Page1, Page2, Page3 } from "./use_con_exmp2";
function SelectPage({ v11 }) {
  const Page = [Page1, Page2, Page3][v11];
  return <Page />;
}
export default function App() {
  const [page, setPage] = React.useState(0);
  return (
    <UserProvider>
      <div>
        <button onClick={() => setPage(0)}>Page 1</button>
        <button onClick={() => setPage(1)}>Page 2</button>
        <button onClick={() => setPage(2)}>Page 3</button>
        <SelectPage v11={page} />
      </div>
    </UserProvider>
  );
}
