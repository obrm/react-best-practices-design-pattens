function withDataFetching(Component) {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);

      fetch(props.url)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, [props.url]);

    return (
      <Component {...props} data={data} isLoading={isLoading} error={error} />
    );
  };
}

export default withDataFetching;