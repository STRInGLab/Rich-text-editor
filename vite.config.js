/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import path from 'path';
import fs from 'fs';
import {replaceCodePlugin} from 'vite-plugin-replace';
import babel from '@rollup/plugin-babel';

const moduleResolution = [
  {
    find: /lexical$/,
    replacement: path.resolve('./packages/lexical/src/index.ts'),
  },
  {
    find: '@lexical/clipboard',
    replacement: path.resolve('./packages/lexical-clipboard/src/index.ts'),
  },
  {
    find: '@lexical/selection',
    replacement: path.resolve('./packages/lexical-selection/src/index.ts'),
  },
  {
    find: '@lexical/text',
    replacement: path.resolve('./packages/lexical-text/src/index.ts'),
  },
  {
    find: '@lexical/headless',
    replacement: path.resolve('./packages/lexical-headless/src/index.ts'),
  },
  {
    find: '@lexical/html',
    replacement: path.resolve('./packages/lexical-html/src/index.ts'),
  },
  {
    find: '@lexical/hashtag',
    replacement: path.resolve('./packages/lexical-hashtag/src/index.ts'),
  },
  {
    find: '@lexical/history',
    replacement: path.resolve('./packages/lexical-history/src/index.ts'),
  },
  {
    find: '@lexical/list',
    replacement: path.resolve('./packages/lexical-list/src/index.ts'),
  },
  {
    find: '@lexical/file',
    replacement: path.resolve('./packages/lexical-file/src/index.ts'),
  },
  {
    find: '@lexical/table',
    replacement: path.resolve('./packages/lexical-table/src/index.ts'),
  },
  {
    find: '@lexical/offset',
    replacement: path.resolve('./packages/lexical-offset/src/index.ts'),
  },
  {
    find: '@lexical/utils',
    replacement: path.resolve('./packages/lexical-utils/src/index.ts'),
  },
  {
    find: '@lexical/code',
    replacement: path.resolve('./packages/lexical-code/src/index.ts'),
  },
  {
    find: '@lexical/plain-text',
    replacement: path.resolve('./packages/lexical-plain-text/src/index.ts'),
  },
  {
    find: '@lexical/rich-text',
    replacement: path.resolve('./packages/lexical-rich-text/src/index.ts'),
  },
  {
    find: '@lexical/dragon',
    replacement: path.resolve('./packages/lexical-dragon/src/index.ts'),
  },
  {
    find: '@lexical/link',
    replacement: path.resolve('./packages/lexical-link/src/index.ts'),
  },
  {
    find: '@lexical/overflow',
    replacement: path.resolve('./packages/lexical-overflow/src/index.ts'),
  },
  {
    find: '@lexical/markdown',
    replacement: path.resolve('./packages/lexical-markdown/src/index.ts'),
  },
  {
    find: '@lexical/mark',
    replacement: path.resolve('./packages/lexical-mark/src/index.ts'),
  },
  {
    find: '@lexical/yjs',
    replacement: path.resolve('./packages/lexical-yjs/src/index.ts'),
  },
  {
    find: 'shared',
    replacement: path.resolve('./packages/shared/src'),
  },
];
// Lexical React
[
  'LexicalTreeView',
  'LexicalComposer',
  'LexicalComposerContext',
  'useLexicalIsTextContentEmpty',
  'useLexicalTextEntity',
  'useLexicalSubscription',
  'useLexicalEditable',
  'LexicalContentEditable',
  'LexicalNestedComposer',
  'LexicalHorizontalRuleNode',
  'LexicalHorizontalRulePlugin',
  'LexicalDecoratorBlockNode',
  'LexicalBlockWithAlignableContents',
  'useLexicalNodeSelection',
  'LexicalMarkdownShortcutPlugin',
  'LexicalCharacterLimitPlugin',
  'LexicalHashtagPlugin',
  'LexicalErrorBoundary',
  'LexicalPlainTextPlugin',
  'LexicalRichTextPlugin',
  'LexicalClearEditorPlugin',
  'LexicalCollaborationContext',
  'LexicalCollaborationPlugin',
  'LexicalHistoryPlugin',
  'LexicalTypeaheadMenuPlugin',
  'LexicalTablePlugin',
  'LexicalLinkPlugin',
  'LexicalListPlugin',
  'LexicalCheckListPlugin',
  'LexicalAutoFocusPlugin',
  "LexicalTableOfContents__EXPERIMENTAL",
  'LexicalAutoLinkPlugin',
  'LexicalAutoEmbedPlugin',
  'LexicalOnChangePlugin',
  'LexicalNodeEventPlugin',
  'LexicalTabIndentationPlugin',
].forEach((module) => {
  let resolvedPath = path.resolve(`./packages/lexical-react/src/${module}.ts`);

  if (fs.existsSync(resolvedPath)) {
    moduleResolution.push({
      find: `@lexical/react/${module}`,
      replacement: resolvedPath,
    });
  } else {
    resolvedPath = path.resolve(`./packages/lexical-react/src/${module}.tsx`);
    moduleResolution.push({
      find: `@lexical/react/${module}`,
      replacement: resolvedPath,
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: /__DEV__/g,
          to: 'true',
        },
      ],
    }),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      configFile: false,
      exclude: '/**/node_modules/**',
      extensions: ['jsx', 'js', 'ts', 'tsx', 'mjs'],
      plugins: [
        '@babel/plugin-transform-flow-strip-types',
        [
          require('./scripts/transform-error-messages'),
          {
            noMinify: true,
          },
        ],
      ],
      presets: ['@babel/preset-react'],
    }),
    react(),
  ],
  resolve: {
    alias: moduleResolution,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        split: new URL('./split/index.html', import.meta.url).pathname,
      },
    },
  },
});
