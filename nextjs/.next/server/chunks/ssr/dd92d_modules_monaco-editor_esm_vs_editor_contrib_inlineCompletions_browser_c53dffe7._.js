module.exports = {

"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commandIds.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "inlineSuggestCommitId": (()=>inlineSuggestCommitId),
    "showNextInlineSuggestionActionId": (()=>showNextInlineSuggestionActionId),
    "showPreviousInlineSuggestionActionId": (()=>showPreviousInlineSuggestionActionId)
});
const inlineSuggestCommitId = 'editor.action.inlineSuggest.commit';
const showPreviousInlineSuggestionActionId = 'editor.action.inlineSuggest.showPrevious';
const showNextInlineSuggestionActionId = 'editor.action.inlineSuggest.showNext';
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CustomizedMenuWorkbenchToolBar": (()=>CustomizedMenuWorkbenchToolBar),
    "InlineCompletionsHintsWidget": (()=>InlineCompletionsHintsWidget),
    "InlineSuggestionHintsContentWidget": (()=>InlineSuggestionHintsContentWidget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/async.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commandIds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/browser/toolbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js [app-ssr] (ecmascript)");
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
var InlineSuggestionHintsContentWidget_1;
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
;
;
;
;
;
;
;
;
let InlineCompletionsHintsWidget = class InlineCompletionsHintsWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(editor, model, instantiationService){
        super();
        this.editor = editor;
        this.model = model;
        this.instantiationService = instantiationService;
        this.alwaysShowToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(62 /* EditorOption.inlineSuggest */ ).showToolbar === 'always');
        this.sessionPosition = undefined;
        this.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const ghostText = this.model.read(reader)?.primaryGhostText.read(reader);
            if (!this.alwaysShowToolbar.read(reader) || !ghostText || ghostText.parts.length === 0) {
                this.sessionPosition = undefined;
                return null;
            }
            const firstColumn = ghostText.parts[0].column;
            if (this.sessionPosition && this.sessionPosition.lineNumber !== ghostText.lineNumber) {
                this.sessionPosition = undefined;
            }
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](ghostText.lineNumber, Math.min(firstColumn, this.sessionPosition?.column ?? Number.MAX_SAFE_INTEGER));
            this.sessionPosition = position;
            return position;
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorunWithStore"])((reader, store)=>{
            /** @description setup content widget */ const model = this.model.read(reader);
            if (!model || !this.alwaysShowToolbar.read(reader)) {
                return;
            }
            const contentWidgetValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedWithStore"])((reader, store)=>{
                const contentWidget = store.add(this.instantiationService.createInstance(InlineSuggestionHintsContentWidget, this.editor, true, this.position, model.selectedInlineCompletionIndex, model.inlineCompletionsCount, model.activeCommands));
                editor.addContentWidget(contentWidget);
                store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>editor.removeContentWidget(contentWidget)));
                store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
                    /** @description request explicit */ const position = this.position.read(reader);
                    if (!position) {
                        return;
                    }
                    if (model.lastTriggerKind.read(reader) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Explicit) {
                        model.triggerExplicitly();
                    }
                }));
                return contentWidget;
            });
            const hadPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedObservableWithCache"])(this, (reader, lastValue)=>!!this.position.read(reader) || !!lastValue);
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
                if (hadPosition.read(reader)) {
                    contentWidgetValue.read(reader);
                }
            }));
        }));
    }
};
InlineCompletionsHintsWidget = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"])
], InlineCompletionsHintsWidget);
;
const inlineSuggestionHintsNextIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerIcon"])('inline-suggestion-hints-next', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Codicon"].chevronRight, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('parameterHintsNextIcon', 'Icon for show next parameter hint.'));
const inlineSuggestionHintsPreviousIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerIcon"])('inline-suggestion-hints-previous', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Codicon"].chevronLeft, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('parameterHintsPreviousIcon', 'Icon for show previous parameter hint.'));
let InlineSuggestionHintsContentWidget = class InlineSuggestionHintsContentWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineSuggestionHintsContentWidget_1 = this;
    }
    static{
        this._dropDownVisible = false;
    }
    static get dropDownVisible() {
        return this._dropDownVisible;
    }
    static{
        this.id = 0;
    }
    createCommandAction(commandId, label, iconClassName) {
        const action = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"](commandId, label, iconClassName, true, ()=>this._commandService.executeCommand(commandId));
        const kb = this.keybindingService.lookupKeybinding(commandId, this._contextKeyService);
        let tooltip = label;
        if (kb) {
            tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                key: 'content',
                comment: [
                    'A label',
                    'A keybinding'
                ]
            }, '{0} ({1})', label, kb.getLabel());
        }
        action.tooltip = tooltip;
        return action;
    }
    constructor(editor, withBorder, _position, _currentSuggestionIdx, _suggestionCount, _extraCommands, _commandService, instantiationService, keybindingService, _contextKeyService, _menuService){
        super();
        this.editor = editor;
        this.withBorder = withBorder;
        this._position = _position;
        this._currentSuggestionIdx = _currentSuggestionIdx;
        this._suggestionCount = _suggestionCount;
        this._extraCommands = _extraCommands;
        this._commandService = _commandService;
        this.keybindingService = keybindingService;
        this._contextKeyService = _contextKeyService;
        this._menuService = _menuService;
        this.id = `InlineSuggestionHintsContentWidget${InlineSuggestionHintsContentWidget_1.id++}`;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this.nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div.inlineSuggestionsHints', {
            className: this.withBorder ? '.withBorder' : ''
        }, [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div@toolBar')
        ]);
        this.previousAction = this.createCommandAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showPreviousInlineSuggestionActionId"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('previous', 'Previous'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(inlineSuggestionHintsPreviousIcon));
        this.availableSuggestionCountAction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"]('inlineSuggestionHints.availableSuggestionCount', '', undefined, false);
        this.nextAction = this.createCommandAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showNextInlineSuggestionActionId"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('next', 'Next'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(inlineSuggestionHintsNextIcon));
        // TODO@hediet: deprecate MenuId.InlineCompletionsActions
        this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineCompletionsActions, this._contextKeyService));
        this.clearAvailableSuggestionCountLabelDebounced = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            this.availableSuggestionCountAction.label = '';
        }, 100));
        this.disableButtonsDebounced = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            this.previousAction.enabled = this.nextAction.enabled = false;
        }, 100));
        this.toolBar = this._register(instantiationService.createInstance(CustomizedMenuWorkbenchToolBar, this.nodes.toolBar, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineSuggestionToolbar, {
            menuOptions: {
                renderShortTitle: true
            },
            toolbarOptions: {
                primaryGroup: (g)=>g.startsWith('primary')
            },
            actionViewItemProvider: (action, options)=>{
                if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
                    return instantiationService.createInstance(StatusBarViewItem, action, undefined);
                }
                if (action === this.availableSuggestionCountAction) {
                    const a = new ActionViewItemWithClassName(undefined, action, {
                        label: true,
                        icon: false
                    });
                    a.setClass('availableSuggestionCount');
                    return a;
                }
                return undefined;
            },
            telemetrySource: 'InlineSuggestionToolbar'
        }));
        this.toolBar.setPrependedPrimaryActions([
            this.previousAction,
            this.availableSuggestionCountAction,
            this.nextAction
        ]);
        this._register(this.toolBar.onDidChangeDropdownVisibility((e)=>{
            InlineSuggestionHintsContentWidget_1._dropDownVisible = e;
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update position */ this._position.read(reader);
            this.editor.layoutContentWidget(this);
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description counts */ const suggestionCount = this._suggestionCount.read(reader);
            const currentSuggestionIdx = this._currentSuggestionIdx.read(reader);
            if (suggestionCount !== undefined) {
                this.clearAvailableSuggestionCountLabelDebounced.cancel();
                this.availableSuggestionCountAction.label = `${currentSuggestionIdx + 1}/${suggestionCount}`;
            } else {
                this.clearAvailableSuggestionCountLabelDebounced.schedule();
            }
            if (suggestionCount !== undefined && suggestionCount > 1) {
                this.disableButtonsDebounced.cancel();
                this.previousAction.enabled = this.nextAction.enabled = true;
            } else {
                this.disableButtonsDebounced.schedule();
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description extra commands */ const extraCommands = this._extraCommands.read(reader);
            const extraActions = extraCommands.map((c)=>({
                    class: undefined,
                    id: c.id,
                    enabled: true,
                    tooltip: c.tooltip || '',
                    label: c.title,
                    run: (event)=>{
                        return this._commandService.executeCommand(c.id);
                    }
                }));
            for (const [_, group] of this.inlineCompletionsActionsMenus.getActions()){
                for (const action of group){
                    if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
                        extraActions.push(action);
                    }
                }
            }
            if (extraActions.length > 0) {
                extraActions.unshift(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"]());
            }
            this.toolBar.setAdditionalSecondaryActions(extraActions);
        }));
    }
    getId() {
        return this.id;
    }
    getDomNode() {
        return this.nodes.root;
    }
    getPosition() {
        return {
            position: this._position.get(),
            preference: [
                1 /* ContentWidgetPositionPreference.ABOVE */ ,
                2 /* ContentWidgetPositionPreference.BELOW */ 
            ],
            positionAffinity: 3 /* PositionAffinity.LeftOfInjectedText */ 
        };
    }
};
InlineSuggestionHintsContentWidget = InlineSuggestionHintsContentWidget_1 = __decorate([
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(10, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMenuService"])
], InlineSuggestionHintsContentWidget);
;
class ActionViewItemWithClassName extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionViewItem"] {
    constructor(){
        super(...arguments);
        this._className = undefined;
    }
    setClass(className) {
        this._className = className;
    }
    render(container) {
        super.render(container);
        if (this._className) {
            container.classList.add(this._className);
        }
    }
    updateTooltip() {
    // NOOP, disable tooltip
    }
}
class StatusBarViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuEntryActionViewItem"] {
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            const div = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div.keybinding').root;
            const k = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeybindingLabel"](div, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS"], {
                disableTitle: true,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unthemedKeybindingLabelOptions"]
            }));
            k.set(kb);
            this.label.textContent = this._action.label;
            this.label.appendChild(div);
            this.label.classList.add('inlineSuggestionStatusBarItemLabel');
        }
    }
    updateTooltip() {
    // NOOP, disable tooltip
    }
}
let CustomizedMenuWorkbenchToolBar = class CustomizedMenuWorkbenchToolBar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkbenchToolBar"] {
    constructor(container, menuId, options2, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService){
        super(container, {
            resetMenu: menuId,
            ...options2
        }, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService);
        this.menuId = menuId;
        this.options2 = options2;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, {
            emitEventsForSubmenuChanges: true
        }));
        this.additionalActions = [];
        this.prependedPrimaryActions = [];
        this._store.add(this.menu.onDidChange(()=>this.updateToolbar()));
        this.updateToolbar();
    }
    updateToolbar() {
        const primary = [];
        const secondary = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAndFillInActionBarActions"])(this.menu, this.options2?.menuOptions, {
            primary,
            secondary
        }, this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
        secondary.push(...this.additionalActions);
        primary.unshift(...this.prependedPrimaryActions);
        this.setActions(primary, secondary);
    }
    setPrependedPrimaryActions(actions) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equals"])(this.prependedPrimaryActions, actions, (a, b)=>a === b)) {
            return;
        }
        this.prependedPrimaryActions = actions;
        this.updateToolbar();
    }
    setAdditionalSecondaryActions(actions) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equals"])(this.additionalActions, actions, (a, b)=>a === b)) {
            return;
        }
        this.additionalActions = actions;
        this.updateToolbar();
    }
};
CustomizedMenuWorkbenchToolBar = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITelemetryService"])
], CustomizedMenuWorkbenchToolBar);
;
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionContextKeys.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionContextKeys": (()=>InlineCompletionContextKeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$cursorColumns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/cursorColumns.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
class InlineCompletionContextKeys extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        this.inlineSuggestionVisible = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"]('inlineSuggestionVisible', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('inlineSuggestionVisible', "Whether an inline suggestion is visible"));
    }
    static{
        this.inlineSuggestionHasIndentation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"]('inlineSuggestionHasIndentation', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('inlineSuggestionHasIndentation', "Whether the inline suggestion starts with whitespace"));
    }
    static{
        this.inlineSuggestionHasIndentationLessThanTabSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"]('inlineSuggestionHasIndentationLessThanTabSize', true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('inlineSuggestionHasIndentationLessThanTabSize', "Whether the inline suggestion starts with whitespace that is less than what would be inserted by tab"));
    }
    static{
        this.suppressSuggestions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"]('inlineSuggestionSuppressSuggestions', undefined, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('suppressSuggestions', "Whether suggestions should be suppressed for the current suggestion"));
    }
    constructor(contextKeyService, model){
        super();
        this.contextKeyService = contextKeyService;
        this.model = model;
        this.inlineCompletionVisible = InlineCompletionContextKeys.inlineSuggestionVisible.bindTo(this.contextKeyService);
        this.inlineCompletionSuggestsIndentation = InlineCompletionContextKeys.inlineSuggestionHasIndentation.bindTo(this.contextKeyService);
        this.inlineCompletionSuggestsIndentationLessThanTabSize = InlineCompletionContextKeys.inlineSuggestionHasIndentationLessThanTabSize.bindTo(this.contextKeyService);
        this.suppressSuggestions = InlineCompletionContextKeys.suppressSuggestions.bindTo(this.contextKeyService);
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update context key: inlineCompletionVisible, suppressSuggestions */ const model = this.model.read(reader);
            const state = model?.state.read(reader);
            const isInlineCompletionVisible = !!state?.inlineCompletion && state?.primaryGhostText !== undefined && !state?.primaryGhostText.isEmpty();
            this.inlineCompletionVisible.set(isInlineCompletionVisible);
            if (state?.primaryGhostText && state?.inlineCompletion) {
                this.suppressSuggestions.set(state.inlineCompletion.inlineCompletion.source.inlineCompletions.suppressSuggestions);
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update context key: inlineCompletionSuggestsIndentation, inlineCompletionSuggestsIndentationLessThanTabSize */ const model = this.model.read(reader);
            let startsWithIndentation = false;
            let startsWithIndentationLessThanTabSize = true;
            const ghostText = model?.primaryGhostText.read(reader);
            if (!!model?.selectedSuggestItem && ghostText && ghostText.parts.length > 0) {
                const { column, lines } = ghostText.parts[0];
                const firstLine = lines[0];
                const indentationEndColumn = model.textModel.getLineIndentColumn(ghostText.lineNumber);
                const inIndentation = column <= indentationEndColumn;
                if (inIndentation) {
                    let firstNonWsIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstNonWhitespaceIndex"])(firstLine);
                    if (firstNonWsIdx === -1) {
                        firstNonWsIdx = firstLine.length - 1;
                    }
                    startsWithIndentation = firstNonWsIdx > 0;
                    const tabSize = model.textModel.getOptions().tabSize;
                    const visibleColumnIndentation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$cursorColumns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CursorColumns"].visibleColumnFromColumn(firstLine, firstNonWsIdx + 1, tabSize);
                    startsWithIndentationLessThanTabSize = visibleColumnIndentation < tabSize;
                }
            }
            this.inlineCompletionSuggestsIndentation.set(startsWithIndentation);
            this.inlineCompletionSuggestsIndentationLessThanTabSize.set(startsWithIndentationLessThanTabSize);
        }));
    }
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "GhostText": (()=>GhostText),
    "GhostTextPart": (()=>GhostTextPart),
    "GhostTextReplacement": (()=>GhostTextReplacement),
    "ghostTextOrReplacementEquals": (()=>ghostTextOrReplacementEquals),
    "ghostTextsOrReplacementsEqual": (()=>ghostTextsOrReplacementsEqual)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
