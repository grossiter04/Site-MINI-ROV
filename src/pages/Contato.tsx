export default function Contato() {
  return (
    <div>
      <h1>Contato</h1>
      <p>Fale conosco ou faça-nos uma visita no laboratório.</p>

      <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
        <h3>Endereço</h3>
        <p>
          Rua Bione, 220 - Prédio Tiradentes<br />
          Cidade Recife, PE - CEP: 50030-390
        </p>

        <h3 style={{ marginTop: '20px' }}>E-mail</h3>
        <p><a href="mailto:ffc@cesar.org.br">ffc@cesar.org.br</a></p>

        <h3 style={{ marginTop: '20px' }}>Redes e Links</h3>
        <ul>
          <li><a href="#">LinkedIn do Grupo</a></li>
          <li><a href="#">Repositório no GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}