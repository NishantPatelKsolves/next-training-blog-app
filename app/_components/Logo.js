import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { BLOG } from "@/app/_utils/constants";

const imageStyle = {
  borderRadius: "50%",
  // border: "1px dashed #fff",
  // just for testing that we can style images like this
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-5 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The blog app logo"
        quality={90}
        placeholder="blur"
        style={imageStyle}
      />

      <span className="text-xl font-semibold text-primary-100">
        {BLOG.APP_NAME}
      </span>
    </Link>
  );
}

export default Logo;
