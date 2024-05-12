import { axiosInstance } from "@/src/sharing/util";
import { SelectedFolderId } from "@/src/folder/type";
import { useMutation } from "@tanstack/react-query";
import { LinkRawData } from "../type";
import { useGetLinks } from "./useGetLinks";
import { useGetFolders } from "@/src/folder/data-access-folder";

interface AddLinkParams {
  url: string;
  folderId: number;
}

export const useAddLink = (folderId?: SelectedFolderId) => {
  const { refetch: getLinks } = useGetLinks(folderId);
  const { refetch: getFolders } = useGetFolders();

  const addLink = ({ url, folderId }: AddLinkParams) =>
    axiosInstance.post<LinkRawData[]>("/links", { url, folderId });

  const { mutate } = useMutation({
    mutationKey: ["addLink"],
    mutationFn: addLink,
    onSuccess: () => {
      getLinks();
      getFolders();
    },
    retry: false,
  });
  return { mutate };
};
