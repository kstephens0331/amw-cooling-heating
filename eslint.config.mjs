import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'coverage/**', 'scripts/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        FormData: 'readonly',
        Event: 'readonly',
        HTMLElement: 'readonly',
        MutationObserver: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        // Node (for any scripts)
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        // React (available globally via Next.js)
        React: 'readonly',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-undef': 'warn',
      // React-specific
      'react/prop-types': 'off',             // Not using PropTypes in this project
      'react/react-in-jsx-scope': 'off',    // Next.js handles React import automatically
      'react/display-name': 'warn',
      'react/no-unescaped-entities': 'off', // Content wording is client-controlled, not changed
      'react/no-deprecated': 'warn',        // Legacy patterns noted but not blocking
    },
  },
];
