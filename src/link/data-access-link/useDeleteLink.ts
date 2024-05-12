import { SelectedFolderId } from "@/src/folder/type";
import { useGetLinks } from "./useGetLinks";
import { useGetFolders } from "@/src/folder/data-access-folder";
import { axiosInstance } from "@/src/sharing/util";
import { LinkRawData } from "../type";
import { useMutation } from "@tanstack/react-query";

export const useDeleteLink = (folderId?: SelectedFolderId) => {
  const { refetch: getLinks } = useGetLinks(folderId);
  const { refetch: getFolders } = useGetFolders();

  const deleteLinks = (linkId: number) =>
    axiosInstance.delete<LinkRawData[]>(`/links/${linkId}`);

  const { mutate } = useMutation({
    mutationKey: ["deleteLink"],
    mutationFn: deleteLinks,
    onSuccess: () => {
      getLinks();
      getFolders();
    },
    retry: false,
  });

  return { mutate };
};
