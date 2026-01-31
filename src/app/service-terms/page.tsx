import {Metadata} from 'next';

import ServiceTermsView from '@/views/serviceTerms';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service',
};

export default function ServiceTerms() {
  return <ServiceTermsView />;
}
