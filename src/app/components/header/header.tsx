import Image from "next/image"
import "./style.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Marcelino Garcia</h1>
                <h2>Desenvolvedor Next.js</h2>
            </div>
            <Image src="/mg.jpg"
                width={330}
                height={210}
                priority
                alt="Imagem Marcelino Garcia" />
        </div>
    )
}