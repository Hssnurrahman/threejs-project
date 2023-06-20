import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import ColorPicker from "react-pick-color";

const ColorPickerComponent = () => {
  const { color } = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <ColorPicker
        color={color}
        hideAlpha
        onChange={(color) => (state.color = color.hex)}
        combinations={[
          "analogous",
          // "monochromatic",
          // "complement",
          // "triad",
          // "tetrad",
          // "splitcomplement",
        ]}
      />
    </div>
  );
};

export default ColorPickerComponent;
