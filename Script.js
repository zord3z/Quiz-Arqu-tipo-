// Dados do quiz
const quizData = {
    questions: [
        {
            question: "Você precisa criar um novo produto. Qual é seu ponto de partida?",
            options: [
                { value: "a", text: "Uma pesquisa profunda de mercado para encontrar uma lacuna e entregar a solução mais completa." },
                { value: "b", text: "Um plano estratégico claro, definindo metas, processos e como ele vai liderar o mercado." },
                { value: "c", text: "Uma sessão de brainstorming livre, buscando uma ideia totalmente original e com uma estética única." },
                { value: "d", text: "Uma conversa com sua comunidade para entender suas necessidades mais profundas e como você pode ajudar." }
            ]
        },
        {
            question: "Qual é o maior elogio que um cliente pode fazer sobre seu trabalho?",
            options: [
                { value: "a", text: "\"Você me trouxe uma clareza que eu nunca tive. Agora eu entendo o caminho.\"" },
                { value: "b", text: "\"Seu método é impecável. Sinto-me segura e confiante seguindo seus passos.\"" },
                { value: "c", text: "\"Você me inspirou a pensar fora da caixa e a criar algo que é a minha cara.\"" },
                { value: "d", text: "\"Eu me senti acolhida e compreendida durante todo o processo.\"" }
            ]
        },
        {
            question: "Como você lida com uma regra do seu mercado que você considera ultrapassada?",
            options: [
                { value: "a", text: "Eu a analiso, entendo por que existe e proponho uma otimização lógica." },
                { value: "b", text: "Eu a uso como base para criar um sistema novo e mais eficiente, que se torna o novo padrão." },
                { value: "c", text: "Eu a ignoro completamente e crio algo disruptivo, que choca e inova." },
                { value: "d", text: "Eu ofereço uma alternativa mais humana e gentil, mostrando que há outras formas de ter sucesso." }
            ]
        },
        {
            question: "Seu perfil no Instagram é, acima de tudo, um espaço para:",
            options: [
                { value: "a", text: "Compartilhar conhecimento, tutoriais e análises aprofundadas." },
                { value: "b", text: "Demonstrar sucesso, autoridade e apresentar seus serviços como a solução definitiva." },
                { value: "c", text: "Exibir sua criatividade, seus bastidores e inspirar as pessoas com sua visão de mundo." },
                { value: "d", text: "Construir uma comunidade forte, com conversas genuínas e apoio mútuo." }
            ]
        },
        {
            question: "Em uma negociação importante, qual é seu maior trunfo?",
            options: [
                { value: "a", text: "Meus argumentos lógicos e os dados que comprovam meu ponto de vista." },
                { value: "b", text: "Minha postura confiante e minha capacidade de liderar a conversa para o resultado que desejo." },
                { value: "c", text: "Minha capacidade de criar uma visão de futuro tão inspiradora que o outro lado queira fazer parte dela." },
                { value: "d", text: "Minha empatia para entender a necessidade do outro e criar uma solução ganha-ganha." }
            ]
        },
        {
            question: "Você precisa aprender uma nova habilidade. Como você faz?",
            options: [
                { value: "a", text: "Compro os melhores livros e cursos, mergulho na teoria até me tornar uma especialista." },
                { value: "b", text: "Contrato um mentor ou compro o melhor método disponível para acelerar meus resultados." },
                { value: "c", text: "Começo a experimentar na prática, testando, errando e criando meu próprio jeito de fazer." },
                { value: "d", text: "Peço dicas a amigos e colegas, aprendendo com a experiência de quem já passou por isso." }
            ]
        },
        {
            question: "O que mais te frustra no seu trabalho?",
            options: [
                { value: "a", text: "Informações superficiais e a falta de profundidade nas discussões." },
                { value: "b", text: "Desorganização, falta de planejamento e processos ineficientes." },
                { value: "c", text: "Ter que seguir regras rígidas que limitam minha criatividade e expressão." },
                { value: "d", text: "A falta de conexão humana e a frieza nas relações profissionais." }
            ]
        },
        {
            question: "Qual é a principal transformação que você quer gerar no seu cliente?",
            options: [
                { value: "a", text: "Entendimento e sabedoria." },
                { value: "b", text: "Controle e sucesso." },
                { value: "c", text: "Autenticidade e liberdade." },
                { value: "d", text: "Bem-estar e pertencimento." }
            ]
        },
        {
            question: "Seu lema de vida como empreendedora é:",
            options: [
                { value: "a", text: "\"A verdade liberta.\"" },
                { value: "b", text: "\"O poder está no controle.\"" },
                { value: "c", text: "\"As regras foram feitas para serem quebradas.\"" },
                { value: "d", text: "\"Juntos somos mais fortes.\"" }
            ]
        },
        {
            question: "Como você organiza sua mesa de trabalho?",
            options: [
                { value: "a", text: "Com livros, artigos e tudo o que preciso para pesquisar e aprender à mão." },
                { value: "b", text: "Minimalista e perfeitamente organizada, com cada coisa em seu lugar para máxima produtividade." },
                { value: "c", text: "Um caos criativo, com post-its, rascunhos e objetos que me inspiram." },
                { value: "d", text: "Aconchegante, com fotos de família, uma planta e uma caneca de chá favorita." }
            ]
        },
        {
            question: "Ao escolher as cores da sua marca pessoal, você prefere:",
            options: [
                { value: "a", text: "Tons sóbrios e neutros que transmitam seriedade e inteligência, como cinza e azul-marinho." },
                { value: "b", text: "Cores que simbolizam poder e luxo, como preto, branco, dourado ou vermelho." },
                { value: "c", text: "Uma paleta de cores única e inesperada, que ninguém mais no seu mercado está usando." },
                { value: "d", text: "Cores quentes e acolhedoras, que transmitam conforto e amizade, como tons terrosos." }
            ]
        },
        {
            question: "Qual filme ou série te inspira mais profissionalmente?",
            options: [
                { value: "a", text: "Um documentário que revela os segredos de uma indústria ou de uma mente brilhante." },
                { value: "b", text: "Uma série sobre poder, estratégia e negócios, como \"Succession\" ou \"Billions\"." },
                { value: "c", text: "Um filme biográfico sobre um artista ou inventor que mudou o mundo, como \"Steve Jobs\"." },
                { value: "d", text: "Uma história sobre superação e laços fortes, como \"Intocáveis\"." }
            ]
        },
        {
            question: "O que significa \"sucesso\" para você?",
            options: [
                { value: "a", text: "Ser reconhecida como a maior autoridade intelectual na minha área." },
                { value: "b", text: "Construir um império estável e próspero, deixando um legado de liderança." },
                { value: "c", text: "Ter a liberdade de viver da minha arte e das minhas ideias, sem amarras." },
                { value: "d", text: "Ter um trabalho que me realiza e me permite cuidar das pessoas que amo." }
            ]
        },
        {
            question: "Como você reage a um feedback negativo?",
            options: [
                { value: "a", text: "Analiso a crítica de forma racional para ver se há um ponto de melhoria que eu não tinha visto." },
                { value: "b", text: "Agradeço, mas confio no meu plano. Se não for um feedback construtivo, descarto." },
                { value: "c", text: "Fico um pouco abalada, pois meu trabalho é uma extensão de mim, mas uso isso como combustível para criar algo ainda melhor." },
                { value: "d", text: "Tento entender a dor por trás da crítica e converso com a pessoa para resolver a situação." }
            ]
        },
        {
            question: "Qual é a sua maior habilidade de comunicação?",
            options: [
                { value: "a", text: "Explicar coisas complexas de forma simples e didática." },
                { value: "b", text: "Ser direta, clara e persuasiva, inspirando confiança imediata." },
                { value: "c", text: "Contar histórias (storytelling) que cativam e emocionam a audiência." },
                { value: "d", text: "Ouvir ativamente e fazer as pessoas se sentirem vistas e validadas." }
            ]
        },
        {
            question: "Se você fosse escrever um livro, qual seria o título?",
            options: [
                { value: "a", text: "\"O Guia Definitivo para...\"" },
                { value: "b", text: "\"As 10 Leis do Sucesso em...\"" },
                { value: "c", text: "\"A Arte de Reinventar...\"" },
                { value: "d", text: "\"A Jornada do Cuidado: Como...\"" }
            ]
        },
        {
            question: "O que você faz para recarregar as energias após uma semana de trabalho intenso?",
            options: [
                { value: "a", text: "Leio um livro, assisto a um documentário ou faço um curso rápido." },
                { value: "b", text: "Organizo minha agenda para a próxima semana, sentindo o prazer de ter tudo sob controle." },
                { value: "c", text: "Visito um museu, vou ao cinema, ou começo um projeto manual (pintura, jardinagem)." },
                { value: "d", text: "Chamo amigos para jantar, passo tempo com a família ou faço trabalho voluntário." }
            ]
        },
        {
            question: "Qual é a sua abordagem para precificar seu serviço?",
            options: [
                { value: "a", text: "Com base em uma análise detalhada do mercado e do valor intelectual que entrego." },
                { value: "b", text: "Posiciono meu preço no topo do mercado, refletindo a qualidade e os resultados premium que ofereço." },
                { value: "c", text: "Meu preço reflete a originalidade e o valor único do meu trabalho, é para quem valoriza a exclusividade." },
                { value: "d", text: "Meu preço é justo e acessível, pois quero que o máximo de pessoas possa se beneficiar do meu trabalho." }
            ]
        },
        {
            question: "A \"imagem de poder\" para você é, acima de tudo:",
            options: [
                { value: "a", text: "Parecer inteligente e confiável." },
                { value: "b", text: "Parecer bem-sucedida e no comando." },
                { value: "c", text: "Parecer autêntica e inesquecível." },
                { value: "d", text: "Parecer acessível e empática." }
            ]
        },
        {
            question: "Finalmente, por que você empreende?",
            options: [
                { value: "a", text: "Para ter a liberdade de me aprofundar nos assuntos que me fascinam e compartilhar esse conhecimento." },
                { value: "b", text: "Para construir algo grandioso, ter controle sobre meu destino e deixar um legado." },
                { value: "c", text: "Para expressar minha visão única de mundo e criar algo que não existia antes." },
                { value: "d", text: "Para causar um impacto positivo na vida das pessoas e criar um trabalho com propósito." }
            ]
        }
    ],
    archetypes: {
        A: {
            type: "A",
            name: "Grupo da Sabedoria e da Verdade",
            description: "Sua autoridade vem do seu conhecimento profundo, da sua honestidade e da sua capacidade de trazer clareza. Você inspira confiança porque você entende do que fala e busca a verdade. Sua imagem de poder é construída sobre a inteligência, a didática e a transparência.",
            authority: "Conhecimento profundo, honestidade e capacidade de trazer clareza",
            shadow: "Cuidado com a 'paralisia por análise'. O excesso de busca por conhecimento pode te impedir de entrar em ação. A Sábia na sombra se torna uma teórica que nunca executa.",
            icon: "💡"
        },
        B: {
            type: "B", 
            name: "Grupo do Poder e do Controle",
            description: "Sua autoridade vem da sua capacidade de liderar, criar ordem e alcançar resultados extraordinários. Você inspira confiança porque transmite segurança, disciplina e sucesso. Sua imagem de poder é construída sobre a organização, a excelência e a postura de uma líder nata.",
            authority: "Capacidade de liderar, criar ordem e alcançar resultados extraordinários",
            shadow: "Cuidado com o autoritarismo. A Governante na sombra pode se tornar controladora e inflexível, enquanto a Heroína pode se tornar obcecada por competição e se esgotar (burnout).",
            icon: "👑"
        },
        C: {
            type: "C",
            name: "Grupo da Inovação e da Liberdade", 
            description: "Sua autoridade vem da sua originalidade, coragem e autenticidade. Você inspira confiança porque ousa ser diferente e abre novos caminhos. Sua imagem de poder é construída sobre a criatividade, a visão de futuro e um toque de rebeldia.",
            authority: "Originalidade, coragem e autenticidade",
            shadow: "Cuidado com a falta de foco. A Criadora na sombra começa mil projetos e não termina nenhum. A Fora da Lei pode se tornar uma rebelde sem causa, quebrando regras apenas por quebrar.",
            icon: "✨"
        },
        D: {
            type: "D",
            name: "Grupo da Conexão e do Cuidado",
            description: "Sua autoridade vem da sua empatia, da sua capacidade de criar relacionamentos fortes e de fazer as pessoas se sentirem especiais. Você inspira confiança porque é genuína e se importa de verdade. Sua imagem de poder é construída sobre o carisma, o acolhimento e a comunicação humana.",
            authority: "Empatia, capacidade de criar relacionamentos fortes e fazer as pessoas se sentirem especiais",
            shadow: "Cuidado em se colocar por último. A Cuidadora na sombra pode se sacrificar tanto pelos outros que esquece do próprio negócio e de si mesma, com dificuldade de dizer 'não'.",
            icon: "❤️"
        }
    }
};

