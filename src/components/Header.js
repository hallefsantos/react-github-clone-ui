import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { BsBell, BsPlus } from 'react-icons/bs'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { BiBookBookmark } from 'react-icons/bi'

const Header = () => {

   const menuItems = ['Pull requests', 'Issues', 'Marketplace', 'Explore']
   const repositories = [
      {
         username: '@goyabahq',
         repository: 'moscas',
         avatar: 'https://avatars.githubusercontent.com/t/3940070?s=56&v=4',
      },
      {
         username: 'goyabahq',
         repository: 'philanthropi.com',
         avatar: null,
      },
      {
         username: 'goyabahq',
         repository: 'thenewreview.com',
         avatar: null,
      },
      {
         username: 'getkirby',
         repository: 'kirby',
         avatar: null,
      },
      {
         username: 'dracula',
         repository: 'gnome-terminal',
         avatar: null,
      },
   ]
   const [isSearchFocused, setIsSearchFocused] = useState(false)
   const [isMenuRepositoryOpen, setIsMenuRepositoryOpen] = useState(false)
   const [isMenuProfileOpen, setIsMenuProfileOpen] = useState(false)

   return (
      <header className="px-8 py-4 flex justify-between bg-gray-900">
         <div className="flex-1 flex items-center space-x-4">
            <a href="#">
               <SiGithub className="h-8 w-8 text-white" />
            </a>

            <div 
               className={`${isSearchFocused ? 'max-w-md' : 'max-w-xs'} w-full transition-all ease-linear duration-300 relative`}
            >
               <div 
                  className={`${isSearchFocused ? 'hidden' : 'flex'} items-center absolute inset-y-0 right-2`}
               >
                  <span className="flex justify-center items-center h-4 w-4 text-gray-500 border border-gray-600 text-xs rounded">
                     /
                  </span>
               </div>
               <input 
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`w-full py-1 pl-3 pr-2 bg-transparent border border-gray-600 rounded-md text-sm focus:outline-none focus:bg-gray-100 box-border ${isSearchFocused ? `rounded-b-none` : ''}`}
                  type="text" 
                  placeholder="Search or jump to..."
               />
               {isSearchFocused && (
                  <div className="absolute -mt-1 w-full bg-white rounded-b shadow transform scale-100">
                     <ul>
                        {repositories.map((repository, idx) =>(
                           <li key={idx}>
                              <a 
                                 className="p-2 flex items-center hover:bg-blue-600 hover:text-white space-x-2 text-sm"
                                 href="#"
                              >
                                 <span className="w-7 h-7 flex items-center justify-center rounded overflow-hidden text-gray-400">
                                    {repository.avatar 
                                       ? <img className="w-full h-full object-cover object-center" src={repository.avatar} alt={repository.username}/>
                                       : <BiBookBookmark className="h-4 w-4" />
                                    }
                                 </span>
                                 <span>
                                    {repository.username}/{repository.repository}
                                 </span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
               
            </div>

            <nav className="text-white">
               <ul className="flex space-x-4">
                  {menuItems.map((item, idx) => (
                     <li key={idx}>
                        <a 
                           className="font-bold text-sm text-white hover:text-gray-300"
                           href="#">
                           {item}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav> 
         </div>

         <div className="flex items-center space-x-4">
            <div className="group relative flex items-center">
               <div className="h-3 w-3 bg-gradient-to-r from-blue-400 to-blue-700 absolute -top-1 -right-0.5 rounded-full border border-gray-900"></div>

               <button className="text-white hover:text-gray-300 focus:outline-none">
                  <BsBell className="h-5 w-5"/>
               </button>

               <div className="absolute inset-0 transform translate-y-full text-xs opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-150 ease-linear">
                  <div className="py-1 absolute right-0 mt-2 bg-gray-900 text-white w-48 text-center rounded">
                     You have unread notifications
                  </div>
               </div>
            </div>

            <div className="relative flex items-center">
               <button 
                  onClick={() => setIsMenuRepositoryOpen(!isMenuRepositoryOpen)}
                  onBlur={() => setIsMenuRepositoryOpen(false)}
                  className="flex items-center text-white hover:text-gray-300 focus:outline-none"
               >
                  <BsPlus className="h-6 w-6" />
                  <TiArrowSortedDown className="h-3 w-3" />
               </button>
               
               {isMenuRepositoryOpen && (
                  <div className="absolute inset-0 transform translate-y-full">
                     <nav className="absolute right-0 mt-2 bg-white w-40 rounded shadow-sm border border-gray-100 divide-y divide-gray-200 divide-solid text-sm">
                        <span className="absolute text-white top-3 right-2 transform -translate-y-full">
                           <TiArrowSortedUp className="h-7 w-7" />
                        </span>
                        <ul className="py-2">
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 New repository
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Import repository
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 New gist
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 New organization
                              </a>
                           </li>
                        </ul>
                        <ul className="py-2">
                           <li className="block py-1 pl-4 pr-2 text-xs text-gray-400">This repository</li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 New issue
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               )}
            </div>

            <div className="relative flex items-center">
               <button 
                  onClick={() => setIsMenuProfileOpen(!isMenuProfileOpen)}
                  onBlur={() => setIsMenuProfileOpen(false)}
                  className="flex items-center text-white hover:text-gray-300 focus:outline-none"
               >
                  <img 
                     className="w-5 h-5 rounded-full" 
                     src="https://avatars.githubusercontent.com/u/20205767?s=60&v=4" 
                     alt="@hallefsantos"
                  />
                  <TiArrowSortedDown className="ml-1 h-3 w-3" />
               </button>

               {isMenuProfileOpen && (
                  <div className="absolute inset-0 transform translate-y-full">
                     <nav className="absolute right-0 mt-2 bg-white w-40 rounded shadow-sm border border-gray-100 divide-y divide-gray-200 divide-solid text-sm">
                        <span className="absolute text-white top-3 right-2 transform -translate-y-full">
                           <TiArrowSortedUp className="h-7 w-7" />
                        </span>
                        <div className="py-2 pl-4 pr-2">
                           Signed in as <strong>hallefsantos</strong>
                        </div>
                        <div className="py-2 pl-4 pr-2">
                           <div className="p-1 truncate text-gray-600 text-xs border border-gray-200 rounded">
                              <a href="#" className="hover:text-blue-500">
                                 👨🏻‍💻 Front End Developer | 🏠  Working from home.
                              </a>
                           </div>
                        </div>
                        <ul className="py-2">
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your profile
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your repositories
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your organizations
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your projects
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your stars
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Your gists
                              </a>
                           </li>
                        </ul>
                        <ul className="py-2">
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Upgrade
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Feature preview
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Help
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Settings
                              </a>
                           </li>
                           <li>
                              <a 
                                 className="block py-1 pl-4 pr-2 hover:bg-blue-600 hover:text-white"
                                 href="#"
                              >
                                 Sign out
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               )}
            </div>

         </div>
      </header>
   )
}

export default Header
