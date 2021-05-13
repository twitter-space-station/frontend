import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Profile} from './organisms/Profile';
import {Following, Hosting} from './organisms/Space/Container';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  children,
  className,
  displayName,
  uniqueName,
  picture,
  hostedSpaces,
  followingSpaces,
}) => {
  return (
    <main className={clsx(className, 'bg-gray-200', 'py-4')}>
      {children}
      <div className={clsx('w-full', 'px-2')}>
        <Profile
          className={clsx('w-full')}
          {...{displayName, picture, uniqueName}}
        />
      </div>
      <div className={clsx('mt-4', 'px-2')}>
        <Hosting
          className={clsx('w-full')}
          spaces={hostedSpaces.nodes}
          spacesCount={hostedSpaces.count}
        />
        <Following
          className={clsx('w-full', 'mt-4')}
          spaces={followingSpaces.nodes}
          spacesCount={followingSpaces.count}
        />
      </div>
    </main>
  );
};
