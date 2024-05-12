import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { EditableCard } from "@/src/link/ui-editable-card";
import { NoLink } from "@/src/link/ui-no-link";
import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import { CardList as UiCardList } from "@/src/link/ui-card-list";
import { AlertModal } from "@/src/sharing/ui-alert-modal";
import { DEFAULT_LINK, MODALS_ID } from "./constant";
import { Link } from "@/src/link/type";
import { useDeleteLink } from "../data-access-link/useDeleteLink";
import { SelectedFolderId } from "@/src/folder/type";
import { useAddLink } from "../data-access-link/useAddLink";

type CardListProps = {
  links: Link[];
  currentFolderId: SelectedFolderId;
};

export const CardList = ({ links, currentFolderId }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLink, setSelectedLink] = useState<{
    linkId: number;
    url: string;
  }>(DEFAULT_LINK);
  const { mutate: deleteLink } = useDeleteLink(currentFolderId);
  const { mutate: addLink } = useAddLink(currentFolderId);

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue("grid-template-columns")
              .split(" ").length
          : 1;
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      return { left: 0 };
    },
    [cardListRef]
  );

  const handleDeleteLinkClick = () => {
    deleteLink(selectedLink.linkId, {
      onSuccess: () => {
        closeModal();
        setSelectedLink(DEFAULT_LINK);
      },
    });
  };

  const handleAddLinkClick = () => {
    if (typeof selectedFolderId === "number") {
      addLink(
        { url: selectedLink.url, folderId: selectedFolderId },
        {
          onSuccess: () => {
            closeModal();
            setSelectedLink(DEFAULT_LINK);
          },
        }
      );
    }
  };

  if (links.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLink({ url: link?.url ?? "", linkId: link?.id ?? 0 });
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLink({ url: link?.url ?? "", linkId: link?.id ?? 0 });
            setCurrentModal(MODALS_ID.addToFolder);
          }}
        />
      ))}
      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={selectedLink.url}
        buttonText="삭제하기"
        onClick={handleDeleteLinkClick}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        description={selectedLink.url}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={handleAddLinkClick}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </UiCardList>
  );
};
