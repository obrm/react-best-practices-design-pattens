function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (child.type.name === 'Tab') {
            return React.cloneElement(child, {
              key: index,
              isActive: index === activeTab,
              onClick: () => setActiveTab(index),
            });
          }
          return null;
        })}
      </div>
      {React.Children.map(children, (child, index) => {
        if (child.type.name === 'TabContent') {
          return React.cloneElement(child, {
            key: index,
            isActive: index === activeTab,
          });
        }
        return null;
      })}
    </div>
  );
}

export default Tabs;


