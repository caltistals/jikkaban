import { LoadingOverlay } from "@mantine/core";

const Loading = () => {
  return (
    <>
      <LoadingOverlay
        loaderProps={{ size: "lg", color: "cyan", variant: "dots" }}
        visible
        overlayBlur={2}
      />
    </>
  );
};

export default Loading;
