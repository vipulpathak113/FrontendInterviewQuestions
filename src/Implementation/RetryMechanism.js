import React, { useState } from "react";

export default function RetryMechanism() {
  const [loading, showLoading] = useState(false);
  const [tries, showTries] = useState(0);
  const [message, showMessage] = useState("");

  const mockApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.floor(Math.random() * 10);
        console.log("random", random);
        if (random == 7) {
          resolve("Success");
        } else {
          reject("Failure");
        }
      }, 500);
    });
  };

  const onRetry = async () => {
    showLoading(true);
    const res = await retry(mockApiCall, 5);
    if (res.status) {
      showLoading(false);
      showMessage(`Successful!! Result got in ${res.attempt} attempts`);
    } else {
      showLoading(false);
      showMessage(`Unsuccessful!!`);
    }
  };

  const retry = (callback, retryTime) => {
    return new Promise((resolve, reject) => {
      let retries = 0;

      let interval = setInterval(async () => {
        retries++;
        if (retries === retryTime) {
          console.log(`Trying for last time...${retries}`);
          clearInterval(interval);
          resolve({ status: false, attempt: retries });
        }
        try {
          await callback();
          clearInterval(interval);
          console.log(`Successful... retried ${retries} times`);
          resolve({ status: true, attempt: retries });
        } catch (e) {
          console.log(`Unsuccessful... retried ${retries} times`);
        }
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col items-center p-2 text-2xl">
      <h1>Retry Mechanism</h1>

      <button
        onClick={onRetry}
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Retry
      </button>
      {loading && <p>Loading...</p>}
      {tries > 0 && <p>Tries: {tries}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
