import Link from 'next/link'
import headerStyle from '../styles/header.module.scss'
import classNames from '../helpers/classNames'
import Image from 'next/image'
import logo from '../public/images/logo.png'

type HeaderProps = {
  menu: string
}

const Header = ({ menu }: HeaderProps): JSX.Element => {
  return (
    <>
      <nav className={
        classNames(
          'bg-white',
          'border-gray-200',
          'px-2',
          'sm:px-4',
          'py-2.5',
          'rounded',
          'dark:bg-gray-800',
          'z-20',
          'fixed',
          'w-full',
        )}
      >
        <div className='flex flex-wrap items-center'>
          <Link
            href='/'
            className='flex items-center'>
            <a className='mb-auto mt-4'>
              <Image
                src={logo}
                className='mr-3'
                alt="logo"
              />
            </a>
          </Link>
          <div className='hidden justify-between items-center w-full md:flex md:w-auto mx-auto md:order-2' id='mobile-menu-3'>
            <ul className={
              classNames(
                'flex',
                'flex-col',
                'md:flex-row',
                'md:space-x-8',
                'md:text-sm',
                'md:font-medium',
                headerStyle.menu
              )}>
              <li>
                <Link href='/'>
                  <a>
                    <div className={
                      classNames(
                        'nav-header',
                        headerStyle.home,
                        menu == 'home' ? headerStyle.active : ''
                      )} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/market'>
                  <a>
                    <div className={
                      classNames(
                        'nav-header',
                        headerStyle.market,
                        menu == 'market' ? headerStyle.active : ''
                      )} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/analytics'>
                  <a>
                    <div className={
                      classNames(
                        'nav-header',
                        headerStyle.analytics,
                        menu == 'analytics' ? headerStyle.active : ''
                      )} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header