// Estado da aplicação
let currentQuestion = 0;
let answers = {};
let result = null;

// Elementos do DOM
const pages = {
    intro: document.getElementById('intro-page'),
    quiz: document.getElementById('quiz-page'),
    result: document.getElementById('result-page')
};

const elements = {
    startBtn: document.getElementById('start-quiz'),
    questionCounter: document.getElementById('question-counter'),
    progress: document.getElementById('progress'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    emailBtn: document.getElementById('email-btn'),
    emailModal: document.getElementById('email-modal'),
    closeModal: document.getElementById('close-modal'),
    emailForm: document.getElementById('email-form'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
};

// Funções de navegação
function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageName].classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    answers = {};
    showPage('quiz');
    displayQuestion();
}

function displayQuestion() {
    const question = quizData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    
    elements.questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.questions.length}`;
    elements.progress.style.width = `${progress}%`;
    elements.questionText.textContent = `${currentQuestion + 1}. ${question.question}`;
    
    // Criar opções
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        const isSelected = answers[currentQuestion] === option.value;
        if (isSelected) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <input type="radio" name="question-${currentQuestion}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-text">
                <span class="option-letter">${option.value.toUpperCase()}</span>) ${option.text}
            </span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(option.value));
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Atualizar botões
    elements.prevBtn.disabled = currentQuestion === 0;
    elements.nextBtn.disabled = !answers[currentQuestion];
    elements.nextBtn.textContent = currentQuestion === quizData.questions.length - 1 ? 'Ver Resultado' : 'Próxima';
}

function selectOption(value) {
    answers[currentQuestion] = value;
    
    // Atualizar visual das opções
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio.value === value) {
            option.classList.add('selected');
            radio.checked = true;
        } else {
            option.classList.remove('selected');
            radio.checked = false;
        }
    });
    
    elements.nextBtn.disabled = false;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    const scores = { A: 0, B: 0, C: 0, D: 0 };
    
    Object.values(answers).forEach(answer => {
        if (scores[answer] !== undefined) {
            scores[answer]++;
        }
    });
    
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primaryArchetype = sortedScores[0][0];
    const secondaryArchetype = sortedScores[1][0];
    
    result = {
        primary: quizData.archetypes[primaryArchetype],
        secondary: quizData.archetypes[secondaryArchetype],
        scores: scores
    };
    
    displayResult();
}

function displayResult() {
    showPage('result');
    
    // Arquétipo primário
    document.getElementById('primary-icon').textContent = result.primary.icon;
    document.getElementById('primary-name').textContent = result.primary.name;
    document.getElementById('primary-score').textContent = `Pontuação: ${result.scores[result.primary.type]}`;
    document.getElementById('primary-description').textContent = result.primary.description;
    document.getElementById('primary-authority').textContent = result.primary.authority;
    document.getElementById('primary-shadow').textContent = result.primary.shadow;
    
    // Arquétipo secundário
    document.getElementById('secondary-icon').textContent = result.secondary.icon;
    document.getElementById('secondary-name').textContent = result.secondary.name;
    document.getElementById('secondary-score').textContent = `Pontuação: ${result.scores[result.secondary.type]}`;
    document.getElementById('secondary-description').textContent = result.secondary.description;
}

function showEmailModal() {
    elements.emailModal.classList.add('active');
}

function hideEmailModal() {
    elements.emailModal.classList.remove('active');
}

function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

function submitEmail(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simular envio
    setTimeout(() => {
        showToast(`Resultado enviado para ${email}!`);
        hideEmailModal();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }, 500);
}

// Event listeners
elements.startBtn.addEventListener('click', startQuiz);
elements.prevBtn.addEventListener('click', previousQuestion);
elements.nextBtn.addEventListener('click', nextQuestion);
elements.emailBtn.addEventListener('click', showEmailModal);
elements.closeModal.addEventListener('click', hideEmailModal);
elements.emailForm.addEventListener('submit', submitEmail);

// Fechar modal clicando fora
elements.emailModal.addEventListener('click', (e) => {
    if (e.target === elements.emailModal) {
        hideEmailModal();
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    showPage('intro');
});