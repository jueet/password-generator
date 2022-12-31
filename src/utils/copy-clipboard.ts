async function copyToClipboard() {
  const copyText = document.getElementById("password");
  try {
    const text = copyText?.innerHTML;
    await navigator.clipboard.writeText(text!);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

export default copyToClipboard;
