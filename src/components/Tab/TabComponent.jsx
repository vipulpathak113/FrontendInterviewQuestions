import React, { useState } from "react";
import Tabs from "./Tabs";

export default function TabComponent() {
  const [currentTab, setCurrentTab] = useState(1);
  const handleChange = (index) => {
    setCurrentTab(index);
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Tab using Compound pattern</h1>
      <Tabs currentTab={currentTab} onChange={handleChange}>
        <Tabs.HeaderContainer>
          <Tabs.Item label={"Tab1"} index={1} />
          <Tabs.Item label={"Tab2"} index={2} />
          <Tabs.Item label={"Tab3"} index={3} />
        </Tabs.HeaderContainer>
        <Tabs.ContentContainer>
          <Tabs.ContentItem index={1}>This is Tab1 content</Tabs.ContentItem>
          <Tabs.ContentItem index={2}>This is Tab2 content</Tabs.ContentItem>
          <Tabs.ContentItem index={3}>This is Tab3 content</Tabs.ContentItem>
        </Tabs.ContentContainer>
      </Tabs>
    </div>
  );
}
