const useMediaCapabilities = mediaConfig => {
    let initialMediaCapabilities;

    // 检查浏览器是否支持 navigator.mediaCapabilities
    if (typeof navigator !== "undefined" && "mediaCapabilities" in navigator) {
        unsupported = false;

        const result = navigator.mediaCapabilities.decodingInfo(mediaConfig);

        if (result.support === true) {
            initialMediaCapabilities = {
                support: result,
                smooth: result.smooth,
                powerEfficient: result.powerEfficient
            };
        } else {
            initialMediaCapabilities = {
                unsupported: true
            };
        }
    } else if (typeof window !== 'undefined' && "MediaSource" in window) {
        initialMediaCapabilities = {
            support: MediaSource.isTypeSupported(
                mediaConfig.audio.contentType || mediaConfig.video.contentType
            )
        };
    } else {
        initialMediaCapabilities = {
            unsupported: true
        };
    }

    return {
        ...initialMediaCapabilities
    };
};

const useMediaDevices = () => {
    // 检查浏览器是否支持 navigator.mediaDevices
    if (typeof navigator !== "undefined" && "mediaDevices" in navigator) {
        return {
            mediaDevices = navigator.mediaDevices
        };
    } else {
        return { unsupported: true };
    }
};

export { useMediaCapabilities, useMediaDevices };
