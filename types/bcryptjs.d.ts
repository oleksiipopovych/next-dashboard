declare module 'bcryptjs' {
    export type Salt = string | number;

    export function hash(data: string, saltOrRounds: Salt): Promise<string>;
    export function compare(data: string, encrypted: string): Promise<boolean>;
    export function genSalt(rounds?: number): Promise<string>;

    const bcrypt: {
        hash(data: string, saltOrRounds: Salt): Promise<string>;
        compare(data: string, encrypted: string): Promise<boolean>;
        genSalt(rounds?: number): Promise<string>;
    };

    export default bcrypt;
}
