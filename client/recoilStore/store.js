import {atom} from 'recoil'

export const segmentsAtom = atom({
    key:'segmentsAtom',
    default:[]
})
export const selectedSegmentsAtom = atom({
    key:'selectedSegmentsAtom',
    default:[]
})
export const segStyleAtom = atom({
    key:'segStyleAtom',
    default:{},
})
export const serverKeyAtom = atom({
    key:'serverKeyAtom',
    default:''
})
export const selectedProductIdAtom = atom({
    key:'selectedProductIdAtom',
    default:''
})
export const selectedProductAtom = atom({
    key:'selectedProductAtom',
    default:''
})
export const isAuthErrorVisibleAtom = atom({
    key:'isAuthErrorVisibleAtom',
    default:false
})
export const isAlertVisibleAtom = atom({
    key:'isAlertVisibleAtom',
    default:false
})
export const productsAtom = atom({
    key:'productsAtom',
    default:[]
})
export const dataFromApiAtom = atom({
    key:'dataFromApiAtom',
    default:[]
})
export const productStyleAtom = atom({
    key:'productStyleAtom',
    default:{},
})