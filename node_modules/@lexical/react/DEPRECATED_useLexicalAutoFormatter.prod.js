/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var a=require("@lexical/markdown"),c=require("react");exports.useLexicalAutoFormatter=function(b){c.useEffect(()=>a.registerMarkdownShortcuts(b,a.TRANSFORMERS),[b])}
