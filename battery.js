import { useState, useEffect } from "vue-hooks";

let unsupported;

const useBatteryStatus = () => {
    // 检查浏览器是否支持 navigator.getBattery
    if (typeof navigator !== "undefined" && "getBattery" in navigator) {
        unsupported = false;
    } else {
        unsupported = true;
    }

    const initialBatteryStatus = !unsupported
        ? {
              charging: null, // the charging state of the system's battery
              chargingTime: null, // the time remaining in seconds until the system's battery is fully charged
              dischargingTime: null, // the time remaining in seconds until the system's battery is completely discharged and the system is about to be suspended
              level: null // the level of the system's battery
          }
        : {
              unsupported
          };

    const [batteryStatus, setBatteryStatus] = useState(initialBatteryStatus);

    const updateBatteryStatus = battery => {
        setBatteryStatus({
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime,
            level: battery.level,
            charging: battery.charging
        });
    };

    useEffect(() => {
        if (!unsupported) {
            const monitorBattery = battery => {
                updateBatteryStatus(battery);

                battery.addEventListener(
                    "levelchange",
                    updateBatteryStatus.bind(null, battery)
                );
                battery.addEventListener(
                    "chargingchange",
                    updateBatteryStatus.bind(null, battery)
                );
                battery.addEventListener(
                    "dischargingtimechange",
                    updateBatteryStatus.bind(null, battery)
                );
                battery.addEventListener(
                    "chargingtimechange",
                    updateBatteryStatus.bind(null, battery)
                );
            };

            navigator.getBattery().then(monitorBattery);
        }
    }, []);

    return {
        ...batteryStatus,
        updateBatteryStatus
    };
};

export { useBatteryStatus };
