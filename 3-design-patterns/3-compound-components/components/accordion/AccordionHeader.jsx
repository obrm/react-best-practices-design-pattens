function AccordionHeader({ isOpen, onClick, children }) {
  return (
    <div onClick={onClick}>
      <h3>{children}</h3>
      {isOpen ? <i>-</i> : <i>+</i>}
    </div>
  );
}

export default AccordionHeader;