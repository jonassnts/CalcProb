function calcularUniforme() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
  
    if (isNaN(a) || isNaN(b) || isNaN(x1) || isNaN(x2) || a >= b || x1 > x2) {
      alert("Verifique os valores informados.");
      return;
    }
  
    const media = (a + b) / 2;
    const variancia = Math.pow((b - a), 2) / 12;
    const desvio = Math.sqrt(variancia);
    const cv = (desvio / media) * 100;
    const probabilidade = (x2 - x1) / (b - a);
  
    const res = `
      Média: ${media.toFixed(2)}<br>
      Variância: ${variancia.toFixed(2)}<br>
      Desvio Padrão: ${desvio.toFixed(2)}<br>
      Coeficiente de Variação: ${cv.toFixed(2)}%<br>
      P(${x1} ≤ X ≤ ${x2}): ${probabilidade.toFixed(4)}
    `;
  
    document.getElementById('resultadoUniforme').innerHTML = res;
  }
  
  function calcularExponencial() {
    const lambda = parseFloat(document.getElementById('lambda').value);
    const x = parseFloat(document.getElementById('x_exp').value);
    const tipo = document.getElementById('tipoExp').value;
  
    if (isNaN(lambda) || isNaN(x) || lambda <= 0 || x < 0) {
      alert("Verifique os valores informados.");
      return;
    }
  
    let probabilidade;
  
    if (tipo === 'menor') {
      probabilidade = 1 - Math.exp(-lambda * x);
    } else {
      probabilidade = Math.exp(-lambda * x);
    }
  
    const res = `P(X ${tipo === 'menor' ? '≤' : '>'} ${x}): ${probabilidade.toFixed(4)}`;
    document.getElementById('resultadoExponencial').innerHTML = res;
  }
  