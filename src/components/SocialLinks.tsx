import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Clementclem",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "#", // Replace with your LinkedIn URL
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/clem_clement_",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "mailto:wanjihiawanjia@gmail.com",
    icon: HiOutlineMail,
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 text-[20px] text-[#8892b0] sm:mt-10 sm:gap-5 sm:text-[22px]">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="transition-all duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}