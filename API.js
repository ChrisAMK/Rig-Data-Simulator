import MKY021 from "./models/mky021.js";

export default {

    saveRig21: () => {

        let postCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: Math.random(6) * 100,
            oilPressure: Math.random(6) * 100,
            engineHours: Math.random(6) * 100,
            coolantTemp: Math.random(6) * 100,
            headPosition: Math.random(6) * 100,
            holeDepth: Math.random(6) * 100,
            rotationRpm: Math.random(6) * 100,
            penetrationRate: Math.random(6) * 100,
            mastAngle: Math.random(6) * 100,
            deckRoll: Math.random(6) * 100,
            deckPitch: Math.random(6) * 100,
            headRackBackProxyStatus: Math.random(6) * 100,
            footClampPressureSwitch: Math.random(6) * 100,
            coolantLevelSensor: Math.random(6) * 100,
            rotationReversePressure: Math.random(6) * 100,
            rotationForwardPressure: Math.random(6) * 100,
            holdBackPressure: Math.random(6) * 100,
            pulldownPressure: Math.random(6) * 100,
            waterPressure: Math.random(6) * 100,
            mainPumpPressure: Math.random(6) * 100,
            winchDownPressure: Math.random(6) * 100,
            winchUpPressure: Math.random(6) * 100,
            bitWeight: Math.random(6) * 100,
            driller: "Not Signed in"
        }
        
        
        MKY021.create({
            ts: postCalculations.ts,
            engineRpm: postCalculations.engineRpm,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth: postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            headRackBackProxyStatus: postCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: postCalculations.footClampPressureSwitch,
            coolantLevelSensor: postCalculations.coolantLevelSensor,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            winchDownPressure: postCalculations.winchDownPressure,
            winchUpPressure: postCalculations.winchUpPressure,
            bitWeight: postCalculations.bitWeight,
            driller: postCalculations.driller || "IN"
        }).then(() => console.log("Log Created"));

    }
}