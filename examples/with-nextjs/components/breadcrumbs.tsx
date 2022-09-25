import Link from 'next/link';

export const Breadcrumbs = () => {
  return (
    <ul className={'text-neutral-30 flex items-center gap-2 text-sm'}>
      <li>
        <Link href={'/'} className={'hover:text-secondary'}>
          Collections
        </Link>
      </li>
      <li>/</li>
      <li>
        <Link href={'/'} className={'hover:text-secondary'}>
          Pawradise
        </Link>
      </li>
      <li>/</li>
      <li className={'text-neutral'}>Pawradise #13529</li>
    </ul>
  );
};
