import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useAxios from "./useAxios";

interface FolderContextType {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
}

interface Props {
  children: ReactNode;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

export const FolderContext = createContext<FolderContextType | null>(null);

export function FolderProvider({ children }: Props) {
  let userId = 1;
  const END_POINT = {
    link: `users/${userId}/links`,
    folder: `users/${userId}/folders`,
  };
  // const LINK_END_POINT = `users/${userId}/links`;
  const [links, setLinks] = useState<Link[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);

  const {
    response: linkDataResponse,
    status: linkStatus,
    statusCode: linkStatusCode,
    axiosData: getLinks,
  } = useAxios<{ data: Link[] }>({ endpoint: END_POINT.link, method: "GET" });

  const {
    response: folderDataResponse,
    status: folderStatus,
    statusCode: folderStatusCode,
    axiosData: getFolders,
  } = useAxios<{ data: Folder[] }>({
    endpoint: END_POINT.folder,
    method: "GET",
  });

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  useEffect(() => {
    getFolders();
  }, [getFolders]);

  useEffect(() => {
    if (linkDataResponse) {
      const linkData = linkDataResponse?.data;
      setLinks(linkData);
    }
  }, [linkDataResponse]);

  useEffect(() => {
    if (folderDataResponse) {
      const folderData = folderDataResponse?.data;
      setFolders(folderData);
    }
  }, [folderDataResponse]);

  return (
    <FolderContext.Provider value={{ links, setLinks, folders, setFolders }}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolder() {
  const context = useContext(FolderContext);
  if (!context) {
    throw new Error("useFolder는 FolderProvider와 함께 사용되어야 합니다.");
  }

  return context;
}
