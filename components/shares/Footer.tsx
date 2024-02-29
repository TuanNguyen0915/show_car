import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-300 text-white rounded-t-2xl">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-2xl font-bold">CarHub</h1>
          <p>CarHub 2024</p>
          <p className="italic">All rights reserved ©</p>
        </div>
        {footerLinks.map((footer) => (
          <div
            className="flex flex-col items-start justify-start gap-6"
            key={footer.title}
          >
            <h1 className="text-2xl font-bold">{footer.title}</h1>
            {footer.links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className="duration-300 hover:text-blue-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
