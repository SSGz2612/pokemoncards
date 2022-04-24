import { render, screen } from '@testing-library/react';

describe("Pokemon", () => {
  it("should render header", () => {
    render(<header/>)
    expect( screen.queryByText( /Pokemon/i ))
  })

  it("should render divs", () => {
    render(<div/>)
    expect( screen.queryAllByRole( /div/i ))
  })
})