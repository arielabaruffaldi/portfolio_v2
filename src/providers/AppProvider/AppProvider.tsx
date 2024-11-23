import { FunctionComponent, PropsWithChildren, Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";

export const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Suspense>
      <Router>{children}</Router>
    </Suspense>
  );
};
