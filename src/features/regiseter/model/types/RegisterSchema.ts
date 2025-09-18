import {type AuthMethodsType } from "@/shared/config";

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

export FormStepsType=(typeof FormSteps)[keyof typeof FormSteps]