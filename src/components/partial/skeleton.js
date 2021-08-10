export default function skeleton() {
  const spans = Array.from([10]);
  // console.log(spans);
  return (
    <div className="skeleton">
      {Array.from({ length: 25 }).map((span, i) => (
        <span key={`span-${i}`} className="skeleton__item"></span>
      ))}
    </div>
  );
}
