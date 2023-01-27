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
    replacement: path.resolve('./packages/lexical/dist/Lexical.js'),
  },
  {
    find: '@lexical/clipboard',
    replacement: path.resolve('./packages/lexical-clipboard/dist/LexicalClipboard.js'),
  },
  {
    find: '@lexical/selection',
    replacement: path.resolve('./packages/lexical-selection/dist/LexicalSelection.js'),
  },
  {
    find: '@lexical/text',
    replacement: path.resolve('./packages/lexical-text/dist/LexicalText.js'),
  },
  {
    find: '@lexical/headless',
    replacement: path.resolve('./packages/lexical-headless/dist/LexicalHeadless.js'),
  },
  {
    find: '@lexical/html',
    replacement: path.resolve('./packages/lexical-html/dist/LexicalHtml.js'),
  },
  {
    find: '@lexical/hashtag',
    replacement: path.resolve('./packages/lexical-hashtag/dist/LexicalHashtag.js'),
  },
  {
    find: '@lexical/history',
    replacement: path.resolve('./packages/lexical-history/dist/LexicalHistory.js'),
  },
  {
    find: '@lexical/list',
    replacement: path.resolve('./packages/lexical-list/dist/LexicalList.js'),
  },
  {
    find: '@lexical/file',
    replacement: path.resolve('./packages/lexical-file/dist/LexicalFile.js'),
  },
  {
    find: '@lexical/table',
    replacement: path.resolve('./packages/lexical-table/dist/LexicalTable.js'),
  },
  {
    find: '@lexical/offset',
    replacement: path.resolve('./packages/lexical-offset/dist/LexicalOffset.js'),
  },
  {
    find: '@lexical/utils',
    replacement: path.resolve('./packages/lexical-utils/dist/LexicalUtils.js'),
  },
  {
    find: '@lexical/code',
    replacement: path.resolve('./packages/lexical-code/dist/LexicalCode.js'),
  },
  {
    find: '@lexical/plain-text',
    replacement: path.resolve('./packages/lexical-plain-text/dist/LexicalPlainText.js'),
  },
  {
    find: '@lexical/rich-text',
    replacement: path.resolve('./packages/lexical-rich-text/dist/LexicalRichText.js'),
  },
  {
    find: '@lexical/dragon',
    replacement: path.resolve('./packages/lexical-dragon/dist/LexicalDragon.js'),
  },
  {
    find: '@lexical/link',
    replacement: path.resolve('./packages/lexical-link/dist/LexicalLink.js'),
  },
  {
    find: '@lexical/overflow',
    replacement: path.resolve('./packages/lexical-overflow/dist/LexicalOverflow.js'),
  },
  {
    find: '@lexical/markdown',
    replacement: path.resolve('./packages/lexical-markdown/dist/LexicalMarkdown.js'),
  },
  {
    find: '@lexical/mark',
    replacement: path.resolve('./packages/lexical-mark/dist/LexicalMark.js'),
  },
  {
    find: '@lexical/yjs',
    replacement: path.resolve('./packages/lexical-yjs/dist/LexicalYjs.js'),
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
  'LexicalTabIndentationPlugin'
].forEach((module) => {
  let resolvedPath = path.resolve(`./packages/lexical-react/dist/${module}.js`);
  moduleResolution.push({
    find: `@lexical/react/${module}`,
    replacement: resolvedPath,
  });
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
      plugins: ['@babel/plugin-transform-flow-strip-types'],
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
    commonjsOptions: {include: []},
    minify: 'terser',
    terserOptions: {
      compress: {
        toplevel: true,
      }
    },
  },
});
