let unsupported;

// 检查浏览器是否支持 navigator.connection
if ("connection" in navigator && "saveData" in navigator.connection) {
    unsupported = false;
} else {
    unsupported = true;
}

const initialSaveData = 

if (!unsupported) {
    initialSaveData = {
        saveData: navigator.connection.saveData
    };
} else {
    initialSaveData = { unsupported: true };
}

const useSaveData = () => {
    return { ...initialSaveData };
};

export { useSaveData };
