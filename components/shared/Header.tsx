import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="w-full border-b-2">
      <div className="wrapper flex justify-between items-center">
        <Link href={'/'} className="w-36">
          <Image src={'/assets/images/logo.svg'} width={128} height={38} alt="Evently logo" />
        </Link>
        <div className="flex justify-end w-32">
          <Button className="rounded-full">
            <Link href={'/sign-in'}>Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
