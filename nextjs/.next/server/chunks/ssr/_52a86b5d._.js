module.exports = {

"[project]/app/actions/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// API call to send code to job queue
__turbopack_context__.s({
    "executeCode": (()=>executeCode),
    "getJob": (()=>getJob)
});
async function executeCode(c, l) {
    const response = await fetch('http://localhost:8000/api/submit_code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: c,
            language: l
        })
    });
    return await response.json();
}
async function getJob(job_id) {
    const response = await fetch(`http://localhost:8000/api/get_result/${job_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}
}}),
"[project]/app/components/ide.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/components/ide.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_52a86b5d._.js.map