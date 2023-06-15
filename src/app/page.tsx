
import { Header } from './components/header/header'
import "./style.scss"
import { Experience } from './components/experience/experience'
import { Info } from './components/information/information'
import { SocialBtns } from './components/social-btns/social-btns'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
        
      <Info/>
        <div className="buttons">
          <SocialBtns/>
        </div>
    </main>
  )
}
