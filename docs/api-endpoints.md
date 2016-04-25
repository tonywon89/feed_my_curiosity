# API Endpoints

# HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Feeds
- `GET /api/feeds`
- `GET /api/feeds/:id`
  - gets one feed for either of the details

### Collections
- `GET /api/users/:user_id/collection`
  - index of all collections for a particular user
- `POST /api/collections`
- `GET /api/collections/:id`
- `PATCH /api/collections/:id`
- `DELETE /api/collections/:id`
  - deletes the collection and removes the join table associations

### Collection_Feeds
- `POST api/collection_feeds`
  - create association between collection and feed
- `DELETE api/collection_feeds/:id`

### Saved_Collection_Articles
- `POST /api/saved_collection_articles`
- (delete will be dependent on the `Article`, so no need for explicit delete); 

### Articles
- `POST /api/articles/:id`
  - adds article to database
- `DELETE /api/articles/:id`
