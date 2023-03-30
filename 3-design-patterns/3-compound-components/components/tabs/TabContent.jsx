function TabContent({ isActive, children }) {
  return isActive ? <div>{children}</div> : null;
}

export default TabContent;