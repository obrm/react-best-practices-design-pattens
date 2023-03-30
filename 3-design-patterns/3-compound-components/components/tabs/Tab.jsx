function Tab({ isActive, onClick, children }) {
  return (
    <div onClick={onClick}>
      <h3 style={{ color: isActive ? 'red' : 'black' }}>{children}</h3>
    </div>
  );
}

export default Tab;