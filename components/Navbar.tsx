import Link from "next/link";

export interface Nav {
  href?: any;
  text?: string;
  children?: React.ReactNode;
}

export default function Navabr({ href, text }: Nav) {
  return (
    <div>
      <a>
        {" "}
        <Link href={href}>{text}</Link>
      </a>
    </div>
  );
}
