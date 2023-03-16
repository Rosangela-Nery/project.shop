import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "../styles/pages/home";

import produto1 from '../assets/produtos/1.png';
import produto2 from '../assets/produtos/2.png';
import produto3 from '../assets/produtos/3.png';
import produto4 from '../assets/produtos/4.png';
import produto5 from '../assets/produtos/5.png';
import produto6 from '../assets/produtos/6.png';
import produto7 from '../assets/produtos/7.png';
import produto8 from '../assets/produtos/8.png';
import produto9 from '../assets/produtos/9.png';
import produto10 from '../assets/produtos/10.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 30,
        }
    })

    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            <Product className="keen-slider__slide">
                <Image src={produto1} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Saia Curta Alfaiataria</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto2} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto3} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto4} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto5} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto6} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto7} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto8} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto9} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={produto10} width={520} height={480} unoptimized alt="" />
                <footer>
                    <strong>Vestido Curto em Veludo</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>
        </HomeContainer>
    )
}