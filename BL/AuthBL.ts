import { OAuth2Client } from 'google-auth-library';
//import JWT from 'jsonwebtoken';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthBL {

    async verifyGoogleToken(token: string) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        console.log(payload);
        // Here you might check if the user exists in your database
        // and create a new user if they do not exist
    
        return payload; // Return user data
    };
}
