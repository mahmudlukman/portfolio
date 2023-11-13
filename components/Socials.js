// links
import Link from "next/link";

// icons
import {RiGithubLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href='https://github.com/mahmudlukman' className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href='https://www.linkedin.com/in/mahmudlukman/' className="hover:text-accent transition-all duration-300">
        <AiOutlineLinkedin />
      </Link>
      <Link href='https://x.com/mahmudlukman_' className="hover:text-accent transition-all duration-300">
        <FaXTwitter />
      </Link>
    </div>
  );
};

export default Socials;
