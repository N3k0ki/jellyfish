const { token } = require("./data/config.json")
const { Client, Events, GatewayIntentBits, } = require("discord.js")

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
})


client.once(Events.ClientReady, bot => {
    console.log(`${bot.user.tag} acordou`)
})

client.on("messageCreate", async msg => {
    console.log(`${msg.author.tag}: ${msg.content}`)

    const comandos = [
        {
            pergunta: "quais são os 10 mandamentos satanistas?",
            resposta: "I - Amarás e odiarás com a mesma intensidade. \n II - Amarás a ti mesmo acima de tudo. \n III - Amarás ao próximo da forma que ele te amar. \n IV - Conhecerás a ti mesmo. \n V - Buscarás sempre a melhoria material e espiritual; \n VI - Não usarás o nome de Satã para fins indevidos; \n VII - Respeitarás e protegerás as crianças e os animais; \n VIII - Viverás cada segundo como se fosse o último; \n IX - Andarás a teu modo mas respeitarás o caminho de outrem; \n X - Darás o teu melhor em tudo o que fizeres"
        },
        {
            pergunta: "⛧",
            resposta: "pentagrama"
        },
        {
            pergunta: "qual é o preço de um ser humano?",
            resposta: "para manter uma vida humana em condições aceitáveis por 90 anos, desde seu nascimento, gastos hospitalares, educação, alimento, saúde e moradia, desconsiderando a inflação temos, que o custo de um humano é de 1.8 milhões. uma pessoa que estudou a nível universitário (incluido na conta) rende em média, 2.8 milhões. ou seja 1 milhão é o valor de uma vida humana. se a pessoa não estudar nada, ela reduz seu custo total de 1.8 mi pra 1.5 mi aproximadamente. mas é capaz de produzir, ganhando a média de um trabalhador pouco qualificado, cerca de 1.7 mi, ou seja, ela vale 250 mil aproximadamente. sabendo que existem pessoas mais e menos qualificadas, que podem ou não servir para render dinheiro, chegamos a faixa de valor de uma vida humana, de entre 200 mil e 2 milhões, sendo 200k a pessoa com pouca aptidão acadêmica e a pessoa de 2 milhões um humano médico ou qualquer humano que consiga gerar mais de 10k por mês. valor da vida média de um ser humano atualmente: R$1.000.000,00 , desconsiderados fatores como debilidades ou valorização por raça/etnia por motivos éticos. A análise foi 100% baseada em habilidades e não em aparências" 
        }
    ]
    for (let i = 0; i < comandos.length; i++) {
        if (msg.content == comandos[i].pergunta) {
            await msg.reply({ content: comandos[i].resposta })
        }
    }


})

client.login(token)