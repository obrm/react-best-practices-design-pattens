function AccordionContent({ isOpen, children }) {
  return isOpen ? <div>{children}</div> : null;
}

export default AccordionContent;