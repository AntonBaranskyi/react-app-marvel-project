import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(
            `Could not fetch this ${url}, status ${response.status}`
          );
        }
        const resp = await response.json();
        return resp;
      } catch (e) {
        setLoading(false);
        setEror(e);
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setLoading(false);
    setEror(false);
  }, []);

  return { loading, error, request, clearError };
};
