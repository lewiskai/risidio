import { useCallback, useEffect, useState } from "react";
import { useCheck2FAStatusMutation } from "../../../store/tfa";

export const useCheckTFAStatus = () => {
  const [twoFAStatus, setTwoFAStatus] = useState<boolean>();
  const [check2FAStatusRequest] = useCheck2FAStatusMutation();


  const handleRequest = useCallback(() => {
    const payload = { email: localStorage.getItem("@prom-user-email") };
    check2FAStatusRequest(payload)
      .unwrap()
      .then((res) => {
        if (res.data) {
          setTwoFAStatus(true);
        } else {
          setTwoFAStatus(false);
        }
      });
  }, [check2FAStatusRequest]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);


    return twoFAStatus
  };