import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCallback } from "react";
const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const fetchAllTests = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/add-test/get-all-tests`,
      );
      if (response.data.success) {
        setTests(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllTests();
  }, [fetchAllTests]);

  return (
    <TestContext.Provider
      value={{
        tests,
        setTests,
        fetchAllTests,
        loading,
        setLoading,
        admin,
        setAdmin,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export { TestProvider, TestContext };
