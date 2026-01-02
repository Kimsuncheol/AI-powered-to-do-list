module.exports = [
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeminiSearchToolAttributes",
    ()=>GeminiSearchToolAttributes,
    "GeminiToolAttributes",
    ()=>GeminiToolAttributes,
    "GoogleAISafetyCategory",
    ()=>GoogleAISafetyCategory,
    "GoogleAISafetyMethod",
    ()=>GoogleAISafetyMethod,
    "GoogleAISafetyThreshold",
    ()=>GoogleAISafetyThreshold
]);
//#region src/types.ts
const GoogleAISafetyCategory = {
    Harassment: "HARM_CATEGORY_HARASSMENT",
    HARASSMENT: "HARM_CATEGORY_HARASSMENT",
    HARM_CATEGORY_HARASSMENT: "HARM_CATEGORY_HARASSMENT",
    HateSpeech: "HARM_CATEGORY_HATE_SPEECH",
    HATE_SPEECH: "HARM_CATEGORY_HATE_SPEECH",
    HARM_CATEGORY_HATE_SPEECH: "HARM_CATEGORY_HATE_SPEECH",
    SexuallyExplicit: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    SEXUALLY_EXPLICIT: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    HARM_CATEGORY_SEXUALLY_EXPLICIT: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    Dangerous: "HARM_CATEGORY_DANGEROUS",
    DANGEROUS: "HARM_CATEGORY_DANGEROUS",
    HARM_CATEGORY_DANGEROUS: "HARM_CATEGORY_DANGEROUS",
    CivicIntegrity: "HARM_CATEGORY_CIVIC_INTEGRITY",
    CIVIC_INTEGRITY: "HARM_CATEGORY_CIVIC_INTEGRITY",
    HARM_CATEGORY_CIVIC_INTEGRITY: "HARM_CATEGORY_CIVIC_INTEGRITY"
};
const GoogleAISafetyThreshold = {
    None: "BLOCK_NONE",
    NONE: "BLOCK_NONE",
    BLOCK_NONE: "BLOCK_NONE",
    Few: "BLOCK_ONLY_HIGH",
    FEW: "BLOCK_ONLY_HIGH",
    BLOCK_ONLY_HIGH: "BLOCK_ONLY_HIGH",
    Some: "BLOCK_MEDIUM_AND_ABOVE",
    SOME: "BLOCK_MEDIUM_AND_ABOVE",
    BLOCK_MEDIUM_AND_ABOVE: "BLOCK_MEDIUM_AND_ABOVE",
    Most: "BLOCK_LOW_AND_ABOVE",
    MOST: "BLOCK_LOW_AND_ABOVE",
    BLOCK_LOW_AND_ABOVE: "BLOCK_LOW_AND_ABOVE",
    Off: "OFF",
    OFF: "OFF",
    BLOCK_OFF: "OFF"
};
const GoogleAISafetyMethod = {
    Severity: "SEVERITY",
    Probability: "PROBABILITY"
};
const GeminiSearchToolAttributes = [
    "googleSearchRetrieval",
    "googleSearch"
];
const GeminiToolAttributes = [
    "functionDeclaration",
    "retrieval",
    "urlContext",
    ...GeminiSearchToolAttributes
];
;
 //# sourceMappingURL=types.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/safety.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAISafetyError",
    ()=>GoogleAISafetyError
]);
//#region src/utils/safety.ts
var GoogleAISafetyError = class extends Error {
    response;
    reply = "";
    constructor(response, message){
        super(message);
        this.response = response;
    }
};
;
 //# sourceMappingURL=safety.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adjustObjectType",
    ()=>adjustObjectType,
    "jsonSchemaToGeminiParameters",
    ()=>jsonSchemaToGeminiParameters,
    "removeAdditionalProperties",
    ()=>removeAdditionalProperties,
    "schemaToGeminiParameters",
    ()=>schemaToGeminiParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/types/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/types/zod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/json_schema.js [app-rsc] (ecmascript) <locals>");
;
;
//#region src/utils/zod_to_gemini_parameters.ts
function adjustObjectType(obj) {
    if (!Array.isArray(obj.type)) return obj;
    const len = obj.type.length;
    const nullIndex = obj.type.indexOf("null");
    if (len === 2 && nullIndex >= 0) {
        const typeIndex = nullIndex === 0 ? 1 : 0;
        obj.type = obj.type[typeIndex];
        obj.nullable = true;
    } else if (len === 1 && nullIndex === 0) throw new Error("zod_to_gemini_parameters: Gemini cannot handle null type");
    else if (len === 1) obj.type = obj?.type[0];
    else throw new Error("zod_to_gemini_parameters: Gemini cannot handle union types");
    return obj;
}
function removeAdditionalProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
        const newObj = {
            ...obj
        };
        if ("additionalProperties" in newObj) delete newObj.additionalProperties;
        if ("anyOf" in newObj || "oneOf" in newObj) throw new Error("zod_to_gemini_parameters: Gemini cannot handle union types (discriminatedUnion, anyOf, oneOf). Consider using a flat object structure with optional fields instead.");
        if ("exclusiveMinimum" in newObj && newObj.exclusiveMinimum === 0) {
            newObj.minimum = .01;
            delete newObj.exclusiveMinimum;
        } else if ("exclusiveMinimum" in newObj) {
            newObj.minimum = newObj.exclusiveMinimum + 1e-5;
            delete newObj.exclusiveMinimum;
        }
        adjustObjectType(newObj);
        for(const key in newObj)if (key in newObj) {
            if (Array.isArray(newObj[key])) newObj[key] = newObj[key].map(removeAdditionalProperties);
            else if (typeof newObj[key] === "object" && newObj[key] !== null) newObj[key] = removeAdditionalProperties(newObj[key]);
        }
        return newObj;
    }
    return obj;
}
function schemaToGeminiParameters(schema) {
    const jsonSchema = removeAdditionalProperties((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInteropZodSchema"])(schema) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toJsonSchema"])(schema) : schema);
    const { $schema, ...rest } = jsonSchema;
    return rest;
}
function jsonSchemaToGeminiParameters(schema) {
    const jsonSchema = removeAdditionalProperties(schema);
    const { $schema, ...rest } = jsonSchema;
    return rest;
}
;
 //# sourceMappingURL=zod_to_gemini_parameters.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultGeminiSafetyHandler",
    ()=>DefaultGeminiSafetyHandler,
    "MessageGeminiSafetyHandler",
    ()=>MessageGeminiSafetyHandler,
    "getGeminiAPI",
    ()=>getGeminiAPI,
    "isModelGemini",
    ()=>isModelGemini,
    "isModelGemma",
    ()=>isModelGemma,
    "normalizeSpeechConfig",
    ()=>normalizeSpeechConfig,
    "validateGeminiParams",
    ()=>validateGeminiParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/safety.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/outputs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/ai.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/human.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/system.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/tool.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/content/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/stream.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$function_calling$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/function_calling.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/tools/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
