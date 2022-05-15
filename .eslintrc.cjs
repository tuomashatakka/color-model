// eslint-disable-line 

module.exports = {
  root:     true,
  parser:   '@typescript-eslint/parser',
  plugins:  [ 
    '@typescript-eslint',
  ],
  parserOptions: {
    tsconfigRootDir: '.',
    project: ['./tsconfig.json'],
  },
  extends:  [ 
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
}
