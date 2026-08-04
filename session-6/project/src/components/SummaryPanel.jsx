export default function SummaryPanel({ summary }) {
  console.count('RENDER: SummaryPanel');

  const cards = [
    ['Matching products', summary.count],
    ['Average price', `₹${summary.averagePrice}`],
    ['Low-stock items', summary.lowStock],
    ['Average rating', summary.averageRating],
  ];

  return (
    <section className="summary-grid" aria-label="Catalogue summary">
      {cards.map(([label, value]) => (
        <article className="summary-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </article>
      ))}
    </section>
  );
}
