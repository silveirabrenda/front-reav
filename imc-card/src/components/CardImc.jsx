import { useState, useEffect } from 'react';
import '../styles/CardImc.css';

const CardImc = () => {
  const [pesoAtual, setPesoAtual] = useState(68);
  const [alturaAtual, setAlturaAtual] = useState(1.72);
  const [imc, setImc] = useState(0);
  const [fundo, setFundo] = useState('#43a047'); // verde diferente
  const [categoria, setCategoria] = useState('');

  const calculaImc = () => {
    if (alturaAtual > 0) {
      const resultado = pesoAtual / (alturaAtual * alturaAtual);
      return resultado.toFixed(2);
    }
    return 0;
  };

  const atualizaCor = (imcValor) => {
    if (imcValor <= 24.5) {
      setFundo('#43a047'); // verde
      setCategoria('Normal');
    } else if (imcValor > 24.5 && imcValor < 30) {
      setFundo('#fdd835'); // amarelo diferente
      setCategoria('Sobrepeso');
    } else {
      setFundo('#e53935'); // vermelho diferente
      setCategoria('Obesidade');
    }
  };

  useEffect(() => {
    const novoImc = calculaImc();
    setImc(novoImc);
    atualizaCor(parseFloat(novoImc));
  }, [pesoAtual, alturaAtual]);

  return (
    <div className="card-imc" style={{ backgroundColor: fundo }}>
      <h1 className="title">IMC Dinâmico</h1>

      <div className="imc-display">
        <div className="imc-value">{imc}</div>
        <div className="imc-classificacao">{categoria}</div>
      </div>

      <div className="controles">
        <div className="controle-grupo">
          <label>Peso (kg)</label>
          <div className="controle-botoes">
            <button onClick={() => setPesoAtual(p => Math.max(p - 1, 1))}>−</button>
            <input
              type="number"
              value={pesoAtual}
              onChange={e => setPesoAtual(Number(e.target.value))}
            />
            <button onClick={() => setPesoAtual(p => Math.min(p + 1, 300))}>+</button>
          </div>
        </div>

        <div className="controle-grupo">
          <label>Altura (m)</label>
          <div className="controle-botoes">
            <button onClick={() => setAlturaAtual(a => Math.max(a - 0.01, 0.5))}>−</button>
            <input
              type="number"
              value={alturaAtual.toFixed(2)}
              onChange={e => setAlturaAtual(Number(e.target.value))}
            />
            <button onClick={() => setAlturaAtual(a => Math.min(a + 0.01, 2.5))}>+</button>
          </div>
        </div>
      </div>

      <div className="legenda">
        <h3>Classificação</h3>
        <div className="legenda-item">
          <span className="cor-box verde"></span>Normal ≤ 24.5
        </div>
        <div className="legenda-item">
          <span className="cor-box amarelo"></span>Sobrepeso 24.5 - 30
        </div>
        <div className="legenda-item">
          <span className="cor-box vermelho"></span>Obesidade ≥ 30
        </div>
      </div>
    </div>
  );
};

export default CardImc;
