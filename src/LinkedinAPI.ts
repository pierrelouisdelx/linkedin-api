class LinkedInAPI {
    private baseUrl: string;
    private headers: Record<string, string>;

    constructor(accessToken: string) {
        this.baseUrl = 'https://api.linkedin.com/v2';
        this.headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };
    }

    protected getHeaders() {
        return this.headers;
    }

    protected getBaseUrl() {
        return this.baseUrl;
    }
}

export default LinkedInAPI;
