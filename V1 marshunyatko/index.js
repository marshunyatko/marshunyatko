const bannedUserIDs = [];
const moment = require('moment-timezone');

const words = "пн, вт, ср, чт, пт, сб, вс, ок, ок., пон., бл, даун, ладно, ичо, ничо, ишо, нишо, иче, ниче, и чо, ни чо, и че, ни че, и шо, ни шо, пон, хд, хз, даркнет, ну, :с, черника, январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь, да, короче, в общем, круто, рил, маршунятко, <@1138905247297835090>, ага, но, чел, саси бака, шо, ыы, мелиши, дискорд-ботан, паста, пчел, плохо, да ладно, ясно, чикибамбони, понял, режим, <@1081004946872352958>, секреты мелиши, сус бакыш, ам, типичный реклама, др мелиши, лень, marshunyatko is ready, хдд, крутоо, ну нет, нет, поны, шоо, кртуо, кртуоо, хацкер, даа, ого, огоо, чому, ок же, жиза, запрещаю, чаго, @everyone, @here, @everyone @here, ок!, мб, гб, тб, окай, норм, пи, школа, о, ок?, типа, а шо, рикролл, :э, сок, тролл фейс, огогогогогоог, калоче, опана, оу, крутой, мелиши бака, бездарь, нитро, код, пон, с, на."

const {
  ActivityType
} = require('discord.js');
const {
  EmbedBuilder
} = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
      "DirectMessages",
      "Guilds",
      "GuildMessages",
      "MessageContent",
      "GuildMembers",
      "GuildBans"
  ],
  partials: [
      Discord.Partials.Message,
      Discord.Partials.Channel,
      Discord.Partials.GuildMember,
  ],
});

moment.tz.setDefault('Europe/Kiev');

client.once("ready", () => {
  console.log("marshunyatko is ready");
  client.user.setStatus("idle"); // status
  client.user.setPresence({ // presence
      activities: [{
          name: `мелиши`,
          type: ActivityType.Watching
      }]
  });
});

client.on('interactionCreate', (interaction) => { // commands
  if (!interaction.isCommand()) return;
  if (!interaction.isChatInputCommand()) return;
  if (bannedUserIDs.includes(interaction.user.id)) {
      interaction.reply({
          content: "на жаль, ты в чс, и я тебе не могу сделать что-то :с",
          allowedMentions: {
              repliedUser: false
          },
          ephemeral: true
      });
      console.log(`[${moment().format('HH:mm:ss')}] cant run the command - ${interaction.user.username} because user is banned`);
      return
  };

  if (interaction.commandName === 'words') {
      const wordsEmbed = new EmbedBuilder()
          .setColor("#171717")
          .setDescription(words)
          .setFooter({
              text: 'Словник маршунятко'
          });
      interaction.reply({
          embeds: [wordsEmbed],
          allowedMentions: {
              repliedUser: false
          },
          ephemeral: true
      });
  };

  if (interaction.commandName === 'bottime') {
      interaction.reply({
          content: `у меня время ${moment().format('HH:mm:ss')}.`,
          allowedMentions: {
              repliedUser: false
          }
      });
  };

  if (interaction.commandName === 'marshunyatko') {
      const margoEmbed = new EmbedBuilder()
          .setColor("#171717")
          .setImage("https://cdn.discordapp.com/attachments/1139482456433623050/1214177524221747220/remix-5ba33072-5eef-4db7-8815-5b70185dda9f.png?ex=65f829f0&is=65e5b4f0&hm=7360bfd6c7e6d69d1f4b6f4a94b779c1bbaf743304f493d5d3d46ba009a3937e&")
          .setFooter({
              text: 'ураа маршунятко!!'
          });
      interaction.reply({
          embeds: [margoEmbed],
          allowedMentions: {
              repliedUser: false
          },
          ephemeral: true
      });
  };
});

