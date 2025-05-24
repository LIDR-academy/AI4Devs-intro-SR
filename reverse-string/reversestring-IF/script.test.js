/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

describe("Reverse String App", () => {
  let container;

  beforeEach(() => {
    document.documentElement.innerHTML = html;
    container = document.body;
    // Ejecutar script después de asegurar HTML disponible
    jest.resetModules(); // importante para evitar doble carga
    require("./script.js");
  });

  test("automatic mode is enabled by default", () => {
    const autoMode = document.getElementById("autoMode");
    expect(autoMode).toBeChecked();
  });

  test("reverses text automatically on input", () => {
    const input = document.getElementById("textInput");
    const output = document.getElementById("outputBox");

    fireEvent.input(input, { target: { value: "AI4Devs" } });

    expect(output).toHaveTextContent("sveD4IA");
  });

  test("manual mode disables output and enables reverse button", () => {
    const input = document.getElementById("textInput");
    const output = document.getElementById("outputBox");
    const autoMode = document.getElementById("autoMode");
    const reverseBtn = document.getElementById("reverseBtn");

    fireEvent.click(autoMode); // disable automatic
    fireEvent.input(input, { target: { value: "hello" } });

    expect(reverseBtn).not.toBeDisabled();
    expect(output).toHaveTextContent("Type something above");
  });

  test("clicking Reverse in manual mode reverses the text", () => {
    const input = document.getElementById("textInput");
    const reverseBtn = document.getElementById("reverseBtn");
    const autoMode = document.getElementById("autoMode");
    const output = document.getElementById("outputBox");

    fireEvent.click(autoMode); // disable automatic
    fireEvent.input(input, { target: { value: "hello" } });
    fireEvent.click(reverseBtn);

    expect(output).toHaveTextContent("olleh");
  });

  test("copy adds to history and clears input", () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    const input = document.getElementById("textInput");
    const copyBtn = document.getElementById("copyBtn");
    const historyList = document.getElementById("historyList");
    const output = document.getElementById("outputBox");

    fireEvent.input(input, { target: { value: "copyme" } });

    // Simula auto output
    expect(output).toHaveTextContent("emypoc");

    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("emypoc");
    expect(input.value).toBe("");
    expect(historyList.children.length).toBe(1);
  });

  test("clean history button clears all entries", () => {
    const input = document.getElementById("textInput");
    const copyBtn = document.getElementById("copyBtn");
    const historyList = document.getElementById("historyList");

    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    fireEvent.input(input, { target: { value: "first" } });
    fireEvent.click(copyBtn);
    fireEvent.input(input, { target: { value: "second" } });
    fireEvent.click(copyBtn);

    const cleanBtn = document.querySelector(".clear-history-btn");
    expect(cleanBtn).toBeInTheDocument();

    fireEvent.click(cleanBtn);

    expect(historyList.children.length).toBe(0);
    const historyTitle = document.getElementById("historyTitleText");
    expect(historyTitle).toHaveTextContent("History must be written!");
  });
});
