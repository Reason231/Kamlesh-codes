import { FaAlignLeft } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

export const AdminHeaderComponent =() =>{
    return(<>


         <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >

                {/* Day17  */}
               <FaAlignLeft />

               
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <NavLink to="/"
                className="flex items-center justify-between mr-4"
              >
                <img
                  src="data:image/png;base64,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"
                  className="mr-3 h-8"
                  alt="Finatic"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Admin Panel
                </span>
              </NavLink>
              <form action="#" method="GET" className="hidden md:block md:pl-2">
                <div className="relative md:w-64 md:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Toggle search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </button>

              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">View notifications</span>

                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>

             

             =
            
              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="true"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>

              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Neil Sims
                  </span>
                  <span className="block text-sm text-gray-900 truncate dark:text-white">
                    name@flowbite.com
                  </span>
                </div>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      My likes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <span className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Pro version
                      </span>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </>)
}