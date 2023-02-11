import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  ternary?: boolean;
  customStyling?: any;
  text: string;
  handlers?: any;
  loading?: boolean;
  disabled?: boolean;
}

const commonStyles: any = {
  px: "4",
  py: "0.7",
  borderRadius: "50",
  fontSize: "14px",
  fontWeight: "semibold",
};

const primaryStyles: any = {
  bg: "pbbg",
  color: "tt",
};

const secondaryStyles: any = {
  bg: "pbg",
  color: "pbbg",
  border: "1px",
  borderColor: "pbbg",
};

const Button: React.FC<ButtonProps> = ({
  primary,
  text,
  customStyling,
  handlers,
  loading,
}) => {
  const styles = primary ? primaryStyles : secondaryStyles;
  return (
    <Box
      as="button"
      {...commonStyles}
      {...styles}
      {...customStyling}
      {...handlers}
    >
      {!loading ? text : <Spinner />}
    </Box>
  );
};
export default Button;
