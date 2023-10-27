import {atom} from 'recoil'

export const selectedSegmentsAtom = atom({
    key:'selectedSegmentsAtom',
    default:""
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
export const dataFromApiAtom = atom({
    key:'dataFromApiAtom',
    default:[]
})
export const productStyleAtom = atom({
    key:'productStyleAtom',
    default:{},
})
export const segmentsDataAtom = atom({
    key:'segmentsDataAtom',
    default:[]
})
export const templateAtom = atom({
    key:'templateAtom',
    default:""
})