"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/LogoBuilderWhite.png'

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        {
            title: "Projetos Personalizados",
            subItems: [
                { href: "/projetosPersonalizados", text: "Projetos Web a App's" },
                { href: "/briefingParaProjeto", text: "Briefing para projetos" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/dbqowgV2aWQ4", text: "Pegue nosso cartão virtual" }
            ]
        },
        {
            title: "Seu Website",
            subItems: [
                { href: "/construirSiteOuLojasVirtuais", text: "Construir sites ou lojas virtuais" },
                { href: "/briefingParaSite", text: "Briefing para site" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/57RFUz45MEne", text: "E-book gratuito porque ter um website" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/dbqowgV2aWQ4", text: "Pegue nosso cartão virtual" }
            ]
        },
        {
            title: "Estratégias",
            subItems: [
                { href: "/estrategiasDeMarketingDigital", text: "Estratégia digital certa para o seu negócio!" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/Px4XmD9V2yAs", text: "E-book gratuito anúncios pagos para pequenos negócios" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/LoazbpOYADaQ", text: "E-book gratuito para Marketing de afiliados" }
            ]
        },
        {
            title: "E-mail Profissional",
            subItems: [
                { href: "/emailProfissional", text: "Tenha endereços de e-mails profissionais" },
                { href: "https://servidor.builderseunegocioonline.com.br:8256/down/2kp0n40dAaGB", text: "E-book gratuito porque seu negócio precisa de um e-mail profissional?" }
            ]
        },
        {
            title: "Blog",
            href: {process.env.NEXT_PUBLIC_URL_BLOG}
        }
    ];

    return (
        <header className="fixed z-[999] w-full h-16 md:h-24 bg-black shadow-[0px_11px_10px_0px_rgba(0,0,0,0.5)] flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Logo */}
            <div className="ml-4 md:ml-[20px] lg:ml-[60px] xl:ml-[100px]">
                <Link href="/">
                    <Image
                        src={logo}
                        width={120}
                        height={35}
                        quality={100}
                        alt="logomarca"
                        className="hover:opacity-80 transition-opacity w-auto h-8 md:h-12"
                        sizes="(max-width: 768px) 120px, 170px"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:block mr-4 lg:mr-[50px] xl:mr-[100px] 2xl:mr-[180px]">
                <ul className="flex list-none gap-2 xl:gap-4 2xl:gap-6">
                    <li className="relative group hover:border-b-3 border-orange-500">
                        <Link href="/" className="text-white px-2 py-1 xl:px-2.5 xl:py-1.5 hover:text-orange-500 text-sm xl:text-base">
                            Inicio
                        </Link>
                    </li>

                    {menuItems.map((item, i) => (
                        <li key={i} className="relative group hover:border-b-3 border-orange-500">
                            {item.href ? (
                                <Link href={item.href} className="text-white px-2 py-1 xl:px-2.5 xl:py-1.5 hover:text-orange-500 text-sm xl:text-base">
                                    {item.title}
                                </Link>
                            ) : (
                                <>
                                    <Link href="#" className="text-white px-2 py-1 xl:px-2.5 xl:py-1.5 hover:text-orange-500 text-sm xl:text-base">
                                        {item.title}
                                    </Link>
                                    <ul className="absolute hidden group-hover:block top-6 left-0 bg-black min-w-[200px] xl:min-w-[300px] shadow-lg border border-orange-500">
                                        {item.subItems?.map((subItem, j) => (
                                            <li key={j} className="w-full border-b last:border-b-0 border-gray-800">
                                                <Link
                                                    href={subItem.href}
                                                    className="block px-3 py-2 xl:px-5 xl:py-4 text-white hover:text-orange-500 hover:bg-black/80 transition-all group/subitem relative text-sm xl:text-base"
                                                >
                                                    <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 opacity-0 group-hover/subitem:opacity-100 transition-opacity"></span>
                                                    {subItem.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden mr-2">
                <GiHamburgerMenu
                    className="text-white cursor-pointer hover:text-orange-500 transition-colors"
                    size={28}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="md:hidden fixed inset-0 top-16 bg-black/95 shadow-lg z-40 py-4 border-t border-orange-500 overflow-y-auto">
                    <nav>
                        <ul className="flex flex-col space-y-2 px-2 sm:px-4">
                            <li className="text-center py-2">
                                <Link href="/" className="text-white hover:text-orange-500 text-lg">
                                    Inicio
                                </Link>
                            </li>

                            {menuItems.map((item, i) => (
                                <li key={i} className="group py-2">
                                    {item.href ? (
                                        <Link href={item.href} className="block text-white hover:text-orange-500 py-2 px-4 text-lg">
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <>
                                            <details className="group">
                                                <summary className="list-none flex justify-between items-center text-white hover:text-orange-500 py-2 px-4 text-lg cursor-pointer">
                                                    {item.title}
                                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <ul className="mt-2 ml-4 bg-black/80 border-l-2 border-orange-500">
                                                    {item.subItems?.map((subItem, j) => (
                                                        <li key={j} className="py-1 border-b last:border-b-0 border-gray-800">
                                                            <Link
                                                                href={subItem.href}
                                                                className="block text-white hover:text-orange-500 px-4 py-3 whitespace-normal text-base relative hover:bg-black/60 transition-colors"
                                                            >
                                                                <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                                                                {subItem.text}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}