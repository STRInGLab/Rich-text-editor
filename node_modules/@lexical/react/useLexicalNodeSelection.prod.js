/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var c=require("@lexical/react/LexicalComposerContext"),e=require("lexical"),h=require("react");function k(b,a){return b.getEditorState().read(()=>{let f=e.$getNodeByKey(a);return null===f?!1:f.isSelected()})}
exports.useLexicalNodeSelection=function(b){let [a]=c.useLexicalComposerContext(),[f,l]=h.useState(()=>k(a,b));h.useEffect(()=>a.registerUpdateListener(()=>{l(k(a,b))}),[a,b]);let m=h.useCallback(g=>{a.update(()=>{let d=e.$getSelection();e.$isNodeSelection(d)||(d=e.$createNodeSelection(),e.$setSelection(d));g?d.add(b):d.delete(b)})},[a,b]),n=h.useCallback(()=>{a.update(()=>{const g=e.$getSelection();e.$isNodeSelection(g)&&g.clear()})},[a]);return[f,m,n]}
