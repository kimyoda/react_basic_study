import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $stitle = document.getElementsByTagName("title")[0];
    $stitle.innerText = title;
  }, [title]);
};

export default usePageTitle;
