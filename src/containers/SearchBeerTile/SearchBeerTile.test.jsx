import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardList from "../../components/CardList/CardList";
import SearchBeerTile from "./SearchBeerTile";

it("Should render the total number of beers on screen", () => {
  //1. Arrange
  render(<SearchBeerTile />);
  //2. Act
  const searchCountText = screen.getByText("You see 80 types of beer");
  //3. Assert
  expect(searchCountText).toBeInTheDocument();
});