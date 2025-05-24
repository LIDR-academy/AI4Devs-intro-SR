/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("Reverse String App", () => {
  let input, output, reverseBtn, copyBtn, autoMode, historyList;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    require("./script.js"); // tu script real

    input = document.getElementById("textInput");
    output = document.getElementById("outputBox");
    reverseBtn = document.getElementById("reverseBtn");
    copyBtn = document.getElementById("copyBtn");
    autoMode = document.getElementById("autoMode");
    historyList = document.getElementById("historyList");
  });

  test("automatic mode is enabled by default", () => {
    expect(autoMode.checked).toBe(true);
  });

  test("reverses text automatically on input", () => {
    fireEvent.input(input, { target: { value: "hello" } });
    expect(output.textContent).toBe("olleh");
  });

  test("manual mode disables output and enables reverse button", () => {
    fireEvent.input(input, { target: { value: "test" } });
    fireEvent.click(autoMode);
    expect(reverseBtn.disabled).toBe(false);
    expect(output.textContent).toBe("Type something above");
  });

  test("reverse button works in manual mode", () => {
    fireEvent.click(autoMode); // disable auto
    fireEvent.input(input, { target: { value: "AI4Devs" } });
    fireEvent.click(reverseBtn);
    expect(output.textContent).toBe("sveD4IA");
  });

  test("copy button copies text and clears input", () => {
    fireEvent.input(input, { target: { value: "Hola" } });
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("aloH");
    expect(input.value).toBe("");
    expect(document.activeElement).toBe(input);
  });

  test("adds to history and keeps most recent on top", () => {
    fireEvent.input(input, { target: { value: "One" } });
    fireEvent.click(copyBtn);
    fireEvent.input(input, { target: { value: "Two" } });
    fireEvent.click(copyBtn);
    expect(historyList.children.length).toBe(2);
    expect(historyList.children[0].textContent).toContain("Two");
  });

  test("replaces duplicate history entry to top", () => {
    fireEvent.input(input, { target: { value: "Same" } });
    fireEvent.click(copyBtn);
    fireEvent.input(input, { target: { value: "Other" } });
    fireEvent.click(copyBtn);
    fireEvent.input(input, { target: { value: "Same" } });
    fireEvent.click(copyBtn);
    expect(historyList.children[0].textContent).toContain("Same");
    expect(historyList.children.length).toBe(2);
  });
});
