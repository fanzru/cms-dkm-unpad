export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '103.55.38.98'),
      port: env.int('DATABASE_PORT', 1000),
      database: env('DATABASE_NAME', 'cms_dkm_unpad'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
