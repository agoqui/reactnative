module.exports = [
  {
    key: 1,
    name: "flexDirection",
    description:
      "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.",
    image: {
      width: 1024,
      height: 313
    },
    values: [
      {
        "row (default):": "left to right in ltr; right to left in rtl"
      },
      { "row-reverse": "right to left in ltr; left to right in rtl" },
      { column: "same as row but top to bottom" },
      { "column-reverse": "same as row-reverse but bottom to top" }
    ]
  },
  {
    key: 2,
    name: "flexWrap",
    description:
      "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",
    image: {
      width: 1024,
      height: 360
    },
    values: [
      {
        "nowrap (default)": "all flex items will be on one line"
      },
      { wrap: "flex items will wrap onto multiple lines, from top to bottom" },
      {
        "wrap-reverse":
          "flex items will wrap onto multiple lines from bottom to top"
      }
    ]
  },
  {
    key: 3,
    name: "justifyContent",
    description:
      "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.",
    image: {
      width: 1024,
      height: 1457
    },
    values: [
      {
        "flex-start (default)": "items are packed toward the start line"
      },
      { "flex-end": "items are packed toward to end line" },
      { center: "items are centered along the line" },
      {
        "space-between":
          "items are evenly distributed in the line; first item is on the start line, last item on the end line"
      },
      {
        "space-around":
          "items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies."
      },
      {
        "space-evenly":
          "items are distributed so that the spacing between any two items (and the space to the edges) is equal."
      }
    ]
  },
  {
    key: 4,
    name: "alignItems",
    description:
      "This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).",
    image: {
      width: 1024,
      height: 1216
    },
    values: [
      {
        "flex-start":
          "cross-start margin edge of the items is placed on the cross-start line"
      },
      {
        "flex-end":
          "cross-end margin edge of the items is placed on the cross-end line"
      },
      { center: "items are centered in the cross-axis" },
      { baseline: "items are aligned such as their baselines align" },
      {
        "stretch (default)":
          "stretch to fill the container (still respect min-width/max-width)"
      }
    ]
  },
  {
    key: 5,
    name: "alignContent",
    description:
      "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.",
    image: {
      width: 1024,
      height: 1216
    },
    values: [
      {
        "flex-start": "lines packed to the start of the container"
      },
      { "flex-end": "lines packed to the end of the container" },
      { center: "lines packed to the center of the container" },
      {
        "space-between":
          "lines evenly distributed; the first line is at the start of the container while the last one is at the end"
      },
      {
        "space-around":
          "lines evenly distributed with equal space around each line"
      },
      { "stretch (default)": "lines stretch to take up the remaining space" }
    ]
  },
  {
    key: 6,
    name: "alignSelf",
    description:
      "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.",
    image: {
      width: 1024,
      height: 490
    },
    values: [
      {
        "auto | flex-start | flex-end | center | baseline | stretch": null
      }
    ]
  }
];
