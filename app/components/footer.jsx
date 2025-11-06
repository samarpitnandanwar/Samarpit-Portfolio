// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { FaMedium } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-[#16f2b3]"
            >
              Samarpit Nandanwar
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://dev.to/samarpitnandanwar"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <FaDev />
              <span>Dev</span>
            </Link>
            <Link
              target="_blank"
              href="https://medium.com/@samarpit.snandanwar"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <FaMedium />
              <span>Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
