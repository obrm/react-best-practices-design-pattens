


import { useState } from 'react';
import Accordion from './Accordion';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

function MyAccordion({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Accordion>
      {items.map((item, index) => (
        <div key={index}>
          <AccordionHeader
            isOpen={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            {item.header}
          </AccordionHeader>
          <AccordionContent isOpen={selectedIndex === index}>
            {item.content}
          </AccordionContent>
        </div>
      ))}
    </Accordion>
  );
}

export default MyAccordion;