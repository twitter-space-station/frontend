import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export type ComponentProps = {
  className?: string;
  title: string;
  hostUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  title,
  hostUser,
}) => {
  const {t} = useTranslation();

  return (
    <header
      className={tw(
        className,
        ['shadow-sm', 'rounded-sm'],
        ['py-4', 'md:py-6'],
        ['bg-opacity-60', 'bg-white'],
      )}
    >
      <div
        className={tw(
          'mx-auto',
          'max-w-screen-sm',
          ['px-4', 'md:px-0'],
          ['flex', ['flex-col']],
        )}
      >
        <h1
          className={tw(['text-lg', 'sm:text-xl', 'md:text-2xl'], 'font-bold')}
        >
          {title}
        </h1>
        <div className={tw(['mt-2', 'md:mt-4'], ['flex', 'items-center'])}>
          <UserIconLink className={tw('w-8', 'h-8')} {...hostUser} />
          <span className={tw(['ml-2', 'md:ml-4'])}>
            {hostUser.displayName}
          </span>
        </div>
      </div>
    </header>
  );
};
