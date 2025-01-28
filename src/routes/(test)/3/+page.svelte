<script>
	// import OpenAI from "openai";

	// const openai = new OpenAI({
	//         baseURL: 'https://api.deepseek.com',
	//         apiKey: 'sk-079a36e8f7b44f04ae26c560847028ee'
	// });
	// async function sendMessage() {
	//   const completion = await openai.chat.completions.create({
	//     messages: [{ role: "system", content: "Hello." }],
	//     model: "deepseek-chat",
	//   });

	//   console.log(completion.choices[0].message.content);
	// }

	//     const apiKey = 'sk-079a36e8f7b44f04ae26c560847028ee';
	// const apiUrl = 'https://api.deepseek.com'; // Пример URL для OpenAI API

	// async function sendMessage(message) {
	//     const response = await fetch(apiUrl, {
	//         method: 'POST',
	//         headers: {
	//             'Content-Type': 'application/json',
	//             'Authorization': `Bearer ${apiKey}`
	//         },
	//         body: JSON.stringify({
	//             model: "deepseek-chat", // Укажите модель
	//             messages: [{ role: "system", content: message }],
	//             max_tokens: 150
	//         })
	//     });

	//     const data = await response.json();
	//     return data.choices[0].message.content;
	// }

	// // Пример использования
	// sendMessage("Привет! Как дела?")
	//     .then(response => console.log(response))
	//     .catch(error => console.error(error));
</script>

<button on:click={() => sendMessage('Как дела?')}>Отправить</button>
