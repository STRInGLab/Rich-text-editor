/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var g=require("react"),h="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?g.useLayoutEffect:g.useEffect;function p(a,b){return"selectionchange"===a||"keyup"===a||"pointerup"===a||"pointercancel"===a?b.ownerDocument:b}
function q(a,b){h(()=>{let k=[],l=[];for(let d=0;d<a.length;d++){let [c,e]=a[d],n=f=>{let m=b.getRootElement();null!==m&&"true"===m.contentEditable&&e(f,b)};k.push(f=>{p(c,f).addEventListener(c,n)});l.push(f=>{p(c,f).removeEventListener(c,n)})}return b.registerRootListener((d,c)=>{null!==c&&l.forEach(e=>e(c));null!==d&&k.forEach(e=>e(d))})},[b,a])}exports.useLexicalEditorEvents=function(a,b){q(a,b)}
