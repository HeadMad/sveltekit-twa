<script>
  import { qrScanner } from "@telegram-apps/sdk";

  // import { retrieveLaunchParams } from '@telegram-apps/sdk';

// const { initDataRaw } = retrieveLaunchParams();

  var result = '';

  async function openScanner() {
      const promise = qrScanner.open({
        text: "Scan the QR",
        onCaptured(qr) {
            qrScanner.close();
            result = qr;
        },
      });
      qrScanner.isOpened(); // true
      await promise;
      qrScanner.isOpened(); // false
    }
</script>

<!-- {initDataRaw} -->

<h1>Scanner</h1>
ScannerResult: {result}

<br>
<button on:click={openScanner}>Open Scanner</button>



