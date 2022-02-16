module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f26390d27a66154ab23fa4b99f743443'),
  },
});