;
;
;
;
;
class GhostText {
    constructor(lineNumber, parts){
        this.lineNumber = lineNumber;
        this.parts = parts;
    }
    equals(other) {
        return this.lineNumber === other.lineNumber && this.parts.length === other.parts.length && this.parts.every((part, index)=>part.equals(other.parts[index]));
    }
    renderForScreenReader(lineText) {
        if (this.parts.length === 0) {
            return '';
        }
        const lastPart = this.parts[this.parts.length - 1];
        const cappedLineText = lineText.substr(0, lastPart.column - 1);
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextEdit"]([
            ...this.parts.map((p)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](1, p.column)), p.lines.join('\n')))
        ]).applyToString(cappedLineText);
        return text.substring(this.parts[0].column - 1);
    }
    isEmpty() {
        return this.parts.every((p)=>p.lines.length === 0);
    }
    get lineCount() {
        return 1 + this.parts.reduce((r, p)=>r + p.lines.length - 1, 0);
    }
}
class GhostTextPart {
    constructor(column, text, /**
     * Indicates if this part is a preview of an inline suggestion when a suggestion is previewed.
    */ preview){
        this.column = column;
        this.text = text;
        this.preview = preview;
        this.lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitLines"])(this.text);
    }
    equals(other) {
        return this.column === other.column && this.lines.length === other.lines.length && this.lines.every((line, index)=>line === other.lines[index]);
    }
}
class GhostTextReplacement {
    constructor(lineNumber, columnRange, text, additionalReservedLineCount = 0){
        this.lineNumber = lineNumber;
        this.columnRange = columnRange;
        this.text = text;
        this.additionalReservedLineCount = additionalReservedLineCount;
        this.parts = [
            new GhostTextPart(this.columnRange.endColumnExclusive, this.text, false)
        ];
        this.newLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitLines"])(this.text);
    }
    renderForScreenReader(_lineText) {
        return this.newLines.join('\n');
    }
    get lineCount() {
        return this.newLines.length;
    }
    isEmpty() {
        return this.parts.every((p)=>p.lines.length === 0);
    }
    equals(other) {
        return this.lineNumber === other.lineNumber && this.columnRange.equals(other.columnRange) && this.newLines.length === other.newLines.length && this.newLines.every((line, index)=>line === other.newLines[index]) && this.additionalReservedLineCount === other.additionalReservedLineCount;
    }
}
function ghostTextsOrReplacementsEqual(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equals"])(a, b, ghostTextOrReplacementEquals);
}
function ghostTextOrReplacementEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    if (a instanceof GhostText && b instanceof GhostText) {
        return a.equals(b);
    }
    if (a instanceof GhostTextReplacement && b instanceof GhostTextReplacement) {
        return a.equals(b);
    }
    return false;
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ColumnRange": (()=>ColumnRange),
    "addPositions": (()=>addPositions),
    "applyObservableDecorations": (()=>applyObservableDecorations),
    "getReadonlyEmptyArray": (()=>getReadonlyEmptyArray),
    "subtractPositions": (()=>subtractPositions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
;
;
;
;
;
const array = [];
function getReadonlyEmptyArray() {
    return array;
}
class ColumnRange {
    constructor(startColumn, endColumnExclusive){
        this.startColumn = startColumn;
        this.endColumnExclusive = endColumnExclusive;
        if (startColumn > endColumnExclusive) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BugIndicatingError"](`startColumn ${startColumn} cannot be after endColumnExclusive ${endColumnExclusive}`);
        }
    }
    toRange(lineNumber) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](lineNumber, this.startColumn, lineNumber, this.endColumnExclusive);
    }
    equals(other) {
        return this.startColumn === other.startColumn && this.endColumnExclusive === other.endColumnExclusive;
    }
}
function applyObservableDecorations(editor, decorations) {
    const d = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const decorationsCollection = editor.createDecorationsCollection();
    d.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorunOpts"])({
        debugName: ()=>`Apply decorations from ${decorations.debugName}`
    }, (reader)=>{
        const d = decorations.read(reader);
        decorationsCollection.set(d);
    }));
    d.add({
        dispose: ()=>{
            decorationsCollection.clear();
        }
    });
    return d;
}
function addPositions(pos1, pos2) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](pos1.lineNumber + pos2.lineNumber - 1, pos2.lineNumber === 1 ? pos1.column + pos2.column - 1 : pos2.column);
}
function subtractPositions(pos1, pos2) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](pos1.lineNumber - pos2.lineNumber + 1, pos1.lineNumber - pos2.lineNumber === 0 ? pos1.column - pos2.column + 1 : pos1.column);
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/view/ghostTextView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AdditionalLinesWidget": (()=>AdditionalLinesWidget),
    "GHOST_TEXT_DESCRIPTION": (()=>GHOST_TEXT_DESCRIPTION),
    "GhostTextView": (()=>GhostTextView),
    "ttPolicy": (()=>ttPolicy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$trustedTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/trustedTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$config$2f$domFontInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$stringBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$tokens$2f$lineTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/tokens/lineTokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$viewLineRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/utils.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
const GHOST_TEXT_DESCRIPTION = 'ghost-text';
let GhostTextView = class GhostTextView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(editor, model, languageService){
        super();
        this.editor = editor;
        this.model = model;
        this.languageService = languageService;
        this.isDisposed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, false);
        this.currentTextModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeModel, ()=>/** @description editor.model */ this.editor.getModel());
        this.uiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            if (this.isDisposed.read(reader)) {
                return undefined;
            }
            const textModel = this.currentTextModel.read(reader);
            if (textModel !== this.model.targetTextModel.read(reader)) {
                return undefined;
            }
            const ghostText = this.model.ghostText.read(reader);
            if (!ghostText) {
                return undefined;
            }
            const replacedRange = ghostText instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextReplacement"] ? ghostText.columnRange : undefined;
            const inlineTexts = [];
            const additionalLines = [];
            function addToAdditionalLines(lines, className) {
                if (additionalLines.length > 0) {
                    const lastLine = additionalLines[additionalLines.length - 1];
                    if (className) {
                        lastLine.decorations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineDecoration"](lastLine.content.length + 1, lastLine.content.length + 1 + lines[0].length, className, 0 /* InlineDecorationType.Regular */ ));
                    }
                    lastLine.content += lines[0];
                    lines = lines.slice(1);
                }
                for (const line of lines){
                    additionalLines.push({
                        content: line,
                        decorations: className ? [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineDecoration"](1, line.length + 1, className, 0 /* InlineDecorationType.Regular */ )
                        ] : []
                    });
                }
            }
            const textBufferLine = textModel.getLineContent(ghostText.lineNumber);
            let hiddenTextStartColumn = undefined;
            let lastIdx = 0;
            for (const part of ghostText.parts){
                let lines = part.lines;
                if (hiddenTextStartColumn === undefined) {
                    inlineTexts.push({
                        column: part.column,
                        text: lines[0],
                        preview: part.preview
                    });
                    lines = lines.slice(1);
                } else {
                    addToAdditionalLines([
                        textBufferLine.substring(lastIdx, part.column - 1)
                    ], undefined);
                }
                if (lines.length > 0) {
                    addToAdditionalLines(lines, GHOST_TEXT_DESCRIPTION);
                    if (hiddenTextStartColumn === undefined && part.column <= textBufferLine.length) {
                        hiddenTextStartColumn = part.column;
                    }
                }
                lastIdx = part.column - 1;
            }
            if (hiddenTextStartColumn !== undefined) {
                addToAdditionalLines([
                    textBufferLine.substring(lastIdx)
                ], undefined);
            }
            const hiddenRange = hiddenTextStartColumn !== undefined ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColumnRange"](hiddenTextStartColumn, textBufferLine.length + 1) : undefined;
            return {
                replacedRange,
                inlineTexts,
                additionalLines,
                hiddenRange,
                lineNumber: ghostText.lineNumber,
                additionalReservedLineCount: this.model.minReservedLineCount.read(reader),
                targetTextModel: textModel
            };
        });
        this.decorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const uiState = this.uiState.read(reader);
            if (!uiState) {
                return [];
            }
            const decorations = [];
            if (uiState.replacedRange) {
                decorations.push({
                    range: uiState.replacedRange.toRange(uiState.lineNumber),
                    options: {
                        inlineClassName: 'inline-completion-text-to-replace',
                        description: 'GhostTextReplacement'
                    }
                });
            }
            if (uiState.hiddenRange) {
                decorations.push({
                    range: uiState.hiddenRange.toRange(uiState.lineNumber),
                    options: {
                        inlineClassName: 'ghost-text-hidden',
                        description: 'ghost-text-hidden'
                    }
                });
            }
            for (const p of uiState.inlineTexts){
                decorations.push({
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](uiState.lineNumber, p.column)),
                    options: {
                        description: GHOST_TEXT_DESCRIPTION,
                        after: {
                            content: p.text,
                            inlineClassName: p.preview ? 'ghost-text-decoration-preview' : 'ghost-text-decoration',
                            cursorStops: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].Left
                        },
                        showIfCollapsed: true
                    }
                });
            }
            return decorations;
        });
        this.additionalLinesWidget = this._register(new AdditionalLinesWidget(this.editor, this.languageService.languageIdCodec, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])((reader)=>{
            /** @description lines */ const uiState = this.uiState.read(reader);
            return uiState ? {
                lineNumber: uiState.lineNumber,
                additionalLines: uiState.additionalLines,
                minReservedLineCount: uiState.additionalReservedLineCount,
                targetTextModel: uiState.targetTextModel
            } : undefined;
        })));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            this.isDisposed.set(true, undefined);
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyObservableDecorations"])(this.editor, this.decorations));
    }
    ownsViewZone(viewZoneId) {
        return this.additionalLinesWidget.viewZoneId === viewZoneId;
    }
};
GhostTextView = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageService"])
], GhostTextView);
;
class AdditionalLinesWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    get viewZoneId() {
        return this._viewZoneId;
    }
    constructor(editor, languageIdCodec, lines){
        super();
        this.editor = editor;
        this.languageIdCodec = languageIdCodec;
        this.lines = lines;
        this._viewZoneId = undefined;
        this.editorOptionsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignalFromEvent"])('editorOptionChanged', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Event"].filter(this.editor.onDidChangeConfiguration, (e)=>e.hasChanged(33 /* EditorOption.disableMonospaceOptimizations */ ) || e.hasChanged(118 /* EditorOption.stopRenderingLineAfter */ ) || e.hasChanged(100 /* EditorOption.renderWhitespace */ ) || e.hasChanged(95 /* EditorOption.renderControlCharacters */ ) || e.hasChanged(51 /* EditorOption.fontLigatures */ ) || e.hasChanged(50 /* EditorOption.fontInfo */ ) || e.hasChanged(67 /* EditorOption.lineHeight */ )));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update view zone */ const lines = this.lines.read(reader);
            this.editorOptionsChanged.read(reader);
            if (lines) {
                this.updateLines(lines.lineNumber, lines.additionalLines, lines.minReservedLineCount);
            } else {
                this.clear();
            }
        }));
    }
    dispose() {
        super.dispose();
        this.clear();
    }
    clear() {
        this.editor.changeViewZones((changeAccessor)=>{
            if (this._viewZoneId) {
                changeAccessor.removeZone(this._viewZoneId);
                this._viewZoneId = undefined;
            }
        });
    }
    updateLines(lineNumber, additionalLines, minReservedLineCount) {
        const textModel = this.editor.getModel();
        if (!textModel) {
            return;
        }
        const { tabSize } = textModel.getOptions();
        this.editor.changeViewZones((changeAccessor)=>{
            if (this._viewZoneId) {
                changeAccessor.removeZone(this._viewZoneId);
                this._viewZoneId = undefined;
            }
            const heightInLines = Math.max(additionalLines.length, minReservedLineCount);
            if (heightInLines > 0) {
                const domNode = document.createElement('div');
                renderLines(domNode, tabSize, additionalLines, this.editor.getOptions(), this.languageIdCodec);
                this._viewZoneId = changeAccessor.addZone({
                    afterLineNumber: lineNumber,
                    heightInLines: heightInLines,
                    domNode,
                    afterColumnAffinity: 1 /* PositionAffinity.Right */ 
                });
            }
        });
    }
}
function renderLines(domNode, tabSize, lines, opts, languageIdCodec) {
    const disableMonospaceOptimizations = opts.get(33 /* EditorOption.disableMonospaceOptimizations */ );
    const stopRenderingLineAfter = opts.get(118 /* EditorOption.stopRenderingLineAfter */ );
    // To avoid visual confusion, we don't want to render visible whitespace
    const renderWhitespace = 'none';
    const renderControlCharacters = opts.get(95 /* EditorOption.renderControlCharacters */ );
    const fontLigatures = opts.get(51 /* EditorOption.fontLigatures */ );
    const fontInfo = opts.get(50 /* EditorOption.fontInfo */ );
    const lineHeight = opts.get(67 /* EditorOption.lineHeight */ );
    const sb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$stringBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StringBuilder"](10000);
    sb.appendString('<div class="suggest-preview-text">');
    for(let i = 0, len = lines.length; i < len; i++){
        const lineData = lines[i];
        const line = lineData.content;
        sb.appendString('<div class="view-line');
        sb.appendString('" style="top:');
        sb.appendString(String(i * lineHeight));
        sb.appendString('px;width:1000000px;">');
        const isBasicASCII = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBasicASCII"])(line);
        const containsRTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsRTL"])(line);
        const lineTokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$tokens$2f$lineTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineTokens"].createEmpty(line, languageIdCodec);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$viewLineRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderViewLine"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$viewLineRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderLineInput"](fontInfo.isMonospace && !disableMonospaceOptimizations, fontInfo.canUseHalfwidthRightwardsArrow, line, false, isBasicASCII, containsRTL, 0, lineTokens, lineData.decorations, tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorFontLigatures"].OFF, null), sb);
        sb.appendString('</div>');
    }
    sb.appendString('</div>');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$config$2f$domFontInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyFontInfo"])(domNode, fontInfo);
    const html = sb.build();
    const trustedhtml = ttPolicy ? ttPolicy.createHTML(html) : html;
    domNode.innerHTML = trustedhtml;
}
const ttPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$trustedTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTrustedTypesPolicy"])('editorGhostText', {
    createHTML: (value)=>value
});
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/provideInlineCompletions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionItem": (()=>InlineCompletionItem),
    "InlineCompletionList": (()=>InlineCompletionList),
    "InlineCompletionProviderResult": (()=>InlineCompletionProviderResult),
    "provideInlineCompletions": (()=>provideInlineCompletions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/assert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/async.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$bracketPairsTextModelPart$2f$fixBrackets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/fixBrackets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetParser.js [app-ssr] (ecmascript)");
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
async function provideInlineCompletions(registry, positionOrRange, model, context, token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationToken"].None, languageConfigurationService) {
    // Important: Don't use position after the await calls, as the model could have been changed in the meantime!
    const defaultReplaceRange = positionOrRange instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"] ? getDefaultRange(positionOrRange, model) : positionOrRange;
    const providers = registry.all(model);
    const multiMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetMap"]();
    for (const provider of providers){
        if (provider.groupId) {
            multiMap.add(provider.groupId, provider);
        }
    }
    function getPreferredProviders(provider) {
        if (!provider.yieldsToGroupIds) {
            return [];
        }
        const result = [];
        for (const groupId of provider.yieldsToGroupIds || []){
            const providers = multiMap.get(groupId);
            for (const p of providers){
                result.push(p);
            }
        }
        return result;
    }
    const states = new Map();
    const seen = new Set();
    function findPreferredProviderCircle(provider, stack) {
        stack = [
            ...stack,
            provider
        ];
        if (seen.has(provider)) {
            return stack;
        }
        seen.add(provider);
        try {
            const preferred = getPreferredProviders(provider);
            for (const p of preferred){
                const c = findPreferredProviderCircle(p, stack);
                if (c) {
                    return c;
                }
            }
        } finally{
            seen.delete(provider);
        }
        return undefined;
    }
    function processProvider(provider) {
        const state = states.get(provider);
        if (state) {
            return state;
        }
        const circle = findPreferredProviderCircle(provider, []);
        if (circle) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(new Error(`Inline completions: cyclic yield-to dependency detected. Path: ${circle.map((s)=>s.toString ? s.toString() : '' + s).join(' -> ')}`));
        }
        const deferredPromise = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeferredPromise"]();
        states.set(provider, deferredPromise.p);
        (async ()=>{
            if (!circle) {
                const preferred = getPreferredProviders(provider);
                for (const p of preferred){
                    const result = await processProvider(p);
                    if (result && result.items.length > 0) {
                        // Skip provider
                        return undefined;
                    }
                }
            }
            try {
                if (positionOrRange instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"]) {
                    const completions = await provider.provideInlineCompletions(model, positionOrRange, context, token);
                    return completions;
                } else {
                    const completions = await provider.provideInlineEdits?.(model, positionOrRange, context, token);
                    return completions;
                }
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(e);
                return undefined;
            }
        })().then((c)=>deferredPromise.complete(c), (e)=>deferredPromise.error(e));
        return deferredPromise.p;
    }
    const providerResults = await Promise.all(providers.map(async (provider)=>({
            provider,
            completions: await processProvider(provider)
        })));
    const itemsByHash = new Map();
    const lists = [];
    for (const result of providerResults){
        const completions = result.completions;
        if (!completions) {
            continue;
        }
        const list = new InlineCompletionList(completions, result.provider);
        lists.push(list);
        for (const item of completions.items){
            const inlineCompletionItem = InlineCompletionItem.from(item, list, defaultReplaceRange, model, languageConfigurationService);
            itemsByHash.set(inlineCompletionItem.hash(), inlineCompletionItem);
        }
    }
    return new InlineCompletionProviderResult(Array.from(itemsByHash.values()), new Set(itemsByHash.keys()), lists);
}
class InlineCompletionProviderResult {
    constructor(/**
     * Free of duplicates.
     */ completions, hashs, providerResults){
        this.completions = completions;
        this.hashs = hashs;
        this.providerResults = providerResults;
    }
    has(item) {
        return this.hashs.has(item.hash());
    }
    dispose() {
        for (const result of this.providerResults){
            result.removeRef();
        }
    }
}
class InlineCompletionList {
    constructor(inlineCompletions, provider){
        this.inlineCompletions = inlineCompletions;
        this.provider = provider;
        this.refCount = 1;
    }
    addRef() {
        this.refCount++;
    }
    removeRef() {
        this.refCount--;
        if (this.refCount === 0) {
            this.provider.freeInlineCompletions(this.inlineCompletions);
        }
    }
}
class InlineCompletionItem {
    static from(inlineCompletion, source, defaultReplaceRange, textModel, languageConfigurationService) {
        let insertText;
        let snippetInfo;
        let range = inlineCompletion.range ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].lift(inlineCompletion.range) : defaultReplaceRange;
        if (typeof inlineCompletion.insertText === 'string') {
            insertText = inlineCompletion.insertText;
            if (languageConfigurationService && inlineCompletion.completeBracketPairs) {
                insertText = closeBrackets(insertText, range.getStartPosition(), textModel, languageConfigurationService);
                // Modify range depending on if brackets are added or removed
                const diff = insertText.length - inlineCompletion.insertText.length;
                if (diff !== 0) {
                    range = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn + diff);
                }
            }
            snippetInfo = undefined;
        } else if ('snippet' in inlineCompletion.insertText) {
            const preBracketCompletionLength = inlineCompletion.insertText.snippet.length;
            if (languageConfigurationService && inlineCompletion.completeBracketPairs) {
                inlineCompletion.insertText.snippet = closeBrackets(inlineCompletion.insertText.snippet, range.getStartPosition(), textModel, languageConfigurationService);
                // Modify range depending on if brackets are added or removed
                const diff = inlineCompletion.insertText.snippet.length - preBracketCompletionLength;
                if (diff !== 0) {
                    range = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn + diff);
                }
            }
            const snippet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnippetParser"]().parse(inlineCompletion.insertText.snippet);
            if (snippet.children.length === 1 && snippet.children[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]) {
                insertText = snippet.children[0].value;
                snippetInfo = undefined;
            } else {
                insertText = snippet.toString();
                snippetInfo = {
                    snippet: inlineCompletion.insertText.snippet,
                    range: range
                };
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNever"])(inlineCompletion.insertText);
        }
        return new InlineCompletionItem(insertText, inlineCompletion.command, range, insertText, snippetInfo, inlineCompletion.additionalTextEdits || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReadonlyEmptyArray"])(), inlineCompletion, source);
    }
    constructor(filterText, command, range, insertText, snippetInfo, additionalTextEdits, /**
     * A reference to the original inline completion this inline completion has been constructed from.
     * Used for event data to ensure referential equality.
    */ sourceInlineCompletion, /**
     * A reference to the original inline completion list this inline completion has been constructed from.
     * Used for event data to ensure referential equality.
    */ source){
        this.filterText = filterText;
        this.command = command;
        this.range = range;
        this.insertText = insertText;
        this.snippetInfo = snippetInfo;
        this.additionalTextEdits = additionalTextEdits;
        this.sourceInlineCompletion = sourceInlineCompletion;
        this.source = source;
        filterText = filterText.replace(/\r\n|\r/g, '\n');
        insertText = filterText.replace(/\r\n|\r/g, '\n');
    }
    withRange(updatedRange) {
        return new InlineCompletionItem(this.filterText, this.command, updatedRange, this.insertText, this.snippetInfo, this.additionalTextEdits, this.sourceInlineCompletion, this.source);
    }
    hash() {
        return JSON.stringify({
            insertText: this.insertText,
            range: this.range.toString()
        });
    }
    toSingleTextEdit() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](this.range, this.insertText);
    }
}
function getDefaultRange(position, model) {
    const word = model.getWordAtPosition(position);
    const maxColumn = model.getLineMaxColumn(position.lineNumber);
    // By default, always replace up until the end of the current line.
    // This default might be subject to change!
    return word ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, word.startColumn, position.lineNumber, maxColumn) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(position, position.with(undefined, maxColumn));
}
function closeBrackets(text, position, model, languageConfigurationService) {
    const lineStart = model.getLineContent(position.lineNumber).substring(0, position.column - 1);
    const newLine = lineStart + text;
    const newTokens = model.tokenization.tokenizeLineWithEdit(position, newLine.length - (position.column - 1), text);
    const slicedTokens = newTokens?.sliceAndInflate(position.column - 1, newLine.length, 0);
    if (!slicedTokens) {
        return text;
    }
    const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$bracketPairsTextModelPart$2f$fixBrackets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixBracketsInLine"])(slicedTokens, languageConfigurationService);
    return newText;
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/singleTextEdit.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "computeGhostText": (()=>computeGhostText),
    "singleTextEditAugments": (()=>singleTextEditAugments),
    "singleTextRemoveCommonPrefix": (()=>singleTextRemoveCommonPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$diff$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/diff/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textLength.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function singleTextRemoveCommonPrefix(edit, model, validModelRange) {
    const modelRange = validModelRange ? edit.range.intersectRanges(validModelRange) : edit.range;
    if (!modelRange) {
        return edit;
    }
    const valueToReplace = model.getValueInRange(modelRange, 1 /* EndOfLinePreference.LF */ );
    const commonPrefixLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonPrefixLength"])(valueToReplace, edit.text);
    const start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextLength"].ofText(valueToReplace.substring(0, commonPrefixLen)).addToPosition(edit.range.getStartPosition());
    const text = edit.text.substring(commonPrefixLen);
    const range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(start, edit.range.getEndPosition());
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](range, text);
}
function singleTextEditAugments(edit, base) {
    // The augmented completion must replace the base range, but can replace even more
    return edit.text.startsWith(base.text) && rangeExtends(edit.range, base.range);
}
function computeGhostText(edit, model, mode, cursorPosition, previewSuffixLength = 0) {
    let e = singleTextRemoveCommonPrefix(edit, model);
    if (e.range.endLineNumber !== e.range.startLineNumber) {
        // This edit might span multiple lines, but the first lines must be a common prefix.
        return undefined;
    }
    const sourceLine = model.getLineContent(e.range.startLineNumber);
    const sourceIndentationLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(sourceLine).length;
    const suggestionTouchesIndentation = e.range.startColumn - 1 <= sourceIndentationLength;
    if (suggestionTouchesIndentation) {
        // source:      ··········[······abc]
        //                         ^^^^^^^^^ inlineCompletion.range
        //              ^^^^^^^^^^ ^^^^^^ sourceIndentationLength
        //                         ^^^^^^ replacedIndentation.length
        //                               ^^^ rangeThatDoesNotReplaceIndentation
        // inlineCompletion.text: '··foo'
        //                         ^^ suggestionAddedIndentationLength
        const suggestionAddedIndentationLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeadingWhitespace"])(e.text).length;
        const replacedIndentation = sourceLine.substring(e.range.startColumn - 1, sourceIndentationLength);
        const [startPosition, endPosition] = [
            e.range.getStartPosition(),
            e.range.getEndPosition()
        ];
        const newStartPosition = startPosition.column + replacedIndentation.length <= endPosition.column ? startPosition.delta(0, replacedIndentation.length) : endPosition;
        const rangeThatDoesNotReplaceIndentation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(newStartPosition, endPosition);
        const suggestionWithoutIndentationChange = e.text.startsWith(replacedIndentation) ? e.text.substring(replacedIndentation.length) : e.text.substring(suggestionAddedIndentationLength);
        e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](rangeThatDoesNotReplaceIndentation, suggestionWithoutIndentationChange);
    }
    // This is a single line string
    const valueToBeReplaced = model.getValueInRange(e.range);
    const changes = cachingDiff(valueToBeReplaced, e.text);
    if (!changes) {
        // No ghost text in case the diff would be too slow to compute
        return undefined;
    }
    const lineNumber = e.range.startLineNumber;
    const parts = new Array();
    if (mode === 'prefix') {
        const filteredChanges = changes.filter((c)=>c.originalLength === 0);
        if (filteredChanges.length > 1 || filteredChanges.length === 1 && filteredChanges[0].originalStart !== valueToBeReplaced.length) {
            // Prefixes only have a single change.
            return undefined;
        }
    }
    const previewStartInCompletionText = e.text.length - previewSuffixLength;
    for (const c of changes){
        const insertColumn = e.range.startColumn + c.originalStart + c.originalLength;
        if (mode === 'subwordSmart' && cursorPosition && cursorPosition.lineNumber === e.range.startLineNumber && insertColumn < cursorPosition.column) {
            // No ghost text before cursor
            return undefined;
        }
        if (c.originalLength > 0) {
            return undefined;
        }
        if (c.modifiedLength === 0) {
            continue;
        }
        const modifiedEnd = c.modifiedStart + c.modifiedLength;
        const nonPreviewTextEnd = Math.max(c.modifiedStart, Math.min(modifiedEnd, previewStartInCompletionText));
        const nonPreviewText = e.text.substring(c.modifiedStart, nonPreviewTextEnd);
        const italicText = e.text.substring(nonPreviewTextEnd, Math.max(c.modifiedStart, modifiedEnd));
        if (nonPreviewText.length > 0) {
            parts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextPart"](insertColumn, nonPreviewText, false));
        }
        if (italicText.length > 0) {
            parts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextPart"](insertColumn, italicText, true));
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostText"](lineNumber, parts);
}
function rangeExtends(extendingRange, rangeToExtend) {
    return rangeToExtend.getStartPosition().equals(extendingRange.getStartPosition()) && rangeToExtend.getEndPosition().isBeforeOrEqual(extendingRange.getEndPosition());
}
let lastRequest = undefined;
function cachingDiff(originalValue, newValue) {
    if (lastRequest?.originalValue === originalValue && lastRequest?.newValue === newValue) {
        return lastRequest?.changes;
    } else {
        let changes = smartDiff(originalValue, newValue, true);
        if (changes) {
            const deletedChars = deletedCharacters(changes);
            if (deletedChars > 0) {
                // For performance reasons, don't compute diff if there is nothing to improve
                const newChanges = smartDiff(originalValue, newValue, false);
                if (newChanges && deletedCharacters(newChanges) < deletedChars) {
                    // Disabling smartness seems to be better here
                    changes = newChanges;
                }
            }
        }
        lastRequest = {
            originalValue,
            newValue,
            changes
        };
        return changes;
    }
}
function deletedCharacters(changes) {
    let sum = 0;
    for (const c of changes){
        sum += c.originalLength;
    }
    return sum;
}
/**
 * When matching `if ()` with `if (f() = 1) { g(); }`,
 * align it like this:        `if (       )`
 * Not like this:			  `if (  )`
 * Also not like this:		  `if (             )`.
 *
 * The parenthesis are preprocessed to ensure that they match correctly.
 */ function smartDiff(originalValue, newValue, smartBracketMatching) {
    if (originalValue.length > 5000 || newValue.length > 5000) {
        // We don't want to work on strings that are too big
        return undefined;
    }
    function getMaxCharCode(val) {
        let maxCharCode = 0;
        for(let i = 0, len = val.length; i < len; i++){
            const charCode = val.charCodeAt(i);
            if (charCode > maxCharCode) {
                maxCharCode = charCode;
            }
        }
        return maxCharCode;
    }
    const maxCharCode = Math.max(getMaxCharCode(originalValue), getMaxCharCode(newValue));
    function getUniqueCharCode(id) {
        if (id < 0) {
            throw new Error('unexpected');
        }
        return maxCharCode + id + 1;
    }
    function getElements(source) {
        let level = 0;
        let group = 0;
        const characters = new Int32Array(source.length);
        for(let i = 0, len = source.length; i < len; i++){
            // TODO support more brackets
            if (smartBracketMatching && source[i] === '(') {
                const id = group * 100 + level;
                characters[i] = getUniqueCharCode(2 * id);
                level++;
            } else if (smartBracketMatching && source[i] === ')') {
                level = Math.max(level - 1, 0);
                const id = group * 100 + level;
                characters[i] = getUniqueCharCode(2 * id + 1);
                if (level === 0) {
                    group++;
                }
            } else {
                characters[i] = source.charCodeAt(i);
            }
        }
        return characters;
    }
    const elements1 = getElements(originalValue);
    const elements2 = getElements(newValue);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$diff$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LcsDiff"]({
        getElements: ()=>elements1
    }, {
        getElements: ()=>elements2
    }).ComputeDiff(false).changes;
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsSource.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionWithUpdatedRange": (()=>InlineCompletionWithUpdatedRange),
    "InlineCompletionsSource": (()=>InlineCompletionsSource),
    "UpToDateInlineCompletions": (()=>UpToDateInlineCompletions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/filters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textLength.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$provideInlineCompletions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/provideInlineCompletions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/singleTextEdit.js [app-ssr] (ecmascript)");
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
;
;
;
;
let InlineCompletionsSource = class InlineCompletionsSource extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(textModel, versionId, _debounceValue, languageFeaturesService, languageConfigurationService){
        super();
        this.textModel = textModel;
        this.versionId = versionId;
        this._debounceValue = _debounceValue;
        this.languageFeaturesService = languageFeaturesService;
        this.languageConfigurationService = languageConfigurationService;
        this._updateOperation = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this.inlineCompletions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposableObservableValue"])('inlineCompletions', undefined);
        this.suggestWidgetInlineCompletions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposableObservableValue"])('suggestWidgetInlineCompletions', undefined);
        this._register(this.textModel.onDidChangeContent(()=>{
            this._updateOperation.clear();
        }));
    }
    fetch(position, context, activeInlineCompletion) {
        const request = new UpdateRequest(position, context, this.textModel.getVersionId());
        const target = context.selectedSuggestionInfo ? this.suggestWidgetInlineCompletions : this.inlineCompletions;
        if (this._updateOperation.value?.request.satisfies(request)) {
            return this._updateOperation.value.promise;
        } else if (target.get()?.request.satisfies(request)) {
            return Promise.resolve(true);
        }
        const updateOngoing = !!this._updateOperation.value;
        this._updateOperation.clear();
        const source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        const promise = (async ()=>{
            const shouldDebounce = updateOngoing || context.triggerKind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Automatic;
            if (shouldDebounce) {
                // This debounces the operation
                await wait(this._debounceValue.get(this.textModel), source.token);
            }
            if (source.token.isCancellationRequested || this._store.isDisposed || this.textModel.getVersionId() !== request.versionId) {
                return false;
            }
            const startTime = new Date();
            const updatedCompletions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$provideInlineCompletions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["provideInlineCompletions"])(this.languageFeaturesService.inlineCompletionsProvider, position, this.textModel, context, source.token, this.languageConfigurationService);
            if (source.token.isCancellationRequested || this._store.isDisposed || this.textModel.getVersionId() !== request.versionId) {
                return false;
            }
            const endTime = new Date();
            this._debounceValue.update(this.textModel, endTime.getTime() - startTime.getTime());
            const completions = new UpToDateInlineCompletions(updatedCompletions, request, this.textModel, this.versionId);
            if (activeInlineCompletion) {
                const asInlineCompletion = activeInlineCompletion.toInlineCompletion(undefined);
                if (activeInlineCompletion.canBeReused(this.textModel, position) && !updatedCompletions.has(asInlineCompletion)) {
                    completions.prepend(activeInlineCompletion.inlineCompletion, asInlineCompletion.range, true);
                }
            }
            this._updateOperation.clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                /** @description Update completions with provider result */ target.set(completions, tx);
            });
            return true;
        })();
        const updateOperation = new UpdateOperation(request, source, promise);
        this._updateOperation.value = updateOperation;
        return promise;
    }
    clear(tx) {
        this._updateOperation.clear();
        this.inlineCompletions.set(undefined, tx);
        this.suggestWidgetInlineCompletions.set(undefined, tx);
    }
    clearSuggestWidgetInlineCompletions(tx) {
        if (this._updateOperation.value?.request.context.selectedSuggestionInfo) {
            this._updateOperation.clear();
        }
        this.suggestWidgetInlineCompletions.set(undefined, tx);
    }
    cancelUpdate() {
        this._updateOperation.clear();
    }
};
InlineCompletionsSource = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageConfigurationService"])
], InlineCompletionsSource);
;
function wait(ms, cancellationToken) {
    return new Promise((resolve)=>{
        let d = undefined;
        const handle = setTimeout(()=>{
            if (d) {
                d.dispose();
            }
            resolve();
        }, ms);
        if (cancellationToken) {
            d = cancellationToken.onCancellationRequested(()=>{
                clearTimeout(handle);
                if (d) {
                    d.dispose();
                }
                resolve();
            });
        }
    });
}
class UpdateRequest {
    constructor(position, context, versionId){
        this.position = position;
        this.context = context;
        this.versionId = versionId;
    }
    satisfies(other) {
        return this.position.equals(other.position) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalsIfDefined"])(this.context.selectedSuggestionInfo, other.context.selectedSuggestionInfo, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemEquals"])()) && (other.context.triggerKind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Automatic || this.context.triggerKind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Explicit) && this.versionId === other.versionId;
    }
}
class UpdateOperation {
    constructor(request, cancellationTokenSource, promise){
        this.request = request;
        this.cancellationTokenSource = cancellationTokenSource;
        this.promise = promise;
    }
    dispose() {
        this.cancellationTokenSource.cancel();
    }
}
class UpToDateInlineCompletions {
    get inlineCompletions() {
        return this._inlineCompletions;
    }
    constructor(inlineCompletionProviderResult, request, _textModel, _versionId){
        this.inlineCompletionProviderResult = inlineCompletionProviderResult;
        this.request = request;
        this._textModel = _textModel;
        this._versionId = _versionId;
        this._refCount = 1;
        this._prependedInlineCompletionItems = [];
        const ids = _textModel.deltaDecorations([], inlineCompletionProviderResult.completions.map((i)=>({
                range: i.range,
                options: {
                    description: 'inline-completion-tracking-range'
                }
            })));
        this._inlineCompletions = inlineCompletionProviderResult.completions.map((i, index)=>new InlineCompletionWithUpdatedRange(i, ids[index], this._textModel, this._versionId));
    }
    clone() {
        this._refCount++;
        return this;
    }
    dispose() {
        this._refCount--;
        if (this._refCount === 0) {
            setTimeout(()=>{
                // To fix https://github.com/microsoft/vscode/issues/188348
                if (!this._textModel.isDisposed()) {
                    // This is just cleanup. It's ok if it happens with a delay.
                    this._textModel.deltaDecorations(this._inlineCompletions.map((i)=>i.decorationId), []);
                }
            }, 0);
            this.inlineCompletionProviderResult.dispose();
            for (const i of this._prependedInlineCompletionItems){
                i.source.removeRef();
            }
        }
    }
    prepend(inlineCompletion, range, addRefToSource) {
        if (addRefToSource) {
            inlineCompletion.source.addRef();
        }
        const id = this._textModel.deltaDecorations([], [
            {
                range,
                options: {
                    description: 'inline-completion-tracking-range'
                }
            }
        ])[0];
        this._inlineCompletions.unshift(new InlineCompletionWithUpdatedRange(inlineCompletion, id, this._textModel, this._versionId));
        this._prependedInlineCompletionItems.push(inlineCompletion);
    }
}
class InlineCompletionWithUpdatedRange {
    get forwardStable() {
        return this.inlineCompletion.source.inlineCompletions.enableForwardStability ?? false;
    }
    constructor(inlineCompletion, decorationId, _textModel, _modelVersion){
        this.inlineCompletion = inlineCompletion;
        this.decorationId = decorationId;
        this._textModel = _textModel;
        this._modelVersion = _modelVersion;
        this.semanticId = JSON.stringify([
            this.inlineCompletion.filterText,
            this.inlineCompletion.insertText,
            this.inlineCompletion.range.getStartPosition().toString()
        ]);
        this._updatedRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].equalsRange
        }, (reader)=>{
            this._modelVersion.read(reader);
            return this._textModel.getDecorationRange(this.decorationId);
        });
    }
    toInlineCompletion(reader) {
        return this.inlineCompletion.withRange(this._updatedRange.read(reader) ?? emptyRange);
    }
    toSingleTextEdit(reader) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](this._updatedRange.read(reader) ?? emptyRange, this.inlineCompletion.insertText);
    }
    isVisible(model, cursorPosition, reader) {
        const minimizedReplacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(this._toFilterTextReplacement(reader), model);
        const updatedRange = this._updatedRange.read(reader);
        if (!updatedRange || !this.inlineCompletion.range.getStartPosition().equals(updatedRange.getStartPosition()) || cursorPosition.lineNumber !== minimizedReplacement.range.startLineNumber) {
            return false;
        }
        // We might consider comparing by .toLowerText, but this requires GhostTextReplacement
        const originalValue = model.getValueInRange(minimizedReplacement.range, 1 /* EndOfLinePreference.LF */ );
        const filterText = minimizedReplacement.text;
        const cursorPosIndex = Math.max(0, cursorPosition.column - minimizedReplacement.range.startColumn);
        let filterTextBefore = filterText.substring(0, cursorPosIndex);
        let filterTextAfter = filterText.substring(cursorPosIndex);
        let originalValueBefore = originalValue.substring(0, cursorPosIndex);
        let originalValueAfter = originalValue.substring(cursorPosIndex);
        const originalValueIndent = model.getLineIndentColumn(minimizedReplacement.range.startLineNumber);
        if (minimizedReplacement.range.startColumn <= originalValueIndent) {
            // Remove indentation
            originalValueBefore = originalValueBefore.trimStart();
            if (originalValueBefore.length === 0) {
                originalValueAfter = originalValueAfter.trimStart();
            }
            filterTextBefore = filterTextBefore.trimStart();
            if (filterTextBefore.length === 0) {
                filterTextAfter = filterTextAfter.trimStart();
            }
        }
        return filterTextBefore.startsWith(originalValueBefore) && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesSubString"])(originalValueAfter, filterTextAfter);
    }
    canBeReused(model, position) {
        const updatedRange = this._updatedRange.read(undefined);
        const result = !!updatedRange && updatedRange.containsPosition(position) && this.isVisible(model, position, undefined) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextLength"].ofRange(updatedRange).isGreaterThanOrEqualTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextLength"].ofRange(this.inlineCompletion.range));
        return result;
    }
    _toFilterTextReplacement(reader) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](this._updatedRange.read(reader) ?? emptyRange, this.inlineCompletion.filterText);
    }
}
const emptyRange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](1, 1, 1, 1);
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsModel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionsModel": (()=>InlineCompletionsModel),
    "VersionIdChangeReason": (()=>VersionIdChangeReason),
    "getSecondaryEdits": (()=>getSecondaryEdits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arraysFind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arraysFind.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textLength.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$inlineCompletionsSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/singleTextEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetController2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
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
let InlineCompletionsModel = class InlineCompletionsModel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    get isAcceptingPartially() {
        return this._isAcceptingPartially;
    }
    constructor(textModel, selectedSuggestItem, _textModelVersionId, _positions, _debounceValue, _suggestPreviewEnabled, _suggestPreviewMode, _inlineSuggestMode, _enabled, _instantiationService, _commandService, _languageConfigurationService){
        super();
        this.textModel = textModel;
        this.selectedSuggestItem = selectedSuggestItem;
        this._textModelVersionId = _textModelVersionId;
        this._positions = _positions;
        this._debounceValue = _debounceValue;
        this._suggestPreviewEnabled = _suggestPreviewEnabled;
        this._suggestPreviewMode = _suggestPreviewMode;
        this._inlineSuggestMode = _inlineSuggestMode;
        this._enabled = _enabled;
        this._instantiationService = _instantiationService;
        this._commandService = _commandService;
        this._languageConfigurationService = _languageConfigurationService;
        this._source = this._register(this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$inlineCompletionsSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsSource"], this.textModel, this._textModelVersionId, this._debounceValue));
        this._isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, false);
        this._forceUpdateExplicitlySignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignal"])(this);
        // We use a semantic id to keep the same inline completion selected even if the provider reorders the completions.
        this._selectedInlineCompletionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, undefined);
        this._primaryPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>this._positions.read(reader)[0] ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](1, 1));
        this._isAcceptingPartially = false;
        this._preserveCurrentCompletionReasons = new Set([
            VersionIdChangeReason.Redo,
            VersionIdChangeReason.Undo,
            VersionIdChangeReason.AcceptWord
        ]);
        this._fetchInlineCompletionsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedHandleChanges"])({
            owner: this,
            createEmptyChangeSummary: ()=>({
                    preserveCurrentCompletion: false,
                    inlineCompletionTriggerKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Automatic
                }),
            handleChange: (ctx, changeSummary)=>{
                /** @description fetch inline completions */ if (ctx.didChange(this._textModelVersionId) && this._preserveCurrentCompletionReasons.has(this._getReason(ctx.change))) {
                    changeSummary.preserveCurrentCompletion = true;
                } else if (ctx.didChange(this._forceUpdateExplicitlySignal)) {
                    changeSummary.inlineCompletionTriggerKind = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Explicit;
                }
                return true;
            }
        }, (reader, changeSummary)=>{
            this._forceUpdateExplicitlySignal.read(reader);
            const shouldUpdate = this._enabled.read(reader) && this.selectedSuggestItem.read(reader) || this._isActive.read(reader);
            if (!shouldUpdate) {
                this._source.cancelUpdate();
                return undefined;
            }
            this._textModelVersionId.read(reader); // Refetch on text change
            const suggestWidgetInlineCompletions = this._source.suggestWidgetInlineCompletions.get();
            const suggestItem = this.selectedSuggestItem.read(reader);
            if (suggestWidgetInlineCompletions && !suggestItem) {
                const inlineCompletions = this._source.inlineCompletions.get();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                    /** @description Seed inline completions with (newer) suggest widget inline completions */ if (!inlineCompletions || suggestWidgetInlineCompletions.request.versionId > inlineCompletions.request.versionId) {
                        this._source.inlineCompletions.set(suggestWidgetInlineCompletions.clone(), tx);
                    }
                    this._source.clearSuggestWidgetInlineCompletions(tx);
                });
            }
            const cursorPosition = this._primaryPosition.read(reader);
            const context = {
                triggerKind: changeSummary.inlineCompletionTriggerKind,
                selectedSuggestionInfo: suggestItem?.toSelectedSuggestionInfo()
            };
            const itemToPreserveCandidate = this.selectedInlineCompletion.get();
            const itemToPreserve = changeSummary.preserveCurrentCompletion || itemToPreserveCandidate?.forwardStable ? itemToPreserveCandidate : undefined;
            return this._source.fetch(cursorPosition, context, itemToPreserve);
        });
        this._filteredInlineCompletionItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemsEquals"])()
        }, (reader)=>{
            const c = this._source.inlineCompletions.read(reader);
            if (!c) {
                return [];
            }
            const cursorPosition = this._primaryPosition.read(reader);
            const filteredCompletions = c.inlineCompletions.filter((c)=>c.isVisible(this.textModel, cursorPosition, reader));
            return filteredCompletions;
        });
        this.selectedInlineCompletionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const selectedInlineCompletionId = this._selectedInlineCompletionId.read(reader);
            const filteredCompletions = this._filteredInlineCompletionItems.read(reader);
            const idx = this._selectedInlineCompletionId === undefined ? -1 : filteredCompletions.findIndex((v)=>v.semanticId === selectedInlineCompletionId);
            if (idx === -1) {
                // Reset the selection so that the selection does not jump back when it appears again
                this._selectedInlineCompletionId.set(undefined, undefined);
                return 0;
            }
            return idx;
        });
        this.selectedInlineCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const filteredCompletions = this._filteredInlineCompletionItems.read(reader);
            const idx = this.selectedInlineCompletionIndex.read(reader);
            return filteredCompletions[idx];
        });
        this.activeCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemsEquals"])()
        }, (r)=>this.selectedInlineCompletion.read(r)?.inlineCompletion.source.inlineCompletions.commands ?? []);
        this.lastTriggerKind = this._source.inlineCompletions.map(this, (v)=>v?.request.context.triggerKind);
        this.inlineCompletionsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            if (this.lastTriggerKind.read(reader) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionTriggerKind"].Explicit) {
                return this._filteredInlineCompletionItems.read(reader).length;
            } else {
                return undefined;
            }
        });
        this.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: (a, b)=>{
                if (!a || !b) {
                    return a === b;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ghostTextsOrReplacementsEqual"])(a.ghostTexts, b.ghostTexts) && a.inlineCompletion === b.inlineCompletion && a.suggestItem === b.suggestItem;
            }
        }, (reader)=>{
            const model = this.textModel;
            const suggestItem = this.selectedSuggestItem.read(reader);
            if (suggestItem) {
                const suggestCompletionEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(suggestItem.toSingleTextEdit(), model);
                const augmentation = this._computeAugmentation(suggestCompletionEdit, reader);
                const isSuggestionPreviewEnabled = this._suggestPreviewEnabled.read(reader);
                if (!isSuggestionPreviewEnabled && !augmentation) {
                    return undefined;
                }
                const fullEdit = augmentation?.edit ?? suggestCompletionEdit;
                const fullEditPreviewLength = augmentation ? augmentation.edit.text.length - suggestCompletionEdit.text.length : 0;
                const mode = this._suggestPreviewMode.read(reader);
                const positions = this._positions.read(reader);
                const edits = [
                    fullEdit,
                    ...getSecondaryEdits(this.textModel, positions, fullEdit)
                ];
                const ghostTexts = edits.map((edit, idx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeGhostText"])(edit, model, mode, positions[idx], fullEditPreviewLength)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDefined"]);
                const primaryGhostText = ghostTexts[0] ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostText"](fullEdit.range.endLineNumber, []);
                return {
                    edits,
                    primaryGhostText,
                    ghostTexts,
                    inlineCompletion: augmentation?.completion,
                    suggestItem
                };
            } else {
                if (!this._isActive.read(reader)) {
                    return undefined;
                }
                const inlineCompletion = this.selectedInlineCompletion.read(reader);
                if (!inlineCompletion) {
                    return undefined;
                }
                const replacement = inlineCompletion.toSingleTextEdit(reader);
                const mode = this._inlineSuggestMode.read(reader);
                const positions = this._positions.read(reader);
                const edits = [
                    replacement,
                    ...getSecondaryEdits(this.textModel, positions, replacement)
                ];
                const ghostTexts = edits.map((edit, idx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeGhostText"])(edit, model, mode, positions[idx], 0)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDefined"]);
                if (!ghostTexts[0]) {
                    return undefined;
                }
                return {
                    edits,
                    primaryGhostText: ghostTexts[0],
                    ghostTexts,
                    inlineCompletion,
                    suggestItem: undefined
                };
            }
        });
        this.ghostTexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ghostTextsOrReplacementsEqual"]
        }, (reader)=>{
            const v = this.state.read(reader);
            if (!v) {
                return undefined;
            }
            return v.ghostTexts;
        });
        this.primaryGhostText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedOpts"])({
            owner: this,
            equalsFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ghostTextOrReplacementEquals"]
        }, (reader)=>{
            const v = this.state.read(reader);
            if (!v) {
                return undefined;
            }
            return v?.primaryGhostText;
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recomputeInitiallyAndOnChange"])(this._fetchInlineCompletionsPromise));
        let lastItem = undefined;
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description call handleItemDidShow */ const item = this.state.read(reader);
            const completion = item?.inlineCompletion;
            if (completion?.semanticId !== lastItem?.semanticId) {
                lastItem = completion;
                if (completion) {
                    const i = completion.inlineCompletion;
                    const src = i.source;
                    src.provider.handleItemDidShow?.(src.inlineCompletions, i.sourceInlineCompletion, i.insertText);
                }
            }
        }));
    }
    _getReason(e) {
        if (e?.isUndoing) {
            return VersionIdChangeReason.Undo;
        }
        if (e?.isRedoing) {
            return VersionIdChangeReason.Redo;
        }
        if (this.isAcceptingPartially) {
            return VersionIdChangeReason.AcceptWord;
        }
        return VersionIdChangeReason.Other;
    }
    async trigger(tx) {
        this._isActive.set(true, tx);
        await this._fetchInlineCompletionsPromise.get();
    }
    async triggerExplicitly(tx) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subtransaction"])(tx, (tx)=>{
            this._isActive.set(true, tx);
            this._forceUpdateExplicitlySignal.trigger(tx);
        });
        await this._fetchInlineCompletionsPromise.get();
    }
    stop(tx) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subtransaction"])(tx, (tx)=>{
            this._isActive.set(false, tx);
            this._source.clear(tx);
        });
    }
    _computeAugmentation(suggestCompletion, reader) {
        const model = this.textModel;
        const suggestWidgetInlineCompletions = this._source.suggestWidgetInlineCompletions.read(reader);
        const candidateInlineCompletions = suggestWidgetInlineCompletions ? suggestWidgetInlineCompletions.inlineCompletions : [
            this.selectedInlineCompletion.read(reader)
        ].filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDefined"]);
        const augmentedCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arraysFind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapFindFirst"])(candidateInlineCompletions, (completion)=>{
            let r = completion.toSingleTextEdit(reader);
            r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(r, model, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(r.range.getStartPosition(), suggestCompletion.range.getEndPosition()));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextEditAugments"])(r, suggestCompletion) ? {
                completion,
                edit: r
            } : undefined;
        });
        return augmentedCompletion;
    }
    async _deltaSelectedInlineCompletionIndex(delta) {
        await this.triggerExplicitly();
        const completions = this._filteredInlineCompletionItems.get() || [];
        if (completions.length > 0) {
            const newIdx = (this.selectedInlineCompletionIndex.get() + delta + completions.length) % completions.length;
            this._selectedInlineCompletionId.set(completions[newIdx].semanticId, undefined);
        } else {
            this._selectedInlineCompletionId.set(undefined, undefined);
        }
    }
    async next() {
        await this._deltaSelectedInlineCompletionIndex(1);
    }
    async previous() {
        await this._deltaSelectedInlineCompletionIndex(-1);
    }
    async accept(editor) {
        if (editor.getModel() !== this.textModel) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BugIndicatingError"]();
        }
        const state = this.state.get();
        if (!state || state.primaryGhostText.isEmpty() || !state.inlineCompletion) {
            return;
        }
        const completion = state.inlineCompletion.toInlineCompletion(undefined);
        if (completion.command) {
            // Make sure the completion list will not be disposed.
            completion.source.addRef();
        }
        editor.pushUndoStop();
        if (completion.snippetInfo) {
            editor.executeEdits('inlineSuggestion.accept', [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(completion.range, ''),
                ...completion.additionalTextEdits
            ]);
            editor.setPosition(completion.snippetInfo.range.getStartPosition(), 'inlineCompletionAccept');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetController2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnippetController2"].get(editor)?.insert(completion.snippetInfo.snippet, {
                undoStopBefore: false
            });
        } else {
            const edits = state.edits;
            const selections = getEndPositionsAfterApplying(edits).map((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"].fromPositions(p));
            editor.executeEdits('inlineSuggestion.accept', [
                ...edits.map((edit)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(edit.range, edit.text)),
                ...completion.additionalTextEdits
            ]);
            editor.setSelections(selections, 'inlineCompletionAccept');
        }
        // Reset before invoking the command, as the command might cause a follow up trigger (which we don't want to reset).
        this.stop();
        if (completion.command) {
            await this._commandService.executeCommand(completion.command.id, ...completion.command.arguments || []).then(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"]);
            completion.source.removeRef();
        }
    }
    async acceptNextWord(editor) {
        await this._acceptNext(editor, (pos, text)=>{
            const langId = this.textModel.getLanguageIdAtPosition(pos.lineNumber, pos.column);
            const config = this._languageConfigurationService.getLanguageConfiguration(langId);
            const wordRegExp = new RegExp(config.wordDefinition.source, config.wordDefinition.flags.replace('g', ''));
            const m1 = text.match(wordRegExp);
            let acceptUntilIndexExclusive = 0;
            if (m1 && m1.index !== undefined) {
                if (m1.index === 0) {
                    acceptUntilIndexExclusive = m1[0].length;
                } else {
                    acceptUntilIndexExclusive = m1.index;
                }
            } else {
                acceptUntilIndexExclusive = text.length;
            }
            const wsRegExp = /\s+/g;
            const m2 = wsRegExp.exec(text);
            if (m2 && m2.index !== undefined) {
                if (m2.index + m2[0].length < acceptUntilIndexExclusive) {
                    acceptUntilIndexExclusive = m2.index + m2[0].length;
                }
            }
            return acceptUntilIndexExclusive;
        }, 0 /* PartialAcceptTriggerKind.Word */ );
    }
    async acceptNextLine(editor) {
        await this._acceptNext(editor, (pos, text)=>{
            const m = text.match(/\n/);
            if (m && m.index !== undefined) {
                return m.index + 1;
            }
            return text.length;
        }, 1 /* PartialAcceptTriggerKind.Line */ );
    }
    async _acceptNext(editor, getAcceptUntilIndex, kind) {
        if (editor.getModel() !== this.textModel) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BugIndicatingError"]();
        }
        const state = this.state.get();
        if (!state || state.primaryGhostText.isEmpty() || !state.inlineCompletion) {
            return;
        }
        const ghostText = state.primaryGhostText;
        const completion = state.inlineCompletion.toInlineCompletion(undefined);
        if (completion.snippetInfo || completion.filterText !== completion.insertText) {
            // not in WYSIWYG mode, partial commit might change completion, thus it is not supported
            await this.accept(editor);
            return;
        }
        const firstPart = ghostText.parts[0];
        const ghostTextPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](ghostText.lineNumber, firstPart.column);
        const ghostTextVal = firstPart.text;
        const acceptUntilIndexExclusive = getAcceptUntilIndex(ghostTextPos, ghostTextVal);
        if (acceptUntilIndexExclusive === ghostTextVal.length && ghostText.parts.length === 1) {
            this.accept(editor);
            return;
        }
        const partialGhostTextVal = ghostTextVal.substring(0, acceptUntilIndexExclusive);
        const positions = this._positions.get();
        const cursorPosition = positions[0];
        // Executing the edit might free the completion, so we have to hold a reference on it.
        completion.source.addRef();
        try {
            this._isAcceptingPartially = true;
            try {
                editor.pushUndoStop();
                const replaceRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(cursorPosition, ghostTextPos);
                const newText = editor.getModel().getValueInRange(replaceRange) + partialGhostTextVal;
                const primaryEdit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](replaceRange, newText);
                const edits = [
                    primaryEdit,
                    ...getSecondaryEdits(this.textModel, positions, primaryEdit)
                ];
                const selections = getEndPositionsAfterApplying(edits).map((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"].fromPositions(p));
                editor.executeEdits('inlineSuggestion.accept', edits.map((edit)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(edit.range, edit.text)));
                editor.setSelections(selections, 'inlineCompletionPartialAccept');
                editor.revealPositionInCenterIfOutsideViewport(editor.getPosition(), 1 /* ScrollType.Immediate */ );
            } finally{
                this._isAcceptingPartially = false;
            }
            if (completion.source.provider.handlePartialAccept) {
                const acceptedRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(completion.range.getStartPosition(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textLength$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextLength"].ofText(partialGhostTextVal).addToPosition(ghostTextPos));
                // This assumes that the inline completion and the model use the same EOL style.
                const text = editor.getModel().getValueInRange(acceptedRange, 1 /* EndOfLinePreference.LF */ );
                completion.source.provider.handlePartialAccept(completion.source.inlineCompletions, completion.sourceInlineCompletion, text.length, {
                    kind
                });
            }
        } finally{
            completion.source.removeRef();
        }
    }
    handleSuggestAccepted(item) {
        const itemEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(item.toSingleTextEdit(), this.textModel);
        const augmentedCompletion = this._computeAugmentation(itemEdit, undefined);
        if (!augmentedCompletion) {
            return;
        }
        const inlineCompletion = augmentedCompletion.completion.inlineCompletion;
        inlineCompletion.source.provider.handlePartialAccept?.(inlineCompletion.source.inlineCompletions, inlineCompletion.sourceInlineCompletion, itemEdit.text.length, {
            kind: 2 /* PartialAcceptTriggerKind.Suggest */ 
        });
    }
};
InlineCompletionsModel = __decorate([
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(10, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(11, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageConfigurationService"])
], InlineCompletionsModel);
;
var VersionIdChangeReason;
(function(VersionIdChangeReason) {
    VersionIdChangeReason[VersionIdChangeReason["Undo"] = 0] = "Undo";
    VersionIdChangeReason[VersionIdChangeReason["Redo"] = 1] = "Redo";
    VersionIdChangeReason[VersionIdChangeReason["AcceptWord"] = 2] = "AcceptWord";
    VersionIdChangeReason[VersionIdChangeReason["Other"] = 3] = "Other";
})(VersionIdChangeReason || (VersionIdChangeReason = {}));
function getSecondaryEdits(textModel, positions, primaryEdit) {
    if (positions.length === 1) {
        // No secondary cursor positions
        return [];
    }
    const primaryPosition = positions[0];
    const secondaryPositions = positions.slice(1);
    const primaryEditStartPosition = primaryEdit.range.getStartPosition();
    const primaryEditEndPosition = primaryEdit.range.getEndPosition();
    const replacedTextAfterPrimaryCursor = textModel.getValueInRange(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(primaryPosition, primaryEditEndPosition));
    const positionWithinTextEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subtractPositions"])(primaryPosition, primaryEditStartPosition);
    if (positionWithinTextEdit.lineNumber < 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedError"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BugIndicatingError"](`positionWithinTextEdit line number should be bigger than 0.
			Invalid subtraction between ${primaryPosition.toString()} and ${primaryEditStartPosition.toString()}`));
        return [];
    }
    const secondaryEditText = substringPos(primaryEdit.text, positionWithinTextEdit);
    return secondaryPositions.map((pos)=>{
        const posEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addPositions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subtractPositions"])(pos, primaryEditStartPosition), primaryEditEndPosition);
        const textAfterSecondaryCursor = textModel.getValueInRange(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(pos, posEnd));
        const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonPrefixLength"])(replacedTextAfterPrimaryCursor, textAfterSecondaryCursor);
        const range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(pos, pos.delta(0, l));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](range, secondaryEditText);
    });
}
function substringPos(text, pos) {
    let subtext = '';
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitLinesIncludeSeparators"])(text);
    for(let i = pos.lineNumber - 1; i < lines.length; i++){
        subtext += lines[i].substring(i === pos.lineNumber - 1 ? pos.column - 1 : 0);
    }
    return subtext;
}
function getEndPositionsAfterApplying(edits) {
    const sortPerm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permutation"].createSortPermutation(edits, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareBy"])((e)=>e.range, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts));
    const edit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextEdit"](sortPerm.apply(edits));
    const sortedNewRanges = edit.getNewRanges();
    const newRanges = sortPerm.inverse().apply(sortedNewRanges);
    return newRanges.map((range)=>range.getEndPosition());
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/suggestWidgetAdaptor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "SuggestItemInfo": (()=>SuggestItemInfo),
    "SuggestWidgetAdaptor": (()=>SuggestWidgetAdaptor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arraysFind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/arraysFind.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/textEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/singleTextEdit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetSession$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetSession.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggestController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js [app-ssr] (ecmascript)");
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
class SuggestWidgetAdaptor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    get selectedItem() {
        return this._currentSuggestItemInfo;
    }
    constructor(editor, suggestControllerPreselector, onWillAccept){
        super();
        this.editor = editor;
        this.suggestControllerPreselector = suggestControllerPreselector;
        this.onWillAccept = onWillAccept;
        this.isSuggestWidgetVisible = false;
        this.isShiftKeyPressed = false;
        this._isActive = false;
        this._currentSuggestItemInfo = undefined;
        this._onDidSelectedItemChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidSelectedItemChange = this._onDidSelectedItemChange.event;
        // See the command acceptAlternativeSelectedSuggestion that is bound to shift+tab
        this._register(editor.onKeyDown((e)=>{
            if (e.shiftKey && !this.isShiftKeyPressed) {
                this.isShiftKeyPressed = true;
                this.update(this._isActive);
            }
        }));
        this._register(editor.onKeyUp((e)=>{
            if (e.shiftKey && this.isShiftKeyPressed) {
                this.isShiftKeyPressed = false;
                this.update(this._isActive);
            }
        }));
        const suggestController = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggestController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuggestController"].get(this.editor);
        if (suggestController) {
            this._register(suggestController.registerSelector({
                priority: 100,
                select: (model, pos, suggestItems)=>{
                    const textModel = this.editor.getModel();
                    if (!textModel) {
                        // Should not happen
                        return -1;
                    }
                    const i = this.suggestControllerPreselector();
                    const itemToPreselect = i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(i, textModel) : undefined;
                    if (!itemToPreselect) {
                        return -1;
                    }
                    const position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].lift(pos);
                    const candidates = suggestItems.map((suggestItem, index)=>{
                        const suggestItemInfo = SuggestItemInfo.fromSuggestion(suggestController, textModel, position, suggestItem, this.isShiftKeyPressed);
                        const suggestItemTextEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextRemoveCommonPrefix"])(suggestItemInfo.toSingleTextEdit(), textModel);
                        const valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$singleTextEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singleTextEditAugments"])(itemToPreselect, suggestItemTextEdit);
                        return {
                            index,
                            valid,
                            prefixLength: suggestItemTextEdit.text.length,
                            suggestItem
                        };
                    }).filter((item)=>item && item.valid && item.prefixLength > 0);
                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arraysFind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findFirstMax"])(candidates, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareBy"])((s)=>s.prefixLength, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberComparator"]));
                    return result ? result.index : -1;
                }
            }));
            let isBoundToSuggestWidget = false;
            const bindToSuggestWidget = ()=>{
                if (isBoundToSuggestWidget) {
                    return;
                }
                isBoundToSuggestWidget = true;
                this._register(suggestController.widget.value.onDidShow(()=>{
                    this.isSuggestWidgetVisible = true;
                    this.update(true);
                }));
                this._register(suggestController.widget.value.onDidHide(()=>{
                    this.isSuggestWidgetVisible = false;
                    this.update(false);
                }));
                this._register(suggestController.widget.value.onDidFocus(()=>{
                    this.isSuggestWidgetVisible = true;
                    this.update(true);
                }));
            };
            this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Event"].once(suggestController.model.onDidTrigger)((e)=>{
                bindToSuggestWidget();
            }));
            this._register(suggestController.onWillInsertSuggestItem((e)=>{
                const position = this.editor.getPosition();
                const model = this.editor.getModel();
                if (!position || !model) {
                    return undefined;
                }
                const suggestItemInfo = SuggestItemInfo.fromSuggestion(suggestController, model, position, e.item, this.isShiftKeyPressed);
                this.onWillAccept(suggestItemInfo);
            }));
        }
        this.update(this._isActive);
    }
    update(newActive) {
        const newInlineCompletion = this.getSuggestItemInfo();
        if (this._isActive !== newActive || !suggestItemInfoEquals(this._currentSuggestItemInfo, newInlineCompletion)) {
            this._isActive = newActive;
            this._currentSuggestItemInfo = newInlineCompletion;
            this._onDidSelectedItemChange.fire();
        }
    }
    getSuggestItemInfo() {
        const suggestController = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggestController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuggestController"].get(this.editor);
        if (!suggestController || !this.isSuggestWidgetVisible) {
            return undefined;
        }
        const focusedItem = suggestController.widget.value.getFocusedItem();
        const position = this.editor.getPosition();
        const model = this.editor.getModel();
        if (!focusedItem || !position || !model) {
            return undefined;
        }
        return SuggestItemInfo.fromSuggestion(suggestController, model, position, focusedItem.item, this.isShiftKeyPressed);
    }
    stopForceRenderingAbove() {
        const suggestController = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggestController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuggestController"].get(this.editor);
        suggestController?.stopForceRenderingAbove();
    }
    forceRenderingAbove() {
        const suggestController = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggestController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuggestController"].get(this.editor);
        suggestController?.forceRenderingAbove();
    }
}
class SuggestItemInfo {
    static fromSuggestion(suggestController, model, position, item, toggleMode) {
        let { insertText } = item.completion;
        let isSnippetText = false;
        if (item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */ ) {
            const snippet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnippetParser"]().parse(insertText);
            if (snippet.children.length < 100) {
                // Adjust whitespace is expensive.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$snippet$2f$browser$2f$snippetSession$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnippetSession"].adjustWhitespace(model, position, true, snippet);
            }
            insertText = snippet.toString();
            isSnippetText = true;
        }
        const info = suggestController.getOverwriteInfo(item, toggleMode);
        return new SuggestItemInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(position.delta(0, -info.overwriteBefore), position.delta(0, Math.max(info.overwriteAfter, 0))), insertText, item.completion.kind, isSnippetText);
    }
    constructor(range, insertText, completionItemKind, isSnippetText){
        this.range = range;
        this.insertText = insertText;
        this.completionItemKind = completionItemKind;
        this.isSnippetText = isSnippetText;
    }
    equals(other) {
        return this.range.equalsRange(other.range) && this.insertText === other.insertText && this.completionItemKind === other.completionItemKind && this.isSnippetText === other.isSnippetText;
    }
    toSelectedSuggestionInfo() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectedSuggestionInfo"](this.range, this.insertText, this.completionItemKind, this.isSnippetText);
    }
    toSingleTextEdit() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$textEdit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleTextEdit"](this.range, this.insertText);
    }
}
function suggestItemInfoEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    return a.equals(b);
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionsController": (()=>InlineCompletionsController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domObservable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/domObservable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/async.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/promise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/observableCodeEditor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatureDebounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commandIds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$view$2f$ghostTextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/view/ghostTextView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionContextKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$inlineCompletionsModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$suggestWidgetAdaptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/suggestWidgetAdaptor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibilitySignal$2f$browser$2f$accessibilitySignalService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/accessibilitySignal/browser/accessibilitySignalService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-ssr] (ecmascript)");
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
var InlineCompletionsController_1;
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
;
;
;
;
;
;
;
;
;
let InlineCompletionsController = class InlineCompletionsController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineCompletionsController_1 = this;
    }
    static{
        this.ID = 'editor.contrib.inlineCompletionsController';
    }
    static get(editor) {
        return editor.getContribution(InlineCompletionsController_1.ID);
    }
    constructor(editor, _instantiationService, _contextKeyService, _configurationService, _commandService, _debounceService, _languageFeaturesService, _accessibilitySignalService, _keybindingService, _accessibilityService){
        super();
        this.editor = editor;
        this._instantiationService = _instantiationService;
        this._contextKeyService = _contextKeyService;
        this._configurationService = _configurationService;
        this._commandService = _commandService;
        this._debounceService = _debounceService;
        this._languageFeaturesService = _languageFeaturesService;
        this._accessibilitySignalService = _accessibilitySignalService;
        this._keybindingService = _keybindingService;
        this._accessibilityService = _accessibilityService;
        this._editorObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableCodeEditor"])(this.editor);
        this._positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>this._editorObs.selections.read(reader)?.map((s)=>s.getEndPosition()) ?? [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](1, 1)
            ]);
        this._suggestWidgetAdaptor = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$suggestWidgetAdaptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuggestWidgetAdaptor"](this.editor, ()=>{
            this._editorObs.forceUpdate();
            return this.model.get()?.selectedInlineCompletion.get()?.toSingleTextEdit(undefined);
        }, (item)=>this._editorObs.forceUpdate((_tx)=>{
                /** @description InlineCompletionsController.handleSuggestAccepted */ this.model.get()?.handleSuggestAccepted(item);
            })));
        this._suggestWidgetSelectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, (cb)=>this._suggestWidgetAdaptor.onDidSelectedItemChange(()=>{
                this._editorObs.forceUpdate((_tx)=>cb(undefined));
            }), ()=>this._suggestWidgetAdaptor.selectedItem);
        this._enabledInConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(62 /* EditorOption.inlineSuggest */ ).enabled);
        this._isScreenReaderEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>this._accessibilityService.isScreenReaderOptimized());
        this._editorDictationInProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this._contextKeyService.onDidChangeContext, ()=>this._contextKeyService.getContext(this.editor.getDomNode()).getValue('editorDictation.inProgress') === true);
        this._enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>this._enabledInConfig.read(reader) && (!this._isScreenReaderEnabled.read(reader) || !this._editorDictationInProgress.read(reader)));
        this._debounceValue = this._debounceService.for(this._languageFeaturesService.inlineCompletionsProvider, 'InlineCompletionsDebounce', {
            min: 50,
            max: 50
        });
        this.model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedDisposable"])(this, (reader)=>{
            if (this._editorObs.isReadonly.read(reader)) {
                return undefined;
            }
            const textModel = this._editorObs.model.read(reader);
            if (!textModel) {
                return undefined;
            }
            const model = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$inlineCompletionsModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsModel"], textModel, this._suggestWidgetSelectedItem, this._editorObs.versionId, this._positions, this._debounceValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(119 /* EditorOption.suggest */ ).preview), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(119 /* EditorOption.suggest */ ).previewMode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(62 /* EditorOption.inlineSuggest */ ).mode), this._enabled);
            return model;
        }).recomputeInitiallyAndOnChange(this._store);
        this._ghostTexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const model = this.model.read(reader);
            return model?.ghostTexts.read(reader) ?? [];
        });
        this._stablizedGhostTexts = convertItemsToStableObservables(this._ghostTexts, this._store);
        this._ghostTextWidgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObservableArrayCached"])(this, this._stablizedGhostTexts, (ghostText, store)=>store.add(this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$view$2f$ghostTextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextView"], this.editor, {
                ghostText: ghostText,
                minReservedLineCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(0),
                targetTextModel: this.model.map((v)=>v?.textModel)
            }))).recomputeInitiallyAndOnChange(this._store);
        this._playAccessibilitySignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignal"])(this);
        this._fontFamily = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(62 /* EditorOption.inlineSuggest */ ).fontFamily);
        this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"](this._contextKeyService, this.model));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactToChange"])(this._editorObs.onDidType, (_value, _changes)=>{
            if (this._enabled.get()) {
                this.model.get()?.trigger();
            }
        }));
        this._register(this._commandService.onDidExecuteCommand((e)=>{
            // These commands don't trigger onDidType.
            const commands = new Set([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreEditingCommands"].Tab.id,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreEditingCommands"].DeleteLeft.id,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$coreCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreEditingCommands"].DeleteRight.id,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineSuggestCommitId"],
                'acceptSelectedSuggestion'
            ]);
            if (commands.has(e.commandId) && editor.hasTextFocus() && this._enabled.get()) {
                this._editorObs.forceUpdate((tx)=>{
                    /** @description onDidExecuteCommand */ this.model.get()?.trigger(tx);
                });
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactToChange"])(this._editorObs.selections, (_value, changes)=>{
            if (changes.some((e)=>e.reason === 3 /* CursorChangeReason.Explicit */  || e.source === 'api')) {
                this.model.get()?.stop();
            }
        }));
        this._register(this.editor.onDidBlurEditorWidget(()=>{
            // This is a hidden setting very useful for debugging
            if (this._contextKeyService.getContextKeyValue('accessibleViewIsShown') || this._configurationService.getValue('editor.inlineSuggest.keepOnBlur') || editor.getOption(62 /* EditorOption.inlineSuggest */ ).keepOnBlur || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineSuggestionHintsContentWidget"].dropDownVisible) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                /** @description InlineCompletionsController.onDidBlurEditorWidget */ this.model.get()?.stop(tx);
            });
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description InlineCompletionsController.forceRenderingAbove */ const state = this.model.read(reader)?.state.read(reader);
            if (state?.suggestItem) {
                if (state.primaryGhostText.lineCount >= 2) {
                    this._suggestWidgetAdaptor.forceRenderingAbove();
                }
            } else {
                this._suggestWidgetAdaptor.stopForceRenderingAbove();
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            this._suggestWidgetAdaptor.stopForceRenderingAbove();
        }));
        const currentInlineCompletionBySemanticId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedObservableWithCache"])(this, (reader, last)=>{
            const model = this.model.read(reader);
            const state = model?.state.read(reader);
            if (this._suggestWidgetSelectedItem.get()) {
                return last;
            }
            return state?.inlineCompletion?.semanticId;
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactToChangeWithStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])((reader)=>{
            this._playAccessibilitySignal.read(reader);
            currentInlineCompletionBySemanticId.read(reader);
            return {};
        }), async (_value, _deltas, store)=>{
            /** @description InlineCompletionsController.playAccessibilitySignalAndReadSuggestion */ const model = this.model.get();
            const state = model?.state.get();
            if (!state || !model) {
                return;
            }
            const lineText = model.textModel.getLineContent(state.primaryGhostText.lineNumber);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeout"])(50, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelOnDispose"])(store));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForState"])(this._suggestWidgetSelectedItem, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"], ()=>false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelOnDispose"])(store));
            await this._accessibilitySignalService.playSignal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibilitySignal$2f$browser$2f$accessibilitySignalService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessibilitySignal"].inlineSuggestion);
            if (this.editor.getOption(8 /* EditorOption.screenReaderAnnounceInlineSuggestion */ )) {
                this._provideScreenReaderUpdate(state.primaryGhostText.renderForScreenReader(lineText));
            }
        }));
        this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsHintsWidget"](this.editor, this.model, this._instantiationService));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domObservable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyleSheetFromObservable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])((reader)=>{
            const fontFamily = this._fontFamily.read(reader);
            if (fontFamily === '' || fontFamily === 'default') {
                return '';
            }
            return `
.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .ghost-text {
	font-family: ${fontFamily};
}`;
        })));
        // TODO@hediet
        this._register(this._configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration('accessibility.verbosity.inlineCompletions')) {
                this.editor.updateOptions({
                    inlineCompletionsAccessibilityVerbose: this._configurationService.getValue('accessibility.verbosity.inlineCompletions')
                });
            }
        }));
        this.editor.updateOptions({
            inlineCompletionsAccessibilityVerbose: this._configurationService.getValue('accessibility.verbosity.inlineCompletions')
        });
    }
    playAccessibilitySignal(tx) {
        this._playAccessibilitySignal.trigger(tx);
    }
    _provideScreenReaderUpdate(content) {
        const accessibleViewShowing = this._contextKeyService.getContextKeyValue('accessibleViewIsShown');
        const accessibleViewKeybinding = this._keybindingService.lookupKeybinding('editor.action.accessibleView');
        let hint;
        if (!accessibleViewShowing && accessibleViewKeybinding && this.editor.getOption(150 /* EditorOption.inlineCompletionsAccessibilityVerbose */ )) {
            hint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('showAccessibleViewHint', "Inspect this in the accessible view ({0})", accessibleViewKeybinding.getAriaLabel());
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alert"])(hint ? content + ', ' + hint : content);
    }
    shouldShowHoverAt(range) {
        const ghostText = this.model.get()?.primaryGhostText.get();
        if (ghostText) {
            return ghostText.parts.some((p)=>range.containsPosition(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](ghostText.lineNumber, p.column)));
        }
        return false;
    }
    shouldShowHoverAtViewZone(viewZoneId) {
        return this._ghostTextWidgets.get()[0]?.ownsViewZone(viewZoneId) ?? false;
    }
};
InlineCompletionsController = InlineCompletionsController_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatureDebounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeatureDebounceService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibilitySignal$2f$browser$2f$accessibilitySignalService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IAccessibilitySignalService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IAccessibilityService"])
], InlineCompletionsController);
;
function convertItemsToStableObservables(items, store) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])('result', []);
    const innerObservables = [];
    store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
        const itemsValue = items.read(reader);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
            if (itemsValue.length !== innerObservables.length) {
                innerObservables.length = itemsValue.length;
                for(let i = 0; i < innerObservables.length; i++){
                    if (!innerObservables[i]) {
                        innerObservables[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])('item', itemsValue[i]);
                    }
                }
                result.set([
                    ...innerObservables
                ], tx);
            }
            innerObservables.forEach((o, i)=>o.set(itemsValue[i], tx));
        });
    }));
    return result;
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commands.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AcceptInlineCompletion": (()=>AcceptInlineCompletion),
    "AcceptNextLineOfInlineCompletion": (()=>AcceptNextLineOfInlineCompletion),
    "AcceptNextWordOfInlineCompletion": (()=>AcceptNextWordOfInlineCompletion),
    "HideInlineCompletion": (()=>HideInlineCompletion),
    "ShowNextInlineSuggestionAction": (()=>ShowNextInlineSuggestionAction),
    "ShowPreviousInlineSuggestionAction": (()=>ShowPreviousInlineSuggestionAction),
    "ToggleAlwaysShowInlineSuggestionToolbar": (()=>ToggleAlwaysShowInlineSuggestionToolbar),
    "TriggerInlineSuggestionAction": (()=>TriggerInlineSuggestionAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commandIds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionContextKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
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
class ShowNextInlineSuggestionAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    static{
        this.ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showNextInlineSuggestionActionId"];
    }
    constructor(){
        super({
            id: ShowNextInlineSuggestionAction.ID,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.showNext', "Show Next Inline Suggestion"),
            alias: 'Show Next Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible),
            kbOpts: {
                weight: 100,
                primary: 512 /* KeyMod.Alt */  | 94 /* KeyCode.BracketRight */ 
            }
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        controller?.model.get()?.next();
    }
}
class ShowPreviousInlineSuggestionAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    static{
        this.ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showPreviousInlineSuggestionActionId"];
    }
    constructor(){
        super({
            id: ShowPreviousInlineSuggestionAction.ID,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.showPrevious', "Show Previous Inline Suggestion"),
            alias: 'Show Previous Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible),
            kbOpts: {
                weight: 100,
                primary: 512 /* KeyMod.Alt */  | 92 /* KeyCode.BracketLeft */ 
            }
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        controller?.model.get()?.previous();
    }
}
class TriggerInlineSuggestionAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.inlineSuggest.trigger',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.trigger', "Trigger Inline Suggestion"),
            alias: 'Trigger Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asyncTransaction"])(async (tx)=>{
            /** @description triggerExplicitly from command */ await controller?.model.get()?.triggerExplicitly(tx);
            controller?.playAccessibilitySignal(tx);
        });
    }
}
class AcceptNextWordOfInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.inlineSuggest.acceptNextWord',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.acceptNextWord', "Accept Next Word Of Inline Suggestion"),
            alias: 'Accept Next Word Of Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible),
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */  + 1,
                primary: 2048 /* KeyMod.CtrlCmd */  | 17 /* KeyCode.RightArrow */ ,
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible)
            },
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineSuggestionToolbar,
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('acceptWord', 'Accept Word'),
                    group: 'primary',
                    order: 2
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        await controller?.model.get()?.acceptNextWord(controller.editor);
    }
}
class AcceptNextLineOfInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: 'editor.action.inlineSuggest.acceptNextLine',
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.acceptNextLine', "Accept Next Line Of Inline Suggestion"),
            alias: 'Accept Next Line Of Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible),
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */  + 1
            },
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineSuggestionToolbar,
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('acceptLine', 'Accept Line'),
                    group: 'secondary',
                    order: 2
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        await controller?.model.get()?.acceptNextLine(controller.editor);
    }
}
class AcceptInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineSuggestCommitId"],
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.accept', "Accept Inline Suggestion"),
            alias: 'Accept Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible,
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineSuggestionToolbar,
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('accept', "Accept"),
                    group: 'primary',
                    order: 1
                }
            ],
            kbOpts: {
                primary: 2 /* KeyCode.Tab */ ,
                weight: 200,
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].tabMovesFocus.toNegated(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionHasIndentationLessThanTabSize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$suggest$2f$browser$2f$suggest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Context"].Visible.toNegated(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused.toNegated())
            }
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        if (controller) {
            controller.model.get()?.accept(controller.editor);
            controller.editor.focus();
        }
    }
}
class HideInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    static{
        this.ID = 'editor.action.inlineSuggest.hide';
    }
    constructor(){
        super({
            id: HideInlineCompletion.ID,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.hide', "Hide Inline Suggestion"),
            alias: 'Hide Inline Suggestion',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionContextKeys"].inlineSuggestionVisible,
            kbOpts: {
                weight: 100,
                primary: 9 /* KeyCode.Escape */ 
            }
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(editor);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
            controller?.model.get()?.stop(tx);
        });
    }
}
class ToggleAlwaysShowInlineSuggestionToolbar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action2"] {
    static{
        this.ID = 'editor.action.inlineSuggest.toggleAlwaysShowToolbar';
    }
    constructor(){
        super({
            id: ToggleAlwaysShowInlineSuggestionToolbar.ID,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('action.inlineSuggest.alwaysShowToolbar', "Always Show Toolbar"),
            f1: false,
            precondition: undefined,
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineSuggestionToolbar,
                    group: 'secondary',
                    order: 10
                }
            ],
            toggled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].equals('config.editor.inlineSuggest.showToolbar', 'always')
        });
    }
    async run(accessor, editor) {
        const configService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IConfigurationService"]);
        const currentValue = configService.getValue('editor.inlineSuggest.showToolbar');
        const newValue = currentValue === 'always' ? 'onHover' : 'always';
        configService.updateValue('editor.inlineSuggest.showToolbar', newValue);
    }
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/hoverParticipant.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineCompletionsHover": (()=>InlineCompletionsHover),
    "InlineCompletionsHoverParticipant": (()=>InlineCompletionsHoverParticipant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
class InlineCompletionsHover {
    constructor(owner, range, controller){
        this.owner = owner;
        this.range = range;
        this.controller = controller;
    }
    isValidForHoverAnchor(anchor) {
        return anchor.type === 1 /* HoverAnchorType.Range */  && this.range.startColumn <= anchor.range.startColumn && this.range.endColumn >= anchor.range.endColumn;
    }
}
let InlineCompletionsHoverParticipant = class InlineCompletionsHoverParticipant {
    constructor(_editor, _languageService, _openerService, accessibilityService, _instantiationService, _telemetryService){
        this._editor = _editor;
        this._languageService = _languageService;
        this._openerService = _openerService;
        this.accessibilityService = accessibilityService;
        this._instantiationService = _instantiationService;
        this._telemetryService = _telemetryService;
        this.hoverOrdinal = 4;
    }
    suggestHoverAnchor(mouseEvent) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(this._editor);
        if (!controller) {
            return null;
        }
        const target = mouseEvent.target;
        if (target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ ) {
            // handle the case where the mouse is over the view zone
            const viewZoneData = target.detail;
            if (controller.shouldShowHoverAtViewZone(viewZoneData.viewZoneId)) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverForeignElementAnchor"](1000, this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(this._editor.getModel().validatePosition(viewZoneData.positionBefore || viewZoneData.position)), mouseEvent.event.posx, mouseEvent.event.posy, false);
            }
        }
        if (target.type === 7 /* MouseTargetType.CONTENT_EMPTY */ ) {
            // handle the case where the mouse is over the empty portion of a line following ghost text
            if (controller.shouldShowHoverAt(target.range)) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverForeignElementAnchor"](1000, this, target.range, mouseEvent.event.posx, mouseEvent.event.posy, false);
            }
        }
        if (target.type === 6 /* MouseTargetType.CONTENT_TEXT */ ) {
            // handle the case where the mouse is directly over ghost text
            const mightBeForeignElement = target.detail.mightBeForeignElement;
            if (mightBeForeignElement && controller.shouldShowHoverAt(target.range)) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverForeignElementAnchor"](1000, this, target.range, mouseEvent.event.posx, mouseEvent.event.posy, false);
            }
        }
        return null;
    }
    computeSync(anchor, lineDecorations) {
        if (this._editor.getOption(62 /* EditorOption.inlineSuggest */ ).showToolbar !== 'onHover') {
            return [];
        }
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].get(this._editor);
        if (controller && controller.shouldShowHoverAt(anchor.range)) {
            return [
                new InlineCompletionsHover(this, anchor.range, controller)
            ];
        }
        return [];
    }
    renderHoverParts(context, hoverParts) {
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const part = hoverParts[0];
        this._telemetryService.publicLog2('inlineCompletionHover.shown');
        if (this.accessibilityService.isScreenReaderOptimized() && !this._editor.getOption(8 /* EditorOption.screenReaderAnnounceInlineSuggestion */ )) {
            disposables.add(this.renderScreenReaderText(context, part));
        }
        const model = part.controller.model.get();
        const w = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineSuggestionHintsContentWidget"], this._editor, false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(null), model.selectedInlineCompletionIndex, model.inlineCompletionsCount, model.activeCommands);
        const widgetNode = w.getDomNode();
        context.fragment.appendChild(widgetNode);
        model.triggerExplicitly();
        disposables.add(w);
        const renderedHoverPart = {
            hoverPart: part,
            hoverElement: widgetNode,
            dispose () {
                disposables.dispose();
            }
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderedHoverParts"]([
            renderedHoverPart
        ]);
    }
    renderScreenReaderText(context, part) {
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$"];
        const markdownHoverElement = $('div.hover-row.markdown-hover');
        const hoverContentsElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(markdownHoverElement, $('div.hover-contents', {
            ['aria-live']: 'assertive'
        }));
        const renderer = disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownRenderer"]({
            editor: this._editor
        }, this._languageService, this._openerService));
        const render = (code)=>{
            disposables.add(renderer.onDidRenderAsync(()=>{
                hoverContentsElement.className = 'hover-contents code-hover-contents';
                context.onContentsChanged();
            }));
            const inlineSuggestionAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('inlineSuggestionFollows', "Suggestion:");
            const renderedContents = disposables.add(renderer.render(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText(inlineSuggestionAvailable).appendCodeblock('text', code)));
            hoverContentsElement.replaceChildren(renderedContents.element);
        };
        disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update hover */ const ghostText = part.controller.model.read(reader)?.primaryGhostText.read(reader);
            if (ghostText) {
                const lineText = this._editor.getModel().getLineContent(ghostText.lineNumber);
                render(ghostText.renderForScreenReader(lineText));
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reset"])(hoverContentsElement);
            }
        }));
        context.fragment.appendChild(markdownHoverElement);
        return disposables;
    }
};
InlineCompletionsHoverParticipant = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IOpenerService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IAccessibilityService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITelemetryService"])
], InlineCompletionsHoverParticipant);
;
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletionsAccessibleView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InlineCompletionsAccessibleView": (()=>InlineCompletionsAccessibleView)
});
class InlineCompletionsAccessibleView {
}
}}),
"[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$hoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/hoverParticipant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$inlineCompletionsAccessibleView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletionsAccessibleView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/accessibility/browser/accessibleViewRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorContribution"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"].ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$inlineCompletionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsController"], 3 /* EditorContributionInstantiation.Eventually */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriggerInlineSuggestionAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowNextInlineSuggestionAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowPreviousInlineSuggestionAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AcceptNextWordOfInlineCompletion"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AcceptNextLineOfInlineCompletion"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AcceptInlineCompletion"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HideInlineCompletion"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAction2"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$controller$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAlwaysShowInlineSuggestionToolbar"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverParticipantRegistry"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$hoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsHoverParticipant"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessibleViewRegistry"].register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$inlineCompletionsAccessibleView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineCompletionsAccessibleView"]());
}}),

};

//# sourceMappingURL=dd92d_modules_monaco-editor_esm_vs_editor_contrib_inlineCompletions_browser_c53dffe7._.js.map