;
//#region src/utils/gemini.ts
var DefaultGeminiSafetyHandler = class {
    errorFinish = [
        "SAFETY",
        "RECITATION",
        "OTHER"
    ];
    constructor(settings){
        this.errorFinish = settings?.errorFinish ?? this.errorFinish;
    }
    handleDataPromptFeedback(response, data) {
        const promptFeedback = data?.promptFeedback;
        const blockReason = promptFeedback?.blockReason;
        if (blockReason) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAISafetyError"](response, `Prompt blocked: ${blockReason}`);
        return data;
    }
    handleDataFinishReason(response, data) {
        const firstCandidate = data?.candidates?.[0];
        const finishReason = firstCandidate?.finishReason;
        if (this.errorFinish.includes(finishReason)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAISafetyError"](response, `Finish reason: ${finishReason}`);
        return data;
    }
    handleData(response, data) {
        let ret = data;
        ret = this.handleDataPromptFeedback(response, ret);
        ret = this.handleDataFinishReason(response, ret);
        return ret;
    }
    handle(response) {
        let newdata;
        if ("nextChunk" in response.data) newdata = response.data;
        else if (Array.isArray(response.data)) try {
            newdata = response.data.map((item)=>this.handleData(response, item));
        } catch (xx) {
            if (xx instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAISafetyError"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAISafetyError"](response, xx.message);
            else throw xx;
        }
        else {
            const data = response.data;
            newdata = this.handleData(response, data);
        }
        return {
            ...response,
            data: newdata
        };
    }
};
var MessageGeminiSafetyHandler = class extends DefaultGeminiSafetyHandler {
    msg = "";
    forceNewMessage = false;
    constructor(settings){
        super(settings);
        this.msg = settings?.msg ?? this.msg;
        this.forceNewMessage = settings?.forceNewMessage ?? this.forceNewMessage;
    }
    setMessage(data) {
        const ret = data;
        if (this.forceNewMessage || !data?.candidates?.[0]?.content?.parts?.length) {
            ret.candidates = data.candidates ?? [];
            ret.candidates[0] = data.candidates[0] ?? {};
            ret.candidates[0].content = data.candidates[0].content ?? {};
            ret.candidates[0].content = {
                role: "model",
                parts: [
                    {
                        text: this.msg
                    }
                ]
            };
        }
        return ret;
    }
    handleData(response, data) {
        try {
            return super.handleData(response, data);
        } catch  {
            return this.setMessage(data);
        }
    }
};
const extractMimeType = (str)=>{
    if (str.startsWith("data:")) return {
        mimeType: str.split(":")[1].split(";")[0],
        data: str.split(",")[1]
    };
    return null;
};
/**
* Infers the MIME type from a URL based on its file extension.
* This is used as a fallback when the MIME type is not provided.
*
* @param url - The URL to infer the MIME type from
* @returns The inferred MIME type or undefined if it cannot be determined
*/ function inferMimeTypeFromUrl(url) {
    const mimeTypeMap = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        gif: "image/gif",
        webp: "image/webp",
        bmp: "image/bmp",
        svg: "image/svg+xml",
        ico: "image/x-icon",
        tiff: "image/tiff",
        tif: "image/tiff"
    };
    try {
        const pathname = new URL(url).pathname;
        const extension = pathname.split(".").pop()?.toLowerCase().split(/[?#]/)[0];
        return extension ? mimeTypeMap[extension] : void 0;
    } catch  {
        const match = url.match(/\.([a-zA-Z0-9]+)(?:[?#]|$)/);
        if (match) {
            const extension = match[1].toLowerCase();
            return mimeTypeMap[extension];
        }
        return void 0;
    }
}
function normalizeSpeechConfig(config) {
    function isSpeechConfig(config$1) {
        return typeof config$1 === "object" && (Object.hasOwn(config$1, "voiceConfig") || Object.hasOwn(config$1, "multiSpeakerVoiceConfig"));
    }
    function hasLanguage(config$1) {
        return typeof config$1 === "object" && Object.hasOwn(config$1, "languageCode");
    }
    function hasVoice(config$1) {
        return Object.hasOwn(config$1, "voice");
    }
    if (typeof config === "undefined") return void 0;
    if (isSpeechConfig(config)) return config;
    let languageCode;
    let voice;
    if (hasLanguage(config)) {
        languageCode = config.languageCode;
        voice = hasVoice(config) ? config.voice : config.voices;
    } else {
        languageCode = void 0;
        voice = config;
    }
    let ret;
    if (typeof voice === "string") ret = {
        voiceConfig: {
            prebuiltVoiceConfig: {
                voiceName: voice
            }
        }
    };
    else {
        const voices = Array.isArray(voice) ? voice : [
            voice
        ];
        const speakerVoiceConfigs = voices.map((v)=>({
                speaker: v.speaker,
                voiceConfig: {
                    prebuiltVoiceConfig: {
                        voiceName: v.name
                    }
                }
            }));
        ret = {
            multiSpeakerVoiceConfig: {
                speakerVoiceConfigs
            }
        };
    }
    if (languageCode) ret.languageCode = languageCode;
    return ret;
}
function getGeminiAPI(config) {
    function messageContentText(content) {
        if (content?.text && content?.text.length > 0) return {
            text: content.text
        };
        else return null;
    }
    function messageContentImageUrlData(content) {
        const url = typeof content.image_url === "string" ? content.image_url : content.image_url.url;
        if (!url) throw new Error("Missing Image URL");
        const mimeTypeAndData = extractMimeType(url);
        if (mimeTypeAndData) return {
            inlineData: mimeTypeAndData
        };
        else {
            const mimeType = inferMimeTypeFromUrl(url) || "image/png";
            return {
                fileData: {
                    mimeType,
                    fileUri: url
                }
            };
        }
    }
    function messageContentImageUrl(content) {
        const ret = messageContentImageUrlData(content);
        supplementVideoMetadata(content, ret);
        return ret;
    }
    async function blobToFileData(blob) {
        return {
            fileData: {
                fileUri: blob.path,
                mimeType: blob.mimetype
            }
        };
    }
    async function fileUriContentToBlob(uri) {
        return config?.mediaManager?.getMediaBlob(uri);
    }
    async function messageContentMediaData(content) {
        if ("mimeType" in content && "data" in content) return {
            inlineData: {
                mimeType: content.mimeType,
                data: content.data
            }
        };
        else if ("mimeType" in content && "fileUri" in content) return {
            fileData: {
                mimeType: content.mimeType,
                fileUri: content.fileUri
            }
        };
        else {
            const uri = content.fileUri;
            const blob = await fileUriContentToBlob(uri);
            if (blob) return await blobToFileData(blob);
        }
        throw new Error(`Invalid media content: ${JSON.stringify(content, null, 1)}`);
    }
    function supplementVideoMetadata(content, ret) {
        if ("videoMetadata" in content && typeof ret === "object") ret.videoMetadata = content.videoMetadata;
        return ret;
    }
    async function messageContentMedia(content) {
        const ret = await messageContentMediaData(content);
        supplementVideoMetadata(content, ret);
        return ret;
    }
    function messageContentReasoning(content) {
        if (content?.reasoning && content?.reasoning.length > 0) return {
            text: content.reasoning,
            thought: true
        };
        else return null;
    }
    const standardContentBlockConverter = {
        providerName: "Google Gemini",
        fromStandardTextBlock (block) {
            return {
                text: block.text
            };
        },
        fromStandardImageBlock (block) {
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else {
                    let mimeType = block.mime_type;
                    if (!mimeType || mimeType === "") mimeType = inferMimeTypeFromUrl(block.url) || "image/png";
                    return {
                        fileData: {
                            mimeType,
                            fileUri: block.url
                        }
                    };
                }
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type || "image/png",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        },
        fromStandardAudioBlock (block) {
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else return {
                    fileData: {
                        mimeType: block.mime_type || "audio/mpeg",
                        fileUri: block.url
                    }
                };
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type || "audio/mpeg",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        },
        fromStandardFileBlock (block) {
            if (block.source_type === "text") return {
                text: block.text
            };
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else return {
                    fileData: {
                        mimeType: block.mime_type || "application/octet-stream",
                        fileUri: block.url
                    }
                };
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type || "application/octet-stream",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        }
    };
    async function messageContentComplexToPart(content) {
        switch(content.type){
            case "text":
                if ("text" in content) return messageContentText(content);
                break;
            case "image_url":
                if ("image_url" in content) return messageContentImageUrl(content);
                break;
            case "media":
                return await messageContentMedia(content);
            case "reasoning":
                return messageContentReasoning(content);
            default:
                throw new Error(`Unsupported type "${content.type}" received while converting message to message parts: ${JSON.stringify(content)}`);
        }
        throw new Error(`Cannot coerce "${content.type}" message part into a string.`);
    }
    async function messageContentComplexToParts(content) {
        const contents = content.map((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDataContentBlock"])(m) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToProviderContentBlock"])(m, standardContentBlockConverter) : messageContentComplexToPart(m));
        return Promise.all(contents);
    }
    async function messageContentToParts(content) {
        const messageContent = typeof content === "string" ? [
            {
                type: "text",
                text: content
            }
        ] : content;
        const allParts = await messageContentComplexToParts(messageContent);
        const parts = allParts.reduce((acc, val)=>{
            if (val) return [
                ...acc,
                val
            ];
            else return acc;
        }, []);
        return parts;
    }
    function messageToolCallsToParts(toolCalls) {
        if (!toolCalls || toolCalls.length === 0) return [];
        return toolCalls.map((tool)=>{
            let args = {};
            if (tool?.function?.arguments) {
                const argStr = tool.function.arguments;
                args = JSON.parse(argStr);
            }
            return {
                functionCall: {
                    name: tool.function.name,
                    args
                }
            };
        });
    }
    function messageKwargsToParts(kwargs) {
        const ret = [];
        if (kwargs?.tool_calls) ret.push(...messageToolCallsToParts(kwargs.tool_calls));
        return ret;
    }
    async function roleMessageToContent(role, message) {
        const contentParts = await messageContentToParts(message.content);
        let toolParts;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAIMessage"])(message) && !!message.tool_calls?.length) toolParts = message.tool_calls.map((toolCall)=>({
                functionCall: {
                    name: toolCall.name,
                    args: toolCall.args
                }
            }));
        else toolParts = messageKwargsToParts(message.additional_kwargs);
        const parts = [
            ...contentParts,
            ...toolParts
        ];
        const signatures = message?.additional_kwargs?.signatures ?? [];
        if (signatures.length === parts.length) for(let co = 0; co < signatures.length; co += 1){
            const signature = signatures[co];
            if (signature && signature.length > 0) parts[co].thoughtSignature = signature;
        }
        return [
            {
                role,
                parts
            }
        ];
    }
    async function systemMessageToContent(message) {
        return config?.useSystemInstruction ? roleMessageToContent("system", message) : [
            ...await roleMessageToContent("user", message),
            ...await roleMessageToContent("model", new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessage"]("Ok"))
        ];
    }
    function toolMessageToContent(message, prevMessage) {
        const contentStr = typeof message.content === "string" ? message.content : message.content.reduce((acc, content)=>{
            if (content.type === "text") return acc + content.text;
            else return acc;
        }, "");
        const responseName = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAIMessage"])(prevMessage) && !!prevMessage.tool_calls?.length ? prevMessage.tool_calls[0].name : prevMessage.name) ?? message.tool_call_id;
        try {
            const content = JSON.parse(contentStr);
            return [
                {
                    role: "function",
                    parts: [
                        {
                            functionResponse: {
                                name: responseName,
                                response: {
                                    content
                                }
                            }
                        }
                    ]
                }
            ];
        } catch (_) {
            return [
                {
                    role: "function",
                    parts: [
                        {
                            functionResponse: {
                                name: responseName,
                                response: {
                                    content: contentStr
                                }
                            }
                        }
                    ]
                }
            ];
        }
    }
    async function baseMessageToContent(message, prevMessage) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SystemMessage"].isInstance(message)) return systemMessageToContent(message);
        else if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HumanMessage"].isInstance(message)) return roleMessageToContent("user", message);
        else if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessage"].isInstance(message)) return roleMessageToContent("model", message);
        else if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ToolMessage"].isInstance(message)) {
            if (!prevMessage) throw new Error("Tool messages cannot be the first message passed to the model.");
            return toolMessageToContent(message, prevMessage);
        } else {
            console.log(`Unsupported message type: ${message.type}`);
            return [];
        }
    }
    function thoughtPartToMessageContent(part) {
        return {
            type: "reasoning",
            reasoning: part.text
        };
    }
    function textPartToMessageContent(part) {
        return {
            type: "text",
            text: part.text
        };
    }
    function inlineDataPartToMessageContentImage(part) {
        return {
            type: "image_url",
            image_url: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
        };
    }
    function inlineDataPartToMessageContentMedia(part) {
        return {
            type: "media",
            mimeType: part.inlineData.mimeType,
            data: part.inlineData.data
        };
    }
    function inlineDataPartToMessageContent(part) {
        const mimeType = part?.inlineData?.mimeType ?? "";
        if (mimeType.startsWith("image")) return inlineDataPartToMessageContentImage(part);
        else return inlineDataPartToMessageContentMedia(part);
    }
    function fileDataPartToMessageContent(part) {
        return {
            type: "image_url",
            image_url: part.fileData.fileUri
        };
    }
    function partsToMessageContent(parts) {
        return parts.map((part)=>{
            if (part === void 0 || part === null) return null;
            else if (part.thought) return thoughtPartToMessageContent(part);
            else if ("text" in part) return textPartToMessageContent(part);
            else if ("inlineData" in part) return inlineDataPartToMessageContent(part);
            else if ("fileData" in part) return fileDataPartToMessageContent(part);
            else return null;
        }).reduce((acc, content)=>{
            if (content) acc.push(content);
            return acc;
        }, []);
    }
    function toolRawToTool(raw) {
        return {
            id: raw.id,
            type: raw.type,
            function: {
                name: raw.function.name,
                arguments: JSON.stringify(raw.function.arguments)
            }
        };
    }
    function functionCallPartToToolRaw(part) {
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])().replace(/-/g, ""),
            type: "function",
            function: {
                name: part.functionCall.name,
                arguments: part.functionCall.args ?? {}
            }
        };
    }
    function partsToToolsRaw(parts) {
        return parts.map((part)=>{
            if (part === void 0 || part === null) return null;
            else if ("functionCall" in part) return functionCallPartToToolRaw(part);
            else return null;
        }).reduce((acc, content)=>{
            if (content) acc.push(content);
            return acc;
        }, []);
    }
    function toolsRawToTools(raws) {
        return raws.map((raw)=>toolRawToTool(raw));
    }
    function responseToGenerateContentResponseData(response) {
        if ("nextChunk" in response.data) throw new Error("Cannot convert Stream to GenerateContentResponseData");
        else if (Array.isArray(response.data)) return response.data.reduce((acc, val)=>{
            const valParts = val?.candidates?.[0]?.content?.parts ?? [];
            acc.candidates[0].content.parts.push(...valParts);
            acc.promptFeedback = val.promptFeedback;
            return acc;
        });
        else return response.data;
    }
    function responseToParts(response) {
        const responseData = responseToGenerateContentResponseData(response);
        const parts = responseData?.candidates?.[0]?.content?.parts ?? [];
        return parts;
    }
    function partToText(part) {
        return "text" in part ? part.text : "";
    }
    function responseToString(response) {
        const parts = responseToParts(response);
        const ret = parts.reduce((acc, part)=>{
            const val = partToText(part);
            return acc + val;
        }, "");
        return ret;
    }
    function safeResponseTo(response, responseTo) {
        const safetyHandler = config?.safetyHandler ?? new DefaultGeminiSafetyHandler();
        try {
            const safeResponse = safetyHandler.handle(response);
            return responseTo(safeResponse);
        } catch (xx) {
            if (xx instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAISafetyError"]) {
                const ret = responseTo(xx.response);
                xx.reply = ret;
            }
            throw xx;
        }
    }
    function safeResponseToString(response) {
        return safeResponseTo(response, responseToString);
    }
    function logprobResultToLogprob(result) {
        const token = result?.token;
        const logprob = result?.logProbability;
        const encoder = new TextEncoder();
        const bytes = Array.from(encoder.encode(token));
        return {
            token,
            logprob,
            bytes
        };
    }
    function candidateToLogprobs(candidate) {
        const logprobs = candidate?.logprobsResult;
        const chosenTokens = logprobs?.chosenCandidates ?? [];
        const topTokens = logprobs?.topCandidates ?? [];
        const content = [];
        for(let co = 0; co < chosenTokens.length; co += 1){
            const chosen = chosenTokens[co];
            const top = topTokens[co]?.candidates ?? [];
            const logprob = logprobResultToLogprob(chosen);
            logprob.top_logprobs = top.map((l)=>logprobResultToLogprob(l));
            content.push(logprob);
        }
        return {
            content
        };
    }
    function candidateToUrlContextMetadata(candidate) {
        const retrieval = candidate?.urlRetrievalMetadata?.urlRetrievalContexts ?? [];
        const context = candidate?.urlContextMetadata?.urlMetadata ?? [];
        const all = [
            ...retrieval,
            ...context
        ];
        if (all.length === 0) return void 0;
        else return {
            urlMetadata: all
        };
    }
    function addModalityCounts(modalityTokenCounts, details) {
        modalityTokenCounts?.forEach((modalityTokenCount)=>{
            const { modality, tokenCount } = modalityTokenCount;
            const modalityLc = modality.toLowerCase();
            const currentCount = details[modalityLc] ?? 0;
            details[modalityLc] = currentCount + tokenCount;
        });
    }
    function responseToUsageMetadata(response) {
        if ("usageMetadata" in response.data) {
            const data = response?.data;
            const usageMetadata = data?.usageMetadata;
            const input_tokens = usageMetadata.promptTokenCount ?? 0;
            const candidatesTokenCount = usageMetadata.candidatesTokenCount ?? 0;
            const thoughtsTokenCount = usageMetadata.thoughtsTokenCount ?? 0;
            const output_tokens = candidatesTokenCount + thoughtsTokenCount;
            const total_tokens = usageMetadata.totalTokenCount ?? input_tokens + output_tokens;
            const input_token_details = {};
            addModalityCounts(usageMetadata.promptTokensDetails, input_token_details);
            if (typeof usageMetadata?.cachedContentTokenCount === "number") input_token_details.cache_read = usageMetadata.cachedContentTokenCount;
            const output_token_details = {};
            addModalityCounts(usageMetadata?.candidatesTokensDetails, output_token_details);
            if (typeof usageMetadata?.thoughtsTokenCount === "number") output_token_details.reasoning = usageMetadata.thoughtsTokenCount;
            const ret = {
                input_tokens,
                output_tokens,
                total_tokens,
                input_token_details,
                output_token_details
            };
            return ret;
        }
        return void 0;
    }
    function responseToGenerationInfo(response) {
        const data = Array.isArray(response.data) && response.data[0] ? response.data[0] : response.data && response.data.candidates ? response.data : void 0;
        if (!data) return {};
        const finish_reason = data.candidates[0]?.finishReason;
        const ret = {
            safety_ratings: data.candidates[0]?.safetyRatings?.map((rating)=>({
                    category: rating.category,
                    probability: rating.probability,
                    probability_score: rating.probabilityScore,
                    severity: rating.severity,
                    severity_score: rating.severityScore
                })),
            citation_metadata: data.candidates[0]?.citationMetadata,
            grounding_metadata: data.candidates[0]?.groundingMetadata,
            finish_reason,
            finish_message: data.candidates[0]?.finishMessage,
            url_context_metadata: candidateToUrlContextMetadata(data.candidates[0]),
            avgLogprobs: data.candidates[0]?.avgLogprobs,
            logprobs: candidateToLogprobs(data.candidates[0])
        };
        if (typeof finish_reason === "string") ret.usage_metadata = responseToUsageMetadata(response);
        return ret;
    }
    function responseToChatGeneration(response) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            text: responseToString(response),
            message: partToMessageChunk(responseToParts(response)[0]),
            generationInfo: responseToGenerationInfo(response)
        });
    }
    function safeResponseToChatGeneration(response) {
        return safeResponseTo(response, responseToChatGeneration);
    }
    function chunkToString(chunk) {
        if (chunk === null) return "";
        else if (typeof chunk.content === "string") return chunk.content;
        else if (chunk.content.length === 0) return "";
        else if (chunk.content[0].type === "text") return chunk.content[0].text;
        else throw new Error(`Unexpected chunk: ${chunk}`);
    }
    function partToMessageChunk(part) {
        const fields = partsToBaseMessageChunkFields([
            part
        ]);
        if (typeof fields.content === "string") return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"](fields);
        else if (fields.content?.every((item)=>item.type === "text")) {
            const newContent = fields.content.map((item)=>"text" in item ? item.text : "").join("");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
                ...fields,
                content: newContent,
                response_metadata: {
                    ...fields.response_metadata,
                    model_provider: "google-vertexai"
                }
            });
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"](fields);
    }
    function partToChatGeneration(part) {
        const message = partToMessageChunk(part);
        const text = partToText(part);
        const generationInfo = {};
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            text,
            message,
            generationInfo
        });
    }
    function groundingSupportByPart(groundingSupports) {
        const ret = [];
        if (!groundingSupports || groundingSupports.length === 0) return [];
        groundingSupports?.forEach((groundingSupport)=>{
            const segment = groundingSupport?.segment;
            const partIndex = segment?.partIndex ?? 0;
            if (ret[partIndex]) ret[partIndex].push(groundingSupport);
            else ret[partIndex] = [
                groundingSupport
            ];
        });
        return ret;
    }
    function responseToGroundedChatGenerations(response) {
        const parts = responseToParts(response);
        if (parts.length === 0) return [];
        const candidate = response?.data?.candidates?.[0];
        const groundingMetadata = candidate?.groundingMetadata;
        const citationMetadata = candidate?.citationMetadata;
        const groundingParts = groundingSupportByPart(groundingMetadata?.groundingSupports);
        const ret = parts.map((part, index)=>{
            const gen = partToChatGeneration(part);
            if (!gen.generationInfo) gen.generationInfo = {};
            if (groundingMetadata) {
                gen.generationInfo.groundingMetadata = groundingMetadata;
                const groundingPart = groundingParts[index];
                if (groundingPart) gen.generationInfo.groundingSupport = groundingPart;
            }
            if (citationMetadata) gen.generationInfo.citationMetadata = citationMetadata;
            return gen;
        });
        return ret;
    }
    function combineContent(gen, forceComplex = false) {
        const allString = gen.every((item)=>typeof item.message.content === "string");
        if (allString && !forceComplex) return gen.map((item)=>item.message.content).join("");
        else {
            const ret = [];
            gen.forEach((item)=>{
                if (typeof item.message.content === "string") ret.push({
                    type: "text",
                    text: item.message.content
                });
                else item.message.content.forEach((c)=>{
                    ret.push(c);
                });
            });
            return ret;
        }
    }
    function combineText(gen) {
        return gen.map((item)=>item.text ?? "").join("");
    }
    function combineToolCalls(gen) {
        let ret = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"]("");
        gen.forEach((item)=>{
            const message = item?.message;
            ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])(ret, message);
        });
        return ret;
    }
    function combineAdditionalKwargs(gen) {
        const ret = {};
        gen.forEach((item)=>{
            const message = item?.message;
            const kwargs = message?.additional_kwargs ?? {};
            const keys = Object.keys(kwargs);
            keys.forEach((key)=>{
                const value = kwargs[key];
                if (Object.hasOwn(ret, key) && Array.isArray(ret[key]) && Array.isArray(value)) ret[key].push(...value);
                else ret[key] = value;
            });
        });
        return ret;
    }
    function combineGenerations(generations, response) {
        const gen = splitGenerationTypes(generations, response);
        const combinedContent = combineContent(gen.content);
        const combinedText = combineText(gen.content);
        const combinedToolCalls = combineToolCalls(gen.content);
        const kwargs = combineAdditionalKwargs(gen.content);
        const lastContent = gen.content[gen.content.length - 1];
        const usage_metadata = responseToUsageMetadata(response);
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
            content: combinedContent,
            additional_kwargs: kwargs,
            response_metadata: {
                model_provider: "google-vertexai"
            },
            usage_metadata,
            tool_calls: combinedToolCalls.tool_calls,
            invalid_tool_calls: combinedToolCalls.invalid_tool_calls
        });
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
                message,
                text: combinedText,
                generationInfo: lastContent.generationInfo
            })
        ];
    }
    function splitGenerationTypes(generations, _response) {
        const content = [];
        const reasoning = [];
        generations.forEach((gen)=>{
            if (gen?.generationInfo?.thought) reasoning.push(gen);
            else content.push(gen);
        });
        return {
            content,
            reasoning
        };
    }
    /**
	* Although this returns an array, only the first (or maybe last)
	* element in the array is used. So we need to combine them into
	* just one element that contains everything we need.
	* @param response
	*/ function responseToChatGenerations(response) {
        const generations = responseToGroundedChatGenerations(response);
        if (generations.length === 0) return [];
        const ret = combineGenerations(generations, response);
        const candidate = response?.data?.candidates?.[0];
        const avgLogprobs = candidate?.avgLogprobs;
        const logprobs = candidateToLogprobs(candidate);
        if ("TURBOPACK compile-time truthy", 1) ret[0].message.response_metadata = {
            model_provider: "google-vertexai",
            ...ret[0].message.response_metadata,
            logprobs,
            avgLogprobs
        };
        return ret;
    }
    function responseToBaseMessageFields(response) {
        const parts = responseToParts(response);
        return partsToBaseMessageChunkFields(parts);
    }
    function partsToSignatures(parts) {
        return parts.map((part)=>part?.thoughtSignature ?? "");
    }
    function partsToBaseMessageChunkFields(parts) {
        const fields = {
            content: partsToMessageContent(parts),
            tool_call_chunks: [],
            tool_calls: [],
            invalid_tool_calls: [],
            response_metadata: {
                model_provider: "google-vertexai"
            }
        };
        fields.additional_kwargs = {};
        const rawTools = partsToToolsRaw(parts);
        if (rawTools.length > 0) {
            const tools = toolsRawToTools(rawTools);
            for (const tool of tools){
                fields.tool_call_chunks?.push({
                    name: tool.function.name,
                    args: tool.function.arguments,
                    id: tool.id,
                    type: "tool_call_chunk"
                });
                try {
                    fields.tool_calls?.push({
                        name: tool.function.name,
                        args: JSON.parse(tool.function.arguments),
                        id: tool.id
                    });
                } catch (e) {
                    fields.invalid_tool_calls?.push({
                        name: tool.function.name,
                        args: tool.function.arguments,
                        id: tool.id,
                        error: e.message,
                        type: "invalid_tool_call"
                    });
                }
            }
            fields.additional_kwargs.tool_calls = tools;
        }
        fields.additional_kwargs.signatures = partsToSignatures(parts);
        return fields;
    }
    function responseToBaseMessage(response) {
        const fields = responseToBaseMessageFields(response);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessage"](fields);
    }
    function safeResponseToBaseMessage(response) {
        return safeResponseTo(response, responseToBaseMessage);
    }
    function responseToChatResult(response) {
        const generations = responseToChatGenerations(response);
        return {
            generations,
            llmOutput: responseToGenerationInfo(response)
        };
    }
    function safeResponseToChatResult(response) {
        return safeResponseTo(response, responseToChatResult);
    }
    function inputType(input) {
        if (typeof input === "string") return "MessageContent";
        else {
            const firstItem = input[0];
            if (Object.hasOwn(firstItem, "content")) return "BaseMessageArray";
            else return "MessageContent";
        }
    }
    async function formatMessageContents(input, _parameters) {
        const parts = await messageContentToParts(input);
        const contents = [
            {
                role: "user",
                parts
            }
        ];
        return contents;
    }
    async function formatBaseMessageContents(input, _parameters) {
        const inputPromises = input.map((msg, i)=>baseMessageToContent(msg, input[i - 1]));
        const inputs = await Promise.all(inputPromises);
        return inputs.reduce((acc, cur)=>{
            if (cur.every((content)=>content.role === "system")) return acc;
            if (cur[0]?.role === "function" && acc.length > 0 && acc[acc.length - 1].role === "function") acc[acc.length - 1].parts = [
                ...acc[acc.length - 1].parts,
                ...cur[0].parts
            ];
            else acc.push(...cur);
            return acc;
        }, []);
    }
    async function formatContents(input, parameters) {
        const it = inputType(input);
        switch(it){
            case "MessageContent":
                return formatMessageContents(input, parameters);
            case "BaseMessageArray":
                return formatBaseMessageContents(input, parameters);
            default:
                throw new Error(`Unknown input type "${it}": ${input}`);
        }
    }
    function formatGenerationConfig(parameters) {
        const ret = {
            temperature: parameters.temperature,
            topK: parameters.topK,
            topP: parameters.topP,
            seed: parameters.seed,
            presencePenalty: parameters.presencePenalty,
            frequencyPenalty: parameters.frequencyPenalty,
            maxOutputTokens: parameters.maxOutputTokens,
            stopSequences: parameters.stopSequences,
            responseMimeType: parameters.responseSchema ? "application/json" : parameters.responseMimeType,
            responseSchema: parameters.responseSchema,
            responseModalities: parameters.responseModalities,
            speechConfig: normalizeSpeechConfig(parameters.speechConfig)
        };
        if (typeof parameters.logprobs !== "undefined") {
            ret.responseLogprobs = parameters.logprobs;
            if (parameters.logprobs && typeof parameters.topLogprobs !== "undefined") ret.logprobs = parameters.topLogprobs;
        }
        if (typeof parameters.maxReasoningTokens !== "undefined") {
            const includeThoughts = parameters.maxReasoningTokens !== 0;
            ret.thinkingConfig = {
                thinkingBudget: parameters.maxReasoningTokens,
                includeThoughts
            };
        }
        let attribute;
        for(attribute in ret)if (ret[attribute] === void 0) delete ret[attribute];
        return ret;
    }
    function formatSafetySettings(parameters) {
        return parameters.safetySettings ?? [];
    }
    async function formatBaseMessageSystemInstruction(input) {
        let ret = {};
        for(let index = 0; index < input.length; index += 1){
            const message = input[index];
            if (message.getType() === "system") if (index === 0) ret = (await baseMessageToContent(message, void 0))[0];
            else throw new Error("System messages are only permitted as the first passed message.");
        }
        return ret;
    }
    async function formatSystemInstruction(input) {
        if (!config?.useSystemInstruction) return {};
        const it = inputType(input);
        switch(it){
            case "BaseMessageArray":
                return formatBaseMessageSystemInstruction(input);
            default:
                return {};
        }
    }
    function structuredToolToFunctionDeclaration(tool) {
        const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGeminiParameters"])(tool.schema);
        return {
            name: tool.name,
            description: tool.description ?? `A function available to call.`,
            parameters: jsonSchema
        };
    }
    function searchToolName(tool) {
        for (const name of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GeminiSearchToolAttributes"])if (name in tool) return name;
        return void 0;
    }
    function cleanGeminiTool(tool) {
        const orig = searchToolName(tool);
        const adj = config?.googleSearchToolAdjustment;
        if (orig && adj && adj !== orig) return {
            [adj]: {}
        };
        else return tool;
    }
    function formatTools(parameters) {
        const tools = parameters?.tools;
        if (!tools || tools.length === 0) return [];
        const langChainTools = [];
        const otherTools = [];
        tools.forEach((tool)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLangChainTool"])(tool)) langChainTools.push(tool);
            else otherTools.push(cleanGeminiTool(tool));
        });
        const result = [
            ...otherTools
        ];
        if (langChainTools.length > 0) result.push({
            functionDeclarations: langChainTools.map(structuredToolToFunctionDeclaration)
        });
        return result;
    }
    function formatToolConfig(parameters) {
        if (!parameters.tool_choice || typeof parameters.tool_choice !== "string") return void 0;
        if ([
            "auto",
            "any",
            "none"
        ].includes(parameters.tool_choice)) return {
            functionCallingConfig: {
                mode: parameters.tool_choice,
                allowedFunctionNames: parameters.allowed_function_names
            }
        };
        return {
            functionCallingConfig: {
                mode: "any",
                allowedFunctionNames: [
                    parameters.tool_choice
                ]
            }
        };
    }
    async function formatData(input, parameters) {
        const typedInput = input;
        const contents = await formatContents(typedInput, parameters);
        const generationConfig = formatGenerationConfig(parameters);
        const tools = formatTools(parameters);
        const toolConfig = formatToolConfig(parameters);
        const safetySettings = formatSafetySettings(parameters);
        const systemInstruction = await formatSystemInstruction(typedInput);
        const ret = {
            contents,
            generationConfig
        };
        if (tools && tools.length) ret.tools = tools;
        if (toolConfig) ret.toolConfig = toolConfig;
        if (safetySettings && safetySettings.length) ret.safetySettings = safetySettings;
        if (systemInstruction?.role && systemInstruction?.parts && systemInstruction?.parts?.length) ret.systemInstruction = systemInstruction;
        if (parameters.cachedContent) ret.cachedContent = parameters.cachedContent;
        if (parameters.labels && Object.keys(parameters.labels).length > 0) ret.labels = parameters.labels;
        return ret;
    }
    return {
        messageContentToParts,
        baseMessageToContent,
        responseToString: safeResponseToString,
        responseToChatGeneration: safeResponseToChatGeneration,
        chunkToString,
        responseToBaseMessage: safeResponseToBaseMessage,
        responseToChatResult: safeResponseToChatResult,
        formatData
    };
}
function validateGeminiParams(params) {
    if (params.maxOutputTokens && params.maxOutputTokens < 0) throw new Error("`maxOutputTokens` must be a positive integer");
    if (typeof params.maxReasoningTokens !== "undefined") {
        if (typeof params.maxOutputTokens !== "undefined") {
            if (params.maxReasoningTokens >= params.maxOutputTokens) throw new Error("`maxOutputTokens` must be greater than `maxReasoningTokens`");
        }
    }
    if (params.temperature && (params.temperature < 0 || params.temperature > 2)) throw new Error("`temperature` must be in the range of [0.0,2.0]");
    if (params.topP && (params.topP < 0 || params.topP > 1)) throw new Error("`topP` must be in the range of [0.0,1.0]");
    if (params.topK && params.topK < 0) throw new Error("`topK` must be a positive integer");
}
function isModelGemini(modelName) {
    return modelName.toLowerCase().startsWith("gemini");
}
function isModelGemma(modelName) {
    return modelName.toLowerCase().startsWith("gemma");
}
;
 //# sourceMappingURL=gemini.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/anthropic.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnthropicAPI",
    ()=>getAnthropicAPI,
    "isModelClaude",
    ()=>isModelClaude,
    "validateClaudeParams",
    ()=>validateClaudeParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/outputs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/ai.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/content/data.js [app-rsc] (ecmascript)");
