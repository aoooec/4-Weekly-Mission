import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/src/sharing/util";
import { mapLinksData } from "@/src/link/util-map/mapLinksData";
import { ALL_LINKS_ID } from "./constant";
import { SelectedFolderId } from "@/src/folder/type";
import { LinkRawData } from "@/src/link/type";
import { formatLinkRawData } from "../util-map";

export const useGetLinks = (folderId?: SelectedFolderId) => {
  const path =
    folderId === ALL_LINKS_ID ? "links" : `folders/${folderId}/links`;
  const getLinks = useCallback(
    () => axiosInstance.get<LinkRawData[]>(path),
    [path]
  );
  const { refetch, isLoading, error, data } = useQuery({
    queryKey: ["links", folderId],
    queryFn: getLinks,
    enabled: !!folderId,
  });

  const linksData = data?.data?.map(formatLinkRawData).map(mapLinksData) ?? [];

  return { refetch, isLoading, error, data: linksData };
};
