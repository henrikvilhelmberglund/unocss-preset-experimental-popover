import { createGenerator } from "unocss";
import { expect, it, test, describe } from "vitest";
import { presetExperimentalPopover } from "../src";

describe("unocss-preset-experimental-popover", async () => {
  const uno = createGenerator({
    presets: [presetExperimentalPopover()],
  });
  const presets = uno.config.presets;
  expect(presets).toHaveLength(1);

  describe("generates correct rules", async () => {
    test("transition-discrete", async () => {
      const { css } = await uno.generate("transition-discrete");

      expect(css).toMatchInlineSnapshot(`
        "/* layer: default */
        .transition-discrete{transition-behavior:allow discrete;}"
      `);
    });

    test("transition-discrete", async () => {
      const { css } = await uno.generate("transition-normal");

      expect(css).toMatchInlineSnapshot(`
        "/* layer: default */
        .transition-normal{transition-behavior:normal;}"
      `);
    });

    test("starting-variant", async () => {
      const { css } = await uno.generate(["starting:bg-black"].join(" "), { preflights: false });
      console.log(css)

      expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @starting-style{
      .start\:popover-open\:bg-black:popover-open{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity));}
      }"
      `);
    });
  });
});
