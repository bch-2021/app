import Link from 'next/link';
import { useRouter } from 'next/router';
import cl from './style.module.scss';

export default function Header() {
  const router = useRouter();

  const pagesNav = [
    { link: '/', alias: 'Search' },
    { link: '/points', alias: 'Points' },
    { link: '/transfer', alias: 'Transfer' },
    { link: '/serials', alias: 'Serials' },
  ];

  return (
    <header className={cl.container}>
      {pagesNav.map((page, key) => (
        <Link href={page.link} key={key}>
          <a className={router.pathname === page.link ? cl.active : ''}>{page.alias}</a>
        </Link>
      ))}
    </header>
  );
}
