export default function DashboardLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return <div className="m-4 w-[80%]">{children}</div>;
}
