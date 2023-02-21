import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav className="flex space-x-4 items-center">
          <Link href="/">Blog</Link>
          <Link href="/">Project</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
