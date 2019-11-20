let unsupported;

// 检查浏览器是否支持 Navigator.deviceMemory
if (
    !!(
        typeof window !== "undefined" &&
        ("ontouchstart" in window ||
            (window.DocumentTouch &&
                typeof document !== "undefined" &&
                document instanceof window.DocumentTouch))
    ) ||
    !!(
        typeof navigator !== "undefined" &&
        (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
    )
) {
    unsupported = false;
} else {
    unsupported = true;
}

const useTouch = () => {
    return !unsupported ? { touch: true } : { unsupported };
};

export { useTouch };
