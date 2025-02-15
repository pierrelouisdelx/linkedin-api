import LinkedInAPI from './LinkedinAPI';
import axios from 'axios';

type MediaType =
    | 'IMAGE'
    | 'VIDEO'
    | 'DOCUMENT'
    | 'MULTI_IMAGE'
    | 'POLL'
    | 'EVENT'
    | 'CELEBRATION';

class PostAPI extends LinkedInAPI {
    constructor(accessToken: string) {
        super(accessToken);
    }

    async createPost(urn: string, text: string, media: any[], type: MediaType) {
        const url = `${this.getBaseUrl()}/ugcPosts`;
        const data = {
            author: `urn:li:person:${urn}`,
            lifecycleState: 'PUBLISHED',
            specificContent: {
                'com.linkedin.ugc.ShareContent': {
                    shareCommentary: {
                        text
                    },
                    shareMediaCategory: type,
                    media
                }
            },
            visibility: {
                'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
            }
        };

        const response = await axios.post(url, data, {
            headers: this.getHeaders()
        });
        return response.data;
    }

    async editPost(
        postUrn: string,
        text: string,
        media: any[],
        type: MediaType
    ) {
        const url = `${this.getBaseUrl()}/ugcPosts/${postUrn}`;
        const data = {
            specificContent: {
                'com.linkedin.ugc.ShareContent': {
                    shareCommentary: {
                        text
                    },
                    shareMediaCategory: type,
                    media
                }
            }
        };

        const response = await axios.patch(url, data, {
            headers: this.getHeaders()
        });
        return response.data;
    }

    async deletePost(postUrn: string) {
        const url = `${this.getBaseUrl()}/ugcPosts/${postUrn}`;
        const response = await axios.delete(url, {
            headers: this.getHeaders()
        });
        return response.data;
    }

    async getPost(postUrn: string) {
        const url = `${this.getBaseUrl()}/ugcPosts/${postUrn}`;
        const response = await axios.get(url, { headers: this.getHeaders() });
        return response.data;
    }

    async createMultiImagePost(urn: string, text: string, images: string[]) {
        const media = images.map((imageUrl) => ({
            status: 'READY',
            description: {
                text: 'Image description'
            },
            media: imageUrl,
            title: {
                text: 'Image title'
            }
        }));
        return this.createPost(urn, text, media, 'MULTI_IMAGE');
    }

    async createPollPost(
        urn: string,
        text: string,
        options: string[],
        duration: number
    ) {
        const media = [
            {
                poll: {
                    options,
                    duration
                }
            }
        ];
        return this.createPost(urn, text, media, 'POLL');
    }

    async createEventPost(urn: string, text: string, eventDetails: any) {
        const media = [
            {
                event: eventDetails
            }
        ];
        return this.createPost(urn, text, media, 'EVENT');
    }

    async createCelebrationPost(
        urn: string,
        text: string,
        celebrationDetails: any
    ) {
        const media = [
            {
                celebration: celebrationDetails
            }
        ];
        return this.createPost(urn, text, media, 'CELEBRATION');
    }
}

export default PostAPI;
