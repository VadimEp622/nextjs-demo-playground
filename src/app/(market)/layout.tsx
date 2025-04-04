import MarketFooter from "../../components/market/footer";
import MarketHeader from "../../components/market/header";

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketHeader />
      <div className="flex-grow">{children}</div>
      <MarketFooter />
    </div>
  );
}
