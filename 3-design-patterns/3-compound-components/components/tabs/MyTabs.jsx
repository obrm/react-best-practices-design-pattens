import { useState } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import TabContent from './TabContent';

function MyTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </Tab>
      ))}
      {tabs.map((tab, index) => (
        <TabContent key={index} isActive={activeTab === index}>
          {tab.content}
        </TabContent>
      ))}
    </Tabs>
  );
}

export default MyTabs;