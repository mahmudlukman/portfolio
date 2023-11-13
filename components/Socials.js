// links
import Link from "next/link";

// icons
import {RiGithubLine, RiInstagramLine, RiFacebookLine, RiTwitterLine} from 'react-icons/ri'
import {AiFillLinkedin} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href='https://github.com/mahmudlukman' className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href='https://www.linkedin.com/in/mahmudlukman/' className="hover:text-accent transition-all duration-300">
        <AiFillLinkedin />
      </Link>
      {/* <Link href='#' className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
      <Link href='https://twitter/mahmudlukman_' className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
