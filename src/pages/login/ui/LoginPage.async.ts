import {lazy} from "react"

export const  LoginPageAsync=lazy(()=>new Promise((resolve)=>{
        setTimeout(()=>resolve(import("./LoginPage")),1500)
}))