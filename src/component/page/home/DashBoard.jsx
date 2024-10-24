import React from "react";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
function DashBoard({ activePage = "home" }) {
  return (
    <div className="w-full flex flex-col">
      {activePage === "home" && <SectionA />}
      {activePage === "inbox" && <SectionB />}
      {activePage === "outbox" && null}
      {activePage === "profile" && null}
    </div>
  );
}

export default DashBoard;
