// Para poder efetuar os cálculos é necessário criar um arquivo na raiz do projeto
// com o nome calcValues do tipo .txt, logo após criado você deverá informar um valor
// em reais a ser investido (Ex.: 182.56), o valor informado deverá conter apenas valores numéricos.
const value = require("fs").readFileSync("calcValues.txt", "utf-8");

// Crie um script em sua linguagem de programação preferida que receba o valor investido em reais
const investedMoney = parseFloat(value);

const percentageViewAds = 0.12;
const percentageShareAds = 0.15;

// 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
const totalViewAdsPerInvestedMoney = investedMoney * 30;

// a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
const amountPeopleClickAds = totalViewAdsPerInvestedMoney * percentageViewAds;

// a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
const amountPeopleShareAds = amountPeopleClickAds * percentageShareAds;

// o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
// (1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)
const maxShare = amountPeopleShareAds * 3;

// cada compartilhamento nas redes sociais gera 40 novas visualizações.
const totalView = maxShare * 40;

// retorne uma projeção aproximada da quantidade máxima de pessoas que "visualizarão o mesmo anúncio"
// (considerando o anúncio original + os compartilhamentos)
console.log(
  `--> Quantidade máxima de pessoas que visualizarão o anuncio é de ${Math.round(
    totalView + totalViewAdsPerInvestedMoney
  )}`
);
