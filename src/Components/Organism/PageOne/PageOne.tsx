import React from 'react'
import { CardProps, CardTeme } from '../../Mulecule/CardTeme/CardTeme'
import { ItemTemeProps } from '../../Atoms/ItemTeme/ItemTeme'


import chatImage from '../../../Product/chat .png'
import document from '../../../Product/document.png'
import megaphone from '../../../Product/megaphone.png'
import chatAnswrs from '../../../Product/chatAnswrs.png'
import { CardUser } from '../../Mulecule/CardUser/CardUser'
import { ItemUsersProps } from '../../Atoms/ItemUsers/ItemUsers'

import { FlexContainer } from '../../Common'
import style from './PageOne.module.scss'


const CardArray: ItemTemeProps[] = [
    {
        Teme: 'Правила',
        src: chatImage,
        CountTeme: '55',
        CountAnswers: '55',
    },
    {
        Teme: 'Новости',
        src: megaphone,
        CountTeme: '143',
        CountAnswers: '35',
        href: '/Massage'
    },
    {
        Teme: 'Общение с разработчиками',
        src: document,
        CountTeme: '59',
        CountAnswers: '25',
    },
]

const CardArrayNews: ItemTemeProps[] = [
    {
        Teme: 'Технические вопросы',
        src: chatAnswrs,
        CountTeme: '55',
        CountAnswers: '55',
    },
    {
        Teme: 'Новости',
        src: chatAnswrs,
        CountTeme: '143',
        CountAnswers: '35',
        href: '/Massage'
    },
]

const UserCard: ItemUsersProps[] = [
    {
        Teme: 'Последняя тема',
        src: chatAnswrs,
        DataPost: '123',
        UserName: 'sweet62'
    },
]

export const PageOne = () => {
    return (
        <FlexContainer className={style.PageOne} height={1600} gap={50}>
            <FlexContainer flexDirection='column' gap={50}>
                <CardTeme TemeHeader={'Важные темы'} ItemArrs={CardArray} />
                <CardTeme TemeHeader={'Обсуждения'} ItemArrs={CardArrayNews} />
            </FlexContainer>
            <CardUser TemeHeader={'Последние темы'} ItemArrs={UserCard} />
        </FlexContainer>
    )
}
