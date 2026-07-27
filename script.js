const chatbox = document.getElementById('chatbox');
const message = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');
const modeBtns = document.querySelectorAll('.mode-btn');

const responses = [
  "Connected. I’ve loaded the command center and can route requests across your modules.",
  "AI Core is online. Ready to handle tasks, automate flows, and coordinate agents.",
  "Wellness and productivity modules are available. Choose a panel to continue."
];

sendBtn.addEventListener('click', () => {
  const text = message.value.trim();
  if (!text) return;
  chatbox.innerHTML = `<strong>You:</strong> ${text}<br><br><strong>Assistant:</strong> ${responses[Math.floor(Math.random() * responses.length)]}`;
  message.value = '';
});

message.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendBtn.click();
});

modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modeBtns.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    chatbox.innerHTML = mode === 'website'
      ? 'Interactive assistant panel preview with bot messages, quick actions, and agent handoffs.'
      : 'Chat mode engaged. This area is ready for live assistant conversation.';
  });
});
