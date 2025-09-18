import {type AuthMethodsType } from "@/shared/config";
import type { type } from "os";

export interface RegistrationFormSchema{
        email?:string,
        phone?:string,
        password:string,
        isLoading:boolean,
        error?:string,
        steps:FormStepsType,
        method:AuthMethodsType,
}

export const FormSteps={
        CREDENTIALS:1,
        PASSWORD:2,
        VERFICATION:3,
}as const;

export type FormStepsType=(typeof FormSteps)[keyof typeof FormSteps]