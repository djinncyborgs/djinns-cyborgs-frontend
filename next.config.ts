import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['import'],
    additionalData: `
      @import '@/shared/styles/variables';
      @import '@/shared/styles/mixins';
    `,
  },
};

export default nextConfig;
