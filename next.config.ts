import type {NextConfig} from 'next';
// import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */ sassOptions: {
    silenceDeprecations: ['import'],
    // includePaths: [path.join(process.cwd(), 'src/shared/styles')],
    additionalData: `
      @import '@/shared/styles/variables';
      @import '@/shared/styles/mixins';
    `,
  },
};

export default nextConfig;
