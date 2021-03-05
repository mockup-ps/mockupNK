import React from "react";
import { fireAuth } from "./fireApi";

const PintuGerbang = function (Tertutup, Terbuka){
    class PintuGerbang extends React.Component {
      componentDidMount() {
        const { history } = this.props;
        fireAuth.onAuthStateChanged(me => {
          if (!me){
            return history.push(Tertutup);
          }
        });
      }
      render() {
        const { me } = this.props;
        if (!me) {
          return null;
        }
        return <Terbuka {...this.props} />;
      }
    }
    return PintuGerbang;
  }

export default PintuGerbang;