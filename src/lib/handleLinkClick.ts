import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const handleLinkClick = (
  url: string,
  id: string,
  router: AppRouterInstance
) => {
  // router.push(url);
  console.log(url);
  console.log(id);
};

export default handleLinkClick;
