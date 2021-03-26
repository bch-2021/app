import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useSelector, useDispatch } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
// import Button1 from 'elements/Button1';
// import { LANG_CHANGE } from 'redux/actions/language';
// import Translator from 'handlers/translator';
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
