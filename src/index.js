import dva from "dva"
import router from "./router"
import {createBrowserHistory} from "history"

const app = new dva({
  history: createBrowserHistory()
});

//app.use();
app.model(require("./models/index").default);
app.router(router);
app.start("#root");
