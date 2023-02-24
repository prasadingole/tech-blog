import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <header className="grid grid-cols-2 md:grid-cols-4 place-items-center">
          <Link href="/">Blog</Link>
          <Link href="/">Projects</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </header>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};

export default Header;
