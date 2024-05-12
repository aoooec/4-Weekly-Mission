import { axiosInstance } from "@/src/sharing/util";
import { useGetFolders } from "./useGetFolders";
import { FolderRawData } from "../type";
import { useMutation } from "@tanstack/react-query";

export const useAddFolder = () => {
  const { refetch: getFolders } = useGetFolders();

  const addFolder = (name: string) =>
    axiosInstance.post<FolderRawData[]>("/folders", {
      name,
    });

  const { mutate } = useMutation({
    mutationKey: ["addFolder"],
    mutationFn: addFolder,
    onSuccess: () => getFolders(),
    retry: false,
  });

  return { mutate };
};
