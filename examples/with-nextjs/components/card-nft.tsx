import Image from 'next/future/image';
import { Avatar } from './avatar';
import * as React from 'react';

type CardNFTProps = {
  title: string;
  description: string;
  image: string;
  avatar: string;
  username: string;
  price: string;
};
export const CardNft: React.FC<CardNFTProps> = (props) => {
  const { title, description, image, avatar, username, price } = props;

  return (
    <div className="border-neutral-10 hover:shadow-box-hover active:shadow-box-pressed rounded-xl border p-3 transition">
      <div className="flex">
        <Image src={image} width={258} height={218} alt={'pawradise-1'} className={'aspect-[258/218] w-full'} />
      </div>
      <div className="pt-4 pb-1">
        <div className="text-secondary text-xs font-medium">{description}</div>
        <div className="mt-1 font-bold">{title}</div>
        <div className="mt-1 flex items-center justify-between gap-4">
          <Avatar name={username} picture={avatar} size={'small'} />
          <div className="py-1.25 bg-neutral-10 rounded px-2 text-sm font-medium">{price}</div>
        </div>
      </div>
    </div>
  );
};
