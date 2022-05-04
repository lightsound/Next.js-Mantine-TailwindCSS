import { useViewportSize as useViewportSizeOriginal } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [mounted, setMounted] = useState(false);
  const viewportSize = useViewportSizeOriginal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? viewportSize : { width: undefined, height: undefined };
};
