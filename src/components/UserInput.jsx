import React from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="inputgroup">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Anual Investmentt</label>
          <input
            type="number"
            required
            value={userInput.anualInvestment}
            onChange={(e) => onChange("anualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="inputgroup">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
