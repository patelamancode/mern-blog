import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from "react-icons/bs"

export default function FooterComp() {
  return (
    <Footer className="border border-t-8 border-teal-500">
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className="mt-8 mb-5 sm:px-2">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                MERN
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    How JS works?
                </Footer.Link>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    Async JS
                </Footer.Link>       
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    How JS works?
                </Footer.Link>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    Async JS
                </Footer.Link>       
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    Privacy policy
                </Footer.Link>
                <Footer.Link 
                    href="#"
                    rel="noopener noreferer"
                    target="_blank"
                >
                 Term & Condition
                </Footer.Link>       
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='pb-4 px-2 w-full sm:flex sm:items-center sm:justify-between'>
        <Footer.Copyright
            href='https://github.com/patelamancode'
            by="@man_Patel"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-8 sm:mt-0 mt-4 sm:justify-center sm:items-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/patelamancode' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
