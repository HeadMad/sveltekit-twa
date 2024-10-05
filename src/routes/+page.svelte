<script>
  import { onMount } from "svelte";
  export let data;
  export let form;

  let hash = '';

  onMount(() => {
    hash = window.location.hash.slice(1).split('&').reduce((acc, item) => {
      const [key, val] = item.split('=');
      acc[key] = decodeURIComponent(val);
      return acc;
    });
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


Check token <br>
Form: {JSON.stringify(form)}
<br>
<pre>
  {JSON.stringify(hash, null, 2)}
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
