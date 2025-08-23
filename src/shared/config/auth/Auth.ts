export const AuthProviders={
        LOCAL:"LOCAL",
        GOOGLE:"GOOGLE",
} as const;
export type AuthProvidersType=(typeof AuthProviders)[keyof typeof AuthProviders];

export const AuthMethods={
        EMAIL:"email",
        PHONE:"phone"
}
export type AuthMethodsType=(typeof AuthMethods)[keyof typeof AuthMethods];