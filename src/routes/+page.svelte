<script>
  import { onMount } from "svelte";
  export let data;
  export let form;

  let hash = '';

  onMount(() => {
    hash = Telegram.WebApp.initData;
    Telegram.WebApp.MainButton.setText('Open Scan'); 
    Telegram.WebApp.MainButton.onClick(() => {
      Telegram.WebApp.showScanQrPopup({
        text: 'Сканируй это'
      }, (qr) => {
        data = qr;
        return true;
      });
    });
    Telegram.WebApp.MainButton.show();
  });
</script>

Form: 
<pre>
  {JSON.stringify(form, null, 2)}
</pre>

<form action="?/check" method="POST">
  <input type="hidden" name="data" value={hash}>
  <button type="submit">Check</button>
</form>


<style>
  button {
    padding: 1em 2em;
  }
</style>
