/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var k=require("@lexical/react/LexicalComposerContext"),l=require("@lexical/rich-text"),r=require("lexical"),u=require("react");
module.exports=function({children:v}){let [w,m]=u.useState([]),[f]=k.useLexicalComposerContext();u.useEffect(()=>{let b=[];f.getEditorState().read(()=>{let h=r.$getRoot().getChildren();for(let a of h)l.$isHeadingNode(a)&&b.push([a.getKey(),a.getTextContent(),a.getTag()]);m(b)});let x=f.registerMutationListener(l.HeadingNode,h=>{f.getEditorState().read(()=>{for(const [n,p]of h)if("created"===p){var a=r.$getNodeByKey(n);if(null!==a){for(var c=a.getPreviousSibling();c&&!l.$isHeadingNode(c);)c=c.getPreviousSibling();
a:{var d=b;if(null===a){b=d;break a}let e=[a.getKey(),a.getTextContent(),a.getTag()],g=[];if(null===c)g=[e,...d];else for(let q=0;q<d.length;q++){let t=d[q][0];g.push(d[q]);t===c.getKey()&&t!==a.getKey()&&g.push(e)}b=g}m(b)}}else if("destroyed"===p){c=n;a=b;d=[];for(let e of a)e[0]!==c&&d.push(e);b=d;m(b)}})}),y=f.registerMutationListener(r.TextNode,h=>{f.getEditorState().read(()=>{for(const [d,n]of h)if("updated"===n){var a=r.$getNodeByKey(d);if(null!==a&&(a=a.getParentOrThrow(),l.$isHeadingNode(a))){var c=
b;let p=a.getTextContent(),e=[];for(let g of c)g[0]===a.getKey()?e.push([a.getKey(),p,a.getTag()]):e.push(g);b=e;m(b)}}})});return()=>{x();y()}},[f]);return v(w,f)}
