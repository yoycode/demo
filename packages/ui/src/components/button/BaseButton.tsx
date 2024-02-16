"use client";

import { Button as MButton } from "@mantine/core";
import { PropsWithChildren } from "react";
import type { ButtonProps } from "@mantine/core";

type CustomButtonProps = {};
type Props = PropsWithChildren<CustomButtonProps & ButtonProps>;

export const Button = (props: Props) => {
  const { children, ...restProps } = props;
  return <MButton {...restProps}>{children}</MButton>;
};
