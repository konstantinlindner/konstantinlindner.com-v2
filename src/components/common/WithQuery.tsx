/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryResult } from "@apollo/client";
import { ReactElement } from "react";

import { Spinner, Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WithQueryProps {
  readonly query: QueryResult<any, any>;
  readonly children: ({ data }: any) => ReactNode;
}

/**
 * Ensures that the query has returned data before rendering children.
 * Renders Error/Spinner on error/loading state.
 */
const WithQuery = ({ query, children }: WithQueryProps) => {
  const { data, loading, error } = query;

  if (error || loading) return null;

  return <>{children({ data })}</>;
};

export default WithQuery;
