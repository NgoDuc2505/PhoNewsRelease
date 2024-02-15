import React from 'react'
import style from './header.module.css'
import Down from '../icons/Down'
import More from '../icons/More'
import Search from '../icons/Search'
import Bookmark from '../icons/Bookmark'

function Header() {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-row py-5">
            <div className="basis-1/2 flex items-center">
                <div className='w-full flex flex-row'>
                    <div className='basis-1/4 shrink '>
                        <h1 className='text-orange-800 text-4xl font-bold'>PhoNews</h1>
                    </div>
                    <div className="basis-3/4">
                        <div className="flex flex-row">
                            <div className="basis-1/4 flex font-medium cursor-pointer">
                                <p>Category </p>
                                <Down></Down>
                            </div>
                            <div className="basis-1/4 flex font-medium cursor-pointer">
                                <p>Pages</p>
                                <Down></Down>
                            </div>
                            <div className="basis-1/4 flex font-medium cursor-pointer">
                                <p>About Us</p>
                            </div>
                            <div className="basis-1/4 flex font-medium cursor-pointer">
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="flex flex-row">
                    <div className="basis-1/2 h-[4.8rem] bg-zinc-200 rounded-2xl flex items-center">
                        <More styleCus='mr-8'></More>
                        <input type="text" placeholder='Search Anything...' className='bg-inherit text-zinc-800 placeholder:bold placeholder:bg-zinc-200 outline-none' />
                        <button className='ml-auto mr-3'>
                            <Search></Search>
                        </button>
                    </div>
                    <div className="basis-1/2">
                        <div className='w-full flex flex-row'>
                                <div className="basis-2/3 h-[4.8rem] mx-3 flex flex-row items-center">
                                    <img className='w-[4.8rem] h-full rounded-2xl' src="https://tse3.mm.bing.net/th?id=OIP.JNL8yIu7EVKUZhTAhijT2wHaHa&pid=Api&P=0&h=220" alt="..." />
                                    <p className='ml-2'>Ngo Duc</p>
                                    <Down></Down>
                                </div>
                                <div className="basis-1/3 flex flex-row items-center ">
                                    <button className={`${style.bookmarkBtn} container-icon bg-slate-400 rounded-xl h-[4.8rem] w-[4.8rem] flex justify-center items-center `}>
                                        <Bookmark styleCus='w-[25px] h-[25px]'></Bookmark>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header