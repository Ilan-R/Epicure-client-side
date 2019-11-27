export interface User {
    first_name: string;
    last_name: string;
    email: string;
    normal_auth: {
        email: string;
        password: string;
    };
}
