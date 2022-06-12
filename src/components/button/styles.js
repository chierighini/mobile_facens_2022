import styled from "styled-components";
import { Button } from "@mui/material";

export const CustomButtom = styled(Button)`
  width: 100%;
  ${(props) =>
    props.variant == "contained" &&
    `
  background: #a281cc !important;
  `}
  ${(props) =>
    props.variant == "outlined" &&
    `
  border-color: #a281cc !important;
  color:  #a281cc !important;
  `}
  margin: 2% 0 !important;
`;
