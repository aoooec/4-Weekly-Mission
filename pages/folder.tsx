import AddLinkForm from "@/components/AddLinkForm";
import FolderToolBar from "@/components/Folder/FolderToolBar";
import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import { FolderProvider } from "@/hooks/useFolderContext";

const Folder = () => {
  /* 폴더 페이지 설계
   * 1. 컴포넌트 구조
   * <TOP>
   * navigation bar - logo, user(로그인 버튼/유저) (고정 X) - 유저 GET // 공통(전체 페이지- 단 fixed 여부 다름)
   * addLink input (스크롤 O, 화면에서 사라지면 하단 고정 O) - 링크 POST
   * <MAIN>
   * search bar - filter된 링크들 GET // 공통(share, folder)
   * > 검색시 하단에 text add (search keyword로 검색한 결과입니다.)
   * > 검색어 삭제(x버튼)시 원래 UI로 돌아감
   * link sort bar - folder, folder add button (모달 O) - 폴더 POST
   * links section - folder name, folder edit bar, link list
   * > folder edit bar - 공유, 이름변경, 삭제 button (모달 O) - 공유 로직, 폴더 PATCH, 폴더 DELETE
   * > link list > link card - 즐겨찾기, 더보기 button
   * > 더보기 button (dropdown) > 모달 O - 링크 DELETE, 폴더 POST
   * <BOTTOM>
   * footer - copyright, menu(Link), sns list(Link) // 공통(전체 페이지)
   *
   * 2. 데이터 관리
   * 전체 데이터 및 훅 사용 관리하는 context 생성
   *
   * 3. 작업 계획?
   * 일단 컴포넌트부터 먼저 만들어서 깡통 상태로... (이 부분은 최대한 기존 활용)
   * 데이터 활용 및 컨텍스트, 훅 등 로직 관련된 부분을 새로 작성
   */

  return (
    <FolderProvider>
      <Layout>
        <AddLinkForm />
        <SearchForm />
        <FolderToolBar />
        <div>폴더페이지</div>
      </Layout>
    </FolderProvider>
  );
};

export default Folder;
