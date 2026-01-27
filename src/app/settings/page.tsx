import {Metadata} from 'next';
import {redirect} from 'next/navigation';

import SettingsPage from '@/views/Settings';

export const metadata: Metadata = {
  title: 'Settings Page',
  description: 'Manage your account settings',
};

type Props = {
  searchParams: Promise<{part?: string}>;
};

export default async function Settings({searchParams}: Props) {
  const params = await searchParams;

  if (!params.part) {
    redirect('/settings?part=info');
  }

  return <SettingsPage />;
}
