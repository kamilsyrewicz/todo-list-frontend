import React from "react";

import { iconComponentsMap, IconName } from "../../assets/icons";

import { DefaultTheme } from "styled-components";

export type ThemeColorProp = string | ((theme: DefaultTheme) => string);

export interface IconProps {
  name: IconName;
  color: string;
}

export function Icon({ name, color }: IconProps) {
  const IconComponent = iconComponentsMap[name];
  return <IconComponent color={color} />;
}

export default Icon;
