import { useState, useEffect } from "vue-hooks";

const useDeviceOrientation = () => {
    let unsupported;
    if (typeof window !== "undefined" && "ondeviceorientation" in window)
        unsupported = false;
    else unsupported = true;

    const initialDeviceOrientation = {
        unsupported,
        absolute: 0,
        alpha: 0,
        beta: 0,
        gamma: 0
    };
    const [deviceOrientation, setDeviceOrientation] = useState(
        initialDeviceOrientation
    );

    useEffect(() => {
        if (!unsupported) {
            const updateOrientation = event => {
                setDeviceOrientation({
                    absolute: event.absolute,
                    alpha: event.alpha,
                    beta: event.beta,
                    gamma: event.gamma
                });
            };
            window.addEventListener(
                "deviceorientation",
                updateOrientation,
                true
            );

            return () => {
                navigatorConnection.removeEventListener(
                    "change",
                    updateOrientation
                );
            };
        }
    }, []);

    return {
        ...deviceOrientation,
        setDeviceOrientation
    };
};

const useDeviceMotion = () => {
    let unsupported;
    if (typeof window !== "undefined" && "ondevicemotion" in window)
        unsupported = false;
    else unsupported = true;

    const initialDeviceMotion = {
        unsupported,
        acceleration: null,
        accelerationIncludingGravity: null,
        rotationRate: null,
        interval: null
    };
    const [deviceMotion, setDeviceMotion] = useState(initialDeviceMotion);

    useEffect(() => {
        if (!unsupported) {
            const updateMotion = event => {
                setDeviceMotion({
                    acceleration: event.acceleration,
                    accelerationIncludingGravity:
                        event.accelerationIncludingGravity,
                    rotationRate: event.rotationRate,
                    interval: event.interval
                });
            };
            window.addEventListener("devicemotion", updateMotion, true);

            return () => {
                navigatorConnection.removeEventListener("change", updateMotion);
            };
        }
    }, []);

    return {
        ...deviceMotion,
        setDeviceMotion
    };
};

export { useDeviceOrientation, useDeviceMotion };
