import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it("Should render the image in card", () => {
  //1. Arrange
  render(<Card />);
  //2. Act
  const cardImage = screen.getByRole("img");
  //3. Assert
  expect(cardImage).toBeInTheDocument();
});
