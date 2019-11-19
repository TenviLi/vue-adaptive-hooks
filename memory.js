import { useState, useEffect } from "vue-hooks";

let unsupported;

// 检查浏览器是否支持 Navigator.deviceMemory
if (typeof navigator !== "undefined" && "deviceMemory" in navigator) {
    unsupported = false;
} else {
    unsupported = true;
}

let initialMemoryStatus;

if (!unsupported) {
    // 检查浏览器是否支持 performance.memory
    const performanceMemory =
        "memory" in performance ? performance.memory : null;

    initialMemoryStatus = {
        deviceMemory: navigator.deviceMemory,
        // The maximum size of the heap, in bytes, that is available to the context.
        jsHeapSizeLimit: performanceMemory
            ? performanceMemory.jsHeapSizeLimit
            : null,
        //  The total allocated heap size, in bytes.
        totalJSHeapSize: performanceMemory
            ? performanceMemory.totalJSHeapSize
            : null,
        // The currently active segment of JS heap, in bytes.
        usedJSHeapSize: performanceMemory
            ? performanceMemory.usedJSHeapSize
            : null
    };
} else {
    initialMemoryStatus = { unsupported };
}

const useMemoryStatus = () => {
    return { ...initialMemoryStatus };
};

export { useMemoryStatus };
