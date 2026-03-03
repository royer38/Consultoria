import { useNavigate } from "react-router-dom";

const useHandleNavigateTop = () => {
  const navigate = useNavigate();

  const handleNavigateTop = (url) => {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return handleNavigateTop;
};

export default useHandleNavigateTop;