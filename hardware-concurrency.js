let unsupported;

if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator) {
    unsupported = false;
} else {
    unsupported = true;
}

let initialHardwareConcurrency;

if (!unsupported) {
    initialHardwareConcurrency = {
        numberOfLogicalProcessors: navigator.hardwareConcurrency
    };
} else {
    initialHardwareConcurrency = { unsupported: true };
}

const useHardwareConcurrency = () => {
    return { ...initialHardwareConcurrency };
};

export { useHardwareConcurrency };
