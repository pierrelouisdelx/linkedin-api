# LinkedIn API Client

This npm package provides a simple and convenient way to interact with the
LinkedIn API for creating, editing, deleting, and retrieving posts, as well as
handling reactions.

## Installation

To install the package, run:

```bash
npm install linkedin-api-client
```

## Usage

### Importing the Package

First, import the necessary classes from the package:

```typescript
import { PostAPI, ReactionAPI } from 'linkedin-api-client';
```

### Initializing the API Clients

You need to initialize the API clients with your LinkedIn access token:

```typescript
const accessToken = 'YOUR_ACCESS_TOKEN';
const postAPI = new PostAPI(accessToken);
const reactionAPI = new ReactionAPI(accessToken);
```

### Post API

#### Creating a Post

To create a post, use the `createPost` method:

```typescript
const urn = 'YOUR_PERSON_URN';
const text = 'This is a new post!';
const media = [
    {
        status: 'READY',
        description: {
            text: 'Image description'
        },
        media: 'urn:li:digitalmediaAsset:D4D2OAQF3kWv4gHmWlw',
        title: {
            text: 'Image title'
        }
    }
];
const type = 'IMAGE';

postAPI
    .createPost(urn, text, media, type)
    .then((response) => {
        console.log('Post created:', response);
    })
    .catch((error) => {
        console.error('Error creating post:', error);
    });
```

#### Editing a Post

To edit a post, use the `editPost` method:

```typescript
const postUrn = 'urn:li:ugcPost:123456';
const newText = 'This is an edited post!';
const newMedia = [
    {
        status: 'READY',
        description: {
            text: 'New image description'
        },
        media: 'urn:li:digitalmediaAsset:D4D2OAQF3kWv4gHmWlw',
        title: {
            text: 'New image title'
        }
    }
];
const type = 'IMAGE';

postAPI
    .editPost(postUrn, newText, newMedia, type)
    .then((response) => {
        console.log('Post edited:', response);
    })
    .catch((error) => {
        console.error('Error editing post:', error);
    });
```

#### Deleting a Post

To delete a post, use the `deletePost` method:

```typescript
const postUrn = 'urn:li:ugcPost:123456';

postAPI
    .deletePost(postUrn)
    .then((response) => {
        console.log('Post deleted:', response);
    })
    .catch((error) => {
        console.error('Error deleting post:', error);
    });
```

#### Retrieving a Post

To retrieve a post, use the `getPost` method:

```typescript
const postUrn = 'urn:li:ugcPost:123456';

postAPI
    .getPost(postUrn)
    .then((response) => {
        console.log('Post retrieved:', response);
    })
    .catch((error) => {
        console.error('Error retrieving post:', error);
    });
```

#### Creating a Multi-Image Post

To create a multi-image post, use the `createMultiImagePost` method:

```typescript
const urn = 'YOUR_PERSON_URN';
const text = 'This is a multi-image post!';
const images = [
    'urn:li:digitalmediaAsset:D4D2OAQF3kWv4gHmWlw',
    'urn:li:digitalmediaAsset:D4D2OAQF3kWv4gHmXyz'
];

postAPI
    .createMultiImagePost(urn, text, images)
    .then((response) => {
        console.log('Multi-image post created:', response);
    })
    .catch((error) => {
        console.error('Error creating multi-image post:', error);
    });
```

#### Creating a Poll Post

To create a poll post, use the `createPollPost` method:

```typescript
const urn = 'YOUR_PERSON_URN';
const text = 'This is a poll post!';
const options = ['Option 1', 'Option 2', 'Option 3'];
const duration = 604800; // Duration in seconds (e.g., 1 week)

postAPI
    .createPollPost(urn, text, options, duration)
    .then((response) => {
        console.log('Poll post created:', response);
    })
    .catch((error) => {
        console.error('Error creating poll post:', error);
    });
```

#### Creating an Event Post

To create an event post, use the `createEventPost` method:

```typescript
const urn = 'YOUR_PERSON_URN';
const text = 'This is an event post!';
const eventDetails = {
    name: 'Event Name',
    time: '2023-10-01T10:00:00Z',
    description: 'Event description'
};

postAPI
    .createEventPost(urn, text, eventDetails)
    .then((response) => {
        console.log('Event post created:', response);
    })
    .catch((error) => {
        console.error('Error creating event post:', error);
    });
```

#### Creating a Celebration Post

To create a celebration post, use the `createCelebrationPost` method:

```typescript
const urn = 'YOUR_PERSON_URN';
const text = 'This is a celebration post!';
const celebrationDetails = {
    type: 'WORK_ANNIVERSARY',
    description: 'Celebrating 5 years at the company!'
};

postAPI
    .createCelebrationPost(urn, text, celebrationDetails)
    .then((response) => {
        console.log('Celebration post created:', response);
    })
    .catch((error) => {
        console.error('Error creating celebration post:', error);
    });
```

### Reaction API

#### Adding a Reaction

To add a reaction to a post, use the `addReaction` method:

```typescript
const postUrn = 'urn:li:ugcPost:123456';
const reactionType = 'LIKE';

reactionAPI
    .addReaction(postUrn, reactionType)
    .then((response) => {
        console.log('Reaction added:', response);
    })
    .catch((error) => {
        console.error('Error adding reaction:', error);
    });
```

#### Deleting a Reaction

To delete a reaction from a post, use the `deleteReaction` method:

```typescript
const reactionUrn = 'urn:li:reaction:123456';

reactionAPI
    .deleteReaction(reactionUrn)
    .then((response) => {
        console.log('Reaction deleted:', response);
    })
    .catch((error) => {
        console.error('Error deleting reaction:', error);
    });
```

#### Retrieving Reactions

To retrieve reactions for a post, use the `getReactions` method:

```typescript
const postUrn = 'urn:li:ugcPost:123456';

reactionAPI
    .getReactions(postUrn)
    .then((response) => {
        console.log('Reactions retrieved:', response);
    })
    .catch((error) => {
        console.error('Error retrieving reactions:', error);
    });
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.
