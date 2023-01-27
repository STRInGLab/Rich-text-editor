/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var b=require("@lexical/react/LexicalComposerContext"),k=require("react"),l="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?k.useLayoutEffect:k.useEffect;
exports.ContentEditable=function({ariaActiveDescendantID:m,ariaAutoComplete:n,ariaControls:p,ariaDescribedBy:q,ariaExpanded:r,ariaLabel:t,ariaLabelledBy:u,ariaMultiline:v,ariaOwneeID:w,ariaRequired:x,autoCapitalize:e,autoComplete:y,autoCorrect:f,className:z,id:A,role:g="textbox",spellCheck:B=!0,style:C,tabIndex:D,testid:E}){let [c]=b.useLexicalComposerContext(),[a,h]=k.useState(!1),F=k.useCallback(d=>{c.setRootElement(d)},[c]);l(()=>{h(c.isEditable());return c.registerEditableListener(d=>{h(d)})},
[c]);return k.createElement("div",{"aria-activedescendant":a?m:null,"aria-autocomplete":a?n:null,"aria-controls":a?p:null,"aria-describedby":q,"aria-expanded":a?"combobox"===g?!!r:null:null,"aria-label":t,"aria-labelledby":u,"aria-multiline":v,"aria-owns":a?w:null,"aria-required":x,autoCapitalize:void 0!==e?String(e):void 0,autoComplete:y,autoCorrect:void 0!==f?String(f):void 0,className:z,contentEditable:a,"data-testid":E,id:A,ref:F,role:a?g:void 0,spellCheck:B,style:C,tabIndex:D})}
