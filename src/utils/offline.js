import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setStatus] = useState(true);

  useEffect(() => {
    const onlineHandler = () => {
      setStatus(true);
    };

    const offlineHandler = () => {
      setStatus(false);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return isOnline;
};

export default useOnline;
