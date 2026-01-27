'use client';

import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import {useCallback} from 'react';

type Props = {
  title: string;
  param: string;
  value: string;
};

export const CustomLink = ({title, param, value}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (paramName: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, value);
      return params.toString();
    },
    [searchParams]
  );

  return pathname && <Link href={pathname + '?' + createQueryString(param, value)}>{title}</Link>;
};
