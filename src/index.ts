import { definePreset } from "@unocss/core";

export interface PresetOptions {
  // span?: number
}

export const presetExperimentalPopover = definePreset((_options: PresetOptions = {}) => {
  // const span = _options.span || 12

  return {
    name: "unocss-preset-experimental-popover",
    // Customize your preset here
    rules: [
      ["transition-discrete", { "transition-behavior": "allow-discrete" }],
      ["transition-normal", { "transition-behavior": "normal" }],
    ],
    variants: [
      (matcher) => {
        if (!matcher.startsWith("starting:")) return;

        return {
          matcher: matcher.slice(9),
          handle: (input, next) =>
            next({
              ...input,
              parent: `@starting-style`,
            }),
        };
      },
    ],
    // Customize AutoComplete
    autocomplete: {
      shorthands: {},
    },
  };
});
