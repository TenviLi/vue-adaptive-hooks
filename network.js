import { useState, useEffect } from "vue-hooks";

let unsupported;

const useNetworkStatus = (initialEffectiveConnectionType = "4g") => {
    // 检查浏览器是否支持 Navigator.connection
    if (
        typeof navigator !== "undefined" &&
        "connection" in navigator &&
        "effectiveType" in navigator.connection
    ) {
        unsupported = false;
    } else {
        unsupported = true;
    }

    const initialNetworkStatus = !unsupported
        ? {
              effectiveConnectionType: navigator.connection.effectiveType
          }
        : {
              unsupported,
              effectiveConnectionType: initialEffectiveConnectionType
          };

    const [networkStatus, setNetworkStatus] = useState(initialNetworkStatus);

    useEffect(() => {
        if (!unsupported) {
            const navigatorConnection = navigator.connection;
            const updateECTStatus = () => {
                setNetworkStatus({
                    effectiveConnectionType: navigatorConnection.effectiveType
                });
            };
            navigatorConnection.addEventListener("change", updateECTStatus); // navigatorConnection.onchange（有值代表网络状态变更）
            return () => {
                navigatorConnection.removeEventListener(
                    "change",
                    updateECTStatus
                );
            };
        }
    }, []);

    return { ...networkStatus, setNetworkStatus };
};

export { useNetworkStatus };
