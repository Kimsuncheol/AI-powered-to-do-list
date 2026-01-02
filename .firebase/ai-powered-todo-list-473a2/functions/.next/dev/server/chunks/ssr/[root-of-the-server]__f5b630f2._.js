module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/https-proxy-agent/dist/index.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__0edebb71._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Desktop/ai-powered-todo-list/node_modules/https-proxy-agent/dist/index.js [app-rsc] (ecmascript)");
    });
});
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/node-fetch/src/index.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/c6698_node-fetch_src_utils_multipart-parser_b3149e62.js",
  "server/chunks/ssr/c6698_7dfe9945._.js",
  "server/chunks/ssr/[externals]__87f6e720._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Desktop/ai-powered-todo-list/node_modules/node-fetch/src/index.js [app-rsc] (ecmascript)");
    });
});
}),
];