import Link from "next/link";
import { SiGithub, SiGmail, SiFacebook, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="contacts overflow-hidden w-full">
      <h2 className="mx-auto text-center text-3xl max-w-[90%] sm:max-w-[80%] sm:text-5xl md:text-6xl font-bold break-words mt-10 mb-6">
        Have a question? Feel free to contact me on my social media!
      </h2>
      <div className="socials px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10">
          <SiGmail size={28} className="flex-shrink-0" />
          <span className="text-[16px] sm:text-[20px] break-all text-center">
            nikolajevmax.workspace@gmail.com
          </span>
        </div>
        <div className="flex justify-center ">
          <div className="socials-icons flex flex-wrap justify-center gap-4 sm:gap-8 max-w-[90%] mx-auto">
            <div
              className="social-icon flex justify-center hover:scale-120 transition-transform 
  duration-300 p-4"
            >
              <Link
                href="https://github.com/madmaxlt97"
                target="_blank"
                className="flex flex-col items-center gap-1"
              >
                <SiGithub
                  size={28}
                  color="black"
                  className="mb-2 flex justify-center"
                />
                <span>Github</span>
              </Link>
            </div>
            <div
              className="social-icon social-icon flex justify-center hover:scale-120 transition-transform 
  duration-300 p-4"
            >
              <Link
                href="https://www.linkedin.com/in/maksim-nikolajev-workspace"
                target="_blank"
                className="flex flex-col items-center gap-1"
              >
                <FaLinkedin
                  size={28}
                  color="#0077B5"
                  className="mb-2 flex justify-center"
                />
                <span>LinkedIn</span>
              </Link>
            </div>
            <div
              className="social-icon social-icon flex justify-center hover:scale-120 transition-transform 
  duration-300 p-4"
            >
              <Link
                href="https://www.instagram.com/max.nikolajev/"
                target="_blank"
                className="flex flex-col items-center gap-1"
              >
                <SiInstagram
                  size={28}
                  color="#E4405F"
                  className="mb-2 flex justify-center"
                />
                <span>Instagram</span>
              </Link>
            </div>
            <div
              className="social-icon social-icon flex justify-center hover:scale-120 transition-transform 
  duration-300 p-4"
            >
              <Link
                href="https://www.facebook.com/max.nikolajev/"
                target="_blank"
                className="flex flex-col items-center gap-1"
              >
                <SiFacebook
                  size={28}
                  color="#2528c4f7"
                  className="mb-2 flex justify-center"
                />
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
