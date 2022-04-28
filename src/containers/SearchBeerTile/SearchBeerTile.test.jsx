import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardList from "../../components/CardList/CardList";
import SearchBeerTile from "./SearchBeerTile";
import beers from "../../data/beers";

it("Should render the total number of beers on screen", () => {
  //1. Arrange
  render(<SearchBeerTile beersArr={beers}/>);
  //2. Act
  const searchCountText = screen.getByText(/You see .* types of beer/i);
  //3. Assert
  expect(searchCountText).toBeInTheDocument();
});