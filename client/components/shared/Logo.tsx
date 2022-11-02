import Image from 'next/image';

type Props = {
  size?: 256 | 64 | 48 | 40 | 32;
};

const Logo: React.FC<Props> = ({ size = 64 }) => {
  return <Image alt="Resume Builder" src="/images/logos/logo2.svg" className="rounded" width={size} height={size} />;
};

export default Logo;
