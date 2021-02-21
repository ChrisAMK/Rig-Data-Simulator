import net from "net";
import db from "./models/index.js";
import API from "./API.js";

const syncModels = async () => {
    db.MKY021.sync();
    db.MKY021RAW.sync();
    db.MKY08.sync();
    db.MKY08RAW.sync();
}


syncModels().then(() => {

    let timer = setInterval(() => {
        API.saveRig21();
        console.log("Entered")
    }, 1000);

    return () => {
        clearInterval(timer)
    }
    

});
