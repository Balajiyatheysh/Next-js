export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <h1>{children}</h1>
      <div style={{display:"flex", flexDirection:"column"}}>

        <div style={{ display: "flex", flex: 1 }}>{users}</div>
        <div style={{ display: "flex", flex: 1 }}>{revenue}</div>
      </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
    </>
  ) : (
    login
  );
}
