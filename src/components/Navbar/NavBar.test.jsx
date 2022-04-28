import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar.jsx";
import FiltersList from "../../components/FiltersList/FiltersList";

it("Should render the searchbox in navbar", () => {
  //1. Arrange
  render(<NavBar />);
  //2. Act
  const searchBox = screen.getByRole("textbox");
  //3. Assert
  expect(searchBox).toBeInTheDocument();
});


it("Should render the filters in the navbar", () => {
  //1. Arrange
  render(<NavBar />);
  //2. Act
  const filters = screen.getByText("Filters"); 

  //3. Assert
  expect(filters).toBeTruthy();
});

it("Should show text in FiltersList when filters in navbar is clicked", () => {
  //1. Arrange
  render(<NavBar />);
  //2. Act
  const filters = screen.getByText("Filters"); 
  userEvent.click(filters);

  const phText = screen.getByText("pH lower than 4"); 

  //3. Assert
  expect(phText).toBeInTheDocument();
});