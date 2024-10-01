<script>
  import { qrScanner } from "@telegram-apps/sdk";

  // import { retrieveLaunchParams } from '@telegram-apps/sdk';

  // const { initDataRaw } = retrieveLaunchParams();

  var result = "";

  async function openScanner() {
    // if (qrScanner.open.isSupported()) {
      // Getting the first captured QR.
      // qrScanner.isOpened(); // false
      // let promise = qrScanner.open({ text: "Scan any QR" });
      // qrScanner.isOpened(); // true
      // await promise;
      // qrScanner.isOpened(); // false

      // Getting some specific QR.
      qrScanner.isOpened(); // false
     let  promise = qrScanner.open({
        text: "Scan some specific QR",
        capture(qr) {
          result = qr;
          return qr === "some-specific-qr";
        },
      });
      qrScanner.isOpened(); // true
      await promise;
      qrScanner.isOpened(); // false
    }
  // }
</script>

<!-- {initDataRaw} -->

<h1>Scanner</h1>
ScannerResult: {result}

<br />
<button on:click={openScanner}>Open Scanner</button>
