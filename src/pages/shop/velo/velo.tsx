import { Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import {Dispatch} from 'redux';
import VeloItem from "./components/velo-item";
import styles from "./velo.module.css";

class Velo extends Component<any, any> {
  constructor(props: any) {
    super(props);

    console.log("constructor");

    this.state = {
      isError: false,
      isUpdated: false,
      shouldUpdate: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log("getDerivedStateFromError");
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("getDerivedStateFromProps");
    return { isUpdated: true };
  }

  componentDidMount() {
    console.log("componentDidMount");
    localStorage.setItem("state", JSON.stringify(this.state));
    // fetch("https://www.sigaret.net").then((data) => console.log(data));
  }

  shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {
    const {
      state: { shouldUpdate },
    } = this;
    if (shouldUpdate) {
      return true;
    }
    return false;
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // new lifeCicle
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("getSnapshotBeforeUpdate");
    return {};
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log("componentDidUpdate");
  }

  // depricated

  // componentWillMount() {}

  // componentWillReceiveProps(nextProps: any, nextContext: any) {}

  // componentWillUpdate(nextProps: any, nextState: any, nextContext: any) {}

  render() {
    console.log("render");
    const state = localStorage.getItem("state");
    if (state) {
      console.log(JSON.parse(state));
    }

    console.log("this.state.shouldUpdate: ", this.state.shouldUpdate);

    return (
      <div className={styles.velo}>
        <Button
          onClick={() => {
            this.setState({ shouldUpdate: !this.state.shouldUpdate });
          }}
        >
          Clicked
        </Button>
        OUR STORY Ну вы, блин!
        <VeloItem />
      </div>
    );
  }
}


// example HOC connect
// const mapStateToProps = (state: any) => {
//   veloData: selectVeloData(state);
// };

// const mapDispatchToProps = {
//   setVeloData,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Velo);

export default Velo;
