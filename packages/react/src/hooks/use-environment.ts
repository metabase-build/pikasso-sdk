import * as React from 'react';

export default function useEnvironment() {
  const [isServerSideRendering, setIsServerSideRendering] = React.useState(true);

  React.useEffect(() => {
    setIsServerSideRendering(false);
  }, []);

  return { isServerSideRendering };
}
