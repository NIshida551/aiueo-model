// app.js
const recordButton = document.getElementById('recordButton');
const resultDiv = document.getElementById('result');

recordButton.addEventListener('click', async () => {
  // ユーザーにマイクの使用許可を求める
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  // ここで録音処理を行う
  // ...
  // 録音が終わったらサーバーにデータを送信
});

let model;
async function loadModel() {
  // Teachable MachineのモデルURLを指定
  const modelURL = 'model.json';
  model = await tmImage.load(modelURL);
  // モデルがロードされたことを確認
  console.log("モデルがロードされました。");
}

loadModel();


// app.js (続き)
// ...

record.addEventListener('click', async () => {
  // ...
  // 録音が終わったらサーバーにデータ送信
  const response = await fetch('/analyze', {
    method: 'POST',
    body: recordedAudio, // 録音デ
    headers: {
      'Content-Type': 'audio/wav'
    }
  });
  const result = await response.json  // 結果を画面に表示
  resultDiv.textContent = result.result;
});
