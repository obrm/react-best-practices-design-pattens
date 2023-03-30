function Accordion({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (child.type.name === 'AccordionHeader') {
          return React.cloneElement(child, {
            key: index,
            isOpen: index === selectedIndex,
            onClick: () => setSelectedIndex(index),
          });
        }
        if (child.type.name === 'AccordionContent') {
          return React.cloneElement(child, {
            key: index,
            isOpen: index === selectedIndex,
          });
        }
        return null;
      })}
    </div>
  );
}

export default Accordion;