const Color = Phaser.Display.Color;
const DOT_STATE = {
  NONE: 0,
  SELECTED: 1,
};
const DOT_COLORS = [
  Color.HSLToColor(0.0, 0.85, 0.6), // Red
  Color.HSLToColor(0.62, 0.95, 0.6), // Blue
  Color.HSLToColor(0.14, 0.85, 0.6), // Yellow
  Color.HSLToColor(0.27, 0.95, 0.63), // Green
  Color.HSLToColor(0.75, 0.85, 0.55), // Purple
];

const touchRadius = 60;

export { DOT_COLORS, DOT_STATE, touchRadius };
