import { axiosInstance } from "@/src/sharing/util";
import { useGetFolders } from "./useGetFolders";
import { FolderRawData } from "../type";
import { useMutation } from "@tanstack/react-query";

interface UpdateFolderParams {
  folderId: number;
  name: string;
}

export const useUpdateFolder = () => {
  const { refetch: getFolders } = useGetFolders();

  const updateFolder = ({ folderId, name }: UpdateFolderParams) =>
    axiosInstance.put<FolderRawData[]>(`folders/${folderId}`, { name });

  const { mutate } = useMutation({
    mutationKey: ["updateFolder"],
    mutationFn: updateFolder,
    onSuccess: () => getFolders(),
    retry: false,
  });

  return { mutate };
};