client.on("messageCreate", message => {
  try { // check bot can send messages
      if (!message.channel.type === "DM" && message.guild.members.me.isCommunicationDisabled()) return; // ty mangoeater_ for solution <3
      if (message.author.bot) return; // Ignore the messages from bots

      if (bannedUserIDs.includes(message.author.id)) {
          console.log(`[${moment().format('HH:mm:ss')}] ignoring the message - ${message.author.username} because user is banned`);
          return
      };

      // Message Reply

    if (message.content.toLowerCase() === "на") {
        try {
            message.reply({
                content: `-сос`,
                allowedMentions: {
                    repliedUser: false
                }
            });
            console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
        } catch (error) {
            console.error(error)
        };
    };

    if (message.content.toLowerCase() === "с") {
        try {
            message.reply({
                content: `с`,
                allowedMentions: {
                    repliedUser: false
                }
            });
            console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
        } catch (error) {
            console.error(error)
        };
    };

    if (message.content.toLowerCase() === "пон") {
        try {
            message.reply({
                content: `даа`,
                allowedMentions: {
                    repliedUser: false
                }
            });
            console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
        } catch (error) {
            console.error(error)
        };
    };

    if (message.content.toLowerCase() === "код") {
        try {
            message.reply({
                content: `6-значный код: ${Math.floor(Math.random() * 999999)}`,
                allowedMentions: {
                    repliedUser: false
                }
            });
            console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
        } catch (error) {
            console.error(error)
        };
    };

    if (message.content.toLowerCase() === "нитро") {
        try {
            message.reply({
                content: 'да, нитро',
                allowedMentions: {
                    repliedUser: false
                }
            });
            console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
        } catch (error) {
            console.error(error)
        };
    };

      if (message.content.toLowerCase() === "бездарь") {
          try {
              message.reply({
                  content: 'бездарь!!!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "мелиши бака") {
          try {
              message.reply({
                  content: 'я маршунятко теперь',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "крутой") {
          try {
              message.reply({
                  content: 'даа, крутой',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "оу") {
          try {
              message.reply({
                  content: '-ноу',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "опана") {
          try {
              message.reply({
                  content: 'опаа!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "калоче") {
          try {
              message.reply({
                  content: 'короче*',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "огогогогогоог") {
          try {
              message.reply({
                  content: 'огооооооо!!1',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "тролл фейс") {
          try {
              message.reply({
                  content: 'https://tenor.com/view/trolling-troll-troll-face-apocalypse-gif-20830139',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "сок") {
          try {
              message.reply({
                  content: 'черничный сок',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === ":э") {
          try {
              message.reply({
                  content: 'типа смайлик улыбается с чупа чупсом',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "рикролл") {
          try {
              message.reply({
                  content: 'https://melishy.github.io/mreilcikshyroll/video.mp4',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "а шо") {
          try {
              message.reply({
                  content: 'що??',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "типа") {
          try {
              message.reply({
                  content: 'например...',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ок?") {
          try {
              message.reply({
                  content: 'да, ок',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "о") {
          try {
              message.reply({
                  content: 'к',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "школа") {
          try {
              message.reply({
                  content: 'для учебы',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "пи") {
          try {
              message.reply({
                  content: '3.14159265359',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "окай") {
          try {
              message.reply({
                  content: 'ок',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "норм") {
          try {
              message.reply({
                  content: 'нормальный гриб',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "тб") {
          try {
              message.reply({
                  content: 'терабайтим саси баку',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "гб") {
          try {
              message.reply({
                  content: 'гроб борзый',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "мб") {
          try {
              message.reply({
                  content: 'мегабайчу тебя',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ок!") {
          try {
              message.reply({
                  content: 'окнутые ок!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "@everyone @here") {
          try {
              message.reply({
                  content: 'все, это очень важное сообщение!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "@here") {
          try {
              message.reply({
                  content: 'шо там нового',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "@everyone") {
          try {
              message.reply({
                  content: 'шо ты всех пингуешь?',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "чаго") {
          try {
              message.reply({
                  content: 'абсолютный чаго',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "запрещаю") {
          try {
              message.reply({
                  content: 'сус бакыша точно разрешит',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "жиза") {
          try {
              message.reply({
                  content: 'смешно',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ок же") {
          try {
              message.reply({
                  content: 'железный ок.',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "чому") {
          try {
              message.reply({
                  content: 'чому же?',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "даа") {
          try {
              message.reply({
                  content: 'оо дааа',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "хацкер") {
          try {
              message.reply({
                  content: 'один из друзей мелиши - хацкер.',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "огоо") {
          try {
              message.reply({
                  content: 'да, ого!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ого") {
          try {
              message.reply({
                  content: 'ого!!',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "кртуоо") {
          try {
              message.reply({
                  content: 'понятно, еще круто называл',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "кртуо") {
          try {
              message.reply({
                  content: 'так называется "круто"',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "шоо") {
          try {
              message.reply({
                  content: "шооо?",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "поны") {
          try {
              message.reply({
                  content: "пон пон",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "нет") {
          try {
              message.reply({
                  content: "ну нет",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ну нет") {
          try {
              message.reply({
                  content: "ну ты не согласен же",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "хдд") {
          try {
              message.reply({
                  content: "у тебя что, 2 ротика есть?!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "крутоо") {
          try {
              message.reply({
                  content: "о да, круто",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "marshunyatko is ready") {
          try {
              message.reply({
                  content: "этот сообщение появится в консолях бота когда меня перезапустили или запустить!1!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "лень") {
          try {
              message.reply({
                  content: "полег спать!1",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "др мелиши") {
          try {
              message.reply({
                  content: "13/08 - это день рождения мелиши!!!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "типичный реклама") {
          try {
              message.reply({
                  content: "1+1=3, рекламы не учились в школе!!!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ам") {
          try {
              message.reply({
                  content: "ummm...?",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "сус бакыш") {
          try {
              message.reply({
                  content: "мелиши придумал имя саси бака на сус бакыш.",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "сус бакыш") {
          try {
              message.reply({
                  content: "мелиши придумал имя саси бака на сус бакыш.",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "секреты мелиши") {
          try {
              message.reply({
                  content: "возможно ты имел ввиду 'секреты в дискорде'?",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "<@1081004946872352958>") {
          try {
              message.reply({
                  content: "я не клайд, потому что дискорд прекратил клайда!1!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "режим") {
          try {
              message.reply({
                  content: "шо режим??!??! нам нужны еще больше информацию!!1",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "понял") {
          try {
              message.reply({
                  content: "все понял!1",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "да ладно") {
          try {
              message.reply({
                  content: "да, тут прохладно :cold_face:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ясно") {
          try {
              message.reply({
                  content: "пояснил тему уроку, спасибо!1!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "чикибамбони") {
          try {
              message.reply({
                  content: "Белая овца, с необычно большой шерстью, стоит на земле, на фоне дубовой листвы. Скриншот сделан в игре Minecraft. Снизу расположена белая надпись «чикибамбони».",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "пн") {
          try {
              message.reply({
                  content: "вт",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "вт") {
          try {
              message.reply({
                  content: "ср",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "ср") {
          try {
              message.reply({
                  content: "чт",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "чт") {
          try {
              message.reply({
                  content: "пт",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "пт") {
          try {
              message.reply({
                  content: "сб",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "сб") {
          try {
              message.reply({
                  content: "вс",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "вс") {
          try {
              message.reply({
                  content: "пн",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ок") {
          try {
              message.reply({
                  content: "станок",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ок.") {
          try {
              message.reply({
                  content: "ок.",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "пон.") {
          try {
              message.reply({
                  content: "пон.",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "бл") {
          try {
              message.reply({
                  content: "блин",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "даун") {
          try {
              message.reply({
                  content: "вообщето называется даун-тайм (downtime)",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ладно") {
          try {
              message.reply({
                  content: "прохладно :snowflake:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "но") {
          try {
              message.reply({
                  content: "-шпа :potato:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ыы") {
          try {
              message.reply({
                  content: "ам, ыы!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ичо") {
          try {
              message.reply({
                  content: "ничо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ничо") {
          try {
              message.reply({
                  content: "ичо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ишо") {
          try {
              message.reply({
                  content: "нишо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "нишо") {
          try {
              message.reply({
                  content: "ишо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "иче") {
          try {
              message.reply({
                  content: "ниче",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ниче") {
          try {
              message.reply({
                  content: "иче",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "и чо") {
          try {
              message.reply({
                  content: "ни чо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ни чо") {
          try {
              message.reply({
                  content: "и чо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "и че") {
          try {
              message.reply({
                  content: "ни че",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "и шо") {
          try {
              message.reply({
                  content: "ни шо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "ни шо") {
          try {
              message.reply({
                  content: "и шо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "пон") {
          try {
              message.reply({
                  content: "пон",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "хд") {
          try {
              message.reply({
                  content: "хд :rofl:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "хз") {
          try {
              message.reply({
                  content: "хер знает",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "даркнет") {
          try {
              message.reply({
                  content: "да",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "ну") {
          try {
              message.reply({
                  content: "баранки гну",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === ":c") {
          try {
              message.reply({
                  content: "мне жаль тебя, чувак",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === ":с") {
          try {
              message.reply({
                  content: "мне жаль тебя, чувак",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === ":c") {
          try {
              message.reply({
                  content: "мне жаль тебя, чувак",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "черника") {
          try {
              message.reply({
                  content: "*дарит вам 1 кг черники*",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "январь") {
          try {
              message.reply({
                  content: "февраль",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "февраль") {
          try {
              message.reply({
                  content: "март",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "март") {
          try {
              message.reply({
                  content: "апрель",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "апрель") {
          try {
              message.reply({
                  content: "май",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "май") {
          try {
              message.reply({
                  content: "июнь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "июнь") {
          try {
              message.reply({
                  content: "июль",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "июль") {
          try {
              message.reply({
                  content: "август",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "август") {
          try {
              message.reply({
                  content: "сентябрь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "сентябрь") {
          try {
              message.reply({
                  content: "октябрь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "октябрь") {
          try {
              message.reply({
                  content: "ноябрь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "ноябрь") {
          try {
              message.reply({
                  content: "декабрь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "декабрь") {
          try {
              message.reply({
                  content: "январь",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "да") {
          try {
              message.reply({
                  content: "даркнет",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };

      if (message.content.toLowerCase() === "короче") {
          try {
              message.reply({
                  content: "типа шо",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "в общем") {
          try {
              message.reply({
                  content: ":thinking:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "чел") {
          try {
              message.reply({
                  content: "капчел :bee:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "круто") {
          try {
              message.reply({
                  content: "дааа, круто",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "рил") {
          try {
              message.reply({
                  content: 'город Рил существует, но он не начинается на букву "Ъ" ',
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "маршунятко") {
          try {
              message.reply({
                  content: "шо хотел?",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.includes() === "<@1138905247297835090>") {
          try {
              message.reply("я назад тебя пинганул!!1");
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "ага") {
          try {
              message.reply({
                  content: "ага конечно",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "саси бака") {
          try {
              message.reply({
                  content: "*голосует саси бака*... импостер.",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "шо") {
          try {
              message.reply({
                  content: "интересно, шо?",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "мелиши") {
          try {
              message.reply({
                  content: "жди ответа от мелиши!! если нету в сервере значит ничего!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "дискорд-ботан") {
          try {
              message.reply({
                  content: "<:discordnerd:1208422355706052690>",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "паста") {
          try {
              message.reply({
                  content: "итальянский паста",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "пчел") {
          try {
              message.reply({
                  content: "пчелы :bee:",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
      if (message.content.toLowerCase() === "плохо") {
          try {
              message.reply({
                  content: "плохо это точно значит что плохой!!",
                  allowedMentions: {
                      repliedUser: false
                  }
              });
              console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);
          } catch (error) {
              console.error(error)
          };
      };
  } catch (error) { // error trying send message
      console.log(error);
  };
});

client.login('токен');
