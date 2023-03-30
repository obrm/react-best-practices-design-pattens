function requireAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = checkAuth();

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };
}

export default requireAuth;