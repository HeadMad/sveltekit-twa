<script>
  import { onMount } from "svelte";

  onMount(() => {
    postEvent("web_app_setup_main_button", {
      is_visible: true,
      text: "Сканировать",
      is_active: true,
    })

    on("main_button_pressed", () => {
      postEvent("web_app_open_popup", {
        title: "Сканируй это",
        message: "Сканируй qr код",
        buttons: [
          {
            id: "ok",
            text: "Отмена",
            type: 'ok'
          },
        ],
      })
    });
    
    return () => {};
  });

  /**
   * 
   * @param {string} event
   * @param {Object} data
   */
  function postEvent(event, data = {}) {
    return window.TelegramWebviewProxy.postEvent(event, JSON.stringify(data));
  }

  /**
   * 
   * @param {string} event
   * @param {function} callback
   */
  function on(event, callback) {
    window.addEventListener("message", ({ data }) => {
      const { eventType, eventData } = JSON.parse(data);
      if (eventType === event) {
        return callback(eventData);
      }
    });
  }

  let data = '';

  function openPopup() {
    postEvent("web_app_open_scan_qr_popup", {
      text: "Сканируй это",
    });
    on('qr_text_received', (qrData) => {
      data = qrData;
    });

    postEvent('web_app_close_scan_qr_popup');
  }
</script>

<br />
Data: {data};
<br>
<button on:click={openPopup}>Open</button>

<style>
  button {
    padding: 1em 2em;
  }
</style>
