import { useCallback, useState } from "react";
import axios from "@/api/instance";

type Status = "Idle" | "Loading" | "Success" | "Error";

interface UseAxiosReturn<T> {
  axiosData: (body?: object | null) => void;
  response: T | null;
  status: Status;
  statusCode: number;
}

const useAxios = <T>({
  endpoint,
  method,
}: {
  endpoint: string;
  method: string;
}): UseAxiosReturn<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("Idle");
  const [statusCode, setStatusCode] = useState<number>(0);

  const axiosData = useCallback(
    async (body?: object | null) => {
      let apiURL = endpoint;
      let apiBody = body;

      if (method === "GET" && body) {
        apiURL = apiURL + "?" + body.toString();
        apiBody = null;
      }

      setStatus("Loading");

      return axios
        .request({
          url: apiURL,
          method,
          data: apiBody,
        })
        .then((res) => {
          setResponse(res.data);
          setStatus("Success");
        })
        .catch((err) => {
          // 에러 관련 로직 고민해볼것
          setStatus("Error");
          setStatusCode(err.response.status);
        });
    },
    [endpoint, method]
  );

  return { response, status, statusCode, axiosData };
};

export default useAxios;
