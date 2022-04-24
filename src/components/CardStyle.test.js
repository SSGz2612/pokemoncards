import { render, screen } from '@testing-library/react';
import CardStyle from "./CardStyle";
import { BrowserRouter } from 'react-router-dom';

const PkmDataLink = () => {
  <BrowserRouter><CardStyle/></BrowserRouter>
}

describe("CardStyle", () => {
  it("try catching Link", () => {
    render(<PkmDataLink/>);
    expect( screen.queryByText( /CardStyle/i ));
  })
})