;
;
//#region src/utils/anthropic.ts
function getAnthropicAPI(config) {
    function partToString(part) {
        return "text" in part ? part.text : "";
    }
    function messageToString(message) {
        const content = message?.content ?? [];
        const ret = content.reduce((acc, part)=>{
            const str = partToString(part);
            return acc + str;
        }, "");
        return ret;
    }
    function responseToString(response) {
        const data = response.data;
        switch(data?.type){
            case "message":
                return messageToString(data);
            default:
                throw Error(`Unknown type: ${data?.type}`);
        }
    }
    /**
	* Normalize the AIMessageChunk.
	* If the fields are just a string - use that as content.
	* If the content is an array of just text fields, turn them into a string.
	* @param fields
	*/ function newAIMessageChunk(fields) {
        if (typeof fields === "string") return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"](fields);
        const ret = {
            ...fields
        };
        if (Array.isArray(fields?.content)) {
            let str = "";
            fields.content.forEach((val)=>{
                if (str !== void 0 && val.type === "text") str = `${str}${val.text}`;
                else str = void 0;
            });
            if (str) ret.content = str;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"](ret);
    }
    function textContentToMessageFields(textContent) {
        return {
            content: [
                textContent
            ]
        };
    }
    function toolUseContentToMessageFields(toolUseContent) {
        const tool = {
            id: toolUseContent.id,
            name: toolUseContent.name,
            type: "tool_call",
            args: toolUseContent.input
        };
        return {
            content: [],
            tool_calls: [
                tool
            ]
        };
    }
    function thinkingContentToMessageFields(thinkingContent) {
        return {
            content: [
                thinkingContent
            ]
        };
    }
    function redactedThinkingContentToMessageFields(thinkingContent) {
        return {
            content: [
                thinkingContent
            ]
        };
    }
    function anthropicContentToMessageFields(anthropicContent) {
        const type = anthropicContent?.type;
        switch(type){
            case "text":
                return textContentToMessageFields(anthropicContent);
            case "tool_use":
                return toolUseContentToMessageFields(anthropicContent);
            case "thinking":
                return thinkingContentToMessageFields(anthropicContent);
            case "redacted_thinking":
                return redactedThinkingContentToMessageFields(anthropicContent);
            default:
                console.error(`Unknown message type: ${type}`, anthropicContent);
                return void 0;
        }
    }
    function contentToMessage(anthropicContent) {
        const complexContent = [];
        const toolCalls = [];
        anthropicContent.forEach((ac)=>{
            const messageFields = anthropicContentToMessageFields(ac);
            if (messageFields?.content) complexContent.push(...messageFields.content);
            if (messageFields?.tool_calls) toolCalls.push(...messageFields.tool_calls);
        });
        const ret = {
            content: complexContent,
            tool_calls: toolCalls
        };
        return newAIMessageChunk(ret);
    }
    function messageToUsageMetadata(message) {
        const usage = message?.usage;
        const inputTokens = usage?.input_tokens ?? 0;
        const outputTokens = usage?.output_tokens ?? 0;
        const usageMetadata = {
            input_tokens: inputTokens,
            output_tokens: outputTokens,
            total_tokens: inputTokens + outputTokens,
            input_token_details: {
                cache_read: usage?.cache_read_input_tokens ?? 0,
                cache_creation: usage?.cache_creation_input_tokens ?? 0
            }
        };
        return usageMetadata;
    }
    function messageToGenerationInfo(message) {
        const usageMetadata = messageToUsageMetadata(message);
        return {
            usage_metadata: usageMetadata,
            finish_reason: message.stop_reason
        };
    }
    function messageToChatGeneration(responseMessage) {
        const content = responseMessage?.content ?? [];
        const text = messageToString(responseMessage);
        const message = contentToMessage(content);
        const generationInfo = messageToGenerationInfo(responseMessage);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            text,
            message,
            generationInfo
        });
    }
    function messageStartToChatGeneration(event) {
        const responseMessage = event.message;
        return messageToChatGeneration(responseMessage);
    }
    function messageDeltaToChatGeneration(event) {
        const responseMessage = event.delta;
        return messageToChatGeneration(responseMessage);
    }
    function contentBlockStartTextToChatGeneration(event) {
        const content = event.content_block;
        const message = contentToMessage([
            content
        ]);
        if (!message) return null;
        const text = "text" in content ? content.text : "";
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            message,
            text
        });
    }
    function contentBlockStartToolUseToChatGeneration(event) {
        const contentBlock = event.content_block;
        const text = "";
        const toolChunk = {
            type: "tool_call_chunk",
            index: event.index,
            name: contentBlock.name,
            id: contentBlock.id
        };
        if (typeof contentBlock.input === "object" && Object.keys(contentBlock.input).length > 0) toolChunk.args = JSON.stringify(contentBlock.input);
        const toolChunks = [
            toolChunk
        ];
        const content = [
            {
                index: event.index,
                ...contentBlock
            }
        ];
        const messageFields = {
            content,
            tool_call_chunks: toolChunks
        };
        const message = newAIMessageChunk(messageFields);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            message,
            text
        });
    }
    function contentBlockStartToChatGeneration(event) {
        switch(event.content_block.type){
            case "text":
                return contentBlockStartTextToChatGeneration(event);
            case "tool_use":
                return contentBlockStartToolUseToChatGeneration(event);
            default:
                console.warn(`Unexpected start content_block type: ${JSON.stringify(event)}`);
                return null;
        }
    }
    function contentBlockDeltaTextToChatGeneration(event) {
        const delta = event.delta;
        const text = delta?.text;
        const message = newAIMessageChunk(text);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            message,
            text
        });
    }
    function contentBlockDeltaInputJsonDeltaToChatGeneration(event) {
        const delta = event.delta;
        const text = "";
        const toolChunks = [
            {
                index: event.index,
                args: delta.partial_json
            }
        ];
        const content = [
            {
                index: event.index,
                ...delta
            }
        ];
        const messageFields = {
            content,
            tool_call_chunks: toolChunks
        };
        const message = newAIMessageChunk(messageFields);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
            message,
            text
        });
    }
    function contentBlockDeltaToChatGeneration(event) {
        switch(event.delta.type){
            case "text_delta":
                return contentBlockDeltaTextToChatGeneration(event);
            case "input_json_delta":
                return contentBlockDeltaInputJsonDeltaToChatGeneration(event);
            default:
                console.warn(`Unexpected delta content_block type: ${JSON.stringify(event)}`);
                return null;
        }
    }
    function responseToChatGeneration(response) {
        const data = response.data;
        switch(data.type){
            case "message":
                return messageToChatGeneration(data);
            case "message_start":
                return messageStartToChatGeneration(data);
            case "message_delta":
                return messageDeltaToChatGeneration(data);
            case "content_block_start":
                return contentBlockStartToChatGeneration(data);
            case "content_block_delta":
                return contentBlockDeltaToChatGeneration(data);
            case "ping":
            case "message_stop":
            case "content_block_stop":
                return null;
            case "error":
                throw new Error(`Error while streaming results: ${JSON.stringify(data)}`);
            default:
                console.warn("Unknown data for responseToChatGeneration", data);
                return null;
        }
    }
    function chunkToString(chunk) {
        if (chunk === null) return "";
        else if (typeof chunk.content === "string") return chunk.content;
        else if (chunk.content.length === 0) return "";
        else if (chunk.content[0].type === "text") return chunk.content[0].text;
        else throw new Error(`Unexpected chunk: ${chunk}`);
    }
    function responseToBaseMessage(response) {
        const data = response.data;
        const content = data?.content ?? [];
        return contentToMessage(content);
    }
    function responseToChatResult(response) {
        const message = response.data;
        const generations = [];
        const gen = responseToChatGeneration(response);
        if (gen) generations.push(gen);
        const llmOutput = messageToGenerationInfo(message);
        return {
            generations,
            llmOutput
        };
    }
    function formatAnthropicVersion() {
        return config?.version ?? "vertex-2023-10-16";
    }
    function textContentToAnthropicContent(content) {
        return content;
    }
    function extractMimeType(str) {
        if (str.startsWith("data:")) return {
            media_type: str.split(":")[1].split(";")[0],
            data: str.split(",")[1]
        };
        return null;
    }
    function imageContentToAnthropicContent(content) {
        const dataUrl = content.image_url;
        const url = typeof dataUrl === "string" ? dataUrl : dataUrl?.url;
        const urlInfo = extractMimeType(url);
        if (!urlInfo) return void 0;
        return {
            type: "image",
            source: {
                type: "base64",
                ...urlInfo
            }
        };
    }
    function thinkingContentToAnthropicContent(content) {
        return {
            type: "thinking",
            thinking: content.thinking,
            signature: content.signature
        };
    }
    function redactedThinkingContentToAnthropicContent(content) {
        return {
            type: "redacted_thinking",
            data: content.data
        };
    }
    function contentComplexToAnthropicContent(content) {
        const type = content?.type;
        switch(type){
            case "text":
                return textContentToAnthropicContent(content);
            case "image_url":
                return imageContentToAnthropicContent(content);
            case "thinking":
                return thinkingContentToAnthropicContent(content);
            case "redacted_thinking":
                return redactedThinkingContentToAnthropicContent(content);
            default:
                console.warn(`Unexpected content type: ${type}`, content);
                return void 0;
        }
    }
    const anthropicContentConverter = {
        providerName: "anthropic",
        fromStandardTextBlock (block) {
            return {
                type: "text",
                text: block.text,
                ..."cache_control" in (block.metadata ?? {}) ? {
                    cache_control: block.metadata.cache_control
                } : {}
            };
        },
        fromStandardImageBlock (block) {
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url,
                    asTypedArray: false
                });
                if (data) return {
                    type: "image",
                    source: {
                        type: "base64",
                        data: data.data,
                        media_type: data.mime_type
                    },
                    ..."cache_control" in (block.metadata ?? {}) ? {
                        cache_control: block.metadata.cache_control
                    } : {}
                };
                else return {
                    type: "image",
                    source: {
                        type: "url",
                        url: block.url,
                        media_type: block.mime_type ?? ""
                    },
                    ..."cache_control" in (block.metadata ?? {}) ? {
                        cache_control: block.metadata.cache_control
                    } : {}
                };
            } else if (block.source_type === "base64") return {
                type: "image",
                source: {
                    type: "base64",
                    data: block.data,
                    media_type: block.mime_type ?? ""
                },
                ..."cache_control" in (block.metadata ?? {}) ? {
                    cache_control: block.metadata.cache_control
                } : {}
            };
            else throw new Error(`Unsupported image source type: ${block.source_type}`);
        },
        fromStandardFileBlock (block) {
            const mime_type = (block.mime_type ?? "").split(";")[0];
            if (block.source_type === "url") {
                if (mime_type === "application/pdf" || mime_type === "") return {
                    type: "document",
                    source: {
                        type: "url",
                        url: block.url,
                        media_type: block.mime_type ?? ""
                    },
                    ..."cache_control" in (block.metadata ?? {}) ? {
                        cache_control: block.metadata.cache_control
                    } : {},
                    ..."citations" in (block.metadata ?? {}) ? {
                        citations: block.metadata.citations
                    } : {},
                    ..."context" in (block.metadata ?? {}) ? {
                        context: block.metadata.context
                    } : {},
                    ...block.metadata?.title || block.metadata?.filename || block.metadata?.name ? {
                        title: block.metadata?.title || block.metadata?.filename || block.metadata?.name
                    } : {}
                };
                throw new Error(`Unsupported file mime type for file url source: ${block.mime_type}`);
            } else if (block.source_type === "text") if (mime_type === "text/plain" || mime_type === "") return {
                type: "document",
                source: {
                    type: "text",
                    data: block.text,
                    media_type: block.mime_type ?? ""
                },
                ..."cache_control" in (block.metadata ?? {}) ? {
                    cache_control: block.metadata.cache_control
                } : {},
                ..."citations" in (block.metadata ?? {}) ? {
                    citations: block.metadata.citations
                } : {},
                ..."context" in (block.metadata ?? {}) ? {
                    context: block.metadata.context
                } : {},
                ..."title" in (block.metadata ?? {}) ? {
                    title: block.metadata.title
                } : {}
            };
            else throw new Error(`Unsupported file mime type for file text source: ${block.mime_type}`);
            else if (block.source_type === "base64") if (mime_type === "application/pdf" || mime_type === "") return {
                type: "document",
                source: {
                    type: "base64",
                    data: block.data,
                    media_type: "application/pdf"
                },
                ..."cache_control" in (block.metadata ?? {}) ? {
                    cache_control: block.metadata.cache_control
                } : {},
                ..."citations" in (block.metadata ?? {}) ? {
                    citations: block.metadata.citations
                } : {},
                ..."context" in (block.metadata ?? {}) ? {
                    context: block.metadata.context
                } : {},
                ..."title" in (block.metadata ?? {}) ? {
                    title: block.metadata.title
                } : {}
            };
            else if ([
                "image/jpeg",
                "image/png",
                "image/gif",
                "image/webp"
            ].includes(mime_type)) return {
                type: "document",
                source: {
                    type: "content",
                    content: [
                        {
                            type: "image",
                            source: {
                                type: "base64",
                                data: block.data,
                                media_type: mime_type
                            }
                        }
                    ]
                },
                ..."cache_control" in (block.metadata ?? {}) ? {
                    cache_control: block.metadata.cache_control
                } : {},
                ..."citations" in (block.metadata ?? {}) ? {
                    citations: block.metadata.citations
                } : {},
                ..."context" in (block.metadata ?? {}) ? {
                    context: block.metadata.context
                } : {},
                ..."title" in (block.metadata ?? {}) ? {
                    title: block.metadata.title
                } : {}
            };
            else throw new Error(`Unsupported file mime type for file base64 source: ${block.mime_type}`);
            else throw new Error(`Unsupported file source type: ${block.source_type}`);
        }
    };
    function contentToAnthropicContent(content) {
        const ca = typeof content === "string" ? [
            {
                type: "text",
                text: content
            }
        ] : content;
        return ca.map((complex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDataContentBlock"])(complex) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToProviderContentBlock"])(complex, anthropicContentConverter) : contentComplexToAnthropicContent(complex)).filter(Boolean);
    }
    function toolCallToAnthropicContent(toolCall) {
        return {
            type: "tool_use",
            id: toolCall.id,
            name: toolCall.name,
            input: toolCall.args
        };
    }
    function toolCallsToAnthropicContent(toolCalls) {
        if (toolCalls === void 0) return [];
        return toolCalls.map(toolCallToAnthropicContent);
    }
    function baseRoleToAnthropicMessage(base, role) {
        const content = contentToAnthropicContent(base.content);
        return {
            role,
            content
        };
    }
    function aiMessageToAnthropicMessage(base) {
        const ret = baseRoleToAnthropicMessage(base, "assistant");
        const toolContent = toolCallsToAnthropicContent(base.tool_calls);
        if (toolContent.length > 0) {
            const content = ret.content;
            ret.content = [
                ...content,
                ...toolContent
            ];
        }
        return ret;
    }
    function toolMessageToAnthropicMessage(base) {
        const role = "user";
        const toolUseId = base.tool_call_id;
        const toolContent = contentToAnthropicContent(base.content);
        const content = [
            {
                type: "tool_result",
                tool_use_id: toolUseId,
                content: toolContent
            }
        ];
        return {
            role,
            content
        };
    }
    function baseToAnthropicMessage(base) {
        const type = base._getType();
        switch(type){
            case "human":
                return baseRoleToAnthropicMessage(base, "user");
            case "ai":
                return aiMessageToAnthropicMessage(base);
            case "tool":
                return toolMessageToAnthropicMessage(base);
            case "system":
                return void 0;
            default:
                console.warn(`Unknown BaseMessage type: ${type}`, base);
                return void 0;
        }
    }
    function formatMessages(input) {
        const ret = [];
        input.forEach((baseMessage)=>{
            const anthropicMessage = baseToAnthropicMessage(baseMessage);
            if (anthropicMessage) ret.push(anthropicMessage);
        });
        return ret;
    }
    function formatSettings(parameters) {
        const ret = {
            stream: parameters?.streaming ?? false,
            max_tokens: parameters?.maxOutputTokens ?? 8192
        };
        if (parameters.topP) ret.top_p = parameters.topP;
        if (parameters.topK) ret.top_k = parameters.topK;
        if (parameters.temperature) ret.temperature = parameters.temperature;
        if (parameters.stopSequences) ret.stop_sequences = parameters.stopSequences;
        return ret;
    }
    function contentComplexArrayToText(contentArray) {
        let ret = "";
        contentArray.forEach((content)=>{
            const contentType = content?.type;
            if (contentType === "text") {
                const textContent = content;
                ret = `${ret}\n${textContent.text}`;
            }
        });
        return ret;
    }
    function formatSystem(input) {
        let ret = "";
        input.forEach((message)=>{
            if (message._getType() === "system") {
                const content = message?.content;
                const contentString = typeof content === "string" ? content : contentComplexArrayToText(content);
                ret = `${ret}\n${contentString}`;
            }
        });
        return ret;
    }
    function formatGeminiTool(tool) {
        if (Object.hasOwn(tool, "functionDeclarations")) {
            const funcs = tool?.functionDeclarations ?? [];
            return funcs.map((func)=>{
                const inputSchema = func.parameters;
                return {
                    name: func.name,
                    description: func.description,
                    input_schema: inputSchema
                };
            });
        } else {
            console.warn(`Unable to format GeminiTool: ${JSON.stringify(tool, null, 1)}`);
            return [];
        }
    }
    function formatTool(tool) {
        if (Object.hasOwn(tool, "name")) return [
            tool
        ];
        else return formatGeminiTool(tool);
    }
    function formatTools(parameters) {
        const tools = parameters?.tools ?? [];
        const ret = [];
        tools.forEach((tool)=>{
            const anthropicTools = formatTool(tool);
            anthropicTools.forEach((anthropicTool)=>{
                if (anthropicTool) ret.push(anthropicTool);
            });
        });
        return ret;
    }
    function formatToolChoice(parameters) {
        const choice = parameters?.tool_choice;
        if (!choice) return void 0;
        else if (typeof choice === "object") return choice;
        else switch(choice){
            case "any":
            case "auto":
                return {
                    type: choice
                };
            case "none":
                return void 0;
            default:
                return {
                    type: "tool",
                    name: choice
                };
        }
    }
    async function formatData(input, parameters) {
        const typedInput = input;
        const anthropicVersion = formatAnthropicVersion();
        const messages = formatMessages(typedInput);
        const settings = formatSettings(parameters);
        const system = formatSystem(typedInput);
        const tools = formatTools(parameters);
        const toolChoice = formatToolChoice(parameters);
        const ret = {
            anthropic_version: anthropicVersion,
            messages,
            ...settings
        };
        if (tools && tools.length && parameters?.tool_choice !== "none") ret.tools = tools;
        if (toolChoice) ret.tool_choice = toolChoice;
        if (system?.length) ret.system = system;
        if (config?.thinking) ret.thinking = config?.thinking;
        return ret;
    }
    return {
        responseToString,
        responseToChatGeneration,
        chunkToString,
        responseToBaseMessage,
        responseToChatResult,
        formatData
    };
}
function validateClaudeParams(_params) {}
function isModelClaude(modelName) {
    return modelName.toLowerCase().startsWith("claude");
}
;
 //# sourceMappingURL=anthropic.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToGeminiTools",
    ()=>convertToGeminiTools,
    "copyAIModelParams",
    ()=>copyAIModelParams,
    "copyAIModelParamsInto",
    ()=>copyAIModelParamsInto,
    "copyAndValidateModelParamsInto",
    ()=>copyAndValidateModelParamsInto,
    "modelToFamily",
    ()=>modelToFamily,
    "modelToPublisher",
    ()=>modelToPublisher,
    "validateModelParams",
    ()=>validateModelParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$anthropic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/anthropic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/language_models/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$function_calling$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/function_calling.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/tools/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
