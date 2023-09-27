const quotes = [
    {
        quote: "전문가란 매우 협소한 분야에서 저지를 수 있는 모든 실수를 저질러본 사람이다.",
        author: "-닐스 보어-",
    },
    {
        quote: "발견이란 모두가 바라봤던 어떤 것을 아무도 생각하지 못한 방식으로 바라보는 것이다.",
        author: "-알버트 본 젠트-교르이-",
    },
    {
        quote: "삶을 사는 방식은 두가지다. 하나는 그 무엇도 기적이 아니라고 생각하고 사는 삶이고 다른 하나는 모든것이 기적이라고 생각하고 사는 삶이다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "내가 다른 사람들보다 더 멀리 볼 수 있었던 것은 거인의 어깨에 서 있었기 때문입니다.",
        author: "-아이작 뉴턴-",
    },
    {
        quote: "훌륭한 주장은 훌륭한 증명이 수반되어야 한다.",
        author: "-칼 세이건-",
    },
    {
        quote: "당신이 무언가를 간단하게 설명할 수 없다면 당신은 그것을 충분히 이해하지 못한 것일 수 있습니다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "과학은 자연의 궁극적인 신비를 결코 풀지 못할 것이다. 자연을 탐구하다 보면 자연의 일부인 자기 자신을 탐구해야 할 때가 반드시 찾아오기 때문이다.",
        author: "-막스 플랑크-",
    },
    {
        quote: "당신의 이론이 얼마나 아름다운지는 중요하지 않습니다. 당신이 얼마나 똑똑한지는 중요하지 않습니다. 실험과 일치하지 않으면 잘못된 것입니다.",
        author: "-리차드 파인만-",
    },
    {
        quote: "가능성의 한계를 발견하는 유일한 방법은 한계를 넘어 불가능으로 나아가는 것입니다.",
        author: "-아서 C. 클라크-",
    },
    {
        quote: "참된 종교는 참된 삶입니다. 영혼을 다해, 선함과 의로움을 다해 사는 것입니다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "과학은 이성의 제자일 뿐만 아니라, 낭만과 열정의 제자이기도 하다.",
        author: "-스티븐 호킹-",
    },
    {
        quote: "과학전문가는 자신의 연구에서 나타날 수 있는 최악의 실수가 무엇인지 알고 그것을 피하는 방법까지 아는 사람이다.",
        author: "-베르너 카를 하이젠베르크-",
    },
    {
        quote: "아무리 뛰어난 이론이라 해도 어린아이가 이해할 수 있는 수준으로 설명하지 못한다면 아무 짝에도 쓸모없다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "맞는 설명의 반대는 거짓 설명이지만, 심오한 진실의 반대는 또다른 심오한 진실일수도 있다.",
        author: "-닐스 보어-",
    },
    {
        quote: "우주의 모든 상수들이 지금과 같이 적절한 값으로 세팅될 확률은 폐품 창고에 태풍이 불어닥쳐 보잉747제트기가 자동으로 만들어질 확률과 비슷하다",
        author: "-휴 로스-",
    },
    {
        quote: "나는 바닷가에서 노는 한 소년과 같았다. 내가 더 예쁜 조개와 더 동그란 조약돌을 찾는 동안, 거대한 진리의 바다는 여전히 말없이 내 눈 앞에 펼쳐져 있었다",
        author: "-아이작 뉴턴-",
    },
    {
        quote: "과학은 사실의 집합이다. 집이 돌로 지어지듯 과학은 사실로 이루어진다. 그러나 돌을 쌓아 올렸다고 해서 집이 되는 것은 아니며, 사실을 모았다고 해서 반드시 과학이 되는 것은 아니다.",
        author: "-앙리 푸앵카레-",
    },
    {
        quote: "양자역학을 접하고서도 놀라지 않는 사람은 양자역학을 제대로 이해하지 못한 사람이다.",
        author: "-닐스 보어-",
    },
    {
        quote: "우리는 문제를 만들 때 사용했던 것과 같은 생각으로 문제를 해결할 수 없습니다. 문제를 만든 동일한 수준의 의식으로는 문제를 해결할 수 없습니다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "당신이 무언가를 간단하게 설명할 수 없다면 당신은 그것을 충분히 이해하지 못한 것일 수 있습니다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "기초연구란 내가 하고있는것이 무엇인지 모르는 상태에서 하고있는 그 일이다.",
        author: "-웨르너 본 브라언-",
    },
    {
        quote: "과학은 이성의 제자일 뿐만 아니라, 낭만과 열정의 제자이기도 하다.",
        author: "-스티븐 호킹-",
    },
                                        
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
/** 
{
    quote: "",
    author: "",
},

*/