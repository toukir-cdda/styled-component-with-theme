import {
  getBrightness,
  getColorShades,
  getThemeColors,
} from "@/utils/getColors";
import React from "react";
import ColorComponent from "./ColorComponent";
import { useSelector } from "react-redux";

const ColorShades = () => {
  const defaultColors = useSelector((state) => state.shades.themePresets);
  const colors = getColorShades(defaultColors);

  return <ColorComponent colors={colors} parentKey="root" />;
};

export default ColorShades;
