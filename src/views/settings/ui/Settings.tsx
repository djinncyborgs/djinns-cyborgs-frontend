import Link from 'next/link';

import {CustomLink} from '@/components/CustomLink';

const SettingsView = () => {
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
};
export default SettingsView;
