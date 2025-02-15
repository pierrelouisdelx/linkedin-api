// src/ReactionAPI.ts
import LinkedInAPI from './LinkedinAPI';
import axios from 'axios';

class ReactionAPI extends LinkedInAPI {
    constructor(accessToken: string) {
        super(accessToken);
    }

    async addReaction(postUrn: string, reactionType: string) {
        const url = `${this.getBaseUrl()}/socialActions/${reactionType}/?q=socialActivity&socialActivity=${postUrn}`;
        const response = await axios.post(
            url,
            {},
            { headers: this.getHeaders() }
        );
        return response.data;
    }

    async deleteReaction(reactionUrn: string) {
        const url = `${this.getBaseUrl()}/socialActions/${reactionUrn}`;
        const response = await axios.delete(url, {
            headers: this.getHeaders()
        });
        return response.data;
    }

    async getReactions(postUrn: string) {
        const url = `${this.getBaseUrl()}/socialActions/${postUrn}/reactions`;
        const response = await axios.get(url, { headers: this.getHeaders() });
        return response.data;
    }
}

export default ReactionAPI;
