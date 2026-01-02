module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Desktop/ai-powered-todo-list/lib/ai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "model",
    ()=>model,
    "smartModel",
    ()=>smartModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$vertexai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-vertexai/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$vertexai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-vertexai/dist/chat_models.js [app-rsc] (ecmascript)");
;
const model = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$vertexai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatVertexAI"]({
    model: "gemini-1.5-flash",
    temperature: 0.7,
    maxRetries: 2
});
const smartModel = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$vertexai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatVertexAI"]({
    model: "gemini-1.5-pro",
    temperature: 0.2
});
}),
"[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4070eac9598a0b47f895303224e18c16df77b572ba":"parseTaskAction","606a87d3906c4024be62e0a4fa88ba6264bfec7d81":"generateSubtasksAction"},"",""] */ __turbopack_context__.s([
    "generateSubtasksAction",
    ()=>generateSubtasksAction,
    "parseTaskAction",
    ()=>parseTaskAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/lib/ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/human.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/system.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const TaskSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The main title of the task"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Additional details or context"),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("ISO date string if a date is mentioned"),
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'low',
        'medium',
        'high'
    ]).optional().describe("Priority level inferred from urgency"),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("Relevant categories or labels")
});
const SubtaskSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    subtasks: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The subtask title"),
        completed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().describe("Always false initially")
    })).describe("A list of subtasks to complete the main task")
});
async function generateSubtasksAction(taskTitle, taskDescription) {
    try {
        const structuredLlm = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["smartModel"].withStructuredOutput(SubtaskSchema);
        const input = `Task: ${taskTitle}\n${taskDescription ? `Description: ${taskDescription}` : ''}\n\nBreak this task down into 3-5 actionable subtasks.`;
        const response = await structuredLlm.invoke([
            new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SystemMessage"]("You are an expert project manager. Break down tasks into clear, actionable steps."),
            new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HumanMessage"](input)
        ]);
        return {
            success: true,
            data: response.subtasks
        };
    } catch (error) {
        console.error("AI Subtask Error:", error);
        return {
            success: false,
            error: "Failed to generate subtasks"
        };
    }
}
async function parseTaskAction(input) {
    try {
        const structuredLlm = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["smartModel"].withStructuredOutput(TaskSchema);
        const response = await structuredLlm.invoke([
            new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SystemMessage"]("You are a helpful assistant that extracts task details from natural language input. Today is " + new Date().toISOString()),
            new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HumanMessage"](input)
        ]);
        return {
            success: true,
            data: response
        };
    } catch (error) {
        console.error("AI Parse Error:", error);
        return {
            success: false,
            error: "Failed to parse task"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateSubtasksAction,
    parseTaskAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateSubtasksAction, "606a87d3906c4024be62e0a4fa88ba6264bfec7d81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(parseTaskAction, "4070eac9598a0b47f895303224e18c16df77b572ba", null);
}),
"[project]/Desktop/ai-powered-todo-list/.next-internal/server/app/tasks/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$actions$2f$aiActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/ai-powered-todo-list/.next-internal/server/app/tasks/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "606a87d3906c4024be62e0a4fa88ba6264bfec7d81",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$actions$2f$aiActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSubtasksAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f2e$next$2d$internal$2f$server$2f$app$2f$tasks$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$actions$2f$aiActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/ai-powered-todo-list/.next-internal/server/app/tasks/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$actions$2f$aiActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/actions/aiActions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4075b9f._.js.map