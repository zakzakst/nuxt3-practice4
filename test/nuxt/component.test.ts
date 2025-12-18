import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
// import Sample from "@components/Sample.vue";
// TODO: エイリアス上手くできない。後で調べる
import Sample from "../../components/Sample.vue";

describe("Sample component", () => {
  it("文字列が表示される", () => {
    const wrapper = mount(Sample);
    expect(wrapper.text()).toContain("Sample");
  });
});
