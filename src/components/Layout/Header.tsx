export default function Header() {
  const balance = 100;

  return (
    <header className="text-3xl m-7 flex justify-between">
      <h1 className="">
        <b>Profit Tracker</b>
      </h1>
      <h2>
        Balance: <b>{balance}</b>$
      </h2>
    </header>
  );
}
