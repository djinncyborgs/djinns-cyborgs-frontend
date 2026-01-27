import Link from 'next/link';
import {redirect} from 'next/navigation';
import {CustomLink} from '@/components/CustomLink';

type Props = {
  searchParams: Promise<Record<string, string>>;
};

export default async function SettingsPage({searchParams}: Props) {
  const {part} = await searchParams;

  if (!part) {
    redirect(`/settings?part=info`);
  }

  return (
    <div>
      Settings
      <hr />
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href="/">Main</Link>
        <CustomLink title={'General information'} param={'part'} value={'info'} />
        <CustomLink title={'Devices'} param={'part'} value={'devices'} />
        <CustomLink title={'Account management'} param={'part'} value={'subscriptions'} />
        <CustomLink title={'My Payments'} param={'part'} value={'payments'} />
      </div>
    </div>
  );
}
