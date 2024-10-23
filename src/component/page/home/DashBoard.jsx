import React from "react";
import SectionA from "./SectionA";
import SectionC from "./SectionC";
import SectionE from "./SectionE";
import Inbox from "./Inbox";
import Outbox from "./Outbox";
import SectionMain from "./SectionMain";
import PageTwo from "./PageTwo";
function DashBoard({ activePage }) {
  return (
    <div className="w-full flex flex-col">
      {activePage === "home" && <SectionA className="flex-grow" />}
      {activePage === "inbox" && <SectionE className="flex-grow" />}
      {activePage === "outbox" && <PageTwo className="flex-grow" />}
      {activePage === "profile" && <SectionMain className="flex-grow" />}
    </div>
  );
}

export default DashBoard;
