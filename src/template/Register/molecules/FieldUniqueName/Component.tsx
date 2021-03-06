import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {IconUniqueName} from '~/components/atoms/Icon';
import {InputText} from '~/components/atoms/InputText';
import {FieldFrame} from '~/template/NewSpace/atoms/FieldFrame';

export type ComponentProps = {
  className?: string;
  message?: string;
  register: UseFormRegisterReturn;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  message,
  register,
}) => {
  const {t} = useTranslation();
  return (
    <FieldFrame
      {...{errorMessage: message}}
      id="unique-name"
      className={tw(className)}
      Icon={IconUniqueName}
      i18n={{
        label: t('register:form.unique_name.label'),
        description: t('register:form.unique_name.description'),
      }}
      Input={({className, ...props}) => (
        <InputText className={tw(className)} register={register} {...props} />
      )}
      required
    />
  );
};
