import { render, screen, fireEvent, queryByAttribute } from "@testing-library/react";
import TermDeposit from "./TermDeposit";

describe("TermDeposit component", () => {
  it("render the component and check the functionality", () => {
    const getById = queryByAttribute.bind(null, "id");
    const dom = render(<TermDeposit />);

    const depositAmountElm = screen.getByLabelText("Start deposit Amount");
    fireEvent.change(depositAmountElm, { target: { value: "10000" } });
    expect(depositAmountElm.value).toBe("10000");

    const interestRateElm = screen.getByLabelText("Interest Rate");
    fireEvent.change(interestRateElm, { target: { value: "1.10" } });
    expect(interestRateElm.value).toBe("1.10");

    const investmentTermElm = screen.getByLabelText("Investment Term");
    fireEvent.change(investmentTermElm, { target: { value: "36" } });
    expect(investmentTermElm.value).toBe("36");

    const buttonElm = screen.getByText("Show Final Amount");
    fireEvent.click(buttonElm);
    const finalBalanceElement = getById(dom.container, "finalBalance");

    expect(finalBalanceElement).toBeInTheDocument();
  });
});