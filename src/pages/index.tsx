import Image from "next/image";
import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
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
import Stripe from "stripe";

interface HomeProps {
    products: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
    }[]
}

export default function Home({ products }: HomeProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 30,
        }
    })

    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map(product => {
                return (
                    <Product key={product.id} className="keen-slider__slide">
                        <Image src={product.imageUrl} width={520} height={480} unoptimized alt="" />
                        <footer>
                            <strong>{product.name}</strong>
                            <span>{product.price}</span>
                        </footer>
                    </Product>
                )
            })}
        </HomeContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount as number / 100,
        }
    })

    return {
        props: {
            products,
        }
    }
}