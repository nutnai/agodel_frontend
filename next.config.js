module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: process.env.AGODEL_BACKEND_SERVER+'/:path*', 
        },
      ];
    },
  };
  