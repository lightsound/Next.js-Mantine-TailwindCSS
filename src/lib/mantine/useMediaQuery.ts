import { useMediaQuery as useMediaQueryOriginal } from "@mantine/hooks";

/* Mantineと一致させる: https://mantine.dev/theming/responsive */
const map = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px",
} as const;

export const useMediaQuery = (
  query: keyof typeof map,
  initialValue: Parameters<typeof useMediaQueryOriginal>[1] = true
) => {
  return useMediaQueryOriginal(`(min-width: ${map[query]})`, initialValue);
};
