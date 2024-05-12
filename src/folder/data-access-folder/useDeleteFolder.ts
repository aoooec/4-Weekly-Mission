import { axiosInstance } from "@/src/sharing/util";
import { useMutation } from "@tanstack/react-query";
import { useGetFolders } from "./useGetFolders";
import { FolderRawData } from "../type";

export const useDeleteFolder = () => {
  const { refetch: getFolders } = useGetFolders();

  const deleteFolder = (folderId: number) =>
    axiosInstance.delete<FolderRawData[]>(`/folders/${folderId}`);

  const { mutate } = useMutation({
    mutationKey: ["deleteFolder"],
    mutationFn: deleteFolder,
    onSuccess: () => getFolders(),
    retry: false,
  });

  return { mutate };
};
