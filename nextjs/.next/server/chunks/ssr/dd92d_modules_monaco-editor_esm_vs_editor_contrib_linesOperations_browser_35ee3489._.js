module.exports = {

"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/copyLinesCommand.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CopyLinesCommand": (()=>CopyLinesCommand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js [app-ssr] (ecmascript)");
;
;
class CopyLinesCommand {
    constructor(selection, isCopyingDown, noop){
        this._selection = selection;
        this._isCopyingDown = isCopyingDown;
        this._noop = noop || false;
        this._selectionDirection = 0 /* SelectionDirection.LTR */ ;
        this._selectionId = null;
        this._startLineNumberDelta = 0;
        this._endLineNumberDelta = 0;
    }
    getEditOperations(model, builder) {
        let s = this._selection;
        this._startLineNumberDelta = 0;
        this._endLineNumberDelta = 0;
        if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
            this._endLineNumberDelta = 1;
            s = s.setEndPosition(s.endLineNumber - 1, model.getLineMaxColumn(s.endLineNumber - 1));
        }
        const sourceLines = [];
        for(let i = s.startLineNumber; i <= s.endLineNumber; i++){
            sourceLines.push(model.getLineContent(i));
        }
        const sourceText = sourceLines.join('\n');
        if (sourceText === '') {
            // Duplicating empty line
            if (this._isCopyingDown) {
                this._startLineNumberDelta++;
                this._endLineNumberDelta++;
            }
        }
        if (this._noop) {
            builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber + 1, 1), s.endLineNumber === model.getLineCount() ? '' : '\n');
        } else {
            if (!this._isCopyingDown) {
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber, model.getLineMaxColumn(s.endLineNumber)), '\n' + sourceText);
            } else {
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.startLineNumber, 1, s.startLineNumber, 1), sourceText + '\n');
            }
        }
        this._selectionId = builder.trackSelection(s);
        this._selectionDirection = this._selection.getDirection();
    }
    computeCursorState(model, helper) {
        let result = helper.getTrackedSelection(this._selectionId);
        if (this._startLineNumberDelta !== 0 || this._endLineNumberDelta !== 0) {
            let startLineNumber = result.startLineNumber;
            let startColumn = result.startColumn;
            let endLineNumber = result.endLineNumber;
            let endColumn = result.endColumn;
            if (this._startLineNumberDelta !== 0) {
                startLineNumber = startLineNumber + this._startLineNumberDelta;
                startColumn = 1;
            }
            if (this._endLineNumberDelta !== 0) {
                endLineNumber = endLineNumber + this._endLineNumberDelta;
                endColumn = 1;
            }
            result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"].createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, this._selectionDirection);
        }
        return result;
    }
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/moveLinesCommand.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "MoveLinesCommand": (()=>MoveLinesCommand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$shiftCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/common/indentUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$autoIndent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/autoIndent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$enterAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/enterAction.js [app-ssr] (ecmascript)");
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = this && this.__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
let MoveLinesCommand = class MoveLinesCommand {
    constructor(selection, isMovingDown, autoIndent, _languageConfigurationService){
        this._languageConfigurationService = _languageConfigurationService;
        this._selection = selection;
        this._isMovingDown = isMovingDown;
        this._autoIndent = autoIndent;
        this._selectionId = null;
        this._moveEndLineSelectionShrink = false;
    }
    getEditOperations(model, builder) {
        const getLanguageId = ()=>{
            return model.getLanguageId();
        };
        const getLanguageIdAtPosition = (lineNumber, column)=>{
            return model.getLanguageIdAtPosition(lineNumber, column);
        };
        const modelLineCount = model.getLineCount();
        if (this._isMovingDown && this._selection.endLineNumber === modelLineCount) {
            this._selectionId = builder.trackSelection(this._selection);
            return;
        }
        if (!this._isMovingDown && this._selection.startLineNumber === 1) {
            this._selectionId = builder.trackSelection(this._selection);
            return;
        }
        this._moveEndPositionDown = false;
        let s = this._selection;
        if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
            this._moveEndPositionDown = true;
            s = s.setEndPosition(s.endLineNumber - 1, model.getLineMaxColumn(s.endLineNumber - 1));
        }
        const { tabSize, indentSize, insertSpaces } = model.getOptions();
        const indentConverter = this.buildIndentConverter(tabSize, indentSize, insertSpaces);
        if (s.startLineNumber === s.endLineNumber && model.getLineMaxColumn(s.startLineNumber) === 1) {
            // Current line is empty
            const lineNumber = s.startLineNumber;
            const otherLineNumber = this._isMovingDown ? lineNumber + 1 : lineNumber - 1;
            if (model.getLineMaxColumn(otherLineNumber) === 1) {
                // Other line number is empty too, so no editing is needed
                // Add a no-op to force running by the model
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](1, 1, 1, 1), null);
            } else {
                // Type content from other line number on line number
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](lineNumber, 1, lineNumber, 1), model.getLineContent(otherLineNumber));
                // Remove content from other line number
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](otherLineNumber, 1, otherLineNumber, model.getLineMaxColumn(otherLineNumber)), null);
            }
            // Track selection at the other line number
            s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](otherLineNumber, 1, otherLineNumber, 1);
        } else {
            let movingLineNumber;
            let movingLineText;
            if (this._isMovingDown) {
                movingLineNumber = s.endLineNumber + 1;
                movingLineText = model.getLineContent(movingLineNumber);
                // Delete line that needs to be moved
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](movingLineNumber - 1, model.getLineMaxColumn(movingLineNumber - 1), movingLineNumber, model.getLineMaxColumn(movingLineNumber)), null);
                let insertingText = movingLineText;
                if (this.shouldAutoIndent(model, s)) {
                    const movingLineMatchResult = this.matchEnterRule(model, indentConverter, tabSize, movingLineNumber, s.startLineNumber - 1);
                    // if s.startLineNumber - 1 matches onEnter rule, we still honor that.
                    if (movingLineMatchResult !== null) {
                        const oldIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(model.getLineContent(movingLineNumber));
                        const newSpaceCnt = movingLineMatchResult + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(oldIndentation, tabSize);
                        const newIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateIndent"])(newSpaceCnt, tabSize, insertSpaces);
                        insertingText = newIndentation + this.trimStart(movingLineText);
                    } else {
                        // no enter rule matches, let's check indentatin rules then.
                        const virtualModel = {
                            tokenization: {
                                getLineTokens: (lineNumber)=>{
                                    if (lineNumber === s.startLineNumber) {
                                        return model.tokenization.getLineTokens(movingLineNumber);
                                    } else {
                                        return model.tokenization.getLineTokens(lineNumber);
                                    }
                                },
                                getLanguageId,
                                getLanguageIdAtPosition
                            },
                            getLineContent: (lineNumber)=>{
                                if (lineNumber === s.startLineNumber) {
                                    return model.getLineContent(movingLineNumber);
                                } else {
                                    return model.getLineContent(lineNumber);
                                }
                            }
                        };
                        const indentOfMovingLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$autoIndent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGoodIndentForLine"])(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(movingLineNumber, 1), s.startLineNumber, indentConverter, this._languageConfigurationService);
                        if (indentOfMovingLine !== null) {
                            const oldIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(model.getLineContent(movingLineNumber));
                            const newSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(indentOfMovingLine, tabSize);
                            const oldSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(oldIndentation, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const newIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateIndent"])(newSpaceCnt, tabSize, insertSpaces);
                                insertingText = newIndentation + this.trimStart(movingLineText);
                            }
                        }
                    }
                    // add edit operations for moving line first to make sure it's executed after we make indentation change
                    // to s.startLineNumber
                    builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.startLineNumber, 1, s.startLineNumber, 1), insertingText + '\n');
                    const ret = this.matchEnterRuleMovingDown(model, indentConverter, tabSize, s.startLineNumber, movingLineNumber, insertingText);
                    // check if the line being moved before matches onEnter rules, if so let's adjust the indentation by onEnter rules.
                    if (ret !== null) {
                        if (ret !== 0) {
                            this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, ret);
                        }
                    } else {
                        // it doesn't match onEnter rules, let's check indentation rules then.
                        const virtualModel = {
                            tokenization: {
                                getLineTokens: (lineNumber)=>{
                                    if (lineNumber === s.startLineNumber) {
                                        // TODO@aiday-mar: the tokens here don't correspond exactly to the corresponding content (after indentation adjustment), have to fix this.
                                        return model.tokenization.getLineTokens(movingLineNumber);
                                    } else if (lineNumber >= s.startLineNumber + 1 && lineNumber <= s.endLineNumber + 1) {
                                        return model.tokenization.getLineTokens(lineNumber - 1);
                                    } else {
                                        return model.tokenization.getLineTokens(lineNumber);
                                    }
                                },
                                getLanguageId,
                                getLanguageIdAtPosition
                            },
                            getLineContent: (lineNumber)=>{
                                if (lineNumber === s.startLineNumber) {
                                    return insertingText;
                                } else if (lineNumber >= s.startLineNumber + 1 && lineNumber <= s.endLineNumber + 1) {
                                    return model.getLineContent(lineNumber - 1);
                                } else {
                                    return model.getLineContent(lineNumber);
                                }
                            }
                        };
                        const newIndentatOfMovingBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$autoIndent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGoodIndentForLine"])(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(movingLineNumber, 1), s.startLineNumber + 1, indentConverter, this._languageConfigurationService);
                        if (newIndentatOfMovingBlock !== null) {
                            const oldIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(model.getLineContent(s.startLineNumber));
                            const newSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(newIndentatOfMovingBlock, tabSize);
                            const oldSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(oldIndentation, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const spaceCntOffset = newSpaceCnt - oldSpaceCnt;
                                this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, spaceCntOffset);
                            }
                        }
                    }
                } else {
                    // Insert line that needs to be moved before
                    builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.startLineNumber, 1, s.startLineNumber, 1), insertingText + '\n');
                }
            } else {
                movingLineNumber = s.startLineNumber - 1;
                movingLineText = model.getLineContent(movingLineNumber);
                // Delete line that needs to be moved
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](movingLineNumber, 1, movingLineNumber + 1, 1), null);
                // Insert line that needs to be moved after
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber, model.getLineMaxColumn(s.endLineNumber)), '\n' + movingLineText);
                if (this.shouldAutoIndent(model, s)) {
                    const virtualModel = {
                        tokenization: {
                            getLineTokens: (lineNumber)=>{
                                if (lineNumber === movingLineNumber) {
                                    return model.tokenization.getLineTokens(s.startLineNumber);
                                } else {
                                    return model.tokenization.getLineTokens(lineNumber);
                                }
                            },
                            getLanguageId,
                            getLanguageIdAtPosition
                        },
                        getLineContent: (lineNumber)=>{
                            if (lineNumber === movingLineNumber) {
                                return model.getLineContent(s.startLineNumber);
                            } else {
                                return model.getLineContent(lineNumber);
                            }
                        }
                    };
                    const ret = this.matchEnterRule(model, indentConverter, tabSize, s.startLineNumber, s.startLineNumber - 2);
                    // check if s.startLineNumber - 2 matches onEnter rules, if so adjust the moving block by onEnter rules.
                    if (ret !== null) {
                        if (ret !== 0) {
                            this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, ret);
                        }
                    } else {
                        // it doesn't match any onEnter rule, let's check indentation rules then.
                        const indentOfFirstLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$autoIndent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGoodIndentForLine"])(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(s.startLineNumber, 1), movingLineNumber, indentConverter, this._languageConfigurationService);
                        if (indentOfFirstLine !== null) {
                            // adjust the indentation of the moving block
                            const oldIndent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(model.getLineContent(s.startLineNumber));
                            const newSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(indentOfFirstLine, tabSize);
                            const oldSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(oldIndent, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const spaceCntOffset = newSpaceCnt - oldSpaceCnt;
                                this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, spaceCntOffset);
                            }
                        }
                    }
                }
            }
        }
        this._selectionId = builder.trackSelection(s);
    }
    buildIndentConverter(tabSize, indentSize, insertSpaces) {
        return {
            shiftIndent: (indentation)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$shiftCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShiftCommand"].shiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            },
            unshiftIndent: (indentation)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$shiftCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShiftCommand"].unshiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            }
        };
    }
    parseEnterResult(model, indentConverter, tabSize, line, enter) {
        if (enter) {
            let enterPrefix = enter.indentation;
            if (enter.indentAction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndentAction"].None) {
                enterPrefix = enter.indentation + enter.appendText;
            } else if (enter.indentAction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndentAction"].Indent) {
                enterPrefix = enter.indentation + enter.appendText;
            } else if (enter.indentAction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndentAction"].IndentOutdent) {
                enterPrefix = enter.indentation;
            } else if (enter.indentAction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndentAction"].Outdent) {
                enterPrefix = indentConverter.unshiftIndent(enter.indentation) + enter.appendText;
            }
            const movingLineText = model.getLineContent(line);
            if (this.trimStart(movingLineText).indexOf(this.trimStart(enterPrefix)) >= 0) {
                const oldIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(model.getLineContent(line));
                let newIndentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(enterPrefix);
                const indentMetadataOfMovelingLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$autoIndent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndentMetadata"])(model, line, this._languageConfigurationService);
                if (indentMetadataOfMovelingLine !== null && indentMetadataOfMovelingLine & 2 /* IndentConsts.DECREASE_MASK */ ) {
                    newIndentation = indentConverter.unshiftIndent(newIndentation);
                }
                const newSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(newIndentation, tabSize);
                const oldSpaceCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(oldIndentation, tabSize);
                return newSpaceCnt - oldSpaceCnt;
            }
        }
        return null;
    }
    /**
     *
     * @param model
     * @param indentConverter
     * @param tabSize
     * @param line the line moving down
     * @param futureAboveLineNumber the line which will be at the `line` position
     * @param futureAboveLineText
     */ matchEnterRuleMovingDown(model, indentConverter, tabSize, line, futureAboveLineNumber, futureAboveLineText) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lastNonWhitespaceIndex"])(futureAboveLineText) >= 0) {
            // break
            const maxColumn = model.getLineMaxColumn(futureAboveLineNumber);
            const enter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$enterAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnterAction"])(this._autoIndent, model, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](futureAboveLineNumber, maxColumn, futureAboveLineNumber, maxColumn), this._languageConfigurationService);
            return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
        } else {
            // go upwards, starting from `line - 1`
            let validPrecedingLine = line - 1;
            while(validPrecedingLine >= 1){
                const lineContent = model.getLineContent(validPrecedingLine);
                const nonWhitespaceIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lastNonWhitespaceIndex"])(lineContent);
                if (nonWhitespaceIdx >= 0) {
                    break;
                }
                validPrecedingLine--;
            }
            if (validPrecedingLine < 1 || line > model.getLineCount()) {
                return null;
            }
            const maxColumn = model.getLineMaxColumn(validPrecedingLine);
            const enter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$enterAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnterAction"])(this._autoIndent, model, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](validPrecedingLine, maxColumn, validPrecedingLine, maxColumn), this._languageConfigurationService);
            return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
        }
    }
    matchEnterRule(model, indentConverter, tabSize, line, oneLineAbove, previousLineText) {
        let validPrecedingLine = oneLineAbove;
        while(validPrecedingLine >= 1){
            // ship empty lines as empty lines just inherit indentation
            let lineContent;
            if (validPrecedingLine === oneLineAbove && previousLineText !== undefined) {
                lineContent = previousLineText;
            } else {
                lineContent = model.getLineContent(validPrecedingLine);
            }
            const nonWhitespaceIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lastNonWhitespaceIndex"])(lineContent);
            if (nonWhitespaceIdx >= 0) {
                break;
            }
            validPrecedingLine--;
        }
        if (validPrecedingLine < 1 || line > model.getLineCount()) {
            return null;
        }
        const maxColumn = model.getLineMaxColumn(validPrecedingLine);
        const enter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$enterAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnterAction"])(this._autoIndent, model, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](validPrecedingLine, maxColumn, validPrecedingLine, maxColumn), this._languageConfigurationService);
        return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
    }
    trimStart(str) {
        return str.replace(/^\s+/, '');
    }
    shouldAutoIndent(model, selection) {
        if (this._autoIndent < 4 /* EditorAutoIndentStrategy.Full */ ) {
            return false;
        }
        // if it's not easy to tokenize, we stop auto indent.
        if (!model.tokenization.isCheapToTokenize(selection.startLineNumber)) {
            return false;
        }
        const languageAtSelectionStart = model.getLanguageIdAtPosition(selection.startLineNumber, 1);
        const languageAtSelectionEnd = model.getLanguageIdAtPosition(selection.endLineNumber, 1);
        if (languageAtSelectionStart !== languageAtSelectionEnd) {
            return false;
        }
        if (this._languageConfigurationService.getLanguageConfiguration(languageAtSelectionStart).indentRulesSupport === null) {
            return false;
        }
        return true;
    }
    getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, offset) {
        for(let i = s.startLineNumber; i <= s.endLineNumber; i++){
            const lineContent = model.getLineContent(i);
            const originalIndent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(lineContent);
            const originalSpacesCnt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpaceCnt"])(originalIndent, tabSize);
            const newSpacesCnt = originalSpacesCnt + offset;
            const newIndent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$indentation$2f$common$2f$indentUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateIndent"])(newSpacesCnt, tabSize, insertSpaces);
            if (newIndent !== originalIndent) {
                builder.addEditOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](i, 1, i, originalIndent.length + 1), newIndent);
                if (i === s.endLineNumber && s.endColumn <= originalIndent.length + 1 && newIndent === '') {
                    // as users select part of the original indent white spaces
                    // when we adjust the indentation of endLine, we should adjust the cursor position as well.
                    this._moveEndLineSelectionShrink = true;
                }
            }
        }
    }
    computeCursorState(model, helper) {
        let result = helper.getTrackedSelection(this._selectionId);
        if (this._moveEndPositionDown) {
            result = result.setEndPosition(result.endLineNumber + 1, 1);
        }
        if (this._moveEndLineSelectionShrink && result.startLineNumber < result.endLineNumber) {
            result = result.setEndPosition(result.endLineNumber, 2);
        }
        return result;
    }
};
MoveLinesCommand = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageConfigurationService"])
], MoveLinesCommand);
;
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/sortLinesCommand.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "SortLinesCommand": (()=>SortLinesCommand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
;
;
class SortLinesCommand {
    static{
        this._COLLATOR = null;
    }
    static getCollator() {
        if (!SortLinesCommand._COLLATOR) {
            SortLinesCommand._COLLATOR = new Intl.Collator();
        }
        return SortLinesCommand._COLLATOR;
    }
    constructor(selection, descending){
        this.selection = selection;
        this.descending = descending;
        this.selectionId = null;
    }
    getEditOperations(model, builder) {
        const op = sortLines(model, this.selection, this.descending);
        if (op) {
            builder.addEditOperation(op.range, op.text);
        }
        this.selectionId = builder.trackSelection(this.selection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this.selectionId);
    }
    static canRun(model, selection, descending) {
        if (model === null) {
            return false;
        }
        const data = getSortData(model, selection, descending);
        if (!data) {
            return false;
        }
        for(let i = 0, len = data.before.length; i < len; i++){
            if (data.before[i] !== data.after[i]) {
                return true;
            }
        }
        return false;
    }
}
function getSortData(model, selection, descending) {
    const startLineNumber = selection.startLineNumber;
    let endLineNumber = selection.endLineNumber;
    if (selection.endColumn === 1) {
        endLineNumber--;
    }
    // Nothing to sort if user didn't select anything.
    if (startLineNumber >= endLineNumber) {
        return null;
    }
    const linesToSort = [];
    // Get the contents of the selection to be sorted.
    for(let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++){
        linesToSort.push(model.getLineContent(lineNumber));
    }
    let sorted = linesToSort.slice(0);
    sorted.sort(SortLinesCommand.getCollator().compare);
    // If descending, reverse the order.
    if (descending === true) {
        sorted = sorted.reverse();
    }
    return {
        startLineNumber: startLineNumber,
        endLineNumber: endLineNumber,
        before: linesToSort,
        after: sorted
    };
}
/**
 * Generate commands for sorting lines on a model.
 */ function sortLines(model, selection, descending) {
    const data = getSortData(model, selection, descending);
    if (!data) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](data.startLineNumber, 1, data.endLineNumber, model.getLineMaxColumn(data.endLineNumber)), data.after.join('\n'));
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AbstractCaseAction": (()=>AbstractCaseAction),
    "AbstractDeleteAllToBoundaryAction": (()=>AbstractDeleteAllToBoundaryAction),
    "AbstractSortLinesAction": (()=>AbstractSortLinesAction),
    "CamelCaseAction": (()=>CamelCaseAction),
    "DeleteAllLeftAction": (()=>DeleteAllLeftAction),
    "DeleteAllRightAction": (()=>DeleteAllRightAction),
    "DeleteDuplicateLinesAction": (()=>DeleteDuplicateLinesAction),
    "DeleteLinesAction": (()=>DeleteLinesAction),
    "DuplicateSelectionAction": (()=>DuplicateSelectionAction),
    "IndentLinesAction": (()=>IndentLinesAction),
    "InsertLineAfterAction": (()=>InsertLineAfterAction),
    "InsertLineBeforeAction": (()=>InsertLineBeforeAction),
    "JoinLinesAction": (()=>JoinLinesAction),
    "KebabCaseAction": (()=>KebabCaseAction),
    "LowerCaseAction": (()=>LowerCaseAction),
    "PascalCaseAction": (()=>PascalCaseAction),
    "SnakeCaseAction": (()=>SnakeCaseAction),
    "SortLinesAscendingAction": (()=>SortLinesAscendingAction),
    "SortLinesDescendingAction": (()=>SortLinesDescendingAction),
    "TitleCaseAction": (()=>TitleCaseAction),
    "TransposeAction": (()=>TransposeAction),
    "TrimTrailingWhitespaceAction": (()=>TrimTrailingWhitespaceAction),
    "UpperCaseAction": (()=>UpperCaseAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$replaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$trimTrailingWhitespaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/commands/trimTrailingWhitespaceCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeOperations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorTypeOperations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeEditOperations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorTypeEditOperations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$copyLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/copyLinesCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$moveLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/moveLinesCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$sortLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/sortLinesCommand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// copy lines
class AbstractCopyLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(down, opts){
        super(opts);
        this.down = down;
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections().map((selection, index)=>({
                selection,
                index,
                ignore: false
            }));
        selections.sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts(a.selection, b.selection));
        // Remove selections that would result in copying the same line
        let prev = selections[0];
        for(let i = 1; i < selections.length; i++){
            const curr = selections[i];
            if (prev.selection.endLineNumber === curr.selection.startLineNumber) {
                // these two selections would copy the same line
                if (prev.index < curr.index) {
                    // prev wins
                    curr.ignore = true;
                } else {
                    // curr wins
                    prev.ignore = true;
                    prev = curr;
                }
            }
        }
        const commands = [];
        for (const selection of selections){
            commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$copyLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyLinesCommand"](selection.selection, this.down, selection.ignore));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class CopyLinesUpAction extends AbstractCopyLinesAction {
    constructor(){
        super(false, {
            id: 'editor.action.copyLinesUpAction',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.copyUp', "Copy Line Up"),
            alias: 'Copy Line Up',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 512 /* KeyMod.Alt */  | 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ ,
                linux: {
                    primary: 2048 /* KeyMod.CtrlCmd */  | 512 /* KeyMod.Alt */  | 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menuOpts: {
                menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].MenubarSelectionMenu,
                group: '2_line',
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                    key: 'miCopyLinesUp',
                    comment: [
                        '&& denotes a mnemonic'
                    ]
                }, "&&Copy Line Up"),
                order: 1
            }
        });
    }
}
class CopyLinesDownAction extends AbstractCopyLinesAction {
    constructor(){
        super(true, {
            id: 'editor.action.copyLinesDownAction',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.copyDown', "Copy Line Down"),
            alias: 'Copy Line Down',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 512 /* KeyMod.Alt */  | 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ ,
                linux: {
                    primary: 2048 /* KeyMod.CtrlCmd */  | 512 /* KeyMod.Alt */  | 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menuOpts: {
                menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].MenubarSelectionMenu,
                group: '2_line',
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                    key: 'miCopyLinesDown',
                    comment: [
                        '&& denotes a mnemonic'
                    ]
                }, "Co&&py Line Down"),
                order: 2
            }
        });
    }
}
class DuplicateSelectionAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.duplicateSelection',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('duplicateSelection', "Duplicate Selection"),
            alias: 'Duplicate Selection',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            menuOpts: {
                menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].MenubarSelectionMenu,
                group: '2_line',
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                    key: 'miDuplicateSelection',
                    comment: [
                        '&& denotes a mnemonic'
                    ]
                }, "&&Duplicate Selection"),
                order: 5
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const commands = [];
        const selections = editor.getSelections();
        const model = editor.getModel();
        for (const selection of selections){
            if (selection.isEmpty()) {
                commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$copyLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyLinesCommand"](selection, true));
            } else {
                const insertSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn);
                commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$replaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceCommandThatSelectsText"](insertSelection, model.getValueInRange(selection)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
// move lines
class AbstractMoveLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(down, opts){
        super(opts);
        this.down = down;
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageConfigurationService"]);
        const commands = [];
        const selections = editor.getSelections() || [];
        const autoIndent = editor.getOption(12 /* EditorOption.autoIndent */ );
        for (const selection of selections){
            commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$moveLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveLinesCommand"](selection, this.down, autoIndent, languageConfigurationService));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class MoveLinesUpAction extends AbstractMoveLinesAction {
    constructor(){
        super(false, {
            id: 'editor.action.moveLinesUpAction',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.moveUp', "Move Line Up"),
            alias: 'Move Line Up',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 512 /* KeyMod.Alt */  | 16 /* KeyCode.UpArrow */ ,
                linux: {
                    primary: 512 /* KeyMod.Alt */  | 16 /* KeyCode.UpArrow */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menuOpts: {
                menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].MenubarSelectionMenu,
                group: '2_line',
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                    key: 'miMoveLinesUp',
                    comment: [
                        '&& denotes a mnemonic'
                    ]
                }, "Mo&&ve Line Up"),
                order: 3
            }
        });
    }
}
class MoveLinesDownAction extends AbstractMoveLinesAction {
    constructor(){
        super(true, {
            id: 'editor.action.moveLinesDownAction',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.moveDown', "Move Line Down"),
            alias: 'Move Line Down',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 512 /* KeyMod.Alt */  | 18 /* KeyCode.DownArrow */ ,
                linux: {
                    primary: 512 /* KeyMod.Alt */  | 18 /* KeyCode.DownArrow */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menuOpts: {
                menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].MenubarSelectionMenu,
                group: '2_line',
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                    key: 'miMoveLinesDown',
                    comment: [
                        '&& denotes a mnemonic'
                    ]
                }, "Move &&Line Down"),
                order: 4
            }
        });
    }
}
class AbstractSortLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(descending, opts){
        super(opts);
        this.descending = descending;
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        let selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            // Apply to whole document.
            selections = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()))
            ];
        }
        for (const selection of selections){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$sortLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortLinesCommand"].canRun(editor.getModel(), selection, this.descending)) {
                return;
            }
        }
        const commands = [];
        for(let i = 0, len = selections.length; i < len; i++){
            commands[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$linesOperations$2f$browser$2f$sortLinesCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortLinesCommand"](selections[i], this.descending);
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class SortLinesAscendingAction extends AbstractSortLinesAction {
    constructor(){
        super(false, {
            id: 'editor.action.sortLinesAscending',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.sortAscending', "Sort Lines Ascending"),
            alias: 'Sort Lines Ascending',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
}
class SortLinesDescendingAction extends AbstractSortLinesAction {
    constructor(){
        super(true, {
            id: 'editor.action.sortLinesDescending',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.sortDescending', "Sort Lines Descending"),
            alias: 'Sort Lines Descending',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
}
class DeleteDuplicateLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.removeDuplicateLines',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.deleteDuplicates', "Delete Duplicate Lines"),
            alias: 'Delete Duplicate Lines',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let linesDeleted = 0;
        let updateSelection = true;
        let selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            // Apply to whole document.
            selections = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()))
            ];
            updateSelection = false;
        }
        for (const selection of selections){
            const uniqueLines = new Set();
            const lines = [];
            for(let i = selection.startLineNumber; i <= selection.endLineNumber; i++){
                const line = model.getLineContent(i);
                if (uniqueLines.has(line)) {
                    continue;
                }
                lines.push(line);
                uniqueLines.add(line);
            }
            const selectionToReplace = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](selection.startLineNumber, 1, selection.endLineNumber, model.getLineMaxColumn(selection.endLineNumber));
            const adjustedSelectionStart = selection.startLineNumber - linesDeleted;
            const finalSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](adjustedSelectionStart, 1, adjustedSelectionStart + lines.length - 1, lines[lines.length - 1].length);
            edits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(selectionToReplace, lines.join('\n')));
            endCursorState.push(finalSelection);
            linesDeleted += selection.endLineNumber - selection.startLineNumber + 1 - lines.length;
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, updateSelection ? endCursorState : undefined);
        editor.pushUndoStop();
    }
}
class TrimTrailingWhitespaceAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    static{
        this.ID = 'editor.action.trimTrailingWhitespace';
    }
    constructor(){
        super({
            id: TrimTrailingWhitespaceAction.ID,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.trimTrailingWhitespace', "Trim Trailing Whitespace"),
            alias: 'Trim Trailing Whitespace',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 2048 /* KeyMod.CtrlCmd */  | 54 /* KeyCode.KeyX */ ),
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor, args) {
        let cursors = [];
        if (args.reason === 'auto-save') {
            // See https://github.com/editorconfig/editorconfig-vscode/issues/47
            // It is very convenient for the editor config extension to invoke this action.
            // So, if we get a reason:'auto-save' passed in, let's preserve cursor positions.
            cursors = (editor.getSelections() || []).map((s)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](s.positionLineNumber, s.positionColumn));
        }
        const selection = editor.getSelection();
        if (selection === null) {
            return;
        }
        const config = _accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IConfigurationService"]);
        const model = editor.getModel();
        const trimInRegexAndStrings = config.getValue('files.trimTrailingWhitespaceInRegexAndStrings', {
            overrideIdentifier: model?.getLanguageId(),
            resource: model?.uri
        });
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$trimTrailingWhitespaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrimTrailingWhitespaceCommand"](selection, cursors, trimInRegexAndStrings);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [
            command
        ]);
        editor.pushUndoStop();
    }
}
class DeleteLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.deleteLines',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.delete', "Delete Line"),
            alias: 'Delete Line',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 41 /* KeyCode.KeyK */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const ops = this._getLinesToRemove(editor);
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            // Model is empty
            return;
        }
        let linesDeleted = 0;
        const edits = [];
        const cursorState = [];
        for(let i = 0, len = ops.length; i < len; i++){
            const op = ops[i];
            let startLineNumber = op.startLineNumber;
            let endLineNumber = op.endLineNumber;
            let startColumn = 1;
            let endColumn = model.getLineMaxColumn(endLineNumber);
            if (endLineNumber < model.getLineCount()) {
                endLineNumber += 1;
                endColumn = 1;
            } else if (startLineNumber > 1) {
                startLineNumber -= 1;
                startColumn = model.getLineMaxColumn(startLineNumber);
            }
            edits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](startLineNumber, startColumn, endLineNumber, endColumn), ''));
            cursorState.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](startLineNumber - linesDeleted, op.positionColumn, startLineNumber - linesDeleted, op.positionColumn));
            linesDeleted += op.endLineNumber - op.startLineNumber + 1;
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, cursorState);
        editor.pushUndoStop();
    }
    _getLinesToRemove(editor) {
        // Construct delete operations
        const operations = editor.getSelections().map((s)=>{
            let endLineNumber = s.endLineNumber;
            if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
                endLineNumber -= 1;
            }
            return {
                startLineNumber: s.startLineNumber,
                selectionStartColumn: s.selectionStartColumn,
                endLineNumber: endLineNumber,
                positionColumn: s.positionColumn
            };
        });
        // Sort delete operations
        operations.sort((a, b)=>{
            if (a.startLineNumber === b.startLineNumber) {
                return a.endLineNumber - b.endLineNumber;
            }
            return a.startLineNumber - b.startLineNumber;
        });
        // Merge delete operations which are adjacent or overlapping
        const mergedOperations = [];
        let previousOperation = operations[0];
        for(let i = 1; i < operations.length; i++){
            if (previousOperation.endLineNumber + 1 >= operations[i].startLineNumber) {
                // Merge current operations into the previous one
                previousOperation.endLineNumber = operations[i].endLineNumber;
            } else {
                // Push previous operation
                mergedOperations.push(previousOperation);
                previousOperation = operations[i];
            }
        }
        // Push the last operation
        mergedOperations.push(previousOperation);
        return mergedOperations;
    }
}
class IndentLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.indentLines',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.indent', "Indent Line"),
            alias: 'Indent Line',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 94 /* KeyCode.BracketRight */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeOperations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeOperations"].indent(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
        editor.pushUndoStop();
    }
}
class OutdentLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.outdentLines',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.outdent', "Outdent Line"),
            alias: 'Outdent Line',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 92 /* KeyCode.BracketLeft */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreEditingCommands"].Outdent.runEditorCommand(_accessor, editor, null);
    }
}
class InsertLineBeforeAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.insertLineBefore',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.insertBefore', "Insert Line Above"),
            alias: 'Insert Line Above',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 3 /* KeyCode.Enter */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeEditOperations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterOperation"].lineInsertBefore(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class InsertLineAfterAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.insertLineAfter',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.insertAfter', "Insert Line Below"),
            alias: 'Insert Line Below',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 3 /* KeyCode.Enter */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeEditOperations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterOperation"].lineInsertAfter(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class AbstractDeleteAllToBoundaryAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const primaryCursor = editor.getSelection();
        const rangesToDelete = this._getRangesToDelete(editor);
        // merge overlapping selections
        const effectiveRanges = [];
        for(let i = 0, count = rangesToDelete.length - 1; i < count; i++){
            const range = rangesToDelete[i];
            const nextRange = rangesToDelete[i + 1];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].intersectRanges(range, nextRange) === null) {
                effectiveRanges.push(range);
            } else {
                rangesToDelete[i + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].plusRange(range, nextRange);
            }
        }
        effectiveRanges.push(rangesToDelete[rangesToDelete.length - 1]);
        const endCursorState = this._getEndCursorState(primaryCursor, effectiveRanges);
        const edits = effectiveRanges.map((range)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(range, '');
        });
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class DeleteAllLeftAction extends AbstractDeleteAllToBoundaryAction {
    constructor(){
        super({
            id: 'deleteAllLeft',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.deleteAllLeft', "Delete All Left"),
            alias: 'Delete All Left',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                primary: 0,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */  | 1 /* KeyCode.Backspace */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        let deletedLines = 0;
        rangesToDelete.forEach((range)=>{
            let endCursor;
            if (range.endColumn === 1 && deletedLines > 0) {
                const newStartLine = range.startLineNumber - deletedLines;
                endCursor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](newStartLine, range.startColumn, newStartLine, range.startColumn);
            } else {
                endCursor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
            }
            deletedLines += range.endLineNumber - range.startLineNumber;
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            } else {
                endCursorState.push(endCursor);
            }
        });
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        let rangesToDelete = selections;
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        rangesToDelete.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts);
        rangesToDelete = rangesToDelete.map((selection)=>{
            if (selection.isEmpty()) {
                if (selection.startColumn === 1) {
                    const deleteFromLine = Math.max(1, selection.startLineNumber - 1);
                    const deleteFromColumn = selection.startLineNumber === 1 ? 1 : model.getLineLength(deleteFromLine) + 1;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](deleteFromLine, deleteFromColumn, selection.startLineNumber, 1);
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](selection.startLineNumber, 1, selection.startLineNumber, selection.startColumn);
                }
            } else {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](selection.startLineNumber, 1, selection.endLineNumber, selection.endColumn);
            }
        });
        return rangesToDelete;
    }
}
class DeleteAllRightAction extends AbstractDeleteAllToBoundaryAction {
    constructor(){
        super({
            id: 'deleteAllRight',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.deleteAllRight', "Delete All Right"),
            alias: 'Delete All Right',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                primary: 0,
                mac: {
                    primary: 256 /* KeyMod.WinCtrl */  | 41 /* KeyCode.KeyK */ ,
                    secondary: [
                        2048 /* KeyMod.CtrlCmd */  | 20 /* KeyCode.Delete */ 
                    ]
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        for(let i = 0, len = rangesToDelete.length, offset = 0; i < len; i++){
            const range = rangesToDelete[i];
            const endCursor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](range.startLineNumber - offset, range.startColumn, range.startLineNumber - offset, range.startColumn);
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            } else {
                endCursorState.push(endCursor);
            }
        }
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        const rangesToDelete = selections.map((sel)=>{
            if (sel.isEmpty()) {
                const maxColumn = model.getLineMaxColumn(sel.startLineNumber);
                if (sel.startColumn === maxColumn) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](sel.startLineNumber, sel.startColumn, sel.startLineNumber + 1, 1);
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](sel.startLineNumber, sel.startColumn, sel.startLineNumber, maxColumn);
                }
            }
            return sel;
        });
        rangesToDelete.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts);
        return rangesToDelete;
    }
}
class JoinLinesAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.joinLines',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('lines.joinLines', "Join Lines"),
            alias: 'Join Lines',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 0,
                mac: {
                    primary: 256 /* KeyMod.WinCtrl */  | 40 /* KeyCode.KeyJ */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        let primaryCursor = editor.getSelection();
        if (primaryCursor === null) {
            return;
        }
        selections.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts);
        const reducedSelections = [];
        const lastSelection = selections.reduce((previousValue, currentValue)=>{
            if (previousValue.isEmpty()) {
                if (previousValue.endLineNumber === currentValue.startLineNumber) {
                    if (primaryCursor.equalsSelection(previousValue)) {
                        primaryCursor = currentValue;
                    }
                    return currentValue;
                }
                if (currentValue.startLineNumber > previousValue.endLineNumber + 1) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            } else {
                if (currentValue.startLineNumber > previousValue.endLineNumber) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            }
        });
        reducedSelections.push(lastSelection);
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let endPrimaryCursor = primaryCursor;
        let lineOffset = 0;
        for(let i = 0, len = reducedSelections.length; i < len; i++){
            const selection = reducedSelections[i];
            const startLineNumber = selection.startLineNumber;
            const startColumn = 1;
            let columnDeltaOffset = 0;
            let endLineNumber, endColumn;
            const selectionEndPositionOffset = model.getLineLength(selection.endLineNumber) - selection.endColumn;
            if (selection.isEmpty() || selection.startLineNumber === selection.endLineNumber) {
                const position = selection.getStartPosition();
                if (position.lineNumber < model.getLineCount()) {
                    endLineNumber = startLineNumber + 1;
                    endColumn = model.getLineMaxColumn(endLineNumber);
                } else {
                    endLineNumber = position.lineNumber;
                    endColumn = model.getLineMaxColumn(position.lineNumber);
                }
            } else {
                endLineNumber = selection.endLineNumber;
                endColumn = model.getLineMaxColumn(endLineNumber);
            }
            let trimmedLinesContent = model.getLineContent(startLineNumber);
            for(let i = startLineNumber + 1; i <= endLineNumber; i++){
                const lineText = model.getLineContent(i);
                const firstNonWhitespaceIdx = model.getLineFirstNonWhitespaceColumn(i);
                if (firstNonWhitespaceIdx >= 1) {
                    let insertSpace = true;
                    if (trimmedLinesContent === '') {
                        insertSpace = false;
                    }
                    if (insertSpace && (trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === ' ' || trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === '\t')) {
                        insertSpace = false;
                        trimmedLinesContent = trimmedLinesContent.replace(/[\s\uFEFF\xA0]+$/g, ' ');
                    }
                    const lineTextWithoutIndent = lineText.substr(firstNonWhitespaceIdx - 1);
                    trimmedLinesContent += (insertSpace ? ' ' : '') + lineTextWithoutIndent;
                    if (insertSpace) {
                        columnDeltaOffset = lineTextWithoutIndent.length + 1;
                    } else {
                        columnDeltaOffset = lineTextWithoutIndent.length;
                    }
                } else {
                    columnDeltaOffset = 0;
                }
            }
            const deleteSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](startLineNumber, startColumn, endLineNumber, endColumn);
            if (!deleteSelection.isEmpty()) {
                let resultSelection;
                if (selection.isEmpty()) {
                    edits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(deleteSelection, trimmedLinesContent));
                    resultSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](deleteSelection.startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1, startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1);
                } else {
                    if (selection.startLineNumber === selection.endLineNumber) {
                        edits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](selection.startLineNumber - lineOffset, selection.startColumn, selection.endLineNumber - lineOffset, selection.endColumn);
                    } else {
                        edits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](selection.startLineNumber - lineOffset, selection.startColumn, selection.startLineNumber - lineOffset, trimmedLinesContent.length - selectionEndPositionOffset);
                    }
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].intersectRanges(deleteSelection, primaryCursor) !== null) {
                    endPrimaryCursor = resultSelection;
                } else {
                    endCursorState.push(resultSelection);
                }
            }
            lineOffset += deleteSelection.endLineNumber - deleteSelection.startLineNumber;
        }
        endCursorState.unshift(endPrimaryCursor);
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class TransposeAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.transpose',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transpose', "Transpose Characters around the Cursor"),
            alias: 'Transpose Characters around the Cursor',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const commands = [];
        for(let i = 0, len = selections.length; i < len; i++){
            const selection = selections[i];
            if (!selection.isEmpty()) {
                continue;
            }
            const cursor = selection.getStartPosition();
            const maxColumn = model.getLineMaxColumn(cursor.lineNumber);
            if (cursor.column >= maxColumn) {
                if (cursor.lineNumber === model.getLineCount()) {
                    continue;
                }
                // The cursor is at the end of current line and current line is not empty
                // then we transpose the character before the cursor and the line break if there is any following line.
                const deleteSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$replaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceCommand"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1), chars));
            } else {
                const deleteSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber, cursor.column + 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$commands$2f$replaceCommand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceCommandThatPreservesSelection"](deleteSelection, chars, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](cursor.lineNumber, cursor.column + 1, cursor.lineNumber, cursor.column + 1)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class AbstractCaseAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const wordSeparators = editor.getOption(132 /* EditorOption.wordSeparators */ );
        const textEdits = [];
        for (const selection of selections){
            if (selection.isEmpty()) {
                const cursor = selection.getStartPosition();
                const word = editor.getConfiguredWordAtPosition(cursor);
                if (!word) {
                    continue;
                }
                const wordRange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](cursor.lineNumber, word.startColumn, cursor.lineNumber, word.endColumn);
                const text = model.getValueInRange(wordRange);
                textEdits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(wordRange, this._modifyText(text, wordSeparators)));
            } else {
                const text = model.getValueInRange(selection);
                textEdits.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(selection, this._modifyText(text, wordSeparators)));
            }
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, textEdits);
        editor.pushUndoStop();
    }
}
class UpperCaseAction extends AbstractCaseAction {
    constructor(){
        super({
            id: 'editor.action.transformToUppercase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToUppercase', "Transform to Uppercase"),
            alias: 'Transform to Uppercase',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleUpperCase();
    }
}
class LowerCaseAction extends AbstractCaseAction {
    constructor(){
        super({
            id: 'editor.action.transformToLowercase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToLowercase', "Transform to Lowercase"),
            alias: 'Transform to Lowercase',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleLowerCase();
    }
}
class BackwardsCompatibleRegExp {
    constructor(_pattern, _flags){
        this._pattern = _pattern;
        this._flags = _flags;
        this._actual = null;
        this._evaluated = false;
    }
    get() {
        if (!this._evaluated) {
            this._evaluated = true;
            try {
                this._actual = new RegExp(this._pattern, this._flags);
            } catch (err) {
            // this browser does not support this regular expression
            }
        }
        return this._actual;
    }
    isSupported() {
        return this.get() !== null;
    }
}
class TitleCaseAction extends AbstractCaseAction {
    static{
        this.titleBoundary = new BackwardsCompatibleRegExp('(^|[^\\p{L}\\p{N}\']|((^|\\P{L})\'))\\p{L}', 'gmu');
    }
    constructor(){
        super({
            id: 'editor.action.transformToTitlecase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToTitlecase', "Transform to Title Case"),
            alias: 'Transform to Title Case',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        const titleBoundary = TitleCaseAction.titleBoundary.get();
        if (!titleBoundary) {
            // cannot support this
            return text;
        }
        return text.toLocaleLowerCase().replace(titleBoundary, (b)=>b.toLocaleUpperCase());
    }
}
class SnakeCaseAction extends AbstractCaseAction {
    static{
        this.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu');
    }
    static{
        this.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})', 'gmu');
    }
    constructor(){
        super({
            id: 'editor.action.transformToSnakecase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToSnakecase', "Transform to Snake Case"),
            alias: 'Transform to Snake Case',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        const caseBoundary = SnakeCaseAction.caseBoundary.get();
        const singleLetters = SnakeCaseAction.singleLetters.get();
        if (!caseBoundary || !singleLetters) {
            // cannot support this
            return text;
        }
        return text.replace(caseBoundary, '$1_$2').replace(singleLetters, '$1_$2$3').toLocaleLowerCase();
    }
}
class CamelCaseAction extends AbstractCaseAction {
    static{
        this.wordBoundary = new BackwardsCompatibleRegExp('[_\\s-]', 'gm');
    }
    constructor(){
        super({
            id: 'editor.action.transformToCamelcase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToCamelcase', "Transform to Camel Case"),
            alias: 'Transform to Camel Case',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        const wordBoundary = CamelCaseAction.wordBoundary.get();
        if (!wordBoundary) {
            // cannot support this
            return text;
        }
        const words = text.split(wordBoundary);
        const firstWord = words.shift();
        return firstWord + words.map((word)=>word.substring(0, 1).toLocaleUpperCase() + word.substring(1)).join('');
    }
}
class PascalCaseAction extends AbstractCaseAction {
    static{
        this.wordBoundary = new BackwardsCompatibleRegExp('[_\\s-]', 'gm');
    }
    static{
        this.wordBoundaryToMaintain = new BackwardsCompatibleRegExp('(?<=\\.)', 'gm');
    }
    constructor(){
        super({
            id: 'editor.action.transformToPascalcase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToPascalcase', "Transform to Pascal Case"),
            alias: 'Transform to Pascal Case',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, wordSeparators) {
        const wordBoundary = PascalCaseAction.wordBoundary.get();
        const wordBoundaryToMaintain = PascalCaseAction.wordBoundaryToMaintain.get();
        if (!wordBoundary || !wordBoundaryToMaintain) {
            // cannot support this
            return text;
        }
        const wordsWithMaintainBoundaries = text.split(wordBoundaryToMaintain);
        const words = wordsWithMaintainBoundaries.map((word)=>word.split(wordBoundary)).flat();
        return words.map((word)=>word.substring(0, 1).toLocaleUpperCase() + word.substring(1)).join('');
    }
}
class KebabCaseAction extends AbstractCaseAction {
    static isSupported() {
        const areAllRegexpsSupported = [
            this.caseBoundary,
            this.singleLetters,
            this.underscoreBoundary
        ].every((regexp)=>regexp.isSupported());
        return areAllRegexpsSupported;
    }
    static{
        this.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu');
    }
    static{
        this.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu}\\p{Ll})', 'gmu');
    }
    static{
        this.underscoreBoundary = new BackwardsCompatibleRegExp('(\\S)(_)(\\S)', 'gm');
    }
    constructor(){
        super({
            id: 'editor.action.transformToKebabcase',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('editor.transformToKebabcase', 'Transform to Kebab Case'),
            alias: 'Transform to Kebab Case',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    _modifyText(text, _) {
        const caseBoundary = KebabCaseAction.caseBoundary.get();
        const singleLetters = KebabCaseAction.singleLetters.get();
        const underscoreBoundary = KebabCaseAction.underscoreBoundary.get();
        if (!caseBoundary || !singleLetters || !underscoreBoundary) {
            // one or more regexps aren't supported
            return text;
        }
        return text.replace(underscoreBoundary, '$1-$3').replace(caseBoundary, '$1-$2').replace(singleLetters, '$1-$2').toLocaleLowerCase();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(CopyLinesUpAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(CopyLinesDownAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(DuplicateSelectionAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(MoveLinesUpAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(MoveLinesDownAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(SortLinesAscendingAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(SortLinesDescendingAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(DeleteDuplicateLinesAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(TrimTrailingWhitespaceAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(DeleteLinesAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(IndentLinesAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(OutdentLinesAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(InsertLineBeforeAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(InsertLineAfterAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(DeleteAllLeftAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(DeleteAllRightAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(JoinLinesAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(TransposeAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(UpperCaseAction);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(LowerCaseAction);
if (SnakeCaseAction.caseBoundary.isSupported() && SnakeCaseAction.singleLetters.isSupported()) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(SnakeCaseAction);
}
if (CamelCaseAction.wordBoundary.isSupported()) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(CamelCaseAction);
}
if (PascalCaseAction.wordBoundary.isSupported()) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(PascalCaseAction);
}
if (TitleCaseAction.titleBoundary.isSupported()) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(TitleCaseAction);
}
if (KebabCaseAction.isSupported()) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(KebabCaseAction);
}
}}),

};

//# sourceMappingURL=dd92d_modules_monaco-editor_esm_vs_editor_contrib_linesOperations_browser_35ee3489._.js.map