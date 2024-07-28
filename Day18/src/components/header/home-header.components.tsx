import { Button, Navbar, MegaMenu } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { LinkComponent } from "../common/link/navbar-link-component";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";

export const HomeHeader = () => {
  // Day16
  const auth: any = useContext(AuthContext);
  
  return (
    <>
      <MegaMenu>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="data:image/png;base64,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"
              className="mt-2 mr-3 h-6 sm:h-9"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Finatic
            </span>
          </Navbar.Brand>

          {/* Day 17 */}
          {auth && auth.loggedInUser ? (
            <>
              <div className="order-2 hidden items-center md:flex">
                <NavLink
                
                  to={"/" + auth.loggedInUser.role}
                  className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5 hover:active:to-blue-400"
                  >
                    Logged In
                </NavLink>
                <Button href="/logout" className="hover:text-teal-400">
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="order-2 hidden items-center md:flex">
                <NavLink
                  to="/login"
                  className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                >
                  {" "}
                  Login
                </NavLink>
                <Button href="/register" className="hover:text-teal-400">
                  Sign up
                </Button>
              </div>
            </>
          )}
          <Navbar.Toggle />


          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>

            <Navbar.Link>
              <MegaMenu.Dropdown toggle={<>Categories</>}>
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Pro Version
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>

            {/* imported it from the top */}
            <LinkComponent
              link="/pricing"
              icon="&arr;"
              text="Pricing"
            ></LinkComponent>
            <LinkComponent
              link="/contact"
              icon="&arr;"
              text="Contact"
            ></LinkComponent>
            <LinkComponent
              link="/about"
              icon="&arr;"
              text="About"
            ></LinkComponent>
          </Navbar.Collapse>
        </div>
      </MegaMenu>
    </>
  );
};
