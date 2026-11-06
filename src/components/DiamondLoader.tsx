const pixels = [
  [10, 0], [15, 5], [20, 10], [15, 15],
  [10, 20], [5, 15], [0, 10], [5, 5]
];

export default function DiamondLoader() {
  return (
    <svg className="loading-diamond" viewBox="0 0 24 24" aria-hidden="true">
      {pixels.map(([x, y], index) => (
        <rect className="loading-diamond-pixel" key={index} x={x} y={y} width="4" height="4" />
      ))}
    </svg>
  );
}
