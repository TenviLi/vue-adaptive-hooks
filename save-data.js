let unsupported;

const useSaveData = (initialSaveDataStatus = false) => {
    // 检查浏览器是否支持 navigator.connection
    if ("connection" in navigator && "saveData" in navigator.connection) {
        unsupported = false;
    } else {
        unsupported = true;
    }

    let initialSaveData;

    if (!unsupported) {
        initialSaveData = {
            saveData: navigator.connection.saveData === true
        };
    } else {
        initialSaveData = { unsupported: true, initialSaveDataStatus };
    }

    return { ...initialSaveData };
};

export { useSaveData };