//#region src/utils/common.ts
function copyAIModelParams(params, options) {
    return copyAIModelParamsInto(params, options, {});
}
function processToolChoice(toolChoice, allowedFunctionNames) {
    if (!toolChoice) {
        if (allowedFunctionNames) return {
            tool_choice: "any",
            allowed_function_names: allowedFunctionNames
        };
        return void 0;
    }
    if (toolChoice === "any" || toolChoice === "auto" || toolChoice === "none") return {
        tool_choice: toolChoice,
        allowed_function_names: allowedFunctionNames
    };
    if (typeof toolChoice === "string") return {
        tool_choice: "any",
        allowed_function_names: [
            ...allowedFunctionNames ?? [],
            toolChoice
        ]
    };
    throw new Error("Object inputs for tool_choice not supported.");
}
function isGeminiTool(tool) {
    for (const toolAttribute of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GeminiToolAttributes"])if (toolAttribute in tool) return true;
    return false;
}
function isGeminiNonFunctionTool(tool) {
    return isGeminiTool(tool) && !("functionDeclaration" in tool);
}
function convertToGeminiTools(tools) {
    const geminiTools = [];
    let functionDeclarationsIndex = -1;
    tools.forEach((tool)=>{
        if (isGeminiNonFunctionTool(tool)) geminiTools.push(tool);
        else {
            if (functionDeclarationsIndex === -1) {
                geminiTools.push({
                    functionDeclarations: []
                });
                functionDeclarationsIndex = geminiTools.length - 1;
            }
            if ("functionDeclarations" in tool && Array.isArray(tool.functionDeclarations)) {
                const funcs = tool.functionDeclarations;
                geminiTools[functionDeclarationsIndex].functionDeclarations.push(...funcs);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLangChainTool"])(tool)) try {
                const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGeminiParameters"])(tool.schema);
                geminiTools[functionDeclarationsIndex].functionDeclarations.push({
                    name: tool.name,
                    description: tool.description ?? `A function available to call.`,
                    parameters: jsonSchema
                });
            } catch (error) {
                const errorMessage = error && typeof error === "object" && "message" in error ? String(error.message) : String(error);
                throw new Error(`Failed to convert tool '${tool.name}' schema for Gemini: ${errorMessage}. `);
            }
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isOpenAITool"])(tool)) geminiTools[functionDeclarationsIndex].functionDeclarations.push({
                name: tool.function.name,
                description: tool.function.description ?? `A function available to call.`,
                parameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonSchemaToGeminiParameters"])(tool.function.parameters)
            });
            else throw new Error(`Received invalid tool: ${JSON.stringify(tool)}`);
        }
    });
    return geminiTools;
}
function reasoningEffortToReasoningTokens(_modelName, effort) {
    if (effort === void 0) return void 0;
    const maxEffort = 24 * 1024;
    switch(effort){
        case "low":
            return 1024;
        case "medium":
            return 8 * 1024;
        case "high":
            return maxEffort;
        default:
            return void 0;
    }
}
function copyAIModelParamsInto(params, options, target) {
    const ret = target || {};
    const model = options?.model ?? params?.model ?? target.model;
    ret.modelName = model ?? options?.modelName ?? params?.modelName ?? target.modelName;
    ret.model = model;
    ret.temperature = options?.temperature ?? params?.temperature ?? target.temperature;
    ret.maxOutputTokens = options?.maxOutputTokens ?? params?.maxOutputTokens ?? target.maxOutputTokens;
    ret.maxReasoningTokens = options?.maxReasoningTokens ?? params?.maxReasoningTokens ?? target?.maxReasoningTokens ?? options?.thinkingBudget ?? params?.thinkingBudget ?? target?.thinkingBudget ?? reasoningEffortToReasoningTokens(ret.modelName, params?.reasoningEffort) ?? reasoningEffortToReasoningTokens(ret.modelName, target?.reasoningEffort) ?? reasoningEffortToReasoningTokens(ret.modelName, options?.reasoningEffort);
    ret.topP = options?.topP ?? params?.topP ?? target.topP;
    ret.topK = options?.topK ?? params?.topK ?? target.topK;
    ret.seed = options?.seed ?? params?.seed ?? target.seed;
    ret.presencePenalty = options?.presencePenalty ?? params?.presencePenalty ?? target.presencePenalty;
    ret.frequencyPenalty = options?.frequencyPenalty ?? params?.frequencyPenalty ?? target.frequencyPenalty;
    ret.stopSequences = options?.stopSequences ?? params?.stopSequences ?? target.stopSequences;
    ret.safetySettings = options?.safetySettings ?? params?.safetySettings ?? target.safetySettings;
    ret.logprobs = options?.logprobs ?? params?.logprobs ?? target.logprobs;
    ret.topLogprobs = options?.topLogprobs ?? params?.topLogprobs ?? target.topLogprobs;
    ret.convertSystemMessageToHumanContent = options?.convertSystemMessageToHumanContent ?? params?.convertSystemMessageToHumanContent ?? target?.convertSystemMessageToHumanContent;
    ret.responseMimeType = options?.responseMimeType ?? params?.responseMimeType ?? target?.responseMimeType;
    ret.responseSchema = options?.responseSchema ?? params?.responseSchema ?? target?.responseSchema;
    ret.responseModalities = options?.responseModalities ?? params?.responseModalities ?? target?.responseModalities;
    ret.speechConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSpeechConfig"])(options?.speechConfig ?? params?.speechConfig ?? target?.speechConfig);
    ret.streaming = options?.streaming ?? params?.streaming ?? target?.streaming;
    const toolChoice = processToolChoice(options?.tool_choice, options?.allowed_function_names);
    if (toolChoice) {
        ret.tool_choice = toolChoice.tool_choice;
        ret.allowed_function_names = toolChoice.allowed_function_names;
    }
    const tools = options?.tools;
    if (tools) ret.tools = convertToGeminiTools(tools);
    if (options?.cachedContent) ret.cachedContent = options.cachedContent;
    ret.labels = options?.labels ?? params?.labels ?? target?.labels;
    return ret;
}
function modelToFamily(modelName) {
    if (!modelName) return null;
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isModelGemini"])(modelName)) return "gemini";
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isModelGemma"])(modelName)) return "gemma";
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$anthropic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isModelClaude"])(modelName)) return "claude";
    else return null;
}
function modelToPublisher(modelName) {
    const family = modelToFamily(modelName);
    switch(family){
        case "gemini":
        case "gemma":
        case "palm":
            return "google";
        case "claude":
            return "anthropic";
        default:
            return "unknown";
    }
}
function validateModelParams(params) {
    const testParams = params ?? {};
    const model = testParams.model ?? testParams.modelName;
    switch(modelToFamily(model)){
        case "gemini":
        case "gemma":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateGeminiParams"])(testParams);
        case "claude":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$anthropic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateClaudeParams"])(testParams);
        default:
            throw new Error(`Unable to verify model params: ${JSON.stringify(params)}`);
    }
}
function copyAndValidateModelParamsInto(params, target) {
    copyAIModelParamsInto(params, void 0, target);
    validateModelParams(target);
    return target;
}
;
 //# sourceMappingURL=common.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/stream.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComplexJsonStream",
    ()=>ComplexJsonStream,
    "JsonStream",
    ()=>JsonStream,
    "ReadableAbstractStream",
    ()=>ReadableAbstractStream,
    "ReadableJsonStream",
    ()=>ReadableJsonStream,
    "ReadableSseJsonStream",
    ()=>ReadableSseJsonStream,
    "ReadableSseStream",
    ()=>ReadableSseStream,
    "SseJsonStream",
    ()=>SseJsonStream,
    "SseStream",
    ()=>SseStream,
    "complexValue",
    ()=>complexValue,
    "simpleValue",
    ()=>simpleValue
]);
//#region src/utils/stream.ts
/**
* Parse an SSE event line into key-value pair.
* Format: "field: value" or "field:value" (with optional whitespace after colon)
*
* Uses string operations instead of regex to avoid ReDoS vulnerabilities.
* This is safer and more performant than regex-based parsing.
*/ function parseEventLine(line) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1 || colonIndex === 0) return null;
    const key = line.substring(0, colonIndex).trim();
    if (key.length === 0) return null;
    let valueStart = colonIndex + 1;
    while(valueStart < line.length && (line[valueStart] === " " || line[valueStart] === "	" || line[valueStart] === "\r" || line[valueStart] === "\n"))valueStart++;
    const value = line.substring(valueStart);
    return {
        key,
        value
    };
}
function complexValue(value) {
    if (value === null || typeof value === "undefined") return void 0;
    else if (typeof value === "object") if (Array.isArray(value)) return {
        list_val: value.map((avalue)=>complexValue(avalue))
    };
    else {
        const ret = {};
        const v = value;
        Object.keys(v).forEach((key)=>{
            ret[key] = complexValue(v[key]);
        });
        return {
            struct_val: ret
        };
    }
    else if (typeof value === "number") if (Number.isInteger(value)) return {
        int_val: value
    };
    else return {
        float_val: value
    };
    else return {
        string_val: [
            value
        ]
    };
}
function simpleValue(val) {
    if (val && typeof val === "object" && !Array.isArray(val)) if (val.hasOwnProperty("stringVal")) return val.stringVal[0];
    else if (val.hasOwnProperty("boolVal")) return val.boolVal[0];
    else if (val.hasOwnProperty("listVal")) {
        const { listVal } = val;
        return listVal.map((aval)=>simpleValue(aval));
    } else if (val.hasOwnProperty("structVal")) {
        const ret = {};
        const struct = val.structVal;
        Object.keys(struct).forEach((key)=>{
            ret[key] = simpleValue(struct[key]);
        });
        return ret;
    } else {
        const ret = {};
        const struct = val;
        Object.keys(struct).forEach((key)=>{
            ret[key] = simpleValue(struct[key]);
        });
        return ret;
    }
    else if (Array.isArray(val)) return val.map((aval)=>simpleValue(aval));
    else return val;
}
var JsonStream = class {
    _buffer = "";
    _bufferOpen = true;
    _firstRun = true;
    /**
	* Add data to the buffer. This may cause chunks to be generated, if available.
	* @param data
	*/ appendBuffer(data) {
        this._buffer += data;
        if (this._firstRun) {
            this._skipTo("[");
            this._firstRun = false;
        }
        this._parseBuffer();
    }
    /**
	* Indicate there is no more data that will be added to the text buffer.
	* This should be called when all the data has been read and added to indicate
	* that we should process everything remaining in the buffer.
	*/ closeBuffer() {
        this._bufferOpen = false;
        this._parseBuffer();
    }
    /**
	* Skip characters in the buffer till we get to the start of an object.
	* Then attempt to read a full object.
	* If we do read a full object, turn it into a chunk and send it to the chunk handler.
	* Repeat this for as much as we can.
	*/ _parseBuffer() {
        let obj = null;
        do {
            this._skipTo("{");
            obj = this._getFullObject();
            if (obj !== null) {
                const chunk = this._simplifyObject(obj);
                this._handleChunk(chunk);
            }
        }while (obj !== null)
        if (!this._bufferOpen) {
            this._handleChunk(null);
            this._buffer = "";
        }
    }
    /**
	* If the string is present, move the start of the buffer to the first occurrence
	* of that string. This is useful for skipping over elements or parts that we're not
	* really interested in parsing. (ie - the opening characters, comma separators, etc.)
	* @param start The string to start the buffer with
	*/ _skipTo(start) {
        const index = this._buffer.indexOf(start);
        if (index > 0) this._buffer = this._buffer.slice(index);
    }
    /**
	* Given what is in the buffer, parse a single object out of it.
	* If a complete object isn't available, return null.
	* Assumes that we are at the start of an object to parse.
	*/ _getFullObject() {
        let ret = null;
        let index = 0;
        while(ret === null && this._buffer.length > index){
            index = this._buffer.indexOf("}", index + 1);
            if (index === -1) return null;
            try {
                const objStr = this._buffer.substring(0, index + 1);
                ret = JSON.parse(objStr);
                this._buffer = this._buffer.slice(index + 1);
            } catch  {}
        }
        return ret;
    }
    _simplifyObject(obj) {
        return obj;
    }
    _chunkResolution;
    _chunkPending = null;
    _chunkQueue = [];
    /**
	* Register that we have another chunk available for consumption.
	* If we are waiting for a chunk, resolve the promise waiting for it immediately.
	* If not, then add it to the queue.
	* @param chunk
	*/ _handleChunk(chunk) {
        if (this._chunkPending) {
            this._chunkResolution(chunk);
            this._chunkPending = null;
        } else this._chunkQueue.push(chunk);
    }
    /**
	* Get the next chunk that is coming from the stream.
	* This chunk may be null, usually indicating the last chunk in the stream.
	*/ async nextChunk() {
        if (this._chunkQueue.length > 0) return this._chunkQueue.shift();
        else {
            this._chunkPending = new Promise((resolve)=>{
                this._chunkResolution = resolve;
            });
            return this._chunkPending;
        }
    }
    /**
	* Is the stream done?
	* A stream is only done if all of the following are true:
	* - There is no more data to be added to the text buffer
	* - There is no more data in the text buffer
	* - There are no chunks that are waiting to be consumed
	*/ get streamDone() {
        return !this._bufferOpen && this._buffer.length === 0 && this._chunkQueue.length === 0 && this._chunkPending === null;
    }
};
var ComplexJsonStream = class extends JsonStream {
    _simplifyObject(obj) {
        return simpleValue(obj);
    }
};
var ReadableAbstractStream = class {
    baseStream;
    decoder;
    constructor(baseStream, body){
        this.baseStream = baseStream;
        this.decoder = new TextDecoder("utf-8");
        if (body) this.run(body);
        else console.error("Unexpected empty body while streaming");
    }
    appendBuffer(data) {
        return this.baseStream.appendBuffer(data);
    }
    closeBuffer() {
        return this.baseStream.closeBuffer();
    }
    nextChunk() {
        return this.baseStream.nextChunk();
    }
    get streamDone() {
        return this.baseStream.streamDone;
    }
    async run(body) {
        if (typeof body[Symbol.asyncIterator] === "function") {
            for await (const value of body){
                const svalue = this.decoder.decode(value, {
                    stream: true
                });
                this.appendBuffer(svalue);
            }
            this.closeBuffer();
        } else throw Error("Stream must implement async iterator.");
    }
};
var ReadableJsonStream = class extends ReadableAbstractStream {
    constructor(body){
        super(new JsonStream(), body);
    }
};
var SseStream = class {
    _buffer = "";
    _bufferOpen = true;
    appendBuffer(data) {
        this._buffer += data;
        this._parseBuffer();
    }
    closeBuffer() {
        this._bufferOpen = false;
        this._parseBuffer();
    }
    /**
	* Attempt to load an entire event.
	* For each entire event we load,
	* send them to be handled.
	*/ _parseBuffer() {
        const events = this._buffer.split(/\n\n/);
        this._buffer = events.pop() ?? "";
        events.forEach((event)=>this._handleEvent(event.trim()));
        if (!this._bufferOpen) {
            this._handleEvent(null);
            this._buffer = "";
        }
    }
    /**
	* Given an event string, get all the fields
	* in the event. It is assumed there is one field
	* per line, but that field names can be duplicated,
	* indicating to append the new value to the previous value
	* @param event
	*/ _parseEvent(event) {
        if (!event || event.trim() === "") return null;
        const ret = {};
        const lines = event.split(/\n/);
        lines.forEach((line)=>{
            const parsed = parseEventLine(line);
            if (parsed) {
                const { key, value } = parsed;
                const cur = ret[key] ?? "";
                ret[key] = `${cur}${value}`;
            }
        });
        return ret;
    }
    _chunkResolution;
    _chunkPending = null;
    _chunkQueue = [];
    _handleEvent(event) {
        const chunk = this._parseEvent(event);
        if (this._chunkPending) {
            this._chunkResolution(chunk);
            this._chunkPending = null;
        } else this._chunkQueue.push(chunk);
    }
    async nextChunk() {
        if (this._chunkQueue.length > 0) return this._chunkQueue.shift();
        else {
            this._chunkPending = new Promise((resolve)=>{
                this._chunkResolution = resolve;
            });
            return this._chunkPending;
        }
    }
    get streamDone() {
        return !this._bufferOpen && this._buffer.length === 0 && this._chunkQueue.length === 0 && this._chunkPending === null;
    }
};
var ReadableSseStream = class extends ReadableAbstractStream {
    constructor(body){
        super(new SseStream(), body);
    }
};
var SseJsonStream = class extends SseStream {
    _jsonAttribute = "data";
    constructor(jsonAttribute){
        super();
        this._jsonAttribute = jsonAttribute ?? this._jsonAttribute;
    }
    async nextChunk() {
        const eventRecord = await super.nextChunk();
        const json = eventRecord?.[this._jsonAttribute];
        if (!json) return null;
        else return JSON.parse(json);
    }
};
var ReadableSseJsonStream = class extends ReadableAbstractStream {
    constructor(body){
        super(new SseJsonStream(), body);
    }
};
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/failed_handler.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureParams",
    ()=>ensureParams,
    "failedAttemptHandler",
    ()=>failedAttemptHandler
]);
//#region src/utils/failed_handler.ts
const STATUS_NO_RETRY = [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409
];
function failedAttemptHandler(error) {
    const status = error?.response?.status ?? 0;
    if (status === 0) {
        console.error("failedAttemptHandler", error);
        throw error;
    }
    if (STATUS_NO_RETRY.includes(+status)) throw error;
}
function ensureParams(params) {
    const base = params ?? {};
    return {
        onFailedAttempt: failedAttemptHandler,
        ...base
    };
}
;
 //# sourceMappingURL=failed_handler.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/safety.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$failed_handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/failed_handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/stream.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractGoogleLLMConnection",
    ()=>AbstractGoogleLLMConnection,
    "GoogleAIConnection",
    ()=>GoogleAIConnection,
    "GoogleConnection",
    ()=>GoogleConnection,
    "GoogleHostConnection",
    ()=>GoogleHostConnection,
    "GoogleRawConnection",
    ()=>GoogleRawConnection,
    "GoogleRequestCallbackHandler",
    ()=>GoogleRequestCallbackHandler,
    "GoogleRequestLogger",
    ()=>GoogleRequestLogger,
    "GoogleRequestRecorder",
    ()=>GoogleRequestRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$anthropic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/anthropic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/callbacks/base.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
