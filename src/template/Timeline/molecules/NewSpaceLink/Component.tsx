import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslation} from 'next-i18next';
import NextLink from 'next/link';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <NextLink href="/new">
      <a
        className={tw(
          className,
          ['inline-flex', 'items-center', 'justify-center'],
          [
            'bg-gradient-to-r',
            ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
            [
              'hover:from-blue-500',
              'hover:via-indigo-500',
              'hover:to-purple-500',
            ],
          ],
          ['rounded-md', 'shadow-sm'],
          ['text-white', 'text-lg'],
        )}
      >
        <FontAwesomeIcon icon={faPlus} className={tw()} />
        <span className={tw('ml-4', ['font-bold', 'tracking-wider'])}>
          {t('timeline:new_space')}
        </span>
      </a>
    </NextLink>
  );
};