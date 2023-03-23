import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
};

export const Head = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title ? `${title} | JIKKABAN` : "JIKKABAN"}</title>
    </Helmet>
  );
};
