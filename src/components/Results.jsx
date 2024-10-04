import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <>
      <h3 className="center">Result Data </h3>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Year</th>
            <th>intrest (Year)</th>
            <th>Total Intrest </th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalamount = yearData.valueEndOfYear - totalIntrest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(totalamount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
