<script>
  import { qrScanner } from "@telegram-apps/sdk";
  import { backButton } from '@telegram-apps/sdk';

backButton.show();

  // import { retrieveLaunchParams } from '@telegram-apps/sdk';

  // const { initDataRaw } = retrieveLaunchParams();

  var result;
  let code = ''

  async function openScanner() {
     result = await qrScanner.open({text: "Scan some specific QR"}).then(qr => {
      code = qr;
      qrScanner.close();
     });
    }
  // }
</script>

<!-- {initDataRaw} -->

<h1>Scanner</h1>
ScannerResult: {code}

<br />
<button on:click={openScanner}>Open Scanner</button>
