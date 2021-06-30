import React from "react";
import { render } from "@testing-library/react";
import { FileInput } from "./FileInput";

const inputProps = {
  key: "pdf",
  id: "pdf",
  name: "pdf",
  label: "Upload a PDF",
  fileType: ".pdf",
};

describe("FileInput component", () => {
  it("renders without errors", async () => {
    const { queryByTestId } = render(<FileInput {...inputProps} />);
    expect(queryByTestId("file")).toBeInTheDocument();
  });
});
