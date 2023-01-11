import Link from "next/link";

export interface Nav {
  href?: any;
  text?: string;
  children: React.ReactNode;
}

export default function Navabr({ href, text }: Nav) {
  return (
    <div className="bg-blue-500 border-gray-200 px-5 sm:px-4 py-2.5 rounded dark:bg-gray-900 m-2">
      <Link href={href}>{text}</Link>
    </div>
  );
}
