import { render, screen } from "@testing-library/react";
import { Products } from "../Products";

describe('Product component', () => {
  it('should have Prod2', async () => {
    render(<Products />);
    // screen.debug();

    expect(await screen.findByText('Prod2')).toBeInTheDocument();
  });
});