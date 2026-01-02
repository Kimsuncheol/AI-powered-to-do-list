(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-telemetry/esm/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "config": {
        "isInitialized": true
    },
    "traits": {
        "isDocker": false,
        "isCI": false,
        "machineId": null,
        "projectId": "b28c94b2195c8ed259f0b415aaee3f39b0b2920a4537611499fa044956917a21",
        "sessionId": "cda7995298976852bb889858b58cafd285b04ec361633444ff93460a86cd8327",
        "anonymousId": "b9b98ecd90507d2e975ef7eac3f6072f7542d813133641eee3db25a047a56b7b"
    }
};
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-telemetry/esm/runtime/window-storage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWindowStorageItem",
    ()=>getWindowStorageItem,
    "setWindowStorageItem",
    ()=>setWindowStorageItem
]);
const prefix = '__mui_x_telemetry_';
function getStorageKey(key) {
    return prefix + btoa(key);
}
function setWindowStorageItem(type, key, value) {
    try {
        if (typeof window !== 'undefined' && window[type]) {
            window[type].setItem(getStorageKey(key), value);
            return true;
        }
    } catch (_) {
    // Storage is unavailable, skip it
    }
    return false;
}
function getWindowStorageItem(type, key) {
    try {
        if (typeof window !== 'undefined' && window[type]) {
            return window[type].getItem(getStorageKey(key));
        }
    } catch (_) {
    // Storage is unavailable, skip it
    }
    return null;
}
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-telemetry/esm/runtime/get-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-telemetry/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@mui/x-telemetry/esm/runtime/window-storage.js [app-client] (ecmascript)");
;
;
;
function generateId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while(counter < length){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function pick(obj, keys) {
    return keys.reduce((acc, key)=>{
        acc[key] = obj[key];
        return acc;
    }, {});
}
const getBrowserFingerprint = typeof window === 'undefined' || ("TURBOPACK compile-time value", "development") === 'test' ? ()=>undefined : async ()=>{
    const fingerprintLCKey = 'fingerprint';
    try {
        const existingFingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowStorageItem"])('localStorage', fingerprintLCKey);
        if (existingFingerprint) {
            return JSON.parse(existingFingerprint);
        }
        const FingerprintJS = await __turbopack_context__.A("[project]/Desktop/ai-powered-todo-list/node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js [app-client] (ecmascript, async loader)");
        const fp = await FingerprintJS.load({
            monitoring: false
        });
        const fpResult = await fp.get();
        const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, fpResult.components);
        delete components.cookiesEnabled;
        const fullHash = FingerprintJS.hashComponents(components);
        const coreHash = FingerprintJS.hashComponents((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, pick(components, [
            'fonts',
            'audio',
            'languages',
            'deviceMemory',
            'timezone',
            'sessionStorage',
            'localStorage',
            'indexedDB',
            'openDatabase',
            'platform',
            'canvas',
            'vendor',
            'vendorFlavors',
            'colorGamut',
            'forcedColors',
            'monochrome',
            'contrast',
            'reducedMotion',
            'math',
            'videoCard',
            'architecture'
        ])));
        const result = {
            fullHash,
            coreHash
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWindowStorageItem"])('localStorage', fingerprintLCKey, JSON.stringify(result));
        return result;
    } catch (_) {
        return null;
    }
};
function getAnonymousId() {
    const localStorageKey = 'anonymous_id';
    const existingAnonymousId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowStorageItem"])('localStorage', localStorageKey);
    if (existingAnonymousId) {
        return existingAnonymousId;
    }
    const generated = `anid_${generateId(32)}`;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWindowStorageItem"])('localStorage', localStorageKey, generated)) {
        return generated;
    }
    return '';
}
function getSessionId() {
    const localStorageKey = 'session_id';
    const existingSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowStorageItem"])('sessionStorage', localStorageKey);
    if (existingSessionId) {
        return existingSessionId;
    }
    const generated = `sesid_${generateId(32)}`;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$window$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWindowStorageItem"])('sessionStorage', localStorageKey, generated)) {
        return generated;
    }
    return `sestp_${generateId(32)}`;
}
async function getTelemetryContext() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traits.sessionId = getSessionId();
    // Initialize the context if it hasn't been initialized yet
    // (e.g. postinstall not run)
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].config.isInitialized) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traits.anonymousId = getAnonymousId();
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].config.isInitialized = true;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traits.fingerprint) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traits.fingerprint = await getBrowserFingerprint();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}
const __TURBOPACK__default__export__ = getTelemetryContext;
}),
]);

//# sourceMappingURL=c6698_%40mui_x-telemetry_esm_e185866b._.js.map