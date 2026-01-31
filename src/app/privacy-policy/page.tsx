import {Metadata} from 'next';

import PrivacyPolicyView from '@/views/privacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyView />;
}
