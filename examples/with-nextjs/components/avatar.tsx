import Image from 'next/image';
import * as React from 'react';

type PictureSize = 'small' | 'medium' | 'large';

type AvatarProps = {
  picture: string;
  name?: string;
  size?: PictureSize;
};

const SIZES: Record<PictureSize, number> = {
  small: 24,
  medium: 40,
  large: 64,
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, picture, size = 'medium' } = props;

  return (
    <div className="flex items-center gap-2">
      <Image src={picture} width={SIZES[size]} height={SIZES[size]} alt={name || 'Avatar'} />
      {name && <div className="text-sm font-medium">{name}</div>}
    </div>
  );
};
