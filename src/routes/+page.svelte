<script>
  import { qrScanner } from "@telegram-apps/sdk";

  var result = '';

  async function openScanner() {
      const promise = qrScanner.open({
        text: "Scan the QR",
        onCaptured(qr) {
            qrScanner.close();
            result = qr;
        },
      });
      // qrScanner.isOpened(); // true
      // await promise;
      // qrScanner.isOpened(); // false
    }
</script>

<h1>Scanner</h1>
ScannerResult: {result}
{#if qrScanner.isSupported()}
<br>
<button on:click={openScanner}>Open Scanner</button>
{/if}



