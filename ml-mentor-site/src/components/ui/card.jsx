export function Card({ children, className }) {
  return <div className={`bg-white dark:bg-zinc-900 p-4 rounded-lg ${className}`}>{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}