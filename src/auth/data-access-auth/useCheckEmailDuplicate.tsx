import { axiosInstance } from "@/src/sharing/util";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCallback } from "react";

type EmailDuplicateCheckResponse = { isUsableEmail: boolean };

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      axiosInstance.post<EmailDuplicateCheckResponse>("users/check-email", {
        email,
      }),
    [email]
  );
  const { refetch, isLoading, error, data } = useQuery<
    { data: EmailDuplicateCheckResponse },
    AxiosError
  >({
    queryKey: ["check-email"],
    queryFn: checkEmailDuplicate,
    enabled: false,
    retry: false,
  });

  return {
    refetch,
    isLoading,
    error,
    data,
  };
};
