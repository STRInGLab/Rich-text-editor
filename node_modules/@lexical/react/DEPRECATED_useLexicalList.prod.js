/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var b=require("@lexical/list"),c=require("@lexical/utils"),d=require("lexical"),e=require("react");
function f(a){e.useEffect(()=>c.mergeRegister(a.registerCommand(d.INDENT_CONTENT_COMMAND,()=>{b.indentList();return!1},d.COMMAND_PRIORITY_LOW),a.registerCommand(d.OUTDENT_CONTENT_COMMAND,()=>{b.outdentList();return!1},d.COMMAND_PRIORITY_LOW),a.registerCommand(b.INSERT_ORDERED_LIST_COMMAND,()=>{b.insertList(a,"number");return!0},d.COMMAND_PRIORITY_LOW),a.registerCommand(b.INSERT_UNORDERED_LIST_COMMAND,()=>{b.insertList(a,"bullet");return!0},d.COMMAND_PRIORITY_LOW),a.registerCommand(b.REMOVE_LIST_COMMAND,
()=>{b.removeList(a);return!0},d.COMMAND_PRIORITY_LOW),a.registerCommand(d.INSERT_PARAGRAPH_COMMAND,()=>b.$handleListInsertParagraph()?!0:!1,d.COMMAND_PRIORITY_LOW)),[a])}exports.useLexicalList=function(a){f(a)}
