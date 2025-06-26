document.getElementById("pedido-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.querySelector('input[placeholder="Nome completo"]').value;
  const whatsapp = this.querySelector('input[placeholder="WhatsApp"]').value;
  const email = this.querySelector('input[placeholder="E-mail"]').value;
  const pedido= this.querySelector('textarea').value;

  // Montar a mensagem para o WhatsApp
  const mensagem = `Olá! Gostaria de fazer um pedido:\n\n` +
    `🧍 Nome: ${nome}\n📱 WhatsApp: ${whatsapp}\n📧 E-mail: ${email}\n🏡 Pedido:\n${endereco}`;

  const telefone = "5547996156257"; // <-- substitua pelo seu número
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
