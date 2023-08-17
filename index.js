const { token } = require("./data/config.json");
const { Client, Events, GatewayIntentBits, } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, bot => {
    console.log(`${bot.user.tag} acordou`)
});
// eca, lux...
client.on("messageCreate", async msg => {
    if (msg.author.bot) return;

    const msgMin = msg.content.toLowerCase();
    
    if (msgMin.includes("lux")) {
        await msg.reply({ content: "eca, lux..." });
        return;
    }
//história
    if (msgMin.includes("afton")) {
        await msg.reply({ content: "A família dos que sempre voltam."});
        return;
    }
    if (msgMin.includes("cells")) {
        await msg.reply({ content: "Parece que vc voltou ao início novamente."});
        return;
    }
    if (msgMin.includes("cup")) {
        await msg.reply({ content: "A escolha é sua. Dê os contratos ao diabo, ou não."});
        return;
    }
    if (msgMin.includes("determinação")) {
        await msg.reply({ content: "A escolha é sua matar ou poupar."});
        return;
    }
    if (msgMin.includes("sus")) {
        await msg.reply({ content: "Há 1 impostor entre nós..."});
        return;
    }
    if (msgMin.includes("dark soulls")) {
        await msg.reply({ content: "Você vai realmente tentar?"});
        return;
    }
    if (msgMin.includes("hollow")) {
        await msg.reply({ content: "Hollowest espera por você"})
        return;
    }
    if (msgMin.includes("lol")) {
        await msg.reply({ content: "Desinstala,isso não é vida n bro <:SlpyWTF:1123051102414311505> "})
    }
//undertale

    // Verifica se a mensagem contém a palavra "save"
    if (msgMin.includes("save")) {
        // URL do GIF que você quer enviar
        const gifUrl = "https://cdn.discordapp.com/attachments/1075547001573347459/1133770867688620054/image.png";

        try {
            // Envia a URL do GIF como resposta
            await msg.reply({ content: gifUrl });
        } catch (error) {
            console.log("Erro ao enviar o GIF:", error);
        }

        return;
    }
    console.log(`${msg.author.tag}: ${msg.content}`);
    try {
        //dado pega a mensagem minúscula e divide usando d como divisor
        const dado = msgMin.split('d')

        //
        const dados = dado[0] | 1;
        const lados = dado[1];

        var valorAbsoluto = 0
        var valores = []
        for (let i = 1; i <= dados; i++) {
            var valor = Math.ceil(Math.random() * lados) 
            valorAbsoluto = valorAbsoluto + valor
            valores.push (valor)   
        }
        
        if (!isNaN(valorAbsoluto)) msg.reply(`\`${valorAbsoluto}\` ⟵ [${valores}] ${dados}d${lados}`)
    } catch (error) {
        console.log(error)

    }

    const comandos = [
//comandos sobre undertale

// comandos aleatórios
        {
            pergunta: "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
            resposta: "Tá rindo do que filha da puta? <:SlpyGun:1122655693032394902> "
        },
        {
            pergunta: "nv",
            resposta: "boa noite papai e mamãe! <@803437038841757707> <@818871149768998995> :heart:"
        },
        {
            pergunta: "vn",
            resposta: "bom dia mamãe e papai! <@803437038841757707> <@818871149768998995> :heart: "
        },
        {
            pergunta: "j!pi",
            resposta: "π=3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912"
        },
// onde tudo começou        
        {
            pergunta: "Qual é a pessoa que você mais admira?",
            resposta: "Definitivamente meus criadores... `Kidd0._` e `pozzif`! :heart: "
        },
        {
            pergunta: "qual é o preço de um ser humano?",
            resposta: "para manter uma vida humana em condições aceitáveis por 90 anos, desde seu nascimento, gastos hospitalares, educação, alimento, saúde e moradia, desconsiderando a inflação temos, que o custo de um humano é de 1.8 milhões. uma pessoa que estudou a nível universitário (incluido na conta) rende em média, 2.8 milhões. ou seja 1 milhão é o valor de uma vida humana. se a pessoa não estudar nada, ela reduz seu custo total de 1.8 mi pra 1.5 mi aproximadamente. mas é capaz de produzir, ganhando a média de um trabalhador pouco qualificado, cerca de 1.7 mi, ou seja, ela vale 250 mil aproximadamente. sabendo que existem pessoas mais e menos qualificadas, que podem ou não servir para render dinheiro, chegamos a faixa de valor de uma vida humana, de entre 200 mil e 2 milhões, sendo 200k a pessoa com pouca aptidão acadêmica e a pessoa de 2 milhões um humano médico ou qualquer humano que consiga gerar mais de 10k por mês. valor da vida média de um ser humano atualmente: R$1.000.000,00 , desconsiderados fatores como debilidades ou valorização por raça/etnia por motivos éticos. A análise foi 100% baseada em habilidades e não em aparências"
        },
        {
            pergunta: "⛧",
            resposta: "ritual? bro? :face_with_raised_eyebrow: "
        },
        {
            pergunta: "j!mandamentos",
            resposta: "Os Dez Mandamentos Satânicos foram criados pelo fundador da Igreja de Satanás, Anton Szandor LaVey, em seu livro A Bíblia Satânica. Aqui estão eles:\n" +
            "\n"+
            "I - Amarás e odiarás com a mesma intensidade.\n" +
            "II - Amarás a ti mesmo acima de tudo.\n" +
            "III - Amarás ao próximo da forma que ele te amar.\n"+
            "IV - Conhecerás a ti mesmo.\n" + 
            "V - Buscarás sempre a melhoria material e espiritual; \n"+
            "VI - Não usarás o nome de Satã para fins indevidos;\n"+ 
            "VII - Respeitarás e protegerás as crianças e os animais;\n"+ 
            "VIII - Viverás cada segundo como se fosse o último;\n"+ 
            "IX - Andarás a teu modo mas respeitarás o caminho de outrem;\n"+ 
            "X - Darás o teu melhor em tudo o que fizeres\n"
        },
// Comandos de Lol
        {
            pergunta: "j!lane",
            resposta: `A melhor posição para você é a ***${['Lane superior (top)', 'Lane central (mid)', 'Selva (jungle)', 'Lane inferior (bot)', 'Lane inferior (sup)'][Math.floor(Math.random() * 5)]}*** `
        },
        
// sobre personagens do lol
        {
            pergunta: "j!aatrox",
            resposta: "**Aatrox**\n" +
            "**Tier**: S+\n" +
            "**WR** : 51.95\n" +
            "**Pick** : 11.6\n" +
            "**Ban** : 14.2\n" +
            "\n" +
            "**Runas**:\n" +
            "**Runa Primária**; Precisão: Conquistador; Triunfo - Lenda: Tenacidade - Até a Morte\n" +
            "**Runa Secundária**; Determinação; Ventos Revigorantes - Revitalizar\n" +
            "**Aprimoramento 1**: Força Adaptativa\n" +
            "**Aprimoramento 2**: Força Adaptativa\n" +
            "**Aprimoramento 3**: Resistência Mágica\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Top\n" +
            "**Caminho de Skill**: Q-E-W\n" +
            "\n" +
            "**Itens Iniciais**: Lâmina de Doran - Poção x1\n" +
            "**Build Completa**: Eclipse - Botas Galvanizadas de Aço - Cutelo Negro - Rancor de Serylda - Dança da Morte - Anjo Guardião\n" +
            "\n" +
            "**Counters**: Malphite - Singed - Illaoi - Garen - Irelia - Vayne"
        },
        {
            pergunta: "j!ahri",
            resposta: "**Ahri**\n" +
            "**Tier**: B\n" +
            "**WR** : 49.96\n" +
            "**Pick** : 10.2\n" +
            "**Ban** : 5.8\n" +
            "\n" +
            "**Runas**\n" + 
            "**Runa Primária**; Dominação: Eletrocutar; Gosto de Sangue - Globos Oculares - Caça Suprema\n" +
            "**Runa Secundária**; Feitiçaria; Faixa de Fluxo de Mana - Transcendência\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n"+
            "**Feitiços de Invocador**; Flash - Teleporte\n" +
            "**Lane**; Mid\n" +
            "**Caminho de Skill**; W-Q-E\n" +
            "\n" +
            "**Itens Iniciais**; Anel de Doran, Poção x2\n" +
            "**Build Completa**; Glacieterno - Sapatos do Feiticeiro - Chama Sombria - Ampulheta de Zhonyas - Capuz da Morte de Rabadon - Cajado do Vazio\n" +
            "\n" +
            "**Counters**; Naafiri - Xerath - Swain - Veigar - Cassiopeio - Malzahar\n"
        },
        {
            pergunta: "j!akali",
            resposta: "**Akali**\n" +
            "**Tier**: D\n" +
            "**WR** : 48.42\n" +
            "**Pick** : 6.7\n" +
            "**Ban** : 8.7\n" +
            "\n" +
            "**Runas** : \n" +
            "**Runa Primária**; Eletrocutar; Impacto Repentino - Globos Oculáres - Caça Suprema\n" +
            "**Runa Secundária**; Determinação; Ventos Revigorantes - Crescimento Excessivo\n" +
            "**Aprimoramento 1**; Força Adaptativa\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**; Flash - Incendiar\n" +
            "**Lane**; Mid/Top\n" +
            "**Caminho de Skill**; Q-E-W\n" +
            "\n" +
            "**Itens Iniciais**; Escudo de Doran - Poção x1\n" +
            "**Build Completa**; Sapatos do Feiticeiro - Explocinturão Hextech - Chama Sombria - Ampulheta de Zhonyas - Capuz da Morte de Rabadon - Cajado do Vazio\n"+
            "\n" +
            "**Counters**; Naafiri, Swain, Aurelion Sol, Malzahar, Galio, Kai'sa\n"
        },
        {
            pergunta: "j!akshan",
            resposta: "**Akshan**\n" +
            "**Tier**: B\n" +
            "**WR** : 49.75\n" + 
            "**Pick** : 2.3\n" +
            "**Ban** : 3.8\n" +
            "\n" +
            "**Runas** :\n" + 
            "**Runa Primária**; Precisão: Pressione o Ataque; Presença de Espírito - Lenda - Espontaniedade - Coup de Grace\n" +    
            "**Runa Secundária**; Determinação - Ossos Revestidos - Crescimento Excessivo\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**; Flash - Incendiar\n" +
            "**Lane**; Mid/Top \n" +
            "**Caminho de Skill**; Q-E-Q\n" +
            "\n" +
            "**Itens Iniciais**; Espada Longa - Poção com Refill\n" +
            "**Build Completa**; Mata Cráquen - Passos de Mercúrio - Limite da Razão - Gume do Infinito - Espada do Rei Destruído - Canhão Fumejante\n" +
            "\n" +
            "**Counters**; Diana - Anivia - Annie - Cassiopeia - Lissandra - Irelia\n"
        },
        {
            pergunta: "j!alistar",
            resposta: "**Alistar**\n" +
            "**Tier**: S\n" +
            "**WR** : 51.7\n" +
            "**Pick** : 4.4\n" +
            "**Ban** : 1.4\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Aprimoramento Glacial; Flashtração Hextec - Pulverizador de Tropas - Perspicácia Cósmica\n" +
            "**Runa Secundária**; Determinação; Ossos Revestidos - Inabalável\n" +
            "**Aprimoramento 1**; Aceleração de Habilidade\n" +
            "**Aprimoramento 2**; Armadura\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Suporte\n" +
            "**Caminho de Skill**: Q-W-E\n" +
            "\n" +
            "**Itens Iniciais**: Escudo Relicário - Poção x2\n" +
            "**Build Completa**: Botas de Mobilidade - Proteção Imutável - Juramento do Cavaleiro - Armadura de Espinhos - Égide de Fogo Solar - Coração Congelado\n" +
            "\n" +
            "**Counters**: Janna, Xerath, Rakan, Shaco, Vel'Koz, Morgana"
        },
        {
            pergunta: "j!amumu",
            resposta: "**Amumu**\n" +
            "**Tier**: S\n" +
            "**WR** : 52.28\n" +
            "**Pick** : 4.3\n" +
            "**Ban** : 2.7\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Precisão; Conquistador - Triunfo - Lenda: Tenacidade - Até o Fim\n" +
            "**Runa Secundária**; Dominação; Golpe Desleal - Caça Suprema\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Golpear\n" +
            "**Lane**: Jungle/Suporte\n" +
            "**Caminho de Skill**: W-E-Q\n" +
            "\n" +
            "**Itens Iniciais**: Broto Esmagamusgo - Poção x1\n" +
            "**Build Completa**: Abraço Demoníaco - Botas Galvanizadas de Aço - Jak'Sho - Égide de Fogo Solar - Armadura de Espinhos - Coração Gelado\n" +
            "\n" +
            "**Counters**: Shyvana - Lillia - Zac - Trundle - Ivern - Karthus"
        },
        {
            pergunta: "j!anivia",
            resposta: "**Anivia**\n" +
            "**Tier**: A\n" +
            "**WR** : 51.68\n" +
            "**Pick** : 1.8\n" +
            "**Ban** : 1.9\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Dominação: Eletrocutar - Golpe Desleal; Globos Oculáres; Caça Incansável;\n" +
            "**Runa Secundária**; Precisão: Presença de Espírito; Coup de Grace\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Mid\n" +
            "**Caminho de Skill**: Q-E-E\n" +
            "\n" +
            "**Itens Iniciais**: Anel de Doran - Poção x2\n" +
            "**Build Completa**: Bastão das Eras - Sapato do Feiticeira - Cajado do Arcanjo - Ampulheta de Zhonyas - Capuz da Morte de Rabadon - Chama Sombria\n" +
            "\n" +
            "**Counters**: Taliyah - Aurelion Sol - Xerath - Veigar - Swain - Malzahar"
        },
        {
            pergunta: "j!annie",
            resposta: "**Annie**\n" +
            "**Tier**: A\n" +
            "**WR** : 50.2\n" +
            "**Pick** : 2.3\n" +
            "**Ban** : 1.6\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Dominação; Eletrocutar - Golpe Desleal - Globos Oculáres - Caça Incansável\n" +
            "**Runa Secundária**; Feitiçaria; Faixa de Fluxo de Mana - Foco Absoluto\n" +
            "**Aprimoramento 1**; Força Adaptativa\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Resistência Mágica\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Mid\n" +
            "**Caminho de Skill**: Q-W-E\n" +
            "\n" +
            "**Itens Iniciais**: Anel de Doran - Poção x2\n" +
            "**Build Completa**: Tormenta de Luden - Sapatos do Feiticeiro - Chama Sombria - Ampulheta de Zhonyas - Cajado do Vazio - Capuz da Morte de Rabadon\n" +
            "\n" +
            "**Counters**: Naafiri, Anivia, Pantheon, Fizz, Talon, Swain"
        },
        {
            pergunta: "j!aphelios",
            resposta: "**Aphelios**\n" +
            "**Tier**: D\n" +
            "**WR** : 47.27\n" +
            "**Pick** : 6.1\n" +
            "**Ban** : 2.2\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Precisão; Agilidade nos Pés - Cura Excessiva - Lenda: Linhagem - Dilacerar\n" +
            "**Runa Secundária**; Feitiçaria; Foco Absoluto - Tempestade Crescente\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Fantasma\n" +
            "**Lane**: ADC\n" +
            "**Caminho de Skill**: Q-Q-Q\n" +
            "\n" +
            "**Itens Iniciais**: Abatedora - Poção x1\n" +
            "**Build Completa**: Grevas do Berserker - Mata Cráquens - Força do Ventaval - Sedenta por Sangue - Furacão de Runaan - Anjo Guardião\n" +
            "\n" +
            "**Counters**: Miss Fortune - Ashe - Twitch - Varus - Kog'Maw - Nilah"
        },
        {
            pergunta: "j!ashe",
            resposta: "**Ashe**\n" +
            "**Tier**: S+\n" +
            "**WR** : 51.45\n" +
            "**Pick** : 15.8\n" +
            "**Ban** : 9.2\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Precisão; Ritmo Fatal - Presença de Espírito - Lenda: Linhagem - Coup de Grace\n" +
            "**Runa Secundária**; Inspiração; Entrega de Biscoito - Velocidade de Aproximação\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Fantasma\n" +
            "**Lane**: ADC\n" +
            "**Caminho de Skill**: W-Q-E\n" +
            "\n" +
            "**Itens Iniciais**: Lâmina de Doran - Poção x1\n" +
            "**Build Completa**: Grevas do Berserker - Mata Craquen - Força da Trindade - Espada do Rei Destruído - Furacão de Runaan - Arco Escudo Imortal\n" +
            "\n" +
            "**Counters**: Miss Fortune - Kog'Maw - Nilah - Kai'sa - Jhin - Twitch"
        },
        {   
            pergunta: "j!azir" ,
            resposta: "**Azir**\n" +
            "**Tier**: C\n" +
            "**WR** : 48.45\n" +
            "**Pick** : 2.6\n" +
            "**Ban** : 0.5\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Precisão; Conquistador - Presença de Espírito - Lenda: Espontaneidade - Coup de Grace\n" +
            "**Runa Secundária**; Feitiçaria; Foco Absoluto - Chamuscar\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Teleporte\n" +
            "**Lane**: Mid\n" +
            "**Caminho de Skill**: W-Q-E\n" +
            "\n" +
            "**Itens Iniciais**: Anel de Doran - Poção x2\n" +
            "**Build Completa**: Coroa da Rainha Despedaçada - Sapato do Feiticeiro - Dente Nashor - Ampulheta de Zhonyas - Capuz da Morte de Rabadon - Cajado do Vazio\n" +
            "\n" +
            "**Counters**: Aurelion Sol - Annie - Malzahar - Ekko - Zoe - Rumble"
            },
            {
            pergunta: "j!bard",
            resposta: "**Bard**\n" +
            "**Tier**: B\n" +
            "**WR** : 49.33\n" +
            "**Pick** : 1.4\n" +
            "**Ban** : 0.2\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Determinação; Guardião - Fonte da Vida - Ossos Revestidos - Inabalável\n" +
            "**Runa Secundária**; Dominação; Sentinela Zumbí - Caça Incansável\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Suporte\n" +
            "**Caminho de Skill**: Q-W-E\n" +
            "\n" +
            "**Itens Iniciais**: Varinha do Ladrão Arcano - Poção x2\n" +
            "**Build Completa**: Botas da Rapidez - Medalhão dos Solari de Ferro - Couraça do Defunto - Purificador Quimtec - Redenção - Correntes de Anátema\n" +
            "\n" +
            "**Counters**: Zyra - Maokai - Alistar - Heimerdinger - Seraphine - Zilean"
        },
        {
            pergunta: "j!bel'veth",
            resposta: "**Bel'Veth**\n" +
            "**Tier**: A\n" +
            "**WR** : 50.05\n" +
            "**Pick** : 3.0\n" +
            "**Ban** : 3.9\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Precisão; Conquistador - Triunfo - Lenda: Espontaneidade - Coup de Grace\n" +
            "**Runa Secundária**; Inspiração - Calçados Mágicos - Perspicácia Cósmica\n" +
            "**Aprimoramento 1**; Velocidade de Ataque\n" +
            "**Aprimoramento 2**; Força Adaptativa\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Golpear\n" +
            "**Lane**: Jungle\n" +
            "**Caminho de Skill**: Q-E-W\n" +
            "\n" +
            "**Itens Iniciais**: Broto de Esmagamusgo - Poção x1\n" +
            "**Build Completa**: Mata Cráquens - Botas Galvanizadas de Aço - Espada do Rei Destruído - Lâmina da Fúria de Guinsoo - Dança da Morte - Anjo Guardião\n" +
            "\n" +
            "**Counters**: Rammus, Ivern, Poppy, Fiddlesticks, Amumu, Maokai"
        },
        {
            pergunta: "j!blitzcrank",
            resposta: "**Blitzcrank**\n" +
            "**Tier**: S+\n" +
            "**WR** : 50.95\n" +
            "**Pick** : 8.8\n" +
            "**Ban** : 27.8\n" +
            "\n" +
            "**Runas** :\n" +
            "**Runa Primária**; Inspiração; Aprimoramento Glacial - Flashtração Hextec - Entrega de Biscoitos - Perspicácia Cósmica\n" +
            "**Runa Secundária**; Determinação; Ossos Revestidos - Inabalável\n" +
            "**Aprimoramento 1**; Velocidade de Habilidade\n" +
            "**Aprimoramento 2**; Armadura\n" +
            "**Aprimoramento 3**; Armadura\n" +
            "\n" +
            "**Feitiços de Invocador**: Flash - Incendiar\n" +
            "**Lane**: Suporte\n" +
            "**Caminho de Skill**: Q-E-W\n" +
            "\n" +
            "**Itens Iniciais**: Escudo Relicário - Poção x2\n" +
            "**Build Completa**: Botas de Mobilidade - Hino Bélico de Shurelya - Convergência de Zeke - Coração Congelado - Escudo de Espinhos - Redenção\n" +
            "\n" +
            "**Counters**: Taric - Maokai - Shaco - Leona - Swain - Rakan"
        }
    ]
    for (let i = 0; i < comandos.length; i++) {
        if (msg.content == comandos[i].pergunta) {
            await msg.reply({ content: comandos[i].resposta })
        }
    }

    //console.log(`${msg.author.tag}: ${msg.content}`)
})

const discord= require('discord.js');

client.login(token)
