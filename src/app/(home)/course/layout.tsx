export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mt-14 mx-auto">{children}</div>;
}
