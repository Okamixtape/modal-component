import './App.css'
import { Modal } from './lib'
import spookyDesign from './spooky.png'

function App() {
  const myModal = {
    title: 'spoojy',
    icon: spookyDesign,
    altText: 'spooky image',
    content:
      'This is an example of a customized modal. To close it you can use the closing icon.',
    cta: "That's cool but a little spooky",
  }

  const handleExample = () => {
    console.log('handleExample has been called')
  }

  return (
    <div className="App">
      <Modal
        modal={myModal}
        button={true}
        closeIcon={true}
        allowCustomization={true}
        buttonCallback={handleExample}
      />
      <div>
        {' '}
        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.
        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.        Black cat candy scare chainsaw afraid candy cauldron. Werewolf scare blood trick-or-treat candy jack-o-lantern cauldron. Blood mummy boo mummy pumpkin drive-in spooky. Drive-in candy werewolf black cat skeleton pumpkin vampire. Blood scare spooky monster boo scare witch. Cauldron vampire jack-o-lantern trick-or-treat witch
        cauldron jack-o-lantern. Jack-o-lantern mummy black cat scare black cat abomination mummy. Skeleton jack-o-lantern drive-in cauldron vampire mummy pumpkin. Chainsaw witch monster witch cauldron cauldron spooky. Chainsaw spooky haunted candy monster afraid chainsaw.
        Afraid monster abomination haunted skeleton jack-o-lantern jack-o-lantern. Werewolf black cat trick-or-treat witch cauldron abomination mummy. Pumpkin vampire nightmare pumpkin mummy candy trick-or-treat. Nightmare werewolf haunted spooky boo drive-in monster. Pumpkin abomination trick-or-treat vampire vampire afraid monster.
      </div>
    </div>
  )
}

export default App