//#region src/connection.ts
var GoogleConnection = class {
    caller;
    client;
    streaming;
    constructor(caller, client, streaming){
        this.caller = caller;
        this.client = client;
        this.streaming = streaming ?? false;
    }
    async _clientInfoHeaders() {
        const { userAgent, clientLibraryVersion } = await this._getClientInfo();
        return {
            "User-Agent": userAgent,
            "Client-Info": clientLibraryVersion
        };
    }
    async _getClientInfo() {
        const env = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRuntimeEnvironment"])();
        const langchain = env?.library ?? "langchain-js";
        const langchainVersion = "0";
        const moduleName = await this._moduleName();
        let clientLibraryVersion = `${langchain}/${langchainVersion}`;
        if (moduleName && moduleName.length) clientLibraryVersion = `${clientLibraryVersion}-${moduleName}`;
        return {
            userAgent: clientLibraryVersion,
            clientLibraryVersion: `${langchainVersion}-${moduleName}`
        };
    }
    async _moduleName() {
        return this.constructor.name;
    }
    async additionalHeaders() {
        return {};
    }
    async _buildOpts(data, _options, requestHeaders = {}) {
        const url = await this.buildUrl();
        const method = this.buildMethod();
        const infoHeaders = await this._clientInfoHeaders() ?? {};
        const additionalHeaders = await this.additionalHeaders() ?? {};
        const headers = {
            ...infoHeaders,
            ...additionalHeaders,
            ...requestHeaders
        };
        const opts = {
            url,
            method,
            headers
        };
        if (data && method === "POST") opts.data = data;
        if (this.streaming) opts.responseType = "stream";
        else opts.responseType = "json";
        return opts;
    }
    async _request(data, options, requestHeaders = {}) {
        const opts = await this._buildOpts(data, options, requestHeaders);
        const callResponse = await this.caller.callWithOptions({
            signal: options?.signal
        }, async ()=>this.client.request(opts));
        const response = callResponse;
        return response;
    }
};
var GoogleHostConnection = class extends GoogleConnection {
    platformType;
    _endpoint;
    _location;
    _apiVersion;
    constructor(fields, caller, client, streaming){
        super(caller, client, streaming);
        this.caller = caller;
        this.platformType = this.fieldPlatformType(fields);
        this._endpoint = fields?.endpoint;
        this._location = fields?.location;
        this._apiVersion = fields?.apiVersion;
        this.client = client;
    }
    fieldPlatformType(fields) {
        if (typeof fields === "undefined") return void 0;
        if (typeof fields.platformType !== "undefined") return fields.platformType;
        if (fields.vertexai === true) return "gcp";
        return void 0;
    }
    get platform() {
        return this.platformType ?? this.computedPlatformType;
    }
    get computedPlatformType() {
        return "gcp";
    }
    get computedApiVersion() {
        return "v1";
    }
    get apiVersion() {
        return this._apiVersion ?? this.computedApiVersion;
    }
    get location() {
        return this._location ?? this.computedLocation;
    }
    get computedLocation() {
        return "us-central1";
    }
    get endpoint() {
        return this._endpoint ?? this.computedEndpoint;
    }
    get computedEndpoint() {
        if (this.location === "global") return "aiplatform.googleapis.com";
        else return `${this.location}-aiplatform.googleapis.com`;
    }
    buildMethod() {
        return "POST";
    }
};
var GoogleRawConnection = class extends GoogleHostConnection {
    async _buildOpts(data, _options, requestHeaders = {}) {
        const opts = await super._buildOpts(data, _options, requestHeaders);
        opts.responseType = "blob";
        return opts;
    }
};
var GoogleAIConnection = class extends GoogleHostConnection {
    model;
    modelName;
    client;
    _apiName;
    apiConfig;
    constructor(fields, caller, client, streaming){
        super(fields, caller, client, streaming);
        this.client = client;
        this.modelName = fields?.model ?? fields?.modelName ?? this.model;
        this.model = this.modelName;
        this._apiName = fields?.apiName;
        this.apiConfig = {
            safetyHandler: fields?.safetyHandler,
            ...fields?.apiConfig
        };
    }
    get modelFamily() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelToFamily"])(this.model);
    }
    get modelPublisher() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelToPublisher"])(this.model);
    }
    get computedAPIName() {
        return this.modelPublisher;
    }
    get apiName() {
        return this._apiName ?? this.computedAPIName;
    }
    get api() {
        switch(this.apiName){
            case "google":
            case "gemma":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGeminiAPI"])(this.apiConfig);
            case "anthropic":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$anthropic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnthropicAPI"])(this.apiConfig);
            default:
                throw new Error(`Unknown API: ${this.apiName}`);
        }
    }
    get isApiKey() {
        return this.client.clientType === "apiKey";
    }
    fieldPlatformType(fields) {
        const ret = super.fieldPlatformType(fields);
        if (typeof ret !== "undefined") return ret;
        if (fields?.vertexai === false) return "gai";
        return void 0;
    }
    get computedPlatformType() {
        if (this.isApiKey) return "gai";
        else return "gcp";
    }
    get computedApiVersion() {
        switch(this.platform){
            case "gai":
                return "v1beta";
            default:
                return "v1";
        }
    }
    get computedLocation() {
        switch(this.apiName){
            case "google":
                return super.computedLocation;
            case "anthropic":
                return "us-east5";
            default:
                throw new Error(`Unknown apiName: ${this.apiName}. Can't get location.`);
        }
    }
    async buildUrlGenerativeLanguage() {
        const method = await this.buildUrlMethod();
        const url = `https://generativelanguage.googleapis.com/${this.apiVersion}/models/${this.model}:${method}`;
        return url;
    }
    async buildUrlVertexExpress() {
        const method = await this.buildUrlMethod();
        const publisher = this.modelPublisher;
        const url = `https://aiplatform.googleapis.com/${this.apiVersion}/publishers/${publisher}/models/${this.model}:${method}`;
        return url;
    }
    async buildUrlVertexLocation() {
        const projectId = await this.client.getProjectId();
        const method = await this.buildUrlMethod();
        const publisher = this.modelPublisher;
        const url = `https://${this.endpoint}/${this.apiVersion}/projects/${projectId}/locations/${this.location}/publishers/${publisher}/models/${this.model}:${method}`;
        return url;
    }
    async buildUrlVertex() {
        if (this.isApiKey) return this.buildUrlVertexExpress();
        else return this.buildUrlVertexLocation();
    }
    async buildUrl() {
        switch(this.platform){
            case "gai":
                return this.buildUrlGenerativeLanguage();
            default:
                return this.buildUrlVertex();
        }
    }
    async request(input, parameters, options, runManager) {
        const moduleName = this.constructor.name;
        const streamingParameters = {
            ...parameters,
            streaming: this.streaming
        };
        const data = await this.formatData(input, streamingParameters);
        await runManager?.handleCustomEvent(`google-request-${moduleName}`, {
            data,
            parameters: streamingParameters,
            options,
            connection: {
                ...this,
                url: await this.buildUrl(),
                urlMethod: await this.buildUrlMethod(),
                modelFamily: this.modelFamily,
                modelPublisher: this.modelPublisher,
                computedPlatformType: this.computedPlatformType
            }
        });
        const response = await this._request(data, options);
        await runManager?.handleCustomEvent(`google-response-${moduleName}`, {
            response
        });
        return response;
    }
};
var AbstractGoogleLLMConnection = class extends GoogleAIConnection {
    async buildUrlMethodGemini() {
        return this.streaming ? "streamGenerateContent" : "generateContent";
    }
    async buildUrlMethodClaude() {
        return this.streaming ? "streamRawPredict" : "rawPredict";
    }
    async buildUrlMethod() {
        switch(this.modelFamily){
            case "gemini":
            case "gemma":
                return this.buildUrlMethodGemini();
            case "claude":
                return this.buildUrlMethodClaude();
            default:
                throw new Error(`Unknown model family: ${this.modelFamily}`);
        }
    }
    async formatData(input, parameters) {
        let filteredParameters = parameters;
        if (parameters.labels && this.platform !== "gcp") {
            const { labels, ...paramsWithoutLabels } = parameters;
            filteredParameters = paramsWithoutLabels;
        }
        return this.api.formatData(input, filteredParameters);
    }
};
var GoogleRequestCallbackHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseCallbackHandler"] {
    customEventInfo(eventName) {
        const names = eventName.split("-");
        return {
            subEvent: names[1],
            module: names[2]
        };
    }
    handleCustomEvent(eventName, data, runId, tags, metadata) {
        if (!eventName) return void 0;
        const eventInfo = this.customEventInfo(eventName);
        switch(eventInfo.subEvent){
            case "request":
                return this.handleCustomRequestEvent(eventName, eventInfo, data, runId, tags, metadata);
            case "response":
                return this.handleCustomResponseEvent(eventName, eventInfo, data, runId, tags, metadata);
            case "chunk":
                return this.handleCustomChunkEvent(eventName, eventInfo, data, runId, tags, metadata);
            default:
                console.error(`Unexpected eventInfo for ${eventName} ${JSON.stringify(eventInfo, null, 1)}`);
        }
    }
};
var GoogleRequestLogger = class extends GoogleRequestCallbackHandler {
    name = "GoogleRequestLogger";
    log(eventName, data, tags) {
        const tagStr = tags ? `[${tags}]` : "[]";
        console.log(`${eventName} ${tagStr} ${JSON.stringify(data, null, 1)}`);
    }
    handleCustomRequestEvent(eventName, _eventInfo, data, _runId, tags, _metadata) {
        this.log(eventName, data, tags);
    }
    handleCustomResponseEvent(eventName, _eventInfo, data, _runId, tags, _metadata) {
        this.log(eventName, data, tags);
    }
    handleCustomChunkEvent(eventName, _eventInfo, data, _runId, tags, _metadata) {
        this.log(eventName, data, tags);
    }
};
var GoogleRequestRecorder = class extends GoogleRequestCallbackHandler {
    name = "GoogleRequestRecorder";
    request = {};
    response = {};
    chunk = [];
    handleCustomRequestEvent(_eventName, _eventInfo, data, _runId, _tags, _metadata) {
        this.request = data;
    }
    handleCustomResponseEvent(_eventName, _eventInfo, data, _runId, _tags, _metadata) {
        this.response = data;
    }
    handleCustomChunkEvent(_eventName, _eventInfo, data, _runId, _tags, _metadata) {
        this.chunk.push(data);
    }
};
;
 //# sourceMappingURL=connection.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKeyGoogleAuth",
    ()=>ApiKeyGoogleAuth,
    "GoogleAbstractedFetchClient",
    ()=>GoogleAbstractedFetchClient,
    "aiPlatformScope",
    ()=>aiPlatformScope,
    "ensureAuthOptionScopes",
    ()=>ensureAuthOptionScopes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/stream.js [app-rsc] (ecmascript)");
