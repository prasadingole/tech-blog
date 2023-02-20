import Link from "next/link";

const Header = () => {
  return (
    <header className="p-8">
      <ul className="flex flex-row justify-evenly">
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Project</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
