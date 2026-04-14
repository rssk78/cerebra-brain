export default function Dosage() {
  const recommendedDosage = {
    adult: { dosage: "200mg", frequency: "Once daily in the morning" },
    pediatric: { dosage: "100mg", frequency: "Once daily in the evening" },
  };

  return (
    <main className="container">
      <h1>Recommended Dosage Information</h1>

      <section>
        <h2>Guidelines</h2>
        <ul>
          <li>
            Always consult with a healthcare professional before starting any
            medication.
          </li>
          <li>
            Dosage can vary based on individual health needs and doctor
            recommendations.
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Dosage</h2>

        <div className="card">
          <h3>Adults</h3>
          <p><strong>Dosage:</strong> {recommendedDosage.adult.dosage}</p>
          <p><strong>Frequency:</strong> {recommendedDosage.adult.frequency}</p>
        </div>

        <div className="card">
          <h3>Children (6–12 years)</h3>
          <p><strong>Dosage:</strong> {recommendedDosage.pediatric.dosage}</p>
          <p><strong>Frequency:</strong> {recommendedDosage.pediatric.frequency}</p>
        </div>
      </section>

      <section>
        <h2>Usage Guidelines</h2>
        <ul>
          <li>Take the medication with food to enhance absorption.</li>
          <li>
            Do not exceed the recommended dosage unless advised by a healthcare
            provider.
          </li>
        </ul>
      </section>
    </main>
  );
}
