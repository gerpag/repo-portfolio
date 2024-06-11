import globals from 'globals'
import pluginJs from '@eslint/js'
import { configs as tsConfigs, rules as tsRules } from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { configs as importConfigs } from 'eslint-plugin-import'

export default [
  
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: globals.browser
    },
    rules: {
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
  },

  
  
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: globals.browser
    },
    rules: {
      ...tsRules,
    
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
  pluginJs.configs.recommended,
  tsConfigs['recommended'],
  pluginReactConfig,
  importConfigs.recommended,
]
