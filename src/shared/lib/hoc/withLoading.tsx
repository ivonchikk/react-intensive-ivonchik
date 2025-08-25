export const withLoading = (Component: any) => {
  return function ComponentWithLoading({ loading, ...props }: any & { loading: boolean }) {
    if (loading) {
      return <>Loading...</>;
    }

    return <Component {...props} />;
  };
};