;
//#region src/auth.ts
var GoogleAbstractedFetchClient = class {
    _fetch = fetch;
    async _buildData(res, opts) {
        switch(opts.responseType){
            case "json":
                return res.json();
            case "stream":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReadableJsonStream"](res.body);
            default:
                return res.blob();
        }
    }
    async _request(url, opts, additionalHeaders) {
        if (url == null) throw new Error("Missing URL");
        const fetchOptions = {
            method: opts.method,
            headers: {
                "Content-Type": "application/json",
                ...opts.headers ?? {},
                ...additionalHeaders ?? {}
            }
        };
        if (opts.data !== void 0) if (typeof opts.data === "string") fetchOptions.body = opts.data;
        else fetchOptions.body = JSON.stringify(opts.data);
        const res = await this._fetch(url, fetchOptions);
        if (!res.ok) {
            const resText = await res.text();
            const error = /* @__PURE__ */ new Error(`Google request failed with status code ${res.status}: ${resText}`);
            error.response = res;
            error.details = {
                url,
                opts,
                fetchOptions,
                result: res
            };
            throw error;
        }
        const data = await this._buildData(res, opts);
        return {
            data,
            config: {},
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            request: {
                responseURL: res.url
            }
        };
    }
};
var ApiKeyGoogleAuth = class extends GoogleAbstractedFetchClient {
    apiKey;
    constructor(apiKey){
        super();
        this.apiKey = apiKey;
    }
    get clientType() {
        return "apiKey";
    }
    getProjectId() {
        throw new Error("APIs that require a project ID cannot use an API key");
    }
    request(opts) {
        const authHeader = {
            "X-Goog-Api-Key": this.apiKey
        };
        return this._request(opts.url, opts, authHeader);
    }
};
function aiPlatformScope(platform) {
    switch(platform){
        case "gai":
            return [
                "https://www.googleapis.com/auth/generative-language"
            ];
        default:
            return [
                "https://www.googleapis.com/auth/cloud-platform"
            ];
    }
}
function ensureAuthOptionScopes(authOption, scopeProperty, scopesOrPlatform) {
    if (authOption && Object.hasOwn(authOption, scopeProperty)) return authOption;
    const scopes = Array.isArray(scopesOrPlatform) ? scopesOrPlatform : aiPlatformScope(scopesOrPlatform ?? "gcp");
    return {
        [scopeProperty]: scopes,
        ...authOption ?? {}
    };
}
;
 //# sourceMappingURL=auth.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/profiles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>profiles_default
]);
//#region src/profiles.ts
const PROFILES = {
    "gemini-embedding-001": {
        maxInputTokens: 2048,
        imageInputs: false,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 3072,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-2.5-flash-preview-05-20": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-flash-lite-latest": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-flash-latest": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-pro-preview-05-06": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.0-flash-lite": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.0-flash": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-lite": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-pro-preview-06-05": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-lite-preview-06-17": {
        maxInputTokens: 65536,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-preview-09-2025": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-preview-04-17": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-pro": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-lite-preview-09-2025": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    }
};
var profiles_default = PROFILES;
;
 //# sourceMappingURL=profiles.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/chat_models.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatConnection",
    ()=>ChatConnection,
    "ChatGoogleBase",
    ()=>ChatGoogleBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$failed_handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/failed_handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$profiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/profiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/language_models/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/outputs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/messages/ai.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/runnables/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$passthrough$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/runnables/passthrough.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/runnables/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$openai_tools$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/openai_tools/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$openai_tools$2f$json_output_tools_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/openai_tools/json_output_tools_parsers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/json.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/stream.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/types/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/types/zod.js [app-rsc] (ecmascript)");
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
//#region src/chat_models.ts
var ChatConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbstractGoogleLLMConnection"] {
    convertSystemMessageToHumanContent;
    constructor(fields, caller, client, streaming){
        super(fields, caller, client, streaming);
        this.convertSystemMessageToHumanContent = fields?.convertSystemMessageToHumanContent;
    }
    get useSystemInstruction() {
        return typeof this.convertSystemMessageToHumanContent === "boolean" ? !this.convertSystemMessageToHumanContent : this.computeUseSystemInstruction;
    }
    get computeUseSystemInstruction() {
        if (this.modelFamily === "palm") return false;
        else if (this.modelName === "gemini-1.0-pro-001") return false;
        else if (this.modelName.startsWith("gemini-pro-vision")) return false;
        else if (this.modelName.startsWith("gemini-1.0-pro-vision")) return false;
        else if (this.modelName === "gemini-pro" && this.platform === "gai") return false;
        else if (this.modelFamily === "gemma") return false;
        return true;
    }
    computeGoogleSearchToolAdjustmentFromModel() {
        if (this.modelName.startsWith("gemini-1.0")) return "googleSearchRetrieval";
        else if (this.modelName.startsWith("gemini-1.5")) return "googleSearchRetrieval";
        else return "googleSearch";
    }
    computeGoogleSearchToolAdjustment(apiConfig) {
        const adj = apiConfig.googleSearchToolAdjustment;
        if (adj === void 0 || adj === true) return this.computeGoogleSearchToolAdjustmentFromModel();
        else return adj;
    }
    buildGeminiAPI() {
        const apiConfig = this.apiConfig ?? {};
        const googleSearchToolAdjustment = this.computeGoogleSearchToolAdjustment(apiConfig);
        const geminiConfig = {
            useSystemInstruction: this.useSystemInstruction,
            googleSearchToolAdjustment,
            ...apiConfig
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGeminiAPI"])(geminiConfig);
    }
    get api() {
        switch(this.apiName){
            case "google":
                return this.buildGeminiAPI();
            default:
                return super.api;
        }
    }
};
/**
* Integration with a Google chat model.
*/ var ChatGoogleBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseChatModel"] {
    static lc_name() {
        return "ChatGoogle";
    }
    get lc_secrets() {
        return {
            authOptions: "GOOGLE_AUTH_OPTIONS"
        };
    }
    lc_serializable = true;
    model;
    modelName = "gemini-pro";
    temperature;
    maxOutputTokens;
    maxReasoningTokens;
    topP;
    topK;
    seed;
    presencePenalty;
    frequencyPenalty;
    stopSequences = [];
    logprobs;
    topLogprobs = 0;
    safetySettings = [];
    responseModalities;
    convertSystemMessageToHumanContent;
    safetyHandler;
    speechConfig;
    streamUsage = true;
    streaming = false;
    labels;
    connection;
    streamedConnection;
    constructor(fields){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$failed_handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureParams"])(fields));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyAndValidateModelParamsInto"])(fields, this);
        this.safetyHandler = fields?.safetyHandler ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultGeminiSafetyHandler"]();
        this.streamUsage = fields?.streamUsage ?? this.streamUsage;
        const client = this.buildClient(fields);
        this.buildConnection(fields ?? {}, client);
    }
    getLsParams(options) {
        const params = this.invocationParams(options);
        return {
            ls_provider: "google_vertexai",
            ls_model_name: this.model,
            ls_model_type: "chat",
            ls_temperature: params.temperature ?? void 0,
            ls_max_tokens: params.maxOutputTokens ?? void 0,
            ls_stop: options.stop
        };
    }
    buildApiKeyClient(apiKey) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiKeyGoogleAuth"](apiKey);
    }
    buildApiKey(fields) {
        return fields?.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
    }
    buildClient(fields) {
        const apiKey = this.buildApiKey(fields);
        if (apiKey) return this.buildApiKeyClient(apiKey);
        else return this.buildAbstractedClient(fields);
    }
    buildConnection(fields, client) {
        this.connection = new ChatConnection({
            ...fields,
            ...this
        }, this.caller, client, false);
        this.streamedConnection = new ChatConnection({
            ...fields,
            ...this
        }, this.caller, client, true);
    }
    get platform() {
        return this.connection.platform;
    }
    bindTools(tools, kwargs) {
        return this.withConfig({
            tools: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToGeminiTools"])(tools),
            ...kwargs
        });
    }
    _llmType() {
        return "chat_integration";
    }
    /**
	* Get the parameters used to invoke the model
	*/ invocationParams(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyAIModelParams"])(this, options);
    }
    async _generate(messages, options, runManager) {
        const parameters = this.invocationParams(options);
        if (this.streaming) {
            const stream = this._streamResponseChunks(messages, options, runManager);
            let finalChunk = null;
            for await (const chunk$1 of stream)finalChunk = !finalChunk ? chunk$1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])(finalChunk, chunk$1);
            if (!finalChunk) throw new Error("No chunks were returned from the stream.");
            return {
                generations: [
                    finalChunk
                ]
            };
        }
        const response = await this.connection.request(messages, parameters, options, runManager);
        const ret = this.connection.api.responseToChatResult(response);
        const chunk = ret?.generations?.[0];
        if (chunk) await runManager?.handleLLMNewToken(chunk.text || "");
        return ret;
    }
    async *_streamResponseChunks(_messages, options, runManager) {
        const parameters = this.invocationParams(options);
        const response = await this.streamedConnection.request(_messages, parameters, options, runManager);
        const stream = response.data;
        let usageMetadata;
        while(!stream.streamDone){
            const output = await stream.nextChunk();
            await runManager?.handleCustomEvent(`google-chunk-${this.constructor.name}`, {
                output
            });
            if (output && output.usageMetadata && this.streamUsage !== false && options.streamUsage !== false) usageMetadata = {
                input_tokens: output.usageMetadata.promptTokenCount,
                output_tokens: output.usageMetadata.candidatesTokenCount,
                total_tokens: output.usageMetadata.totalTokenCount
            };
            const chunk = output !== null ? this.connection.api.responseToChatGeneration({
                data: output
            }) : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
                text: "",
                generationInfo: {
                    finishReason: "stop"
                },
                message: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
                    content: "",
                    usage_metadata: usageMetadata
                })
            });
            if (chunk) {
                yield chunk;
                await runManager?.handleLLMNewToken(chunk.text ?? "", void 0, void 0, void 0, void 0, {
                    chunk
                });
            }
        }
    }
    /** @ignore */ _combineLLMOutput() {
        return [];
    }
    /**
	* Return profiling information for the model.
	*
	* Provides information about the model's capabilities and constraints,
	* including token limits, multimodal support, and advanced features like
	* tool calling and structured output.
	*
	* @returns {ModelProfile} An object describing the model's capabilities and constraints
	*/ get profile() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$profiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][this.model] ?? {};
    }
    withStructuredOutput(outputSchema, config) {
        const schema = outputSchema;
        const name = config?.name;
        const method = config?.method;
        const includeRaw = config?.includeRaw;
        if (method === "jsonMode") throw new Error(`Google only supports "jsonSchema" or "functionCalling" as a method.`);
        let llm;
        let outputParser;
        if (method === "functionCalling") {
            let functionName = name ?? "extract";
            let tools;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInteropZodSchema"])(schema)) {
                const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGeminiParameters"])(schema);
                tools = [
                    {
                        functionDeclarations: [
                            {
                                name: functionName,
                                description: jsonSchema.description ?? "A function available to call.",
                                parameters: jsonSchema
                            }
                        ]
                    }
                ];
                outputParser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$openai_tools$2f$json_output_tools_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonOutputKeyToolsParser"]({
                    returnSingle: true,
                    keyName: functionName,
                    zodSchema: schema
                });
            } else {
                let geminiFunctionDefinition;
                if (typeof schema.name === "string" && typeof schema.parameters === "object" && schema.parameters != null) {
                    geminiFunctionDefinition = schema;
                    functionName = schema.name;
                } else {
                    const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAdditionalProperties"])(schema);
                    geminiFunctionDefinition = {
                        name: functionName,
                        description: schema.description ?? "",
                        parameters
                    };
                }
                tools = [
                    {
                        functionDeclarations: [
                            geminiFunctionDefinition
                        ]
                    }
                ];
                outputParser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$openai_tools$2f$json_output_tools_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonOutputKeyToolsParser"]({
                    returnSingle: true,
                    keyName: functionName
                });
            }
            llm = this.bindTools(tools).withConfig({
                tool_choice: functionName
            });
        } else {
            const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGeminiParameters"])(schema);
            llm = this.withConfig({
                responseSchema: jsonSchema
            });
            outputParser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonOutputParser"]();
        }
        if (!includeRaw) return llm.pipe(outputParser).withConfig({
            runName: "ChatGoogleStructuredOutput"
        });
        const parserAssign = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$passthrough$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RunnablePassthrough"].assign({
            parsed: (input, config$1)=>outputParser.invoke(input.raw, config$1)
        });
        const parserNone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$passthrough$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RunnablePassthrough"].assign({
            parsed: ()=>null
        });
        const parsedWithFallback = parserAssign.withFallbacks({
            fallbacks: [
                parserNone
            ]
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RunnableSequence"].from([
            {
                raw: llm
            },
            parsedWithFallback
        ]).withConfig({
            runName: "StructuredOutputRunnable"
        });
    }
};
;
 //# sourceMappingURL=chat_models.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/llms.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleBaseLLM",
    ()=>GoogleBaseLLM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/gemini.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$failed_handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/failed_handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/outputs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/callbacks/manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$llms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/language_models/llms.js [app-rsc] (ecmascript)");
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
//#region src/llms.ts
var GoogleLLMConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbstractGoogleLLMConnection"] {
    async formatContents(input, _parameters) {
        const parts = await this.api.messageContentToParts(input);
        const contents = [
            {
                role: "user",
                parts
            }
        ];
        return contents;
    }
};
var ProxyChatGoogle = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGoogleBase"] {
    constructor(fields){
        super(fields);
    }
    buildAbstractedClient(fields) {
        return fields.connection.client;
    }
};
/**
* Integration with an LLM.
*/ var GoogleBaseLLM = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$llms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LLM"] {
    static lc_name() {
        return "GoogleLLM";
    }
    get lc_secrets() {
        return {
            authOptions: "GOOGLE_AUTH_OPTIONS"
        };
    }
    originalFields;
    lc_serializable = true;
    modelName = "gemini-pro";
    model = "gemini-pro";
    temperature = .7;
    maxOutputTokens = 1024;
    topP = .8;
    topK = 40;
    stopSequences = [];
    safetySettings = [];
    safetyHandler;
    responseMimeType = "text/plain";
    connection;
    streamedConnection;
    constructor(fields){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$failed_handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureParams"])(fields));
        this.originalFields = fields;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyAndValidateModelParamsInto"])(fields, this);
        this.safetyHandler = fields?.safetyHandler ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$gemini$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultGeminiSafetyHandler"]();
        const client = this.buildClient(fields);
        this.buildConnection(fields ?? {}, client);
    }
    buildApiKeyClient(apiKey) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiKeyGoogleAuth"](apiKey);
    }
    buildApiKey(fields) {
        return fields?.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
    }
    buildClient(fields) {
        const apiKey = this.buildApiKey(fields);
        if (apiKey) return this.buildApiKeyClient(apiKey);
        else return this.buildAbstractedClient(fields);
    }
    buildConnection(fields, client) {
        this.connection = new GoogleLLMConnection({
            ...fields,
            ...this
        }, this.caller, client, false);
        this.streamedConnection = new GoogleLLMConnection({
            ...fields,
            ...this
        }, this.caller, client, true);
    }
    get platform() {
        return this.connection.platform;
    }
    _llmType() {
        return "googlellm";
    }
    formatPrompt(prompt) {
        return prompt;
    }
    /**
	* For some given input string and options, return a string output.
	*
	* Despite the fact that `invoke` is overridden below, we still need this
	* in order to handle public APi calls to `generate()`.
	*/ async _call(prompt, options) {
        const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyAIModelParams"])(this, options);
        const result = await this.connection.request(prompt, parameters, options);
        const ret = this.connection.api.responseToString(result);
        return ret;
    }
    async *_streamIterator(input, options) {
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$llms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseLLM"]._convertInputToPromptValue(input);
        const [runnableConfig, callOptions] = this._separateRunnableConfigFromCallOptions(options);
        const callbackManager_ = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CallbackManager"].configure(runnableConfig.callbacks, this.callbacks, runnableConfig.tags, this.tags, runnableConfig.metadata, this.metadata, {
            verbose: this.verbose
        });
        const extra = {
            options: callOptions,
            invocation_params: this?.invocationParams(callOptions),
            batch_size: 1
        };
        const runManagers = await callbackManager_?.handleLLMStart(this.toJSON(), [
            prompt.toString()
        ], void 0, void 0, extra, void 0, void 0, runnableConfig.runName);
        let generation = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GenerationChunk"]({
            text: ""
        });
        const proxyChat = this.createProxyChat();
        try {
            for await (const chunk of proxyChat._streamIterator(input, options)){
                const stringValue = this.connection.api.chunkToString(chunk);
                const generationChunk = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GenerationChunk"]({
                    text: stringValue
                });
                generation = generation.concat(generationChunk);
                yield stringValue;
            }
        } catch (err) {
            await Promise.all((runManagers ?? []).map((runManager)=>runManager?.handleLLMError(err)));
            throw err;
        }
        await Promise.all((runManagers ?? []).map((runManager)=>runManager?.handleLLMEnd({
                generations: [
                    [
                        generation
                    ]
                ]
            })));
    }
    async predictMessages(messages, options, _callbacks) {
        const { content } = messages[0];
        const result = await this.connection.request(content, {}, options);
        const ret = this.connection.api.responseToBaseMessage(result);
        return ret;
    }
    /**
	* Internal implementation detail to allow Google LLMs to support
	* multimodal input by delegating to the chat model implementation.
	*
	* TODO: Replace with something less hacky.
	*/ createProxyChat() {
        return new ProxyChatGoogle({
            ...this.originalFields,
            connection: this.connection
        });
    }
    async invoke(input, options) {
        const stream = await this._streamIterator(input, options);
        let generatedOutput = "";
        for await (const chunk of stream)generatedOutput += chunk;
        return generatedOutput;
    }
};
;
 //# sourceMappingURL=llms.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/embeddings.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGoogleEmbeddings",
    ()=>BaseGoogleEmbeddings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/embeddings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$chunk_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/chunk_array.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/embeddings.ts
var EmbeddingsConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAIConnection"] {
    convertSystemMessageToHumanContent;
    constructor(fields, caller, client, streaming){
        super(fields, caller, client, streaming);
    }
    buildUrlMethodAiStudio() {
        return "embedContent";
    }
    buildUrlMethodVertex() {
        return "predict";
    }
    async buildUrlMethod() {
        switch(this.platform){
            case "gcp":
                return this.buildUrlMethodVertex();
            case "gai":
                return this.buildUrlMethodAiStudio();
            default:
                throw new Error(`Unknown platform when building method: ${this.platform}`);
        }
    }
    get modelPublisher() {
        return "google";
    }
    formatDataAiStudio(input, parameters) {
        const parts = input.map((instance)=>({
                text: instance.content
            }));
        const content = {
            parts
        };
        const outputDimensionality = parameters?.outputDimensionality;
        const ret = {
            content,
            outputDimensionality
        };
        let key;
        for(key in ret)if (ret[key] === void 0) delete ret[key];
        return ret;
    }
    formatDataVertex(input, parameters) {
        return {
            instances: input,
            parameters
        };
    }
    async formatData(input, parameters) {
        switch(this.platform){
            case "gcp":
                return this.formatDataVertex(input, parameters);
            case "gai":
                return this.formatDataAiStudio(input, parameters);
            default:
                throw new Error(`Unknown platform to format embeddings ${this.platform}`);
        }
    }
};
/**
* Enables calls to Google APIs for generating
* text embeddings.
*/ var BaseGoogleEmbeddings = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Embeddings"] {
    model;
    dimensions;
    connection;
    constructor(fields){
        super(fields);
        this.model = fields.model;
        this.dimensions = fields.dimensions ?? fields.outputDimensionality;
        this.connection = new EmbeddingsConnection({
            ...fields,
            ...this
        }, this.caller, this.buildClient(fields), false);
    }
    buildApiKeyClient(apiKey) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiKeyGoogleAuth"](apiKey);
    }
    buildApiKey(fields) {
        return fields?.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
    }
    buildClient(fields) {
        const apiKey = this.buildApiKey(fields);
        if (apiKey) return this.buildApiKeyClient(apiKey);
        else return this.buildAbstractedClient(fields);
    }
    buildParameters() {
        const ret = {
            outputDimensionality: this.dimensions
        };
        let key;
        for(key in ret)if (ret[key] === void 0) delete ret[key];
        return ret;
    }
    vertexResponseToValues(response) {
        const predictions = response?.data?.predictions ?? [];
        return predictions.map((prediction)=>prediction.embeddings.values);
    }
    aiStudioResponseToValues(response) {
        const value = response?.data?.embedding?.values ?? [];
        return [
            value
        ];
    }
    responseToValues(response) {
        switch(this.connection.platform){
            case "gcp":
                return this.vertexResponseToValues(response);
            case "gai":
                return this.aiStudioResponseToValues(response);
            default:
                throw new Error(`Unknown response platform: ${this.connection.platform}`);
        }
    }
    /**
	* Takes an array of documents as input and returns a promise that
	* resolves to a 2D array of embeddings for each document. It splits the
	* documents into chunks and makes requests to the Google Vertex AI API to
	* generate embeddings.
	* @param documents An array of documents to be embedded.
	* @returns A promise that resolves to a 2D array of embeddings for each document.
	*/ async embedDocuments(documents) {
        const chunkSize = 1;
        const instanceChunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$chunk_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chunkArray"])(documents.map((document)=>({
                content: document
            })), chunkSize);
        const parameters = this.buildParameters();
        const options = {};
        const responses = await Promise.all(instanceChunks.map((instances)=>this.connection.request(instances, parameters, options)));
        const result = responses?.map((response)=>this.responseToValues(response)).flat() ?? [];
        return result;
    }
    /**
	* Takes a document as input and returns a promise that resolves to an
	* embedding for the document. It calls the embedDocuments method with the
	* document as the input.
	* @param document A document to be embedded.
	* @returns A promise that resolves to an embedding for the document.
	*/ async embedQuery(document) {
        const data = await this.embedDocuments([
            document
        ]);
        return data[0];
    }
};
;
 //# sourceMappingURL=embeddings.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/output_parsers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGoogleSearchOutputParser",
    ()=>BaseGoogleSearchOutputParser,
    "MarkdownGoogleSearchOutputParser",
    ()=>MarkdownGoogleSearchOutputParser,
    "SimpleGoogleSearchOutputParser",
    ()=>SimpleGoogleSearchOutputParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/output_parsers/base.js [app-rsc] (ecmascript)");
;
//#region src/output_parsers.ts
var BaseGoogleSearchOutputParser = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseLLMOutputParser"] {
    lc_namespace = [
        "google_common",
        "output_parsers"
    ];
    generationToGroundingInfo(generation) {
        if ("message" in generation) {
            const responseMetadata = generation?.message?.response_metadata;
            const metadata = responseMetadata?.groundingMetadata;
            const supports = responseMetadata?.groundingSupport ?? metadata?.groundingSupports ?? [];
            if (metadata) return {
                metadata,
                supports
            };
        }
        return void 0;
    }
    generationsToGroundingInfo(generations) {
        for (const generation of generations){
            const info = this.generationToGroundingInfo(generation);
            if (info !== void 0) return info;
        }
        return void 0;
    }
    generationToString(generation) {
        if ("message" in generation) {
            const content = generation?.message?.content;
            if (typeof content === "string") return content;
            else return content.map((c)=>{
                if (c?.type === "text") return c?.text ?? "";
                else return "";
            }).reduce((previousValue, currentValue)=>`${previousValue}${currentValue}`);
        }
        return generation.text;
    }
    generationsToString(generations) {
        return generations.map((generation)=>this.generationToString(generation)).reduce((previousValue, currentValue)=>`${previousValue}${currentValue}`);
    }
    annotateSegment(text, grounding, support, index) {
        const start = support.segment.startIndex ?? 0;
        const end = support.segment.endIndex;
        const textBefore = text.substring(0, start);
        const textSegment = text.substring(start, end);
        const textAfter = text.substring(end);
        const textPrefix = this.segmentPrefix(grounding, support, index) ?? "";
        const textSuffix = this.segmentSuffix(grounding, support, index) ?? "";
        return `${textBefore}${textPrefix}${textSegment}${textSuffix}${textAfter}`;
    }
    annotateTextSegments(text, grounding) {
        let ret = text;
        for(let co = grounding.supports.length - 1; co >= 0; co -= 1){
            const support = grounding.supports[co];
            ret = this.annotateSegment(ret, grounding, support, co);
        }
        return ret;
    }
    /**
	* Google requires us to
	* "Display the Search Suggestion exactly as provided without any modifications"
	* So this will typically be called from the textSuffix() method to get
	* a string that renders HTML.
	* See https://ai.google.dev/gemini-api/docs/grounding/search-suggestions
	* @param grounding
	*/ searchSuggestion(grounding) {
        return grounding?.metadata?.searchEntryPoint?.renderedContent ?? "";
    }
    annotateText(text, grounding) {
        const prefix = this.textPrefix(text, grounding) ?? "";
        const suffix = this.textSuffix(text, grounding) ?? "";
        const body = this.annotateTextSegments(text, grounding);
        return `${prefix}${body}${suffix}`;
    }
    async parseResult(generations, _callbacks) {
        const text = this.generationsToString(generations);
        const grounding = this.generationsToGroundingInfo(generations);
        if (!grounding) return text;
        return this.annotateText(text, grounding);
    }
};
var SimpleGoogleSearchOutputParser = class extends BaseGoogleSearchOutputParser {
    segmentPrefix(_grounding, _support, _index) {
        return void 0;
    }
    segmentSuffix(_grounding, support, _index) {
        const indices = support.groundingChunkIndices.map((i)=>i + 1);
        return ` [${indices.join(", ")}]`;
    }
    textPrefix(_text, _grounding) {
        return "Google Says:\n";
    }
    chunkToString(chunk, index) {
        const info = chunk.retrievedContext ?? chunk.web;
        return `${index + 1}. ${info.title} - ${info.uri}`;
    }
    textSuffix(_text, grounding) {
        let ret = "\n";
        const chunks = grounding?.metadata?.groundingChunks ?? [];
        chunks.forEach((chunk, index)=>{
            ret = `${ret}${this.chunkToString(chunk, index)}\n`;
        });
        return ret;
    }
};
var MarkdownGoogleSearchOutputParser = class extends BaseGoogleSearchOutputParser {
    segmentPrefix(_grounding, _support, _index) {
        return void 0;
    }
    chunkLink(grounding, index) {
        const chunk = grounding.metadata.groundingChunks[index];
        const url = chunk.retrievedContext?.uri ?? chunk.web?.uri;
        const num = index + 1;
        return `[[${num}](${url})]`;
    }
    segmentSuffix(grounding, support, _index) {
        let ret = "";
        support.groundingChunkIndices.forEach((chunkIndex)=>{
            const link = this.chunkLink(grounding, chunkIndex);
            ret = `${ret}${link}`;
        });
        return ret;
    }
    textPrefix(_text, _grounding) {
        return void 0;
    }
    chunkSuffixLink(chunk, index) {
        const num = index + 1;
        const info = chunk.retrievedContext ?? chunk.web;
        const url = info.uri;
        const site = info.title;
        return `${num}. [${site}](${url})`;
    }
    textSuffix(_text, grounding) {
        let ret = "\n**Search Sources**\n";
        const chunks = grounding.metadata.groundingChunks;
        chunks.forEach((chunk, index)=>{
            ret = `${ret}${this.chunkSuffixLink(chunk, index)}\n`;
        });
        const search = this.searchSuggestion(grounding);
        ret = `${ret}\n${search}`;
        return ret;
    }
};
;
 //# sourceMappingURL=output_parsers.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$safety$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/safety.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$zod_to_gemini_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/zod_to_gemini_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/utils/stream.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$llms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/llms.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/embeddings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$output_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/output_parsers.js [app-rsc] (ecmascript)");
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
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/experimental/utils/media_core.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackedBlobStore",
    ()=>BackedBlobStore,
    "BlobStore",
    ()=>BlobStore,
    "DataBlobStore",
    ()=>DataBlobStore,
    "MediaBlob",
    ()=>MediaBlob,
    "MediaManager",
    ()=>MediaManager,
    "ReadThroughBlobStore",
    ()=>ReadThroughBlobStore,
    "SimpleWebBlobStore",
    ()=>SimpleWebBlobStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v1$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript) <export default as v1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$stores$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/stores.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/load/serializable.js [app-rsc] (ecmascript)");
;
;
;
//#region src/experimental/utils/media_core.ts
function bytesToString(dataArray) {
    let ret = "";
    const chunkSize = 102400;
    for(let i = 0; i < dataArray.length; i += chunkSize){
        const chunk = dataArray.subarray(i, i + chunkSize);
        ret += String.fromCharCode(...chunk);
    }
    return ret;
}
/**
* Represents a chunk of data that can be identified by the path where the
* data is (or will be) located, along with optional metadata about the data.
*/ var MediaBlob = class MediaBlob extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Serializable"] {
    lc_serializable = true;
    lc_namespace = [
        "langchain",
        "google_common",
        "experimental",
        "utils",
        "media_core"
    ];
    data = {
        value: "",
        type: "text/plain"
    };
    metadata;
    path;
    constructor(params){
        super(params);
        this.data = params.data ?? this.data;
        this.metadata = params.metadata;
        this.path = params.path;
    }
    get size() {
        return this.asBytes.length;
    }
    get dataType() {
        return this.data?.type ?? "";
    }
    get encoding() {
        const charsetEquals = this.dataType.indexOf("charset=");
        return charsetEquals === -1 ? "utf-8" : this.dataType.substring(charsetEquals + 8);
    }
    get mimetype() {
        const semicolon = this.dataType.indexOf(";");
        return semicolon === -1 ? this.dataType : this.dataType.substring(0, semicolon);
    }
    get asBytes() {
        if (!this.data) return Uint8Array.from([]);
        const binString = atob(this.data?.value);
        const ret = new Uint8Array(binString.length);
        for(let co = 0; co < binString.length; co += 1)ret[co] = binString.charCodeAt(co);
        return ret;
    }
    async asString() {
        return bytesToString(this.asBytes);
    }
    async asBase64() {
        return this.data?.value ?? "";
    }
    async asDataUrl() {
        return `data:${this.mimetype};base64,${await this.asBase64()}`;
    }
    async asUri() {
        return this.path ?? await this.asDataUrl();
    }
    async encode() {
        const dataUrl = await this.asDataUrl();
        const comma = dataUrl.indexOf(",");
        const encoded = dataUrl.substring(comma + 1);
        const encoding = dataUrl.indexOf("base64") > -1 ? "base64" : "8bit";
        return {
            encoded,
            encoding
        };
    }
    static fromDataUrl(url) {
        if (!url.startsWith("data:")) throw new Error("Not a data: URL");
        const colon = url.indexOf(":");
        const semicolon = url.indexOf(";");
        const mimeType = url.substring(colon + 1, semicolon);
        const comma = url.indexOf(",");
        const base64Data = url.substring(comma + 1);
        const data = {
            type: mimeType,
            value: base64Data
        };
        return new MediaBlob({
            data,
            path: url
        });
    }
    static async fromBlob(blob, other) {
        const valueBuffer = await blob.arrayBuffer();
        const valueArray = new Uint8Array(valueBuffer);
        const valueStr = bytesToString(valueArray);
        const value = btoa(valueStr);
        return new MediaBlob({
            ...other,
            data: {
                value,
                type: blob.type
            }
        });
    }
};
/**
* A specialized Store that is designed to handle MediaBlobs and use the
* key that is included in the blob to determine exactly how it is stored.
*
* The full details of a MediaBlob may be changed when it is stored.
* For example, it may get additional or different Metadata. This should be
* what is returned when the store() method is called.
*
* Although BlobStore extends BaseStore, not all of the methods from
* BaseStore may be implemented (or even possible). Those that are not
* implemented should be documented and throw an Error if called.
*/ var BlobStore = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$stores$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseStore"] {
    lc_namespace = [
        "langchain",
        "google-common"
    ];
    defaultStoreOptions;
    defaultFetchOptions;
    constructor(opts){
        super(opts);
        this.defaultStoreOptions = opts?.defaultStoreOptions ?? {};
        this.defaultFetchOptions = opts?.defaultFetchOptions ?? {};
    }
    async _realKey(key) {
        return typeof key === "string" ? key : await key.asUri();
    }
    /**
	* Is the path supported by this BlobStore?
	*
	* Although this is async, this is expected to be a relatively fast operation
	* (ie - you shouldn't make network calls).
	*
	* @param path The path to check
	* @param opts Any options (if needed) that may be used to determine if it is valid
	* @return If the path is supported
	*/ hasValidPath(path, opts) {
        const prefix = opts?.pathPrefix ?? "";
        const isPrefixed = typeof path !== "undefined" && path.startsWith(prefix);
        return Promise.resolve(isPrefixed);
    }
    _blobPathSuffix(blob) {
        const blobPath = `${blob.path}`;
        let pathStart = blobPath.indexOf("/") + 1;
        while(blobPath.charAt(pathStart) === "/")pathStart += 1;
        return blobPath.substring(pathStart);
    }
    async _newBlob(oldBlob, newPath) {
        const oldPath = oldBlob.path;
        const metadata = oldBlob?.metadata ?? {};
        metadata.langchainOldPath = oldPath;
        const newBlob = new MediaBlob({
            ...oldBlob,
            metadata
        });
        if (newPath) newBlob.path = newPath;
        else if (newBlob.path) delete newBlob.path;
        return newBlob;
    }
    async _validBlobPrefixPath(blob, opts) {
        const prefix = opts?.pathPrefix ?? "";
        const suffix = this._blobPathSuffix(blob);
        const newPath = `${prefix}${suffix}`;
        return this._newBlob(blob, newPath);
    }
    _validBlobPrefixUuidFunction(name) {
        switch(name){
            case "prefixUuid1":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v1$3e$__["v1"])();
            case "prefixUuid4":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            default:
                throw new Error(`Unknown uuid function: ${name}`);
        }
    }
    async _validBlobPrefixUuid(blob, opts) {
        const prefix = opts?.pathPrefix ?? "";
        const suffix = this._validBlobPrefixUuidFunction(opts?.actionIfInvalid ?? "prefixUuid4");
        const newPath = `${prefix}${suffix}`;
        return this._newBlob(blob, newPath);
    }
    async _validBlobRemovePath(blob, _opts) {
        return this._newBlob(blob, void 0);
    }
    /**
	* Based on the blob and options, return a blob that has a valid path
	* that can be saved.
	* @param blob
	* @param opts
	*/ async _validStoreBlob(blob, opts) {
        if (await this.hasValidPath(blob.path, opts)) return blob;
        switch(opts?.actionIfInvalid){
            case "ignore":
                return blob;
            case "prefixPath":
                return this._validBlobPrefixPath(blob, opts);
            case "prefixUuid1":
            case "prefixUuid4":
            case "prefixUuid6":
            case "prefixUuid7":
                return this._validBlobPrefixUuid(blob, opts);
            case "removePath":
                return this._validBlobRemovePath(blob, opts);
            default:
                return void 0;
        }
    }
    async store(blob, opts = {}) {
        const allOpts = {
            ...this.defaultStoreOptions,
            ...opts
        };
        const validBlob = await this._validStoreBlob(blob, allOpts);
        if (typeof validBlob !== "undefined") {
            const validKey = await validBlob.asUri();
            await this.mset([
                [
                    validKey,
                    validBlob
                ]
            ]);
            const savedKey = await validBlob.asUri();
            return await this.fetch(savedKey);
        }
        return void 0;
    }
    async _missingFetchBlobEmpty(path, _opts) {
        return new MediaBlob({
            path
        });
    }
    async _missingFetchBlob(path, opts) {
        switch(opts?.actionIfBlobMissing){
            case "emptyBlob":
                return this._missingFetchBlobEmpty(path, opts);
            default:
                return void 0;
        }
    }
    async fetch(key, opts = {}) {
        const allOpts = {
            ...this.defaultFetchOptions,
            ...opts
        };
        const realKey = await this._realKey(key);
        const ret = await this.mget([
            realKey
        ]);
        return ret?.[0] ?? await this._missingFetchBlob(realKey, allOpts);
    }
};
var BackedBlobStore = class extends BlobStore {
    backingStore;
    constructor(opts){
        super(opts);
        this.backingStore = opts.backingStore;
    }
    mdelete(keys) {
        return this.backingStore.mdelete(keys);
    }
    mget(keys) {
        return this.backingStore.mget(keys);
    }
    mset(keyValuePairs) {
        return this.backingStore.mset(keyValuePairs);
    }
    yieldKeys(prefix) {
        return this.backingStore.yieldKeys(prefix);
    }
};
var ReadThroughBlobStore = class extends BlobStore {
    baseStore;
    backingStore;
    constructor(opts){
        super(opts);
        this.baseStore = opts.baseStore;
        this.backingStore = opts.backingStore;
    }
    async store(blob, opts = {}) {
        const originalUri = await blob.asUri();
        const newBlob = await this.backingStore.store(blob, opts);
        if (newBlob) await this.baseStore.mset([
            [
                originalUri,
                newBlob
            ]
        ]);
        return newBlob;
    }
    mdelete(keys) {
        return this.baseStore.mdelete(keys);
    }
    mget(keys) {
        return this.baseStore.mget(keys);
    }
    mset(_keyValuePairs) {
        throw new Error("Do not call ReadThroughBlobStore.mset directly");
    }
    yieldKeys(prefix) {
        return this.baseStore.yieldKeys(prefix);
    }
};
var SimpleWebBlobStore = class extends BlobStore {
    _notImplementedException() {
        throw new Error("Not implemented for SimpleWebBlobStore");
    }
    async hasValidPath(path, _opts) {
        return await super.hasValidPath(path, {
            pathPrefix: "https://"
        }) || await super.hasValidPath(path, {
            pathPrefix: "http://"
        });
    }
    async _fetch(url) {
        const ret = new MediaBlob({
            path: url
        });
        const metadata = {};
        const fetchOptions = {
            method: "GET"
        };
        const res = await fetch(url, fetchOptions);
        metadata.status = res.status;
        const headers = {};
        for (const [key, value] of res.headers.entries())headers[key] = value;
        metadata.headers = headers;
        metadata.ok = res.ok;
        if (res.ok) {
            const resMediaBlob = await MediaBlob.fromBlob(await res.blob());
            ret.data = resMediaBlob.data;
        }
        ret.metadata = metadata;
        return ret;
    }
    async mget(keys) {
        const blobMap = keys.map(this._fetch);
        return await Promise.all(blobMap);
    }
    async mdelete(_keys) {
        this._notImplementedException();
    }
    async mset(_keyValuePairs) {
        this._notImplementedException();
    }
    async *yieldKeys(_prefix) {
        this._notImplementedException();
        yield "";
    }
};
/**
* A blob "store" that works with data: URLs that will turn the URL into
* a blob.
*/ var DataBlobStore = class extends BlobStore {
    _notImplementedException() {
        throw new Error("Not implemented for DataBlobStore");
    }
    hasValidPath(path, _opts) {
        return super.hasValidPath(path, {
            pathPrefix: "data:"
        });
    }
    _fetch(url) {
        return MediaBlob.fromDataUrl(url);
    }
    async mget(keys) {
        const blobMap = keys.map(this._fetch);
        return blobMap;
    }
    async mdelete(_keys) {
        this._notImplementedException();
    }
    async mset(_keyValuePairs) {
        this._notImplementedException();
    }
    async *yieldKeys(_prefix) {
        this._notImplementedException();
        yield "";
    }
};
/**
* Responsible for converting a URI (typically a web URL) into a MediaBlob.
* Allows for aliasing / caching of the requested URI and what it resolves to.
* This MediaBlob is expected to be usable to provide to an LLM, either
* through the Base64 of the media or through a canonical URI that the LLM
* supports.
*/ var MediaManager = class {
    store;
    resolvers;
    constructor(config){
        this.store = config.store;
        this.resolvers = config.resolvers;
    }
    defaultResolvers() {
        return [
            new DataBlobStore({}),
            new SimpleWebBlobStore({})
        ];
    }
    async _isInvalid(blob) {
        return typeof blob === "undefined";
    }
    /**
	* Given the public URI, load what is at this URI and save it
	* in the store.
	* @param uri The URI to resolve using the resolver
	* @return A canonical MediaBlob for this URI
	*/ async _resolveAndSave(uri) {
        let resolvedBlob;
        const resolvers = this.resolvers || this.defaultResolvers();
        for(let co = 0; co < resolvers.length; co += 1){
            const resolver = resolvers[co];
            if (await resolver.hasValidPath(uri)) resolvedBlob = await resolver.fetch(uri);
        }
        if (resolvedBlob) return await this.store.store(resolvedBlob);
        else return new MediaBlob({});
    }
    async getMediaBlob(uri) {
        const aliasBlob = await this.store.fetch(uri);
        const ret = await this._isInvalid(aliasBlob) ? await this._resolveAndSave(uri) : aliasBlob;
        return ret;
    }
};
;
 //# sourceMappingURL=media_core.js.map
}),
"[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/experimental/media.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIStudioFileDownloadConnection",
    ()=>AIStudioFileDownloadConnection,
    "AIStudioFileUploadConnection",
    ()=>AIStudioFileUploadConnection,
    "AIStudioMediaBlob",
    ()=>AIStudioMediaBlob,
    "BlobStoreAIStudioFileBase",
    ()=>BlobStoreAIStudioFileBase,
    "BlobStoreGoogle",
    ()=>BlobStoreGoogle,
    "BlobStoreGoogleCloudStorageBase",
    ()=>BlobStoreGoogleCloudStorageBase,
    "GoogleCloudStorageDownloadConnection",
    ()=>GoogleCloudStorageDownloadConnection,
    "GoogleCloudStorageRawConnection",
    ()=>GoogleCloudStorageRawConnection,
    "GoogleCloudStorageUploadConnection",
    ()=>GoogleCloudStorageUploadConnection,
    "GoogleCloudStorageUri",
    ()=>GoogleCloudStorageUri,
    "GoogleDownloadConnection",
    ()=>GoogleDownloadConnection,
    "GoogleDownloadRawConnection",
    ()=>GoogleDownloadRawConnection,
    "GoogleMultipartUploadConnection",
    ()=>GoogleMultipartUploadConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/connection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$experimental$2f$utils$2f$media_core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/google-common/dist/experimental/utils/media_core.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$async_caller$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ai-powered-todo-list/node_modules/@langchain/core/dist/utils/async_caller.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/experimental/media.ts
var GoogleMultipartUploadConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleHostConnection"] {
    constructor(fields, caller, client){
        super(fields, caller, client);
    }
    async _body(separator, data, metadata) {
        const contentType = data.mimetype;
        const { encoded, encoding } = await data.encode();
        const body = [
            `--${separator}`,
            "Content-Type: application/json; charset=UTF-8",
            "",
            JSON.stringify(metadata),
            "",
            `--${separator}`,
            `Content-Type: ${contentType}`,
            `Content-Transfer-Encoding: ${encoding}`,
            "",
            encoded,
            `--${separator}--`
        ];
        return body.join("\n");
    }
    async request(data, metadata, options) {
        const separator = `separator-${Date.now()}`;
        const body = await this._body(separator, data, metadata);
        const requestHeaders = {
            "Content-Type": `multipart/related; boundary=${separator}`,
            "X-Goog-Upload-Protocol": "multipart"
        };
        const response = this._request(body, options, requestHeaders);
        return response;
    }
};
var GoogleDownloadConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleHostConnection"] {
    async request(options) {
        return this._request(void 0, options);
    }
};
var GoogleDownloadRawConnection = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$connection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleRawConnection"] {
    buildMethod() {
        return "GET";
    }
    async request(options) {
        return this._request(void 0, options);
    }
};
var BlobStoreGoogle = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$experimental$2f$utils$2f$media_core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlobStore"] {
    caller;
    client;
    constructor(fields){
        super(fields);
        this.caller = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$async_caller$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AsyncCaller"](fields ?? {});
        this.client = this.buildClient(fields);
    }
    async _set(keyValuePair) {
        const [, blob] = keyValuePair;
        const setMetadata = this.buildSetMetadata(keyValuePair);
        const metadata = setMetadata;
        const options = {};
        const connection = this.buildSetConnection(keyValuePair);
        const response = await connection.request(blob, metadata, options);
        return response;
    }
    async mset(keyValuePairs) {
        const ret = keyValuePairs.map((keyValue)=>this._set(keyValue));
        await Promise.all(ret);
    }
    async _getMetadata(key) {
        const connection = this.buildGetMetadataConnection(key);
        const options = {};
        const response = await connection.request(options);
        return response.data;
    }
    async _getData(key) {
        const connection = this.buildGetDataConnection(key);
        const options = {};
        const response = await connection.request(options);
        return response.data;
    }
    _getMimetypeFromMetadata(metadata) {
        return metadata.contentType;
    }
    async _get(key) {
        const metadata = await this._getMetadata(key);
        const data = await this._getData(key);
        if (data && metadata) {
            const ret = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$experimental$2f$utils$2f$media_core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaBlob"].fromBlob(data, {
                metadata,
                path: key
            });
            return ret;
        } else return void 0;
    }
    async mget(keys) {
        const ret = keys.map((key)=>this._get(key));
        return await Promise.all(ret);
    }
    async _del(key) {
        const connection = this.buildDeleteConnection(key);
        const options = {};
        await connection.request(options);
    }
    async mdelete(keys) {
        const ret = keys.map((key)=>this._del(key));
        await Promise.all(ret);
    }
    async *yieldKeys(_prefix) {
        throw new Error("yieldKeys is not implemented");
    }
};
var GoogleCloudStorageUri = class GoogleCloudStorageUri {
    static uriRegexp = /gs:\/\/([a-z0-9][a-z0-9._-]+[a-z0-9])\/(.*)/;
    bucket;
    path;
    constructor(uri){
        const bucketAndPath = GoogleCloudStorageUri.uriToBucketAndPath(uri);
        this.bucket = bucketAndPath.bucket;
        this.path = bucketAndPath.path;
    }
    get uri() {
        return `gs://${this.bucket}/${this.path}`;
    }
    get isValid() {
        return typeof this.bucket !== "undefined" && typeof this.path !== "undefined";
    }
    static uriToBucketAndPath(uri) {
        const match = this.uriRegexp.exec(uri);
        if (!match) throw new Error(`Invalid gs:// URI: ${uri}`);
        return {
            bucket: match[1],
            path: match[2]
        };
    }
    static isValidUri(uri) {
        return this.uriRegexp.test(uri);
    }
};
var GoogleCloudStorageUploadConnection = class extends GoogleMultipartUploadConnection {
    uri;
    constructor(fields, caller, client){
        super(fields, caller, client);
        this.uri = new GoogleCloudStorageUri(fields.uri);
    }
    async buildUrl() {
        return `https://storage.googleapis.com/upload/storage/${this.apiVersion}/b/${this.uri.bucket}/o?uploadType=multipart`;
    }
};
var GoogleCloudStorageDownloadConnection = class extends GoogleDownloadConnection {
    uri;
    method;
    alt;
    constructor(fields, caller, client){
        super(fields, caller, client);
        this.uri = new GoogleCloudStorageUri(fields.uri);
        this.method = fields.method;
        this.alt = fields.alt;
    }
    buildMethod() {
        return this.method;
    }
    async buildUrl() {
        const path = encodeURIComponent(this.uri.path);
        const ret = `https://storage.googleapis.com/storage/${this.apiVersion}/b/${this.uri.bucket}/o/${path}`;
        return this.alt ? `${ret}?alt=${this.alt}` : ret;
    }
};
var GoogleCloudStorageRawConnection = class extends GoogleDownloadRawConnection {
    uri;
    constructor(fields, caller, client){
        super(fields, caller, client);
        this.uri = new GoogleCloudStorageUri(fields.uri);
    }
    async buildUrl() {
        const path = encodeURIComponent(this.uri.path);
        const ret = `https://storage.googleapis.com/storage/${this.apiVersion}/b/${this.uri.bucket}/o/${path}?alt=media`;
        return ret;
    }
};
var BlobStoreGoogleCloudStorageBase = class extends BlobStoreGoogle {
    params;
    constructor(fields){
        super(fields);
        this.params = fields;
        this.defaultStoreOptions = {
            ...this.defaultStoreOptions,
            pathPrefix: fields.uriPrefix.uri
        };
    }
    buildSetConnection([key, _blob]) {
        const params = {
            ...this.params,
            uri: key
        };
        return new GoogleCloudStorageUploadConnection(params, this.caller, this.client);
    }
    buildSetMetadata([key, blob]) {
        const uri = new GoogleCloudStorageUri(key);
        const ret = {
            name: uri.path,
            metadata: blob.metadata,
            contentType: blob.mimetype
        };
        return ret;
    }
    buildGetMetadataConnection(key) {
        const params = {
            uri: key,
            method: "GET",
            alt: void 0
        };
        return new GoogleCloudStorageDownloadConnection(params, this.caller, this.client);
    }
    buildGetDataConnection(key) {
        const params = {
            uri: key
        };
        return new GoogleCloudStorageRawConnection(params, this.caller, this.client);
    }
    buildDeleteConnection(key) {
        const params = {
            uri: key,
            method: "DELETE",
            alt: void 0
        };
        return new GoogleCloudStorageDownloadConnection(params, this.caller, this.client);
    }
};
var AIStudioMediaBlob = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$experimental$2f$utils$2f$media_core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaBlob"] {
    _valueAsDate(value) {
        if (!value) return /* @__PURE__ */ new Date(0);
        return new Date(value);
    }
    _metadataFieldAsDate(field) {
        return this._valueAsDate(this.metadata?.[field]);
    }
    get createDate() {
        return this._metadataFieldAsDate("createTime");
    }
    get updateDate() {
        return this._metadataFieldAsDate("updateTime");
    }
    get expirationDate() {
        return this._metadataFieldAsDate("expirationTime");
    }
    get isExpired() {
        const now = /* @__PURE__ */ new Date().toISOString();
        const exp = this.metadata?.expirationTime ?? now;
        return exp <= now;
    }
};
var AIStudioFileUploadConnection = class extends GoogleMultipartUploadConnection {
    get computedApiVersion() {
        return "v1beta";
    }
    async buildUrl() {
        return `https://generativelanguage.googleapis.com/upload/${this.apiVersion}/files`;
    }
};
var AIStudioFileDownloadConnection = class extends GoogleDownloadConnection {
    method;
    name;
    constructor(fields, caller, client){
        super(fields, caller, client);
        this.method = fields.method;
        this.name = fields.name;
    }
    get computedApiVersion() {
        return "v1beta";
    }
    buildMethod() {
        return this.method;
    }
    async buildUrl() {
        return `https://generativelanguage.googleapis.com/${this.apiVersion}/files/${this.name}`;
    }
};
var BlobStoreAIStudioFileBase = class extends BlobStoreGoogle {
    params;
    retryTime = 1e3;
    constructor(fields){
        const params = {
            defaultStoreOptions: {
                pathPrefix: "https://generativelanguage.googleapis.com/v1beta/files/",
                actionIfInvalid: "removePath"
            },
            ...fields
        };
        super(params);
        this.params = params;
        this.retryTime = params?.retryTime ?? this.retryTime ?? 1e3;
    }
    _pathToName(path) {
        return path.split("/").pop() ?? path;
    }
    buildApiKeyClient(apiKey) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiKeyGoogleAuth"](apiKey);
    }
    buildApiKey(fields) {
        return fields?.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
    }
    buildClient(fields) {
        const apiKey = this.buildApiKey(fields);
        if (apiKey) return this.buildApiKeyClient(apiKey);
        else return this.buildAbstractedClient(fields);
    }
    async _regetMetadata(key) {
        await new Promise((resolve)=>setTimeout(resolve, this.retryTime));
        return this._getMetadata(key);
    }
    async _set([key, blob]) {
        const response = await super._set([
            key,
            blob
        ]);
        let file = response.data?.file ?? {
            state: "FAILED"
        };
        while(file.state === "PROCESSING" && file.uri && this.retryTime > 0)file = await this._regetMetadata(file.uri);
        blob.path = file.uri;
        blob.metadata = {
            ...blob.metadata,
            ...file
        };
        return response;
    }
    buildSetConnection([_key, _blob]) {
        return new AIStudioFileUploadConnection(this.params, this.caller, this.client);
    }
    buildSetMetadata([_key, _blob]) {
        return {};
    }
    buildGetMetadataConnection(key) {
        const params = {
            ...this.params,
            method: "GET",
            name: this._pathToName(key)
        };
        return new AIStudioFileDownloadConnection(params, this.caller, this.client);
    }
    buildGetDataConnection(_key) {
        throw new Error("AI Studio File API does not provide data");
    }
    async _get(key) {
        const metadata = await this._getMetadata(key);
        if (metadata) {
            const contentType = metadata?.mimeType ?? "application/octet-stream";
            const data = {
                value: "",
                type: contentType
            };
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ai$2d$powered$2d$todo$2d$list$2f$node_modules$2f40$langchain$2f$google$2d$common$2f$dist$2f$experimental$2f$utils$2f$media_core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaBlob"]({
                path: key,
                data,
                metadata
            });
        } else return void 0;
    }
    buildDeleteConnection(key) {
        const params = {
            ...this.params,
            method: "DELETE",
            name: this._pathToName(key)
        };
        return new AIStudioFileDownloadConnection(params, this.caller, this.client);
    }
};
;
 //# sourceMappingURL=media.js.map
}),
];

//# sourceMappingURL=c6698_%40langchain_google-common_dist_1dc9dc63._.js.map