import { render, screen } from '@testing-library/react';
import PokemonCards from "./PokemonCards";
import { Provider } from 'react-redux';
import store from '../redux/store';

const PkmDataLink = () => {
  <Provider><PokemonCards store={ store }/></Provider>
}

describe("PokemonCards", () => {
  it("Pokemon Cards Component", () => {
    render(<PkmDataLink/>)
    expect( screen.queryByText( /PokemonCards/i ))
  })

  it("should render header", () => {
    render(<header/>)
    expect( screen.queryByText( /PokemonCards/i ))
  })

  it("should render input", () => {
    render(<input/>)
    expect( screen.queryByText( /PokemonCards/i ))
  })
})