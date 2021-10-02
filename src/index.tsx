import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ru_RU from "antd/es/locale/ru_RU";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
