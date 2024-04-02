// то полный фигня создатель команд тут, хД

const { REST, Routes } = require('discord.js')

const botID = "1138905247297835090"

const rest = new REST().setToken('токен')
const slashReg = async () => {
  try {
    await rest.put(
      Routes.applicationCommands(botID), { 
        body: [
          {
            name: 'words',
            description: 'показывает все слова, который бот знает',
          },
          {
            name: 'marshunyatko',
            description: 'маршунятко!!1',
          },
          {
            name: 'bottime',
            description: 'показывает время бота сейчас',
          }
        ] 
      }
    )
  } catch (error) {
    console.error(error)
  }
}
slashReg()
