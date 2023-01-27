/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var history=require("@lexical/history"),d=require("react");function f(a,b,c=1E3){let e=d.useMemo(()=>b||history.createEmptyHistoryState(),[b]);d.useEffect(()=>history.registerHistory(a,e,c),[c,a,e])}exports.createEmptyHistoryState=history.createEmptyHistoryState;exports.useLexicalHistory=function(a,b,c=1E3){return f(a,b,c